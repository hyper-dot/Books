"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isSigninPage = pathname === "/signin";
  return (
    <div className="md:grid md:grid-cols-2 min-h-screen">
      {children}
      <div className="h-full flex items-center">
        <img
          className="hidden md:block "
          src={isSigninPage ? "/signin.webp" : ""}
          alt=""
        />
      </div>
    </div>
  );
};

export default layout;
