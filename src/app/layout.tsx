import React, { ReactNode } from "react";
import Menu from "../components/Menu/Menu";
import './globals.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
      <div style={{ marginTop: "4rem", marginLeft: "6rem" }}>
      <p><strong>Abhinash Tummala</strong></p>      
      </div>
      <main
        className={`flex min-h-screen items-start justify-between p-24 `}
        style={{ display: "flex", minHeight: "100vh", width: "100%"}}
      >
        {" "}
        <Menu />
        <div style={{ flexGrow: 1, paddingLeft: "1rem"}}>{children}</div>
      </main>
      </body>
    </html>
  );
};

export default Layout;
