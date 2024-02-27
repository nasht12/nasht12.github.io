"use client"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"


export default function Bookmarked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
    <motion.div
        className="fixed top-0 left-0 right-0 h-2.5 bg-red-500 origin-right"
        style={{ scaleX }}
      />
      <div className="max-w-2xl mx-auto antialiased relative ">
        {projectContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 flex gap-4">
            <Link href={item.url}>
              <p className={"text-xl mb-4"}>{item.title}</p>
            </Link>
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

const projectContent = [
  {
    title: "AI College counselor",
    badge: "Savant Seal",
    url: "https://savantseal.vercel.com/",
  },
  {
    title: "Ranque",
    badge: "List, compare, rank",
    url: "https://hatao.vercel.app/",
  },
  {
    title: "Finetune lab",
    badge: "Finetuning and prompting",
    url: "https://fine-tuning-lab.vercel.app/",
  },
];
