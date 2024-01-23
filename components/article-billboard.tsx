"use client";
import React, { useState, useEffect } from 'react';
import { BookmarkIcon } from '@radix-ui/react-icons';

// Predefined set of articles
const articles = [
    { id: 1, title: 'Two Reacts - Dan Abranov', url: 'Summary of Article 1' },
    { id: 2, title: 'My website is a shifting house next to a river - Laurel Schwulst', url: 'https://thecreativeindependent.com/essays/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/' },
    { id: 3, title: 'Article Title 3', url: 'Summary of Article 3' },
    // ... more articles
];

const ArticleBillboard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
        }, 3000); // Change every second

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
      <div className="flex">
        <div className="flex relative overflow-hidden bg-gray-100">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`h-16 w-64 flex absolute transform transition-transform ease-in-out duration-1000 ${
                index === currentIndex
                  ? "translate-x-0"
                  : index === prevIndex
                  ? "translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <h2
                className={`w-64 h-16 hover:bg-blue-300 flex items-center justify-center p-4`}
              >
                {article.title}
              </h2>
            </div>
          ))}
          <div className="h-16 w-64"></div>
        </div>
        <div className="flex items-center justify-center m-4">
          <BookmarkIcon className="h-6 w-6 md:h-10 md:w-10 border-2 border-black p-1 bg-transparent hover:bg-blue-300 transition-all duration-500 ease-in-out" />
        </div>
      </div>
    );
};

export default ArticleBillboard;
