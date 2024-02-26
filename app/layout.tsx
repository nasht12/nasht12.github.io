import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import TextLogo from "@/components/text-logo";
import Social from "@/components/social";
import IconMenu from "@/components/icon-menu";
import { MobileNav } from "@/components/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Site",
  description: "Personal website  of Abhinash Tummala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-auto md:overflow-hidden">
        <main className="w-screen h-screen flex flex-col md:flex-row">
          <MobileNav />
          <div className="w-full md:w-2/3 md:h-auto flex items-center justify-center">
            {children}
          </div>
          <div className="w-full md:w-1/3 h-auto flex flex-col-reverse md:flex-row items-center justify-center transition-all duration-500 ease-in-out transform">
            <IconMenu />
          </div>
        </main>
      </body>
    </html>
  );
}
