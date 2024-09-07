"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Toaster, toast } from "react-hot-toast";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const { theme, setTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    toast.success("You'll be notified when the app launches!");
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-gray-900 dark:text-white p-4">
      <h1 className="text-6xl font-bold mb-4 animate-pulse">
        <span className="text-green-600 dark:text-green-400">Com</span>
        <span className="text-blue-600 dark:text-blue-400">ing </span>
        <span className="text-purple-600 dark:text-purple-400">So</span>
        <span className="text-pink-600 dark:text-pink-400">on</span>
      </h1>

      <p className="text-xl mb-8 text-center max-w-md">
        From automation of people processes to creating an engaged and driven
        culture.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center border-b border-gray-300 dark:border-gray-700 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-900 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Please enter your email address"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Notify Me</Button>
        </div>
      </form>

      <p className="mt-8 text-sm">- Notify me when App is launched -</p>

      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mt-4"
      >
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
};

export default ComingSoonPage;
