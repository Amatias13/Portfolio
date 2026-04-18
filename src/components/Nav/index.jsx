// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "../../context/LangContext";
import { useTranslation } from "../../i18n/translations";
import ThemeToggle from "../ThemeToggle";
import LangToggle from "../LangToggle";
import "./styles.css";

/**
 * The Nav component is a responsive navigation bar that provides quick access to different sections of the portfolio. 
 * It features a logo, navigation links that highlight based on the current scroll position, and controls for theme and language toggling. 
 * On smaller screens, it collapses into a hamburger menu for better usability. The design is clean and functional, ensuring easy navigation while complementing the overall aesthetic of the portfolio.
 */
export default function Nav() {
  // State for scroll position, active link, and mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  // language and translations
  const { lang } = useLang();
  const tr = useTranslation(lang);

  // Define navigation links with labels from translations
  const links = [
    { label: tr.nav.about, href: "#sobre" },
    { label: tr.nav.projects, href: "#projetos" },
    { label: tr.nav.experience, href: "#experiencia" },
    { label: tr.nav.contact, href: "#contacto" },
  ];

  // Offset to trigger active link change
  const SCROLL_OFFSET = 120;

  // Scroll event listener to update scrolled state and active link based on scroll position
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      links.forEach(l => {
        const el = document.querySelector(l.href);
        if (el && window.scrollY >= el.offsetTop - SCROLL_OFFSET) setActive(l.href);
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
