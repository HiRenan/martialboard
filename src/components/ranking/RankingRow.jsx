import React from "react";
import { Flame, ArrowUp, ArrowDown, Minus } from "lucide-react";
import styles from "./RankingRow.module.scss";

const changeIcons = {
  up: <ArrowUp size={22} color="#22c55e" />,
  down: <ArrowDown size={22} color="#ef4444" />,
  stable: <Minus size={22} color="#a0aec0" />,
};

const RankingRow = ({ student, position, onClick, animationDelay = 0 }) => {
  return (
    <div
      className={styles.row}
      onClick={onClick}
      tabIndex={0}
      role="button"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className={styles.position}>{position}º</div>
      <div className={styles.avatarWrapper}>
        <img src={student.avatar} alt={student.name} className={styles.avatar} />
      </div>
      <div className={styles.name}>{student.name}</div>
      <div className={styles.points}>{student.points} pts</div>
      <div className={styles.streak}>
        <Flame size={18} color="#fbbf24" />
        <span>{student.streak}</span>
      </div>
      <div className={styles.rankChange}>{changeIcons[student.rankChange]}</div>
    </div>
  );
};

export default RankingRow; 