"use client"
import React from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const menuItems = [
    "About",
    "Projects",
    "AI",
    "Web3",
    "Travel",
    "Books",
    "Misc"
  ];

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase()}`} passHref>
            <li className={styles.menuItem}>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
