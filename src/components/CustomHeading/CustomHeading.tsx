// CustomHeading.tsx
import React from "react";

interface CustomHeadingProps {
  level: number;
  children: React.ReactNode;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ level, children }) => {
  if (level === 1) {
    return <h1 className="title">{children}</h1>;
  } else {
    return <h2>{children}</h2>;
  }
};

export default CustomHeading;
