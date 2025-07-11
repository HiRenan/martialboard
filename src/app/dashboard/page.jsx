"use client";
import React from 'react';
import styles from './page.module.scss';
import StatCard from '../../components/dashboard/StatCard';
import BarChart from '../../components/dashboard/BarChart';
import DoughnutChart from '../../components/dashboard/DoughnutChart';
import UpcomingGraduations from '../../components/dashboard/UpcomingGraduations';
import { Users, DollarSign, Calendar, BookOpen } from 'lucide-react';
import { dashboardData } from '../../lib/mockData';

export default function DashboardPage() {
  const { stats, attendanceData, beltDistribution, upcomingGraduations } = dashboardData;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Bem-vindo ao Command Center</h1>
        <p className={styles.welcomeSubtitle}>
          Acompanhe as métricas mais importantes da sua academia em tempo real
        </p>
      </div>

      <div className={styles.statsGrid}>
        <StatCard
          title="Total de Alunos"
          value={stats.totalStudents}
          change="+12%"
          changeType="positive"
          icon={Users}
          iconType="students"
        />
        <StatCard
          title="Receita Mensal"
          value={`R$ ${stats.monthlyRevenue.toLocaleString('pt-BR')}`}
          change="+15%"
          changeType="positive"
          icon={DollarSign}
          iconType="revenue"
        />
        <StatCard
          title="Taxa de Presença"
          value={`${stats.attendanceRate}%`}
          change="+8%"
          changeType="positive"
          icon={Calendar}
          iconType="attendance"
        />
        <StatCard
          title="Aulas Realizadas"
          value={stats.classesCompleted}
          change="+5%"
          changeType="positive"
          icon={BookOpen}
          iconType="classes"
        />
      </div>

      <div className={styles.chartsSection}>
        <BarChart
          title="Frequência por Modalidade"
          subtitle="Distribuição de alunos por tipo de aula"
          data={attendanceData}
        />
        <DoughnutChart
          title="Distribuição por Faixas"
          subtitle="Quantidade de alunos por faixa"
          data={beltDistribution}
        />
      </div>

      <div className={styles.graduationsSection}>
        <UpcomingGraduations graduations={upcomingGraduations} />
      </div>
    </div>
  );
} 