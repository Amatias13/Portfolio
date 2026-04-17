export const t = {
  pt: {
    nav: {
      about:      "Sobre",
      projects:   "Projetos",
      experience: "Experiência",
      contact:    "Contacto",
    },
    hero: {
      cta_projects: "Ver Projetos →",
      cta_contact:  "Contactar",
    },
    about: {
      label:      "Sobre Mim",
      title_line1: "Developer",
      title_line2: "baseado em",
      title_line3: "Portugal",
      stack_label: "Stack técnico",
      filter_all:  "todas",
    },
    projects: {
      label:     "Projetos",
      title:     "O que construí",
      github:    "GitHub ↗",
      demo:      "Demo ↗",
      highlights:"Destaques",
    },
    experience: {
      label:     "Experiência",
      title:     "Percurso profissional",
      edu_label: "Educação",
    },
    contact: {
      label:       "Contacto",
      title:       "Vamos trabalhar juntos?",
      subtitle:    "Disponível para novas oportunidades e projetos interessantes.",
    },
    footer: "Feito em React + Framer Motion",
  },

  en: {
    nav: {
      about:      "About",
      projects:   "Projects",
      experience: "Experience",
      contact:    "Contact",
    },
    hero: {
      cta_projects: "See Projects →",
      cta_contact:  "Get in touch",
    },
    about: {
      label:      "About Me",
      title_line1: "Developer",
      title_line2: "based in",
      title_line3: "Portugal",
      stack_label: "Tech stack",
      filter_all:  "all",
    },
    projects: {
      label:     "Projects",
      title:     "What I built",
      github:    "GitHub ↗",
      demo:      "Demo ↗",
      highlights:"Highlights",
    },
    experience: {
      label:     "Experience",
      title:     "Career path",
      edu_label: "Education",
    },
    contact: {
      label:       "Contact",
      title:       "Let's work together?",
      subtitle:    "Available for new opportunities and interesting projects.",
    },
    footer: "Built with React + Framer Motion",
  },
};

// Helper — usage: useT().nav.about
export function useTranslation(lang) {
  return t[lang] ?? t.pt;
}
