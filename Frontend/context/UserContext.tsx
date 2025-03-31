'use client'
import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User, AuthState } from '@/types/user';
import axiosInstance from '@/utils/axiosInstance';

type AuthAction = 
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };

interface UserContextType extends AuthState {
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for stored user data on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      // Set the token in axios headers
      if (userData.token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
      }
      dispatch({ type: 'LOGIN', payload: userData });
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem('user', JSON.stringify(userData));
    // Set the token in axios headers
    if (userData.token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    }
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    localStorage.removeItem('user');
    // Remove the token from axios headers
    delete axiosInstance.defaults.headers.common['Authorization'];
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider value={{ ...state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};