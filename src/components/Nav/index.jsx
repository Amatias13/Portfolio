import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "../../hooks/useLang";
import { useTranslation } from "../../i18n/translations";
import ThemeToggle from "../ThemeToggle";
import LangToggle from "../LangToggle";
import amLogo from "../../assets/am.svg";
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

  // Navigation links — also used in mobile menu JSX
  const links = [
    { label: tr.nav.about, href: "#sobre" },
    { label: tr.nav.projects, href: "#projetos" },
    { label: tr.nav.experience, href: "#experiencia" },
    { label: tr.nav.contact, href: "#contacto" },
  ];

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Offset to trigger active link change
  const SCROLL_OFFSET = 120;

  // Scroll event listener — links redefined inside to avoid stale closure
  useEffect(() => {
    const navLinks = [{ href: "#sobre" }, { href: "#projetos" }, { href: "#experiencia" }, { href: "#contacto" }];
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      navLinks.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el && window.scrollY >= el.offsetTop - SCROLL_OFFSET) setActive(l.href);
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // set active on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang]);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#hero" className="nav__logo">
        <img src={amLogo} alt="AM" className="nav__logo-img" />
      </a>

      <div className="nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={`nav__link ${active === l.href ? "nav__link--active" : ""}`}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="nav__controls">
        <ThemeToggle />
        <LangToggle />
        <button className={`nav__burger ${open ? "nav__burger--open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="nav__mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {links.map((l) => (
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
