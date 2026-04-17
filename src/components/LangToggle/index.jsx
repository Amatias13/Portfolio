import { useLang } from "../../context/LangContext";
import "./styles.css";

export default function LangToggle() {
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
