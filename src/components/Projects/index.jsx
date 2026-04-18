// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle } from "../Section";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import { projects } from "../../data";
import "./styles.css";

/**
 * The ProjectCard component represents an individual project in the Projects section. 
 */
function ProjectCard({ project, index, lang, tr }) {
  // Get description and highlights based on current language
  const desc = project.description[lang];
  const highlights = project.highlights?.[lang];

  return (
    <motion.article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="project-card__accent-line" />

      <div>
        <div className="project-card__meta">
          <span className="project-card__num">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="project-card__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                {tr.projects.github}
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
                {tr.projects.demo}
              </a>
            )}
          </div>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{desc}</p>

        <div className="project-card__stack">
          {project.stack.map(t => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>

      {project.featured && highlights && (
        <div className="project-card__highlights">
          <div className="project-card__highlights-label">{tr.projects.highlights}</div>
          {highlights.map(h => (
            <div key={h} className="project-card__highlight-item">{h}</div>
          ))}
        </div>
      )}
    </motion.article>
  );
}

/**
 * The Projects component displays a list of projects in a visually appealing grid layout. 
 * Each project is represented by a card that includes the project title, description, technology stack, and links to GitHub and live demos if available. 
 * Featured projects are highlighted with an accent line and additional highlights section. 
 * The component uses framer-motion for smooth animations as the project cards come into view, enhancing the user experience. 
 * The content is localized based on the current language selection, ensuring accessibility for a wider audience.
 */
export default function Projects() {
  // Get current language and translations
  const { lang } = useLang();
  const tr = useTranslation(lang);

  return (
    <Section id="projetos">
      <SectionLabel>{tr.projects.label}</SectionLabel>
      <SectionTitle>{tr.projects.title}</SectionTitle>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} lang={lang} tr={tr} />
        ))}
      </div>
    </Section>
  );
}
