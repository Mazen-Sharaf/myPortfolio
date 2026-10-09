import { useEffect, useState } from "react";
import type { Language } from "../types/portfolio";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language") as Language | null;
    return saved === "en" || saved === "ar" || saved === "da" ? saved : "da";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return { language, setLanguage };
}
