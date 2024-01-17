"use client"
import React from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const menuItems = [
    "Abhinash",
    "Projects",
    "AI",
    "Web3",
    "Gallery",
    "Books",
  ];

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase()}`}
            passHref
            style={{ textDecoration: "none" }}
          >
            <li className="cursor-pointer px-4 py-2 mb-2 transition-colors duration-300 hover:bg-black hover:text-white">
              <b>
                <code>{item}</code>
              </b>
            </li>{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
