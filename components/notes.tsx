import React from 'react'
import { Pencil2Icon } from '@radix-ui/react-icons'

export default function Notes() {
  return (
    <div className="flex">
      <div className='w-64 h-16 bg-gray-100 flex items-center justify-center'>
        Notes 1
      </div>
      <div className='flex items-center justify-center m-4'>
        <Pencil2Icon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
}
