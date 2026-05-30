import { createContext, useState } from "react";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem("lang") || "en";
    document.documentElement.lang = stored;
    return stored;
  });

  const toggle = () => {
    const next = lang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", next);
    setLang(next);
    document.documentElement.lang = next;
  };

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}
