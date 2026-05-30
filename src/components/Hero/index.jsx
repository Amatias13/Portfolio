import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useLang } from "../../hooks/useLang";
import { useTranslation } from "../../i18n/translations";
import { personal } from "../../data";
import "./styles.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { lang } = useLang();
  const tr = useTranslation(lang);

  const [firstName, ...rest] = personal.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="hero" className="hero">
      <div className="hero__glow" />

      <div className="hero__content">
        <motion.div className="hero__badge" {...fade(0.05)}>
          {personal.title}
        </motion.div>

        <motion.h1 className="hero__title" {...fade(0.15)}>
          <span style={{ display: "block" }}>{firstName}</span>
          <span className="hero__title--accent" style={{ display: "block" }}>
            {lastName}
          </span>
        </motion.h1>

        {/* Availability badge — sits under title */}
        <motion.div className="hero__availability" {...fade(0.2)}>
          <span className="hero__availability-dot" />
          {tr.hero.availability}
        </motion.div>

        <motion.p className="hero__bio" {...fade(0.25)}>
          {personal.tagline[lang]}
        </motion.p>

        {/* Stats row */}
        <motion.div className="hero__stats" {...fade(0.3)}>
          {personal.stats[lang].map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="hero__buttons" {...fade(0.35)}>
          <a href="#projetos" className="hero__btn-primary">
            {tr.hero.cta_projects}
          </a>
          <a href="/Portfolio/cv.pdf" download className="hero__btn-outline">
            <FiDownload size={14} />
            {tr.hero.cta_cv}
          </a>
        </motion.div>

        <motion.div className="hero__socials" {...fade(0.45)}>
          <a href={personal.github} target="_blank" rel="noreferrer" className="hero__social-link">
            GitHub ↗
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero__social-link">
            LinkedIn ↗
          </a>
        </motion.div>
      </div>

      <motion.div className="hero__photo-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        <div className="hero__photo-border" />
        <img
          src={personal.photo}
          alt={personal.name}
          className="hero__photo"
          onError={(e) => {
            e.target.style.background = "var(--bg3)";
          }}
        />
      </motion.div>
    </section>
  );
}
