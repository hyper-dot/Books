import type { Metadata } from "next";
import "./globals.css";
import ProgressBar from "@/components/ProgressBar.client";

import { Tilt_Neon } from "next/font/google";
import { QueryProvider } from "@/Provider/QueryProvider";
import { ThemeProvider } from "@/Provider/ThemeProvider";
const tilt = Tilt_Neon({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Books",
  description: "Manage your accounts completely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={tilt.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar />
          <main className="2xl:container">
            <QueryProvider>{children}</QueryProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
