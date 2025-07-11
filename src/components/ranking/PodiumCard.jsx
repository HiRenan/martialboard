import React from "react";
import styles from "./PodiumCard.module.scss";

const podiumData = [
  {
    className: styles.second,
    trophySvg: "/trophy-silver.svg",
    trophyClass: `${styles.trophyIcon} ${styles.silver}`,
  },
  {
    className: styles.first,
    trophySvg: "/trophy-gold.svg",
    trophyClass: `${styles.trophyIcon} ${styles.gold}`,
  },
  {
    className: styles.third,
    trophySvg: "/trophy-bronze.svg",
    trophyClass: `${styles.trophyIcon} ${styles.bronze}`,
  },
];

const PodiumCard = ({ podium, onClickStudent }) => {
  // Ordem: 2º, 1º, 3º
  const order = [1, 0, 2];
  return (
    <div className={styles.podiumWrapper}>
      {order.map((idx, i) => {
        const student = podium[idx];
        const podiumInfo = podiumData[i];
        if (!student) return <div key={i} className={styles.podiumEmpty}></div>;
        return (
          <div
            key={student.id}
            className={`${styles.podiumCard} ${podiumInfo.className}`}
            onClick={() => onClickStudent(student)}
            tabIndex={0}
            role="button"
          >
            <div className={styles.trophyContainer}>
              <img 
                src={podiumInfo.trophySvg} 
                alt="Troféu" 
                className={podiumInfo.trophyClass}
              />
            </div>
            <div className={styles.avatarWrapper}>
              <img src={student.avatar} alt={student.name} className={styles.avatar} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.name}>{student.name}</div>
              <div className={styles.points}>{student.points} pts</div>
            </div>
            <div className={styles.streak}>
              <span role="img" aria-label="fogo">🔥</span> {student.streak} dias
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PodiumCard; 