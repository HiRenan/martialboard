import React from "react";
import styles from "./PodiumCard.module.scss";
import { Trophy } from "lucide-react";

const podiumData = [
  {
    className: styles.second,
    trophyClass: `${styles.trophyIcon} ${styles.silver}`,
    trophySize: 40,
  },
  {
    className: styles.first,
    trophyClass: `${styles.trophyIcon} ${styles.gold}`,
    trophySize: 48,
  },
  {
    className: styles.third,
    trophyClass: `${styles.trophyIcon} ${styles.bronze}`,
    trophySize: 40,
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
            <Trophy className={podiumInfo.trophyClass} size={podiumInfo.trophySize} />
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