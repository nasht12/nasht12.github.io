"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Roboto_Flex } from 'next/font/google'

const robotoFlex = Roboto_Flex({
    weight: '400',
    subsets: ['latin'],
})

const Thinking: React.FC = () => {
  const sentences = useMemo(() => ['Two Reacts.', 'Infinite possibilities for what a site could be.', 'Sentence 3.'], []);
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setCurrentSentence(prev => {
          const currentIndex = sentences.indexOf(prev);
          const nextIndex = (currentIndex + 1) % sentences.length;
          return sentences[nextIndex];
        });
        setFlip(false);
      }, 300);
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, [sentences]);

  const style = {
    opacity: flip ? 0 : 1,
    transition: 'opacity 0.3s',
  };

  return (
    <div>
        Thinking about:
      <span
        style={style}
        className={`w-64 h-16 hover:bg-blue-300 border-2 flex items-center justify-center hover:text-white hover:scale-110 transform transition-transform ${robotoFlex.className}`}
      >
        {currentSentence}
      </span>
    </div>
  );
};

export default Thinking;