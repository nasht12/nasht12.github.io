"use client";
import React, { useState} from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { notesContent } from "./data/notesContent";
import { savedContent } from "./data/savedContent";

export default function Notes() {

  return (
    <div className="w-full max-w-full md:w-[700px]">
      <Tabs defaultValue="notes">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>
        <TabsContent value="notes">
          <div className="max-w-2xl mx-auto antialiased relative px-4 h-[500px] overflow-auto m-4 mt-12 no-scrollbar">
            {notesContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10 flex gap-4">
                <Link href={`/notes/${item.slug}`}>
                  <span style={{ cursor: "pointer" }}>
                    <p className={"text-xl mb-4"}>{item.title}</p>
                  </span>
                </Link>

                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="max-w-2xl mx-auto antialiased relative px-4 h-[500px] overflow-auto m-4 mt-12 no-scrollbar">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
