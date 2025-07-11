import React from 'react';
import styles from './UpcomingGraduations.module.scss';
import { ArrowRight } from 'lucide-react';

const UpcomingGraduations = ({ graduations }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('pt-BR', { month: 'short' });
    return { day, month };
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Próximas Graduações</h3>
          <p className={styles.subtitle}>Acompanhe as graduações programadas</p>
        </div>
        <button className={styles.viewAllButton}>
          Ver todas <ArrowRight size={16} />
        </button>
      </div>
      
      <div className={styles.graduationList}>
        {graduations.map((graduation, index) => {
          const { day, month } = formatDate(graduation.date);
          
          return (
            <div key={index} className={styles.graduationItem}>
              <div className={styles.avatar}>
                {getInitials(graduation.studentName)}
              </div>
              
              <div className={styles.info}>
                <h4 className={styles.studentName}>{graduation.studentName}</h4>
                <div className={styles.beltInfo}>
                  <span className={styles.currentBelt}>{graduation.currentBelt}</span>
                  <ArrowRight size={12} />
                  <span className={styles.nextBelt}>{graduation.nextBelt}</span>
                </div>
              </div>
              
              <div className={styles.date}>
                <span className={styles.day}>{day}</span>
                <span className={styles.month}>{month}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingGraduations; 