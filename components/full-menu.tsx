import React, { useEffect, useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Roboto_Flex } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const robotoFlex = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
})

interface FullScreenMenuProps {
  initialShow?: boolean;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ initialShow = false }) => {
  const [show, setShow] = useState(initialShow);
  const router = useRouter();


  const onClose = () => {
    setShow(false);
  };


  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <button
        onClick={onClose}
        className="p-2 text-white bg-black hover:bg-red-700 focus:outline-none rounded m-4"
      >
        <Cross1Icon />
      </button>
      <div className="h-full flex flex-col gap-2 mt-10 md:mt-20 ml-4">
        <Link
          className={`text-4xl md:text-6xl hover:scale-90 transform transition-transform duration-500 ease-in-out delay-50 translate-y-10 ${robotoFlex.className}`}
          href="/"
        >
          <span>Home</span>
        </Link>
        <Link
          className={`text-4xl md:text-6xl hover:scale-90 transform transition-transform duration-500 ease-in-out delay-50 translate-y-10 ${robotoFlex.className}`}
          href="/about"
        >
          <span>About</span>
        </Link>
        <Link
          className={`text-4xl md:text-6xl hover:scale-90 transform transition-transform duration-500 ease-in-out delay-50 translate-y-10 ${robotoFlex.className}`}
          href="projects"
          
        >
          <span>Projects</span>
        </Link>
        <Link
          className={`text-4xl md:text-6xl hover:scale-90 transform transition-transform duration-500 ease-in-out delay-50 translate-y-10 ${robotoFlex.className}`}
          href="Notes"
        >
          <span>Notes</span>
        </Link>
        <Link
          className={`text-4xl md:text-6xl hover:scale-90 transform transition-transform duration-500 ease-in-out delay-50 translate-y-10 ${robotoFlex.className}`}
          href="Gallery"
        >
          <span>Gallery</span>
        </Link>
      </div>
    </div>
  );
};

export default FullScreenMenu;