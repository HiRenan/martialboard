import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img 
        src="/logoVermelha.svg" 
        alt="MartialBoard Logo" 
        className={styles.logoSvg}
      />
    </div>
  );
};
export default Logo; 