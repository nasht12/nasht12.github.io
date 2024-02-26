"use client";
import React, { useState, useEffect } from 'react';
import { Roboto_Flex } from 'next/font/google';
import ImageFrame from './image-frame';

const robotoFlex = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
});

export default function TextLogo() {
  const overlayImages = ['/abhi2.gif'];
  const [currentOverlayImage, setCurrentOverlayImage] = useState(0);

  useEffect(()=> {
    fetch('api/res').then(res => res.json()).then(data => console.log(data))
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOverlayImage((currentOverlayImage + 1) % overlayImages.length);
    }, 10);
    return () => clearInterval(timer);
  }, [currentOverlayImage, overlayImages.length]);

  return (
    <div
      className={`w-96 h-96 text-9xl flex items-center justify-center relative ${robotoFlex.className}`}
    >
      A[
      <img
        src={overlayImages[currentOverlayImage]}
        alt="logo"
        className={`w-[96px] h-[72px] object-cover inline-block mt-[14px] ${robotoFlex.className}`}
      />
      ]T.
    </div>
  );
}