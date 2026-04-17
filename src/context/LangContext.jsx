import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "pt"
  );

  const toggle = () => {
    const next = lang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", next);
    setLang(next);
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
