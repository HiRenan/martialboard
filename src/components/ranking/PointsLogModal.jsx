import React from "react";
import styles from "./PointsLogModal.module.scss";
import { X } from "lucide-react";

const PointsLogModal = ({ student, pointsLog, onClose }) => {
  if (!student) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Extrato de Pontos de <span>{student.name}</span></h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={22} />
          </button>
        </div>
        <div className={styles.infoRow}>
          <img src={student.avatar} alt={student.name} className={styles.avatar} />
          <div className={styles.meta}>
            <div className={styles.rank}>{student.rank}</div>
            <div className={styles.points}>{student.points} pts</div>
          </div>
        </div>
        <div className={styles.logList}>
          <div className={styles.logHeader}>
            <span>Data</span>
            <span>Descrição</span>
            <span>Pontos</span>
          </div>
          {pointsLog && pointsLog.length > 0 ? (
            pointsLog.map((item, idx) => (
              <div key={idx} className={styles.logItem}>
                <span>{item.date}</span>
                <span>{item.description}</span>
                <span className={item.value > 0 ? styles.positive : styles.negative}>{item.value > 0 ? "+" : ""}{item.value}</span>
              </div>
            ))
          ) : (
            <div className={styles.emptyLog}>Nenhum registro encontrado.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PointsLogModal; 