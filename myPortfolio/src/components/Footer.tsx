import type { PortfolioCopy } from "../types/portfolio";

export function Footer({ t }: { t: PortfolioCopy }) {
  return (
    <footer className="site-footer container">
      <span className="wordmark">
        <img className="logo-image" src="/my_logo.svg" alt="my_logo" />
      </span>
      <p>{t.footer}</p>
      <a className="back-to-top" href="#top">
        {t.backToTop}
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
