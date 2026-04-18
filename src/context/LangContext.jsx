import { createContext, useContext, useState } from "react";

// Context to manage the language state across the application
const LangContext = createContext();

/**
 * The LangProvider component is a context provider that manages the language state for the application.
 * It provides the current language and a toggle function to switch between languages.
 * @param {Object} param0 - The props object.
 * @param {React.ReactNode} param0.children - The child components that will have access to the language context.
 * @returns {JSX.Element} The LangProvider component wrapping its children with the LangContext.
 */
export function LangProvider({ children }) {
  // Initialize the language state with a value from localStorage or default to "pt"
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "pt"
  );

  // Function to toggle the language between "pt" and "en"
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
