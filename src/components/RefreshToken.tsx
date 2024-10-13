"use client";
import { refreshToken } from "@/action/auth.action";
import { useEffect } from "react";

const RefreshToken = () => {
  useEffect(() => {
    // Define the function to refresh the token
    async function getRefreshToken() {
      await refreshToken();
    }

    // Set the interval and store the interval ID
    const intervalId = setInterval(getRefreshToken, 10 * 1000); // MM * SS * MS

    // Return a cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default RefreshToken;
