import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
