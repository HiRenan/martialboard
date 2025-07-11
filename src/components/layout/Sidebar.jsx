"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import Logo from '../Logo/Logo';
import {
  Home,
  Users,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  User,
  LogOut,
  ClipboardCheck,
  Shield,
  Clock,
  Trophy
} from 'lucide-react';

const Sidebar = ({ isCollapsed }) => {
  const pathname = usePathname(); // Pega a URL atual

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Alunos', href: '#' },
    { icon: FileText, label: 'Planos', href: '#' },
    { icon: Calendar, label: 'Aulas', href: '#' },
    { icon: Clock, label: 'Horários', href: '/dashboard/horarios' },
    { icon: Trophy, label: 'Ranking', href: '/dashboard/ranking' },
    { icon: BarChart3, label: 'Relatórios', href: '#' },
    { icon: ClipboardCheck, label: 'Presença', href: '/dashboard/presenca' },
    { icon: Shield, label: 'Tatame Seguro', href: '/dashboard/tatame-seguro' },
    { icon: Settings, label: 'Configurações', href: '#' },
  ];

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoSection}>
        <Logo />
        <h2 className={styles.brandName}>MartialBoard</h2>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`${styles.menuItem} ${pathname === item.href ? styles.active : ''}`}
              >
                <item.icon size={20} />
                <span className={styles.navLinkText}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <User size={20} />
          </div>
          <div className={styles.userDetails}>
            <h4 className={styles.userName}>Mestre Silva</h4>
            <p className={styles.userRole}>Administrador</p>
          </div>
        </div>

        <div className={styles.userActions}>
          <button className={styles.actionButton}>
            <Bell size={18} />
          </button>
          <button className={styles.actionButton}>
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 