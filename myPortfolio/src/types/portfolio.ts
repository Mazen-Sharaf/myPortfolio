export type Theme = "dark" | "light";
export type Language = "da" | "en" | "ar";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  number: string;
};

export type Skill = {
  number: string;
  name: string;
  list: string;
};

export type ProjectTranslation = {
  title: string;
  description: string;
};

export type PortfolioCopy = {
  nav: string[];
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  viewWork: string;
  contact: string;
  scroll: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutNote: string;
  skillsLabel: string;
  skillsTitle: string;
  workLabel: string;
  workTitle: string;
  workIntro: string;
  projectItems: Record<string, ProjectTranslation>;
  experienceLabel: string;
  experienceTitle: string;
  experiencePlaceholder: string;
  experiencePlaceholder2: string;
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  email: string;
  github: string;
  linkedin: string;
  footer: string;
  backToTop: string;
  language: string;
  theme: string;
  menu: string;
  close: string;
  projectLink: string;
};

export type TranslationMap = Record<Language, PortfolioCopy>;
