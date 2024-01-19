"use client";
import React, { ReactNode } from "react";
import { usePathname } from 'next/navigation'
import Header from "@/components/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const pathname = usePathname()
  const isHomePage = pathname === '/';
  return (
    <html>
      <body className="flex">
        <div className="h-24 w-24">Left</div>
        <div className="h-24 flex-grow mx-1">Center</div>
        <div className="h-24 w-24">Right</div>
      </body>
      {/* <body className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow min-h-custom">{children}</main>
      </body> */}
    </html>
  );
};

export default Layout;
