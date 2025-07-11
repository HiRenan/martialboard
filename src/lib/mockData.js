// src/lib/mockData.js
export const dashboardData = {
  stats: {
    totalStudents: 247,
    monthlyRevenue: 45600,
    attendanceRate: 87,
    classesCompleted: 156,
  },

  attendanceData: {
    labels: [
      "Jiu-Jitsu",
      "Muay Thai",
      "Boxe",
      "Kickboxing",
      "MMA",
      "Funcional",
    ],
    datasets: [
      {
        label: "Alunos",
        data: [45, 38, 32, 28, 25, 20],
      },
    ],
  },

  beltDistribution: {
    labels: ["Branca", "Azul", "Roxa", "Marrom", "Preta"],
    data: [85, 65, 45, 35, 17],
  },

  upcomingGraduations: [
    {
      studentName: "João Silva",
      currentBelt: "Branca",
      nextBelt: "Azul",
      date: "2024-01-15",
    },
    {
      studentName: "Maria Santos",
      currentBelt: "Azul",
      nextBelt: "Roxa",
      date: "2024-01-18",
    },
    {
      studentName: "Pedro Costa",
      currentBelt: "Roxa",
      nextBelt: "Marrom",
      date: "2024-01-22",
    },
    {
      studentName: "Ana Oliveira",
      currentBelt: "Branca",
      nextBelt: "Azul",
      date: "2024-01-25",
    },
    {
      studentName: "Carlos Ferreira",
      currentBelt: "Marrom",
      nextBelt: "Preta",
      date: "2024-01-28",
    },
  ],
};
