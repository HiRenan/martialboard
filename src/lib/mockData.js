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

export const students = [
  {
    id: 1,
    name: "Carlos Andrade",
    avatar: "/avatars/carlos.png",
    rank: "Faixa Roxa",
  },
  {
    id: 2,
    name: "Beatriz Lima",
    avatar: "/avatars/beatriz.png",
    rank: "Faixa Azul",
  },
  {
    id: 3,
    name: "Ricardo Alves",
    avatar: "/avatars/ricardo.png",
    rank: "Faixa Branca",
  },
  {
    id: 4,
    name: "Fernanda Souza",
    avatar: "/avatars/fernanda.png",
    rank: "Faixa Roxa",
  },
  {
    id: 5,
    name: "Lucas Martins",
    avatar: "/avatars/lucas.png",
    rank: "Faixa Marrom",
  },
  {
    id: 6,
    name: "Juliana Pereira",
    avatar: "/avatars/juliana.png",
    rank: "Faixa Azul",
  },
  {
    id: 7,
    name: "Marcos Silva",
    avatar: "/avatars/marcos.png",
    rank: "Faixa Preta",
  },
  {
    id: 8,
    name: "Patrícia Costa",
    avatar: "/avatars/patricia.png",
    rank: "Faixa Branca",
  },
  {
    id: 9,
    name: "Rafael Souza",
    avatar: "/avatars/rafael.png",
    rank: "Faixa Marrom",
  },
  {
    id: 10,
    name: "Tatiane Lopes",
    avatar: "/avatars/tatiane.png",
    rank: "Faixa Roxa",
  },
];

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
// Obs: Os avatares são placeholders, crie imagens genéricas se necessário.
