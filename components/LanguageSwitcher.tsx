"use client";

import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLang: string) => {
    switchLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Switch language. Current language: ${language === "tr" ? "Turkish" : "English"}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 px-3 py-2 font-medium text-gray-700 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand-light"
      >
        <FaGlobe size={16} aria-hidden="true" />
        <span className="text-sm">{language === "tr" ? "TR" : "EN"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-32 rounded-lg border border-gray-200 bg-surface-card py-2 shadow-lg dark:border-gray-800">
          <button
            onClick={() => handleLanguageChange("tr")}
            className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-brand/10 dark:hover:bg-brand-dark/20 ${
              language === "tr"
                ? "font-medium text-brand-dark dark:text-brand-light"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            🇹🇷 Türkçe
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-brand/10 dark:hover:bg-brand-dark/20 ${
              language === "en"
                ? "font-medium text-brand-dark dark:text-brand-light"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
}
