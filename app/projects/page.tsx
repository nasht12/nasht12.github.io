import { EvervaultCard, Icon } from "@/components/evervault-card";
import Link from "next/link";

export default function Projects() {

  return (
    <>
      <div className="w-[700px] h-[600px] p-2 overflow-auto antialiased relative grid md:grid-cols-2 no-scrollbar">
        {projectContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-4 relative h-[16rem]"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text={item?.title} />
            <Link href={item?.url}>
              <h2 className="dark:text-white text-black mt-4 text-sm">
                {item?.badge}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

const projectContent = [
  {
    title: "Savant Seal",
    badge: "AI College counselor",
    url: "https://savantseal.vercel.app/",
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
