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
