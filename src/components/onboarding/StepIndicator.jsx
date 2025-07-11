import React from 'react';
import styles from './StepIndicator.module.scss';

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className={styles.stepIndicator}>
      <div className={styles.progressInfo}>
        <span className={styles.stepText}>Passo {currentStep} de {totalSteps}</span>
        <span className={styles.progressPercentage}>
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>
      
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      <div className={styles.stepDots}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`${styles.stepDot} ${
              index + 1 <= currentStep ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator; 