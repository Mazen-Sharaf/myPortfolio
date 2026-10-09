import "./theme.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
} from "./components/PortfolioSections";
import { projects, skills } from "./data/portfolio";
import { translations } from "./i18n/translations";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";

//#region Main application
// This file composes the page. Edit content in data/portfolio.ts and i18n/translations.ts.
function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const copy = translations[language];

  return (
    <div id="top" className="app-shell">
      <div className="aura" aria-hidden="true" />
      <Header t={copy} language={language} setLanguage={setLanguage} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero t={copy} />
        <About t={copy} />
        <Skills t={copy} skills={skills} />
        <Projects t={copy} projects={projects} />
        <Experience t={copy} />
        <Contact t={copy} />
      </main>
      <Footer t={copy} />
    </div>
  );
}
//#endregion

export default App;
