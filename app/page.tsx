import Social from "@/components/social";
import Image from "next/image";
import { Roboto_Flex } from 'next/font/google'
import RotatingText from "@/components/moving-letters";
import blue_brush from "@/public/blue_brush_stroke.png";
import Thinking from "@/components/thinking";
import ArticleBillboard from "@/components/article-billboard";
import { RocketIcon } from '@radix-ui/react-icons';
import Projects from "@/components/projects";
import Notes from "@/components/notes";
import ImageFrame from "@/components/image-frame";
import IconMenu from "@/components/icon-menu";
import TextLogo from "@/components/text-logo";
import { InfiniteMovingCardsDemo } from "@/components/moving-notes";

const robotoFlex = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="flex-col items-center justify-center md:items-start">
      <TextLogo />
      <Social />
    </div>
  );
}
