export const t = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contacto",
    },
    hero: {
      cta_projects: "Ver Projetos →",
      cta_cv: "Download CV",
      availability: "Aberto a oportunidades",
    },
    about: {
      label: "Sobre Mim",
      title_line1: "Developer",
      title_line2: "baseado em",
      title_line3: "Portugal",
      stack_label: "Stack técnico",
      filter_all: "todas",
    },
    projects: {
      label: "Projetos",
      title: "O que construí",
      github: "GitHub ↗",
      demo: "Demo ↗",
      highlights: "Destaques",
    },
    experience: {
      label: "Experiência",
      title: "Percurso profissional",
      edu_label: "Educação",
    },
    contact: {
      label: "Contacto",
      title: "Vamos trabalhar juntos?",
      subtitle: "Disponível para novas oportunidades e projetos interessantes.",
      form_name: "Nome",
      form_email: "Email",
      form_message: "Mensagem",
      form_send: "Enviar mensagem",
      form_sending: "A enviar...",
      form_sent: "Mensagem enviada!",
      form_error: "Erro — tenta novamente",
      placeholder_name: "O teu nome",
      placeholder_email: "o.teu@email.com",
      placeholder_message: "Olá André, gostava de...",
    },
    footer: "Feito em React + Framer Motion",
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      cta_projects: "See Projects →",
      cta_cv: "Download CV",
      availability: "Open to opportunities",
    },
    about: {
      label: "About Me",
      title_line1: "Developer",
      title_line2: "based in",
      title_line3: "Portugal",
      stack_label: "Tech stack",
      filter_all: "all",
    },
    projects: {
      label: "Projects",
      title: "What I built",
      github: "GitHub ↗",
      demo: "Demo ↗",
      highlights: "Highlights",
    },
    experience: {
      label: "Experience",
      title: "Career path",
      edu_label: "Education",
    },
    contact: {
      label: "Contact",
      title: "Let's work together?",
      subtitle: "Available for new opportunities and interesting projects.",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_send: "Send message",
      form_sending: "Sending...",
      form_sent: "Message sent!",
      form_error: "Error — please try again",
      placeholder_name: "Your name",
      placeholder_email: "your@email.com",
      placeholder_message: "Hey André, I'd like to...",
    },
    footer: "Built with React + Framer Motion",
  },
};

export function useTranslation(lang) {
  return t[lang] ?? t.pt;
}
