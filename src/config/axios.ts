import axios, { AxiosError } from "axios";

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    //@ts-ignore
    throw new Error(err.response?.data?.error);
  },
);
