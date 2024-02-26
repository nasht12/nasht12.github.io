import React from 'react'
import { Roboto_Flex } from 'next/font/google'
import { RocketIcon } from '@radix-ui/react-icons';

const robotoFlex = Roboto_Flex({
    weight: '400',
    subsets: ['latin'],
  })

export default function Projects() {
  return (
    <div className="flex">
      <div>
        <a href="https://savantseal.vercel.app/" target="_blank">
          <div
            className={`w-64 h-16 hover:bg-blue-300 bg-gray-100 flex items-center justify-center hover:text-white hover:scale-110 transform transition-transform ${robotoFlex.className}`}
          >
            Savant Seal
          </div>
        </a>
        <a href="https://hatao.vercel.app/" target="_blank">
          <div
            className={`w-64 h-16 hover:bg-blue-300 bg-gray-100 flex items-center justify-center hover:text-white hover:scale-110 transform transition-transform ${robotoFlex.className}`}
          >
            Ranque
          </div>
        </a>
        <a href="" target="_blank">
          <div
            className={`w-64 h-16 hover:bg-blue-300 bg-gray-100 flex items-center justify-center hover:text-white hover:scale-110 transform transition-transform ${robotoFlex.className}`}
          >
            Kim-bhoh
          </div>
        </a>
      </div>
      <div className="flex items-center justify-center m-4">
        <RocketIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
}
