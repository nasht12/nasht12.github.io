"use client";
import React from "react";
import Link from "next/link";

export default function Bookmarked() {
  return (
    <div className="w-full m-4">
        <div className="max-w-2xl mx-auto antialiased relative ">
          {savedContent.map((item, index) => (
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
    </div>
  );
}

const savedContent = [
  {
    title: "YC - Request for startups",
    badge: "Startup",
    url: "https://www.ycombinator.com/blog/ycs-latest-request-for-startups/",
  },
  {
    title: "Before you Memo",
    badge: "UI",
    url: "https://overreacted.io/before-you-memo/",
  },
  {
    title: "Two Reacts",
    badge: "UI",
    url: "https://overreacted.io/the-two-reacts/",
  },
  {
    title: "Goals vs Systems",
    badge: "Misc",
    url: "https://web.archive.org/web/20210811125743/https://www.scottadamssays.com/2013/11/18/goals-vs-systems/",
  },
  {
    title: "Aceternity",
    badge: "UI",
    url: "https://https://ui.aceternity.com/",
  },
];
