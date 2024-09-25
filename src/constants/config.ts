type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sheikh Tidiane Diop — 3D Portfolio",
    fullName: "Sheikh Tidiane Diop",
    email: "diopm8025@mail.com",
  },
  hero: {
    name: "Sheikh Tidiane Diop",
    p: ["Un Developpeur FullStack"],
  },
  contact: {
    p: "Contactez-nous",
    h2: "Contact.",
    form: {
      name: {
        span: "Votre Nom",
        placeholder: "Quel est votre nom?",
      },
      email: { span: "Votre Email", placeholder: "Quel est votre email?" },
      message: {
        span: "Votre Message",
        placeholder: "Que voulez-vous dire?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Aperçu.",
      content: `Cheikh A T Diop , animé par une passion dévorante pour la 
      technologie depuis sa plus tendre enfance. À l'âge de 15 ans,
       il écrivit son premier code HTML/CSS, plongeant ainsi dans 
       l'univers de la programmation. Il se mit ensuite à explorer le PHP
       , côté serveur, pour donner vie à des pages web dynamiques. 
       Au fil de ses recherches et guidé par sa passion, il découvrit 
       le merveilleux framework Laravel, un outil magique qui lui permit
       de travailler avec rapidité et efficacité. Depuis lors, il a donné 
       vie à au moins 5 projets personnels, dotés de fonctionnalités enchanteuses,
        révélant ainsi son engagement envers l'excellence technique et sa capacité
         à transformer des rêves en réalité`,
    },
    experience: {
      p: "Ce que j’ai fait jusqu’à présent",
      h2: "Expérience professionnelle.",
    },
    
    works: {
      p: "Mon travail",
      h2: "Projets.",
      content: `Le suivi des projets met en valeur mes compétences et mon expérience à travers
      Des exemples concrets de mon travail. Chaque projet est brièvement décrit avec
      Liens vers des dépôts de code et des démonstrations en direct. Il reflète mon
      capacité à résoudre des problèmes complexes, à travailler avec différentes technologies,
      et gérer efficacement les projets.`,
    },
  },
};
