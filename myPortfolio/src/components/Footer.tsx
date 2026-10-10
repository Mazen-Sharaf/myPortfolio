import type { PortfolioCopy } from "../types/portfolio";
import { logoSrc } from "../utils/logo";

export function Footer({ t }: { t: PortfolioCopy }) {
  return (
    <footer className="site-footer container">
      <span className="wordmark">
        <img className="logo-image" src={logoSrc} alt="Mazen Sharaf logo" />
      </span>
      <p>{t.footer}</p>
      <a className="back-to-top" href="#top">
        {t.backToTop}
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
