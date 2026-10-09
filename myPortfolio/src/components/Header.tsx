import { useState } from "react";
import type { Language, PortfolioCopy, Theme } from "../types/portfolio";
import { Icon } from "./Icon";

export function Header({
  t,
  language,
  setLanguage,
  theme,
  toggleTheme,
}: {
  t: PortfolioCopy;
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const sectionIds = ["about", "skills", "work", "experience", "contact"];

  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="Hjem">
        <span>MS</span>
        <i aria-hidden="true" />
      </a>
      <button
        className="menu-toggle icon-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? t.close : t.menu}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <nav
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Main navigation"
      >
        {t.nav.map((item, index) => (
          <a
            key={item}
            href={`#${sectionIds[index]}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <label className="language-select">
          <span className="sr-only">{t.language}</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label={t.language}>
            <option value="da">DK</option>
            <option value="en">ENG</option>
            <option value="ar">AR</option>
          </select>
        </label>
        <button
          className="icon-button theme-toggle"
          onClick={toggleTheme}
          aria-label={t.theme}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
      </div>
    </header>
  );
}
