import React from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const menuItems = [
    "About",
    "Projects",
    "Writings",
    "AI",
    "Web3",
    "Travel",
    "Books",
  ];

  //   const handleClick = (item: string) => {
  //     console.log(`Clicked on ${item}`);
  //     // You can add your custom functionality here
  //   };

  return (
    <>
      <div className="flex flex-col items-start">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Abhinash Tummala
            {/* <code className="font-mono font-bold">src/pages/index.tsx</code> */}
          </p>
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <Link href={`/${item.toLowerCase()}`} passHref>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
