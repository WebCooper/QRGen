import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: `${API_URL}/api/auth`,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true // Required for CORS with credentials
});

export default axiosInstance;