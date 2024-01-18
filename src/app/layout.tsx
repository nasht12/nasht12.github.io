"use client";
import React, { ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import './globals.css'
import { usePathname } from 'next/navigation'
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const pathname = usePathname()
  const isHomePage = pathname === '/';
  return (
    <html>
      <body className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow min-h-custom">{children}</main>
        {/* <Footer /> */}
        {/* <footer className="h-20 bg-yellow-50">Footer</footer> */}
      </body>
    </html>
  );
};

export default Layout;
