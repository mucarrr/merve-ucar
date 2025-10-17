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
        className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium"
      >
        <FaGlobe size={16} />
        <span className="text-sm">
          {language === 'tr' ? 'TR' : 'EN'}
        </span>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 z-50">
          <button
            onClick={() => handleLanguageChange('tr')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors ${
              language === 'tr' ? 'text-amber-600 dark:text-amber-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🇹🇷 Türkçe
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors ${
              language === 'en' ? 'text-amber-600 dark:text-amber-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
}
