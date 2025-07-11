"use client";

import React, { useState } from 'react';
import styles from './page.module.scss';
import ScheduleView from '@/components/horarios/ScheduleView';
import ScheduleEditModal from '@/components/horarios/ScheduleEditModal';

export default function HorariosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);

  const handleAddClass = () => {
    setEditingClass(null);
    setIsModalOpen(true);
  };

  const handleEditClass = (classData) => {
    setEditingClass(classData);
    setIsModalOpen(true);
  };

  const handleDeleteClass = (classId) => {
    console.log('Deletando aula:', classId);
    // Aqui futuramente será feita a chamada para a API
  };

  const handleSaveClass = (classData) => {
    if (editingClass) {
      console.log('Editando aula:', classData);
    } else {
      console.log('Adicionando nova aula:', classData);
    }
    setIsModalOpen(false);
    setEditingClass(null);
  };

  return (
    <div className={styles.horariosContainer}>
      <ScheduleView 
        onAddClass={handleAddClass}
        onEditClass={handleEditClass}
        onDeleteClass={handleDeleteClass}
      />
      
      <ScheduleEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveClass}
        editingClass={editingClass}
      />
    </div>
  );
} 