import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <body className="overflow-hidden">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <main className="w-screen h-screen flex flex-col md:flex-row">
            <MobileNav />
            <div className="md:w-4/5 flex items-center justify-center">
              {children}
            </div>
            <div className="w-full md:w-1/5 h-auto flex flex-col-reverse md:flex-row items-center justify-center transition-all duration-500 ease-in-out transform">
              <IconMenu />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
