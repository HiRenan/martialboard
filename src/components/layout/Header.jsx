"use client";
import React from 'react';
import styles from './Header.module.scss';
import { Menu, Plus, Bell } from 'lucide-react';

const Header = ({ title = "Dashboard", onMenuClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.menuButton} onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h1 className={styles.pageTitle}>{title}</h1>
      </div>
      
      <div className={styles.rightSection}>
        <button className={styles.primaryButton}>
          <Plus size={18} />
          <span>Novo Aluno</span>
        </button>
        
        <button className={styles.notificationButton}>
          <Bell size={20} />
          <span className={styles.notificationBadge}>3</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 