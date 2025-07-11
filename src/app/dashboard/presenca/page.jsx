"use client";

import React, { useState } from 'react';
import styles from './page.module.scss';
import ClassSelector from '@/components/presenca/ClassSelector';
import AttendanceList from '@/components/presenca/AttendanceList';
import { classesToday, students } from '@/lib/mockData';

export default function PresencaPage() {
  const [selectedClassId, setSelectedClassId] = useState(null);

  const selectedClass = classesToday.find((c) => c.id === selectedClassId);
  const filteredStudents = selectedClass
    ? students.filter((s) => selectedClass.students.includes(s.id))
    : [];

  return (
    <div className={styles.presencaContainer}>
      <h1 className={styles.pageTitle}>Chamada de Presença</h1>
      <ClassSelector classes={classesToday} onSelectClass={setSelectedClassId} />
      {selectedClass && (
        <>
          <AttendanceList students={filteredStudents} />
          <div className={styles.saveWrapper}>
            <button className={styles.saveButton} type="button">Salvar Presenças</button>
          </div>
        </>
      )}
    </div>
  );
} 