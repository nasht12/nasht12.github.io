"use client";
import React, { ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import './globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const pathname = usePathname()
  const isHomePage = pathname === '/';
  return (
    <html>
      <body>
      {isHomePage && (
        <div style={{ marginTop: "4rem", marginLeft: "6rem" }}>
          <Link href="/">
          <p>
            <strong>Abhinash Tummala</strong>
          </p>
          </Link>
          <div
            style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}
          >
            <div className="icon-wrapper">
              <a
                href="https://github.com/nasht12"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "1rem" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
            <div className="icon-wrapper">
              <a
                href="https://linkedin.com/in/abhinashtummala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      )}
        <main
          className={`flex min-h-screen items-start justify-between p-24 `}
          style={{ display: "flex", minHeight: "100vh", width: "100%" }}
        >
          {" "}
          <Menu />
          <div style={{ flexGrow: 1, paddingLeft: "1rem" }}>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
