"use client";
import Logo from "@/components/common/Logo";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  const isRegisterPage = pathName === "/register" || pathName === "/otp";
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="fixed left-4 top-4">
        <Logo size="lg" />
      </div>

      {children}
      <div className="flex h-full items-center">
        <img
          width={500}
          height={500}
          className="hidden md:block "
          src={isRegisterPage ? "/signin.svg" : "/signup.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default layout;
