"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { notesContent } from '../data/notesContent'

export default function NotesPage() {
  const pathname = usePathname();

  const note = notesContent.find(
    (note) => note.slug === pathname?.split("/").pop()
  );

  return (
    <>
      <div className="max-w-2xl mx-auto antialiased relative px-4 h-[500px] overflow-auto m-4 no-scrollbar">
        <div className="mb-10">
          <p className="text-xl mb-4">{note?.title}</p>
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            {note?.badge}
          </h2>
          <div className="text-sm  prose prose-sm dark:prose-invert">
            {note?.description}
          </div>
        </div>
      </div>
    </>
  );
}
