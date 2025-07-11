"use client";
import { useState } from 'react';
import styles from './layout.module.scss';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';

export default function DashboardLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);

  return (
    <div className={styles.layoutContainer}>
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className={`${styles.mainContent} ${isSidebarCollapsed ? styles.expanded : ''}`}>
        <Header onMenuClick={toggleSidebar} />
        <main className={styles.pageWrapper}>
          {children}
        </main>
      </div>
    </div>
  );
} 