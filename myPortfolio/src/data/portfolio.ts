import type { Project, Skill } from "../types/portfolio";

//#region Portfolio content
// Replace these placeholders with your real projects, descriptions, and technologies.
export const projects: Project[] = [
  {
    title: "Enkeltbrugersystem",
    description:
      "VIAPets. Et simpelt system til en kæledyrsbutik, der holder styre på kunder, produkter og ordrer.",
    tags: ["Java", "HTML", "CSS"],
    accent: "apricot",
    number: "01",
  },
  {
    title: "Klient/server system",
    description:
      "VIAChat. En chat applikation med klient/server arkitektur, der viser hvordan man kan håndtere samtidige forbindelser.",
    tags: ["Java", "PostgreSQL", "CSS"],
    accent: "lilac",
    number: "02",
  },
  {
    title: "distribueret system",
    description:
      "Kahoot++. Et distribueret system, der viser hvordan man kan håndtere flere klienter og servere på tværs af netværk.",
    tags: ["Java", "C#", "PostgreSQL", "Entity Framework", "REST APIs"],
    accent: "sage",
    number: "03",
  },
  {
    title: "Kollaborativ systemudvikling",
    description:
      "Smart drivhus. Et kollaborativt projekt, hvor vi udviklede et smart drivhus med IOT-enheder, WEB frontend og maskinlæring til at optimere vækstbetingelserne for planterne.",
    tags: ["React", "Python", "PostgreSQL"],
    accent: "sky",
    number: "04",
  }
];

export const skills: Skill[] = [
  { number: "01", name: "Frontend", list: "React · TypeScript · JavaScript · HTML · CSS" },
  { number: "02", name: "Backend", list: "Node.js · Java · C# · Python · REST APIs" },
  { number: "03", name: "Databases", list: "PostgreSQL · MySQL" },
  { number: "04", name: "Tools", list: "Git · Github · VS Code · Docker · Figma · Astah" },

];
//#endregion
