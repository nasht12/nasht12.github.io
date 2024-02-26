"use client";
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const RotatingText = ({ texts, className }: { texts: string[], className?: string }) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let animationIndex = 0;
    const animateText = () => {
      if (textRef.current) {
        const textWrapper = textRef.current;
        textWrapper.innerHTML = texts[animationIndex].replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            targets: '.letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 1500,
            delay: (el, i) => 50 * (i+1)
          }).add({
            targets: '.letter',
            opacity: 0,
            easing: "easeInOutQuad",
            duration: 1500,
            delay: (el, i) => 50 * (i+1),
            complete: animateText
          });

        animationIndex = (animationIndex + 1) % texts.length;
      }
    };

    animateText();
  }, [texts]);

  return (
    <div className={`transition-all duration-300 ease-in-out ${className}`} ref={textRef}></div>
  );
};

export default RotatingText;
