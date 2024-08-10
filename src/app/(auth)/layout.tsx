"use client";
import Logo from "@/components/common/Logo";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const isRegisterPage = pathName === "/register" || pathName === "/otp";
  return (
    <>
      <Head>
        <link rel="preload" href="/signin.svg" as="image" />
        <link rel="preload" href="/signup.svg" as="image" />
      </Head>
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="fixed left-4 top-4">
          <Logo size="lg" />
        </div>

        {children}
        <div className="flex h-full items-center">
          <Image
            width={500}
            height={500}
            className="hidden md:block "
            src={isRegisterPage ? "/signin.svg" : "/signup.svg"}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
