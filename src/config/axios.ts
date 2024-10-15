import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie"; // Import cookie package
import { getSession, refreshToken } from "@/action/auth.action"; // Assume this function handles refreshing tokens and updating cookies

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10000,
});

// Add request interceptor to attach the Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // Extract token from cookies

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Authorization header with token
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
  async (err: AxiosError) => {
    const originalRequest = err.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // If the error is a 401 (Unauthorized) and we haven't retried the request yet
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call refreshToken to handle refreshing the token and updating cookies
        await refreshToken(); // Assuming refreshToken updates the token in the cookie
        const session = await getSession(); // Extract the updated token from cookies

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${session?.accessToken}`; // Ensure headers is defined
        } else {
          // If headers is undefined, initialize it
          originalRequest.headers = {
            Authorization: `Bearer ${session?.accessToken}`,
          };
        }

        return axios(originalRequest); // Retry the original request
      } catch (refreshError) {
        // If refreshing the token fails, reject the promise with the error
        return Promise.reject(refreshError);
      }
    }

    // If the error is not a 401 or we have already retried, reject the promise
    return Promise.reject(err);
  },
);
