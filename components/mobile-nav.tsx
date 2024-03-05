import { BookmarkIcon, CameraIcon, GitHubLogoIcon, LinkedInLogoIcon, Pencil2Icon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link';

export function MobileNav() {
  return (
    <div className="flex md:hidden items-center h-64 justify-center md:mb-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <div className="flex items-center justify-center m-4 gap-2">
                <PersonIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"bottom"} className="bg-black text-white">
            <p>About</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/bookmarked">
              <div className="flex items-center justify-center m-4 gap-2">
                <BookmarkIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"bottom"} className="bg-black text-white">
            <p>Bookmarked</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/notes">
              <div className="flex items-center justify-center m-4 gap-2">
                <Pencil2Icon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"bottom"} className="bg-black text-white">
            <p>Notes</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/projects">
              <div className="flex items-center justify-center m-4 gap-2">
                <RocketIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"bottom"} className="bg-black text-white">
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/gallery">
              <div className="flex items-center justify-center m-4 gap-2">
                <CameraIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"bottom"} className="bg-black text-white">
            <p>Gallery</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://github.com/nasht12">
              <div className="flex items-center justify-center m-4 gap-2">
                <GitHubLogoIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"right"} className="bg-black text-white">
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://www.linkedin.com/in/abhinashtummala/">
              <div className="flex items-center justify-center m-4 gap-2">
                <LinkedInLogoIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"right"} className="bg-black text-white">
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
