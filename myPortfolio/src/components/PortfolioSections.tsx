import type { PortfolioCopy, Project, Skill } from "../types/portfolio";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Hero({ t }: { t: PortfolioCopy }) {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero-intro">{t.heroText}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            {t.viewWork}
            <Icon name="arrow" />
          </a>
          <a className="button button-text" href="#contact">
            {t.contact}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
      <div className="hero-aside">
        <div className="hero-logo">
          <img src="/my_logo.svg" alt="my_logo" />
        </div>
      </div>
    </section>
  );
}

export function About({ t }: { t: PortfolioCopy }) {
  return (
    <section id="about" className="section container about-section">
      <SectionHeading label={t.aboutLabel} title={t.aboutTitle} />
      <div className="about-content">
        <p className="lead">{t.aboutText}</p>
        <p>{t.aboutNote}</p>
      </div>
    </section>
  );
}

export function Skills({ t, skills }: { t: PortfolioCopy; skills: Skill[] }) {
  return (
    <section id="skills" className="section container skills-section">
      <SectionHeading label={t.skillsLabel} title={t.skillsTitle} />
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.number}>
            <span>{skill.number}</span>
            <h3>{skill.name}</h3>
            <p>{skill.list}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects({
  t,
  projects,
}: {
  t: PortfolioCopy;
  projects: Project[];
}) {
  return (
    <section id="work" className="section container work-section">
      <div className="section-intro">
        <SectionHeading label={t.workLabel} title={t.workTitle} />
        <p>{t.workIntro}</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const translatedProject = t.projectItems[project.number];
          return (
          <article
            className={`project-card ${project.accent}`}
            key={project.number}
          >
            <div className="project-art">
              <span>{project.number}</span>
              <div className="art-line" />
              <div className="art-dot" />
            </div>
            <div className="project-meta">
              <span className="project-number">{project.number} —</span>
              <h3>{translatedProject.title}</h3>
              <p>{translatedProject.description}</p>
              <div className="project-footer">
                <div>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href="#contact"
                  aria-label={`${t.projectLink}: ${translatedProject.title}`}
                >
                  <Icon name="external" />
                </a>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

export function Experience({ t }: { t: PortfolioCopy }) {
  return (
    <section id="experience" className="section container experience-section">
      <SectionHeading label={t.experienceLabel} title={t.experienceTitle} />
      <div className="experience-placeholder">
        <div className="experience-entry">
          <span>+</span>
          <p>{t.experiencePlaceholder}</p>
        </div>
        <div className="experience-entry">
          <span>+</span>
          <p>{t.experiencePlaceholder2}</p>
        </div>
      </div>
    </section>
  );
}

export function Contact({ t }: { t: PortfolioCopy }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <SectionHeading label={t.contactLabel} title={t.contactTitle} />
        <div className="contact-content">
          <p>{t.contactText}</p>
          <a className="contact-email" href={`mailto:${t.email}`}>
            {t.email}
            <Icon name="arrow" />
          </a>
          <div className="social-links">
            <a
              href="https://github.com/Mazen-Sharaf"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
              <Icon name="external" />
            </a>
            <a
              href="https://www.linkedin.com/in/mazensharaf03"
              target="_blank"
              rel="noreferrer"
            >
              {t.linkedin}
              <Icon name="external" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
