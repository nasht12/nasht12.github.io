"use client";
import React, { useState } from 'react';
import FullScreenMenu from './full-menu';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      
  return (
    <div className="flex items-center p-2 h-16 w-full">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={toggleMenu} >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <FullScreenMenu />
      </div>
    </div>
  );
}
