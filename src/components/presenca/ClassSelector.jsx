import React, { useState } from 'react';
import styles from './ClassSelector.module.scss';

const ClassSelector = ({ classes, onSelectClass }) => {
  const [activeId, setActiveId] = useState(null);

  const handleSelect = (classId) => {
    setActiveId(classId);
    onSelectClass(classId);
  };

  return (
    <div className={styles.classSelectorContainer}>
      <h2 className={styles.title}>Selecione a turma</h2>
      <div className={styles.classList}>
        {classes.map((turma) => (
          <button
            key={turma.id}
            className={`${styles.classCard} ${activeId === turma.id ? styles.active : ''}`}
            onClick={() => handleSelect(turma.id)}
            type="button"
          >
            <div className={styles.className}>{turma.name}</div>
            <div className={styles.classTime}>{turma.time}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelector; 