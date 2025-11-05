"use client";

import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
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
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  // Dışarı tıklayınca menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;
      const target = event.target as Node;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (toggleRef.current && toggleRef.current.contains(target)) return;
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    return () => document.removeEventListener('mousedown', handleClickOutside, true);
  }, [isOpen]);

  const menuItems = [
    { name: t.home, href: "/" },
    { name: t.about, href: "#about" },
    { name: t.experience, href: "/experience" },
    { name: t.projects, href: "/projects" },
    { name: t.skills, href: "#skills" },
    { name: t.contact, href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    const wasOpen = isOpen;
    setIsOpen(false);
    // "#section" ve "/#section" durumlarını normalize et
    const isHashLink = href.startsWith('#') || href.startsWith('/#');
    if (isHashLink) {
      const id = href.replace('/#', '#');
      // Anasayfada değilsek doğrudan '/#id' ile anasayfaya git
      if (window.location.pathname !== '/') {
        window.location.href = `/${id}`; // '/#about' gibi
        return;
      }
      // Anasayfadaysak smooth scroll + offset uygula
      const doScroll = () => {
        const element = document.querySelector(id);
        if (element) {
          const navbarHeight = 64; // h-16
          const rect = (element as HTMLElement).getBoundingClientRect();
          const absoluteY = window.scrollY + rect.top - navbarHeight - 8;
          window.scrollTo({ top: absoluteY, behavior: 'smooth' });
        } else {
          window.location.hash = id.substring(1);
        }
      };
      // Mobilde menü kapanış animasyonu sonrasına ertele
      if (wasOpen) {
        setTimeout(() => {
          // iki kere rAF ile layout otursun
          requestAnimationFrame(() => requestAnimationFrame(doScroll));
        }, 220); // exit animasyonu ~200ms
      } else {
        doScroll();
      }
      return;
    }
    window.location.href = href;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md"
            >
              <Image src="/logo.svg" alt="Merve Uçar - Full Stack Developer Logo" width={20} height={20} className="text-gray-900" />
            </motion.div>
            <span>Merve Uçar</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={toggleRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative md:hidden z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-4 space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 md:hover:text-amber-500 md:dark:hover:text-amber-400 transition-colors font-medium py-2 focus:outline-none"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

