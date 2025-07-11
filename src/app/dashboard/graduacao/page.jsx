"use client";

import styles from "./page.module.scss";
import { userGraduationProgress } from "@/lib/mockData";
import GraduationProgressCard from "@/components/graduacao/GraduationProgressCard";
import ProgressHistory from "@/components/graduacao/ProgressHistory";

export default function GraduacaoPage() {
  return (
    <div className={styles.graduacaoPageContainer}>
      <h1 className={styles.title}>Minha Graduação</h1>
      <div className={styles.progressSection}>
        <GraduationProgressCard progressData={userGraduationProgress} />
      </div>
      <div className={styles.historySection}>
        <ProgressHistory history={userGraduationProgress.history} />
      </div>
    </div>
  );
} 