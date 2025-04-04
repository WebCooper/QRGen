import axiosInstance from "./axiosInstance";

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export const loginUser = async (credentials: LoginData): Promise<AuthResponse> => {
  try {
    const { data } = await axiosInstance.post('/login', credentials);
    // Store token in axios instance for subsequent requests
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const registerUser = async (userData: SignupData): Promise<AuthResponse> => {
  try {
    if (userData.password !== userData.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const { data } = await axiosInstance.post('/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });
    
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};