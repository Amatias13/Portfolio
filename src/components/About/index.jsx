import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle } from "../Section";
import { useLang } from "../../hooks/useLang";
import { useTranslation } from "../../i18n/translations";
import { personal, skills, skillCategories } from "../../data";
import "./styles.css";

const LEVEL_CONFIG = {
  beginner: { label: "beginner", dot: "var(--level-beginner)" },
  intermediate: { label: "intermediate", dot: "var(--level-intermediate)" },
  advanced: { label: "advanced", dot: "var(--level-advanced)" },
};

export default function About() {
  const [filter, setFilter] = useState("all");
  const { lang } = useLang();
  const tr = useTranslation(lang);

  const categories = [{ key: "all", label: tr.about.filter_all }, ...skillCategories.map((k) => ({ key: k, label: k }))];

  const filtered = filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <Section id="sobre">
      <SectionLabel>{tr.about.label}</SectionLabel>

      <div className="about__grid">
        <div>
          <SectionTitle>
            {tr.about.title_line1}
            <br />
            {tr.about.title_line2}
            <br />
            <span style={{ color: "var(--accent2)" }}>{tr.about.title_line3}</span>
          </SectionTitle>

          <div className="about__bio">
            {personal.bio[lang].map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          {/* Level legend */}
          <div className="about__legend">
            {Object.entries(LEVEL_CONFIG).map(([key, { label, dot }]) => (
              <span key={key} className="about__legend-item">
                <span className="about__legend-dot" style={{ background: dot }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="about__stack-label">{tr.about.stack_label}</div>

          <div className="about__filters">
            {categories.map((cat) => (
              <button key={cat.key} onClick={() => setFilter(cat.key)} className={`about__filter-btn ${filter === cat.key ? "about__filter-btn--active" : ""}`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="about__skills">
            <AnimatePresence mode="popLayout">
              {filtered.map((skill) => {
                const lvl = LEVEL_CONFIG[skill.level] ?? LEVEL_CONFIG.intermediate;
                return (
                  <motion.span key={skill.name} layout initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.2 }} className="about__skill-pill" title={lvl.label}>
                    <span className="about__skill-dot" style={{ background: lvl.dot }} />
                    {skill.name}
                  </motion.span>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
