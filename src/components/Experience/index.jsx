import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle } from "../Section";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import { experience, education } from "../../data";
import "./styles.css";

function TimelineItem({ item, index, lang }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`timeline-item__dot ${item.current ? "" : "timeline-item__dot--past"}`} />

      <div className="timeline-item__period">{item.period[lang]}</div>
      <div className="timeline-item__company">{item.company}</div>
      <div className="timeline-item__role">
        {item.role[lang]} · {item.location}
      </div>

      <ul className="timeline-item__bullets">
        {item.bullets[lang].map((b, i) => (
          <li key={i} className="timeline-item__bullet">{b}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  const { lang } = useLang();
  const tr       = useTranslation(lang);

  return (
    <Section id="experiencia">
      <SectionLabel>{tr.experience.label}</SectionLabel>
      <SectionTitle>{tr.experience.title}</SectionTitle>

      <div className="timeline">
        <div className="timeline__line" />
        {experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} lang={lang} />
        ))}
      </div>

      {education.length > 0 && (
        <div className="education">
          <SectionLabel>{tr.experience.edu_label}</SectionLabel>

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="edu-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="edu-card__icon">🎓</div>
              <div>
                <div className="edu-card__degree">{edu.degree[lang]}</div>
                <div className="edu-card__school">{edu.school} · {edu.location}</div>
                <div className="edu-card__period">{edu.period}</div>
                {edu.description && (
                  <p className="edu-card__description">{edu.description[lang]}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </Section>
  );
}
