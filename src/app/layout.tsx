import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { CustomToaster } from "@/components/common/Toaster";
import QueryProvider from "@/providers/QueryProvider";
import dynamic from "next/dynamic";
import { SessionProvider } from "@/providers/SessionProvider";
import { getSession } from "@/action/auth.action";
import Footer from "@/components/Footer";

const ProgressBar = dynamic(() => import("@/components/shared/ProgressBar"), {
  ssr: false,
});

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EZbooks",
  description:
    "EZbooks: Simplify your small bussiness' account and inventory management with our intuitive web app. Easily track sales, manage stock, and stay on top of your finances with EZbooks. Perfect for small businesses looking to streamline their operations and boost efficiency.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body className={`${nunito.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <ProgressBar />
            <SessionProvider session={session}>
              {children}
              <Footer />
            </SessionProvider>
          </QueryProvider>
          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
