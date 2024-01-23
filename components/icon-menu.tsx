import { BookmarkIcon, CameraIcon, Pencil2Icon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function IconMenu() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center m-4">
        <BookmarkIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div>
      <div className="flex items-center justify-center m-4">
        <Pencil2Icon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div>
      <div className="flex items-center justify-center m-4">
        <RocketIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div>
      <div className="flex items-center justify-center m-4">
        <CameraIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div><div className="flex items-center justify-center m-4">
        <PersonIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
}
