import React from "react";
import RankingRow from "./RankingRow";
import styles from "./RankingList.module.scss";

const RankingList = ({ students, onClickStudent }) => {
  return (
    <div className={styles.rankingList}>
      {students.map((student, idx) => (
        <RankingRow
          key={student.id}
          student={student}
          position={idx + 4}
          onClick={() => onClickStudent(student)}
          animationDelay={idx * 60}
        />
      ))}
    </div>
  );
};

export default RankingList; 