import React from "react";
import styles from "./ProgressHistory.module.scss";

const ProgressHistory = ({ history }) => {
  return (
    <div className={styles.historyCard}>
      <h2 className={styles.title}>Registro de Pontos de Presença</h2>
      <div className={styles.list}>
        {history.map((item, idx) => (
          <div key={idx} className={styles.listItem}>
            <span className={styles.date}>{item.date}</span>
            <span className={styles.desc}>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressHistory; 