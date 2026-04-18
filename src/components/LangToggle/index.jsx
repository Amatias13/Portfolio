import { useLang } from "../../context/LangContext";
import "./styles.css";

/**
 * The LangToggle component provides a simple interface for users to switch between languages on the portfolio. 
 * It displays the current language and allows toggling with a single click. 
 * The design is minimalistic, ensuring it doesn't distract from the main content while still being easily accessible for users who want to view the portfolio in their preferred language.
 */
export default function LangToggle() {
  // language and toggle function from context
  const { lang, toggle } = useLang();

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label="Toggle language"
      title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
