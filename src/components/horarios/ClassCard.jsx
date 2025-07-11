"use client";

import React from 'react';
import { Edit, Trash2, User } from 'lucide-react';
import styles from './ClassCard.module.scss';
import { modalityColors } from '@/lib/mockData';

const ClassCard = ({ classData, isEditMode, onEdit, onDelete }) => {
  const { name, time, professor, modality } = classData;

  // Função para gerar iniciais do professor
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Função para gerar cor do avatar baseada no nome
  const getAvatarColor = (name) => {
    const colors = ['#3b82f6', '#ef4444', '#f59e0b', '#8b5cf6', '#10b981', '#06b6d4'];
    const index = name.length % colors.length;
    return colors[index];
  };

  const modalityColor = modalityColors[modality] || '#6b7280';
  const avatarColor = getAvatarColor(professor);
  const initials = getInitials(professor);

  return (
    <div 
      className={styles.classCard}
      style={{ borderLeftColor: modalityColor }}
    >
      <div className={styles.classContent}>
        <h4 className={styles.className}>{name}</h4>
        <div className={styles.classDetails}>
          <span className={styles.classTime}>{time}</span>
          <div className={styles.professorInfo}>
            <div 
              className={styles.professorAvatar}
              style={{ backgroundColor: avatarColor }}
            >
              {initials}
            </div>
            <span className={styles.classProfessor}>{professor}</span>
          </div>
        </div>
      </div>
      
      {isEditMode && (
        <div className={styles.editActions}>
          <button
            type="button"
            className={styles.editButton}
            onClick={onEdit}
            title="Editar aula"
          >
            <Edit size={14} />
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={onDelete}
            title="Excluir aula"
          >
            <Trash2 size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassCard; 