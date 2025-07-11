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

// Atualização dos alunos para ranking
export const students = [
  {
    id: 1,
    name: "Carlos Andrade",
    avatar: "/avatars/carlos.png",
    rank: "Faixa Roxa",
    category: "adulto",
    points: 2350,
    streak: 15,
    rankChange: "up",
  },
  {
    id: 2,
    name: "Beatriz Lima",
    avatar: "/avatars/beatriz.png",
    rank: "Faixa Azul",
    category: "adulto",
    points: 2100,
    streak: 8,
    rankChange: "stable",
  },
  {
    id: 3,
    name: "Ricardo Alves",
    avatar: "/avatars/ricardo.png",
    rank: "Faixa Branca",
    category: "adulto",
    points: 1980,
    streak: 5,
    rankChange: "down",
  },
  {
    id: 4,
    name: "Fernanda Souza",
    avatar: "/avatars/fernanda.png",
    rank: "Faixa Roxa",
    category: "adulto",
    points: 1800,
    streak: 3,
    rankChange: "up",
  },
  {
    id: 5,
    name: "Lucas Martins",
    avatar: "/avatars/lucas.png",
    rank: "Faixa Marrom",
    category: "adulto",
    points: 1750,
    streak: 2,
    rankChange: "down",
  },
  {
    id: 6,
    name: "Juliana Pereira",
    avatar: "/avatars/juliana.png",
    rank: "Faixa Azul",
    category: "crianca",
    points: 1200,
    streak: 10,
    rankChange: "up",
  },
  {
    id: 7,
    name: "Marcos Silva",
    avatar: "/avatars/marcos.png",
    rank: "Faixa Preta",
    category: "crianca",
    points: 1100,
    streak: 7,
    rankChange: "stable",
  },
  {
    id: 8,
    name: "Patrícia Costa",
    avatar: "/avatars/patricia.png",
    rank: "Faixa Branca",
    category: "crianca",
    points: 950,
    streak: 4,
    rankChange: "down",
  },
  {
    id: 9,
    name: "Rafael Souza",
    avatar: "/avatars/rafael.png",
    rank: "Faixa Marrom",
    category: "crianca",
    points: 900,
    streak: 2,
    rankChange: "up",
  },
  {
    id: 10,
    name: "Tatiane Lopes",
    avatar: "/avatars/tatiane.png",
    rank: "Faixa Roxa",
    category: "crianca",
    points: 850,
    streak: 1,
    rankChange: "stable",
  },
];

// Histórico de pontos dos alunos
export const pointsLog = {
  1: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Bônus de ofensiva (5 dias)",
      value: 50,
    },
    {
      date: "2025-07-08",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
  ],
  2: [
    { date: "2025-07-10", description: "Presença na aula de Boxe", value: 10 },
    { date: "2025-07-09", description: "Presença na aula de Boxe", value: 10 },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (5 dias)",
      value: 50,
    },
  ],
  3: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Muay Thai",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Presença na aula de Muay Thai",
      value: 10,
    },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (3 dias)",
      value: 30,
    },
  ],
  4: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (2 dias)",
      value: 20,
    },
  ],
  5: [
    { date: "2025-07-10", description: "Presença na aula de Boxe", value: 10 },
    { date: "2025-07-09", description: "Presença na aula de Boxe", value: 10 },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (2 dias)",
      value: 20,
    },
  ],
  6: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Bônus de ofensiva (5 dias)",
      value: 50,
    },
    {
      date: "2025-07-08",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
  ],
  7: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Muay Thai",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Presença na aula de Muay Thai",
      value: 10,
    },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (3 dias)",
      value: 30,
    },
  ],
  8: [
    { date: "2025-07-10", description: "Presença na aula de Boxe", value: 10 },
    { date: "2025-07-09", description: "Presença na aula de Boxe", value: 10 },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (2 dias)",
      value: 20,
    },
  ],
  9: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Presença na aula de Jiu-Jitsu",
      value: 10,
    },
    {
      date: "2025-07-08",
      description: "Bônus de ofensiva (2 dias)",
      value: 20,
    },
  ],
  10: [
    {
      date: "2025-07-10",
      description: "Presença na aula de Muay Thai",
      value: 10,
    },
    {
      date: "2025-07-09",
      description: "Presença na aula de Muay Thai",
      value: 10,
    },
    { date: "2025-07-08", description: "Bônus de ofensiva (1 dia)", value: 10 },
  ],
};

export const classesToday = [
  {
    id: "jiujitsu-19",
    name: "Jiu-Jitsu",
    time: "19:00",
    students: [1, 2, 4, 5, 6, 7],
  },
  {
    id: "muaythai-20",
    name: "Muay Thai",
    time: "20:00",
    students: [2, 3, 8, 9],
  },
  { id: "boxe-21", name: "Boxe", time: "21:00", students: [1, 3, 5, 10] },
];

// Cores para as modalidades
export const modalityColors = {
  "Jiu-Jitsu": "#3b82f6", // Azul
  "Muay Thai": "#ef4444", // Vermelho
  Boxe: "#f59e0b", // Amarelo/Laranja
  Kickboxing: "#8b5cf6", // Roxo
  MMA: "#10b981", // Verde
  Funcional: "#06b6d4", // Ciano
};

export const weeklySchedule = {
  segunda: [
    {
      id: "jj1",
      name: "Jiu-Jitsu",
      time: "19:00 - 20:30",
      professor: "Mestre Silva",
      modality: "Jiu-Jitsu",
    },
    {
      id: "boxe1",
      name: "Boxe",
      time: "20:30 - 21:30",
      professor: "Ana Costa",
      modality: "Boxe",
    },
  ],
  terca: [
    {
      id: "mt1",
      name: "Muay Thai",
      time: "18:00 - 19:00",
      professor: "Carlos Souza",
      modality: "Muay Thai",
    },
    {
      id: "jj2",
      name: "Jiu-Jitsu (Comp.)",
      time: "19:00 - 21:00",
      professor: "Mestre Silva",
      modality: "Jiu-Jitsu",
    },
  ],
  quarta: [
    {
      id: "jj3",
      name: "Jiu-Jitsu",
      time: "19:00 - 20:30",
      professor: "Mestre Silva",
      modality: "Jiu-Jitsu",
    },
    {
      id: "boxe2",
      name: "Boxe",
      time: "20:30 - 21:30",
      professor: "Ana Costa",
      modality: "Boxe",
    },
  ],
  quinta: [
    {
      id: "mt2",
      name: "Muay Thai",
      time: "18:00 - 19:00",
      professor: "Carlos Souza",
      modality: "Muay Thai",
    },
    {
      id: "jj4",
      name: "Jiu-Jitsu (No-Gi)",
      time: "19:00 - 21:00",
      professor: "Mestre Silva",
      modality: "Jiu-Jitsu",
    },
  ],
  sexta: [
    {
      id: "jj5",
      name: "Jiu-Jitsu (Open Mat)",
      time: "19:00 - 21:00",
      professor: "Todos",
      modality: "Jiu-Jitsu",
    },
  ],
  sabado: [],
  domingo: [],
};
// Obs: Os avatares são placeholders, crie imagens genéricas se necessário.
