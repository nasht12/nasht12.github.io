import React from 'react'
import { SewingPinFilledIcon, SewingPinIcon, GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Roboto_Flex, Hind_Guntur } from 'next/font/google'
import Link from 'next/link';

const grapeNuts = Roboto_Flex({
  weight: "400",
  subsets: ["latin"],
});

export default function Social() {
  return (
    <div className="bg-gray ">
      <div className="flex gap-2 mt-20 md:mt-40">
        <Link href="https://github.com/nasht12">
          <GitHubLogoIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
        </Link>
        <Link href="https://www.linkedin.com/in/abhinashtummala/">
          <LinkedInLogoIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
        </Link>
        <Link href="https://www.instagram.com/abhi_nasht">
          <InstagramLogoIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
        </Link>
        <div className="flex items-center m-1">
          <SewingPinIcon className="h-4 w-4 md:h-6 md:w-6" />
          <span className={grapeNuts.className}>
            <span className="md:hidden text-xs">Seattle, WA</span>
            <span className="hidden md:block">Seattle, Washington</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
