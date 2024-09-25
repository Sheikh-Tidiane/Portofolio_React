import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "A Propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Autodidacte",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mars 2020 - Avril 2021",
    points: [
      "Apprendre à développer et à maintenir des applications web en utilisant React.js et d'autres technologies associées.",
      "Travailler en collaboration avec des équipes comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de qualité.",
      "Mettre en pratique des designs réactifs et s'assurer que les applications fonctionnent sur différents navigateurs.",
      "Participer à des revues de code et recevoir des retours constructifs d'autres développeurs.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Institut Superieur D'informatique",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Apprendre à développer et à maintenir des applications web en utilisant React.js et d'autres technologies associées.",
"Travailler en collaboration avec des équipes, y compris des designers et des développeurs, pour contribuer à la création de produits de qualité.",
"Explorer la conception réactive et m'assurer de la compatibilité entre différents navigateurs.",
"Participer à des revues de code et recevoir des retours constructifs pour améliorer mes compétences en développement.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Institut Superieur D'informatique",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Institut Superieur D'informatique",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mettre en œuvre un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs."
    ],
  },
];

const testimonials: TTestimonial[] = [
 
 
];

const projects: TProject[] = [
  {
    name: "AUTOPRATIQUE",
    description:
      "Plateforme en ligne qui permet aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de divers fournisseurs, offrant une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AVIS FILM",
    description:
      "Cette application a été créée pour ceux qui souhaitent obtenir des informations sur un film ou une série en particulier, ainsi que pour ceux qui manquent d'inspiration pour trouver un film ou une série.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "API CITATION",
    description:
      "Cette API propose une sélection de magnifiques citations d'amour, idéale pour exprimer des sentiments, trouver de l'inspiration ou apprécier la beauté des mots. Elle permet un accès facile à des citations touchantes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
