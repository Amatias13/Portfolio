import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle } from "../Section";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import { personal, skills } from "../../data";
import "./styles.css";

export default function About() {
  const [filter, setFilter] = useState("all");
  const { lang }            = useLang();
  const tr                  = useTranslation(lang);

  const categories = [tr.about.filter_all, "backend", "frontend", "database", "tools"];

  const filtered =
    filter === tr.about.filter_all
      ? skills
      : skills.filter(s => s.category === filter);

  return (
    <Section id="sobre">
      <SectionLabel>{tr.about.label}</SectionLabel>

      <div className="about__grid">
        <div>
          <SectionTitle>
            {tr.about.title_line1}
            <br />{tr.about.title_line2}
            <br /><span style={{ color: "var(--accent2)" }}>{tr.about.title_line3}</span>
          </SectionTitle>

          <div className="about__bio">
            {personal.bio[lang].map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div>
          <div className="about__stack-label">{tr.about.stack_label}</div>

          <div className="about__filters">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`about__filter-btn ${filter === cat ? "about__filter-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="about__skills">
            <AnimatePresence mode="popLayout">
              {filtered.map(skill => (
                <motion.span
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                  className="about__skill-pill"
                >
                  {skill.name}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
