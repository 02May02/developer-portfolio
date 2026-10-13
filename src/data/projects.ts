export type Project = {
  slug: string
  title: string
  category: string
  description: string
  contribution: string
  features: string[]
  technologies: string[]
  images: string[]
  github?: string
  demo?: string
}

export const projectsEn: Project[] = [
  {
    slug: "fithub",
    title: "FitHub Gym",
    category: "Full-Stack Web Development",
    description:
      "A gym management platform supporting memberships, classes, equipment, and administrative operations.",
    contribution:
      "University group project. My contributions included work on membership plans, booking functionality, and access control.",
    features: [
      "Membership management with three subscription tiers",
      "Class schedules and booking functionality",
      "Administrative management dashboard",
      "Equipment and trainer information",
    ],
    technologies: ["PHP", "JavaScript", "SQL", "HTML", "CSS"],
    images: [
      "/projects/fithub/home.png",
      "/projects/fithub/memberships.png",
      "/projects/fithub/bookings.png",
      "/projects/fithub/dashboard.png",
    ],
  },
  {
    slug: "educycle",
    title: "EduCycle",
    category: "Mobile Application",
    description:
      "A mobile marketplace where students can browse, buy, and sell second-hand items.",
    contribution:
      "University group project. My contributions included work on messaging, wishlists, and application functionality.",
    features: [
      "Product listing and search",
      "Product details and seller profiles",
      "Direct messaging between users",
      "Wishlists and listing creation",
    ],
    technologies: ["React Native", "Node.js", "JavaScript"],
    images: [
      "/projects/educycle/home.png",
      "/projects/educycle/listing.png",
      "/projects/educycle/messaging.png",
      "/projects/educycle/create-listing.png",
    ],
  },
  {
    slug: "feup-hero",
    title: "FEUP Hero",
    category: "Game Development",
    description:
      "A rhythm game inspired by Guitar Hero, developed in C using the MINIX environment.",
    contribution:
      "University group project. I worked on keyboard input, note-hit detection, scoring, and audio integration.",
    features: [
      "Five-lane rhythm gameplay",
      "Keyboard-controlled note detection",
      "Combo-based scoring",
      "Audio feedback and game states",
    ],
    technologies: ["C", "MINIX"],
    images: [
      "/projects/feup-hero/menu.png",
      "/projects/feup-hero/gameplay.png",
    ],
  },
]

export const projectsPt: Project[] = [
  {
    ...projectsEn[0],
    category: "Desenvolvimento Web Full-Stack",
    description: "Plataforma de gestão de ginásios com planos de adesão, aulas, equipamentos e funcionalidades administrativas.",
    contribution: "Projeto universitário em grupo. Contribuí para os planos de adesão, o sistema de reservas e o controlo de acessos.",
    features: ["Gestão de adesões com três planos", "Horários e reservas de aulas", "Painel de administração", "Informações sobre equipamentos e treinadores"],
  },
  {
    ...projectsEn[1],
    category: "Aplicação Móvel",
    description: "Marketplace móvel onde estudantes podem procurar, comprar e vender artigos em segunda mão.",
    contribution: "Projeto universitário em grupo. Contribuí para as mensagens, listas de favoritos e funcionalidades da aplicação.",
    features: ["Pesquisa e publicação de anúncios", "Detalhes dos artigos e perfis de vendedores", "Mensagens diretas entre utilizadores", "Favoritos e criação de anúncios"],
  },
  {
    ...projectsEn[2],
    category: "Desenvolvimento de Jogos",
    description: "Jogo de ritmo inspirado em Guitar Hero, desenvolvido em C no ambiente MINIX.",
    contribution: "Projeto universitário em grupo. Trabalhei na leitura do teclado, deteção de notas, pontuação e integração de áudio.",
    features: ["Jogo de ritmo com cinco pistas", "Deteção de notas através do teclado", "Pontuação baseada em sequências de acertos", "Feedback áudio e estados de jogo"],
  },
]
export const projects = projectsEn
