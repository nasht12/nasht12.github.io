"use client";
import React, { useState } from 'react';

interface ImageFrameProps {
  imageUrl1: string;
  imageUrl2: string;
}

export default function ImageFrame({ imageUrl1, imageUrl2 }: ImageFrameProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-64 h-64 md:w-96 md:h-96 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={hovered ? imageUrl2 : imageUrl1} 
        alt="description" 
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
    </div>
  );
}
