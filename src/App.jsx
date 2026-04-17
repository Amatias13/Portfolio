import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import { Divider } from "./components/Section";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider }  from "./context/LangContext";
import { useLang }       from "./context/LangContext";
import { useTranslation } from "./i18n/translations";
import "./index.css";
import "./App.css";

function PortfolioContent() {
  const { lang } = useLang();
  const tr       = useTranslation(lang);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} André Matias · {tr.footer}
      </footer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <PortfolioContent />
      </LangProvider>
    </ThemeProvider>
  );
}
