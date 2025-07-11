"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import { students, pointsLog } from "@/lib/mockData";
import PodiumCard from "@/components/ranking/PodiumCard";
import RankingList from "@/components/ranking/RankingList";
import PointsLogModal from "@/components/ranking/PointsLogModal";

const TABS = [
  { key: "adulto", label: "Ranking Adulto" },
  { key: "crianca", label: "Ranking Infantil" },
];

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("adulto");
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filtra e ordena os alunos por pontos
  const filtered = students
    .filter((s) => s.category === activeTab)
    .sort((a, b) => b.points - a.points);

  const podium = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  return (
    <div className={styles.rankingContainer}>
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabButton} ${activeTab === tab.key ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className={styles.podiumSection}>
        <PodiumCard
          podium={podium}
          onClickStudent={setSelectedStudent}
        />
      </section>

      <section className={styles.listSection}>
        <RankingList
          students={rest}
          onClickStudent={setSelectedStudent}
        />
      </section>

      <PointsLogModal
        student={selectedStudent}
        pointsLog={selectedStudent ? pointsLog[selectedStudent.id] : []}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
} 