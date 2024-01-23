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

const robotoFlex = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:h-auto flex items-center justify-center mt-8 md:mt-0">
        <div className="flex flex-col items-center justify-center md:items-start">
          <span
            className={`transition-all duration-500 ease-in-out transform md:transform md:-translate-y-10 text-4xl md:text-7xl font-semibold ${robotoFlex.className}`}
          >
            Abhinash <br />
            Tummala
          </span>
          <div className="w-72 flex items-center justify-center">
            <RotatingText
              texts={[
                "Fullstack developer 💻",
                "Playing with Oso 🐶and Delta 🐕‍🦺",
                "Reading 📕: Godel Escher Bach",
                "🤖🎨 and 💸🌐",
                "Exploring PNW 🌲🌧️🏞️",
              ]}
              className={robotoFlex.className}
            />
          </div>
          <Social />
        </div>
      </div>
      <div className=" w-full md:w-1/2 h-auto flex sm:flex-row items-center justify-center transition-all duration-500 ease-in-out transform">
        <div className="gap-2 w-full h-full md:w-1/2 flex items-center justify-start bg-slate-50">
          <ImageFrame
            imageUrl1="/abhi1.gif"
            imageUrl2="/abhi1.gif"
          />
          {/* <ImageFrame
            imageUrl1="https://images.unsplash.com/photo-1542223616-9de9adb5e3e8"
            imageUrl2="https://images.unsplash.com/photo-1583743220494-3da91330c2fd"
          /> */}
        </div>
        <div className="w-full h-full md:w-1/2 bg-slate-50 flex items-center justify-center">
          <IconMenu />
        </div>
        {/* <Notes />
        <ArticleBillboard />
        <Projects /> */}
      </div>
    </main>
  );
}
