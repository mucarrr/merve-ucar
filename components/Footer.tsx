"use client";

import { useEffect, useState } from "react";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentLanguage(customEvent.detail);
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  return (
    <footer className="border-t-2 border-brand bg-gray-900 py-8 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Merve Uçar. {t.footerText.split("© 2024 Merve Uçar. ")[1]}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Next.js, React, TypeScript ve Tailwind CSS ile ❤️ ile yapıldı.
          </p>
        </div>
      </div>
    </footer>
  );
}
