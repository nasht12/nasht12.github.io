import React, { ReactNode } from "react";
import Menu from "../Menu/Menu";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen items-start justify-between p-24 ${styles.container}`}
    >
      <Menu />
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default Layout;
