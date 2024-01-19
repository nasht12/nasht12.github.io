import React from "react";
import { RowsIcon } from '@radix-ui/react-icons'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"  
import { Button } from "./ui/button";


export default function Header() {
  return (
    <div className="h-20 flex items-center m-2">
      <RowsIcon />
      <div className="flex-grow text-center">ABHINASH</div>
      <div className=""></div>
    </div>
  );
}
