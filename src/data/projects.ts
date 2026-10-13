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

export const projects: Project[] = [
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