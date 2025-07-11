import React, { useState } from 'react';
import styles from './AttendanceList.module.scss';

const AttendanceList = ({ students }) => {
  // status: { [studentId]: 'present' | 'absent' | null }
  const [attendance, setAttendance] = useState({});

  const handleMark = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const markAllPresent = () => {
    const allPresent = {};
    students.forEach((s) => { allPresent[s.id] = 'present'; });
    setAttendance(allPresent);
  };

  const clearAll = () => {
    setAttendance({});
  };

  return (
    <div className={styles.attendanceListContainer}>
      <div className={styles.actions}>
        <button className={styles.massButton} onClick={markAllPresent} type="button">Marcar Todos como Presentes</button>
        <button className={styles.massButton} onClick={clearAll} type="button">Limpar Seleção</button>
      </div>
      <ul className={styles.studentList}>
        {students.map((student) => (
          <li key={student.id} className={styles.studentCard}>
            <img src={student.avatar} alt={student.name} className={styles.avatar} onError={e => {e.target.src='/avatars/placeholder.png'}} />
            <div className={styles.info}>
              <div className={styles.name}>{student.name}</div>
              <div className={styles.rank}>{student.rank}</div>
            </div>
            <div className={styles.buttons}>
              <button
                type="button"
                className={`${styles.statusButton} ${attendance[student.id] === 'present' ? styles.present : ''}`}
                onClick={() => handleMark(student.id, 'present')}
                disabled={attendance[student.id] === 'absent'}
              >Presente</button>
              <button
                type="button"
                className={`${styles.statusButton} ${attendance[student.id] === 'absent' ? styles.absent : ''}`}
                onClick={() => handleMark(student.id, 'absent')}
                disabled={attendance[student.id] === 'present'}
              >Ausente</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceList; 