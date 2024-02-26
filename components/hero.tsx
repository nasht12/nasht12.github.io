import React from "react";
import { EvervaultCard, Icon } from "./evervault-card";
import RotatingText from "./moving-letters";
import { Roboto_Flex } from 'next/font/google';

const robotoFlex = Roboto_Flex({
    weight: "400",
    subsets: ["latin"],
  });

export default function Hero() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-md mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="hover" />
      <div className="bg-gray flex-col mt-4">
        <span
          className={`flex items-center justify-center transition-all duration-500 ease-in-out transform text-3xl md:text-3xl font-semibold ${robotoFlex.className}`}
        >
          Abhinash Tummala
        </span>
        <div className="w-96 flex items-center justify-center mt-2">
          <RotatingText
            texts={[
              "Software Engineer 💻",
              "Plays with Oso 🐶and Delta 🐕‍🦺",
              "Reading 📕: Godel Escher Bach",
              "🤖🎨 and 💸🌐",
              "Exploring PNW 🌲🌧️🏞️",
            ]}
            className={robotoFlex.className}
          />
        </div>
      </div>
      {/* <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p> */}
    </div>
  );
}
