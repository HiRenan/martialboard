import React, { useEffect, useRef } from "react";
import styles from "./GraduationProgressCard.module.scss";

const GraduationProgressCard = ({ progressData }) => {
  const { currentRank, nextRank, progress, mainGoal } = progressData;
  const percent = Math.min(100, Math.round((progress.currentClasses / progress.requiredClasses) * 100));
  const remaining = progress.requiredClasses - progress.currentClasses;
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Animação da barra de progresso ao carregar
    if (progressBarRef.current) {
      const progressBar = progressBarRef.current;
      progressBar.style.width = "0%";
      
      setTimeout(() => {
        progressBar.style.transition = "width 1.5s ease-out";
        progressBar.style.width = percent + "%";
      }, 300);
    }
  }, [percent]);

  return (
    <div className={styles.card}>
      <div className={styles.ranksRow}>
        <div className={styles.beltContainer}>
          <svg className={styles.beltSvg} style={{ color: currentRank.color }}>
            <use href="/faixa.svg#faixa" />
          </svg>
          <span className={styles.beltLabel}>{currentRank.name}</span>
        </div>
        
        <div className={styles.arrowContainer}>
          <span className={styles.arrow}>&rarr;</span>
        </div>
        
        <div className={styles.beltContainer}>
          <svg className={`${styles.beltSvg} ${styles.nextBelt}`} style={{ color: nextRank.color }}>
            <use href="/faixa.svg#faixa" />
          </svg>
          <span className={styles.beltLabel}>{nextRank.name}</span>
        </div>
      </div>
      
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBarBg}>
          <div 
            ref={progressBarRef}
            className={styles.progressBarFill} 
            style={{ width: "0%" }}
          ></div>
        </div>
        <div className={styles.progressNumbers}>
          <span className={styles.currentNumber}>{progress.currentClasses}</span>
          <span className={styles.separator}>/</span>
          <span className={styles.totalNumber}>{progress.requiredClasses}</span>
          <span className={styles.label}>Aulas</span>
        </div>
      </div>
      
      <div className={styles.motivationalText}>
        Faltam <span className={styles.highlight}>{remaining}</span> aulas para a sua <span className={styles.highlight}>{nextRank.name}</span>!
      </div>
      
      {mainGoal && (
        <div className={styles.goalSection}>
          <h4 className={styles.goalTitle}>Seu Objetivo Principal:</h4>
          <p className={styles.goalText}>{mainGoal}</p>
        </div>
      )}
    </div>
  );
};

export default GraduationProgressCard; 