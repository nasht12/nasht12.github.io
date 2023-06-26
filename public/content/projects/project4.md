**Banner with moving car on a highway**

Decided to brush up my CSS and did a little banner with moving car animation. ChatGPT came to the rescue of speeding things up with animation.
Started by creating a HighwayBanner component. Tested the basic layout and animation with CSS styling. Once I had that downloaded some images that fit the scene and made the background invisible with remove.ai. 

`HighwayBanner.tsx`

```tsx
import React from 'react';
import styles from './HighwayBanner.module.css';

const HighwayBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.highway}>
        {/* Cars moving left */}
        <div className={styles.carContainer}>
          <div className={styles.carLeft}></div>
        </div>

        {/* Cars moving right */}
        <div className={styles.carContainer}>
          <div className={styles.carRight}></div>
        </div>
      </div>
    </div>
  );
};

export default HighwayBanner;
```

```css
.banner {
  background-color: #f1f1f1;
  padding: 1px;
}

.highway {
  position: relative;
  width: 100%;
  height: 400px; /* Adjust the height as needed */
  background-image: url("/assets/highway.jpg"); /* Replace with the path to your image */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-size: cover;
  overflow: hidden;
  animation: zoomIn 5s ease-in-out infinite alternate;
}

.carContainer {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 18px;
}

.carLeft {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/car6.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: scaleX(-1);
}
.carRight {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/car5.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

.carLeft {
  left: 100px; /* Initial position outside the left edge of the highway */
  animation: carMoveLeft 2s linear infinite;
}

.carRight {
  right: -1000px; /* Initial position outside the right edge of the highway */
  animation: carMoveRight 3s linear infinite;
}

@keyframes carMoveLeft {
  0% {
    transform: translateX(-100%); /* Start the car outside the left edge of the highway */
  }
  100% {
    transform: translateX(4000%); /* Move the car to the right edge of the highway */
  }
}

@keyframes carMoveRight {
  0% {
    transform: translateX(100%); /* Start the car outside the right edge of the highway */
  }
  100% {
    transform: translateX(-3500%); /* Move the car to the left edge of the highway */
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
```