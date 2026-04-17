import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import ThemeToggle from "../ThemeToggle";
import LangToggle from "../LangToggle";
import "./styles.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [open, setOpen]         = useState(false);
  const { lang }                = useLang();
  const tr                      = useTranslation(lang);

  const links = [
    { label: tr.nav.about,      href: "#sobre"      },
    { label: tr.nav.projects,   href: "#projetos"   },
    { label: tr.nav.experience, href: "#experiencia"},
    { label: tr.nav.contact,    href: "#contacto"   },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      links.forEach(l => {
        const el = document.querySelector(l.href);
        if (el && window.scrollY >= el.offsetTop - 120) setActive(l.href);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang]);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#hero" className="nav__logo">
        AM<span>.</span>
      </a>

      <div className="nav__links">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`nav__link ${active === l.href ? "nav__link--active" : ""}`}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav__controls">
        <ThemeToggle />
        <LangToggle />
        <button
          className="nav__burger"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
