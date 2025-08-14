// API Configuration
import dotenv from 'dotenv';
dotenv.config();
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://skillcertify-the-internship-platform.onrender.com';

export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
  },
  // Add other endpoints here as needed
};

export default API_BASE_URL;
