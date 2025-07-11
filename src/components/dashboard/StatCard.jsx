import React from 'react';
import styles from './StatCard.module.scss';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, change, changeType, icon: Icon, iconType }) => {
  const isPositive = changeType === 'positive';
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={`${styles.icon} ${styles[iconType]}`}>
          <Icon size={20} />
        </div>
      </div>
      
      <div className={styles.value}>{value}</div>
      
      <div className={`${styles.change} ${styles[changeType]}`}>
        {isPositive ? (
          <TrendingUp size={16} />
        ) : (
          <TrendingDown size={16} />
        )}
        <span className={styles.changeValue}>{change}</span>
        <span className={styles.changeLabel}>vs mês anterior</span>
      </div>
    </div>
  );
};

export default StatCard; 