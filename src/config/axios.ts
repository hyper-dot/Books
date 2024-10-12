import axios, { AxiosError } from "axios";
import Cookies from "js-cookie"; // Import cookie package

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10000,
});

// Add request interceptor to attach the Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // Extract token from cookie

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Authorization header
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Handle errors in response interceptor
apiClient.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    //@ts-ignore
    throw new Error(err.response?.data?.error || "An unknown error occurred");
  },
);
