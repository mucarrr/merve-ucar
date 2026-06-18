"use client";

import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (projectsOpen && projectsRef.current && !projectsRef.current.contains(target)) {
        setProjectsOpen(false);
      }

      if (!isOpen) return;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (toggleRef.current && toggleRef.current.contains(target)) return;
      setIsOpen(false);
      setMobileProjectsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside, true);
  }, [isOpen, projectsOpen]);

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.about, href: "#about" },
    { name: t.experience, href: "/experience" },
    { name: t.skills, href: "#skills" },
    { name: t.contact, href: "#contact" },
  ];

  const projectLinks = [
    { name: t.liveProjectsTitle, href: "/#projects" },
    { name: t.portfolioProjectsTitle, href: "/projects" },
  ];

  const handleNavigation = (href: string) => {
    const wasOpen = isOpen;
    setIsOpen(false);
    setProjectsOpen(false);
    setMobileProjectsOpen(false);

    const isHashLink = href.startsWith("#") || href.startsWith("/#");
    if (isHashLink) {
      const id = href.replace("/#", "#");
      if (window.location.pathname !== "/") {
        window.location.href = `/${id}`;
        return;
      }
      const doScroll = () => {
        const element = document.querySelector(id);
        if (element) {
          const navbarHeight = 64;
          const rect = (element as HTMLElement).getBoundingClientRect();
          const absoluteY = window.scrollY + rect.top - navbarHeight - 8;
          window.scrollTo({ top: absoluteY, behavior: "smooth" });
        } else {
          window.location.hash = id.substring(1);
        }
      };
      if (wasOpen) {
        setTimeout(() => {
          requestAnimationFrame(() => requestAnimationFrame(doScroll));
        }, 220);
      } else {
        doScroll();
      }
      return;
    }
    window.location.href = href;
  };

  const projectsMenuIndex = 3;

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
              <Image
                src="/logo.svg"
                alt="Merve Uçar - Full Stack Developer Logo"
                width={20}
                height={20}
                priority
                className="text-gray-900"
              />
            </motion.div>
            <span>Merve Uçar</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, projectsMenuIndex).map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                aria-label={`Navigate to ${item.name}`}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}

            <motion.div
              ref={projectsRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: projectsMenuIndex * 0.1 }}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setProjectsOpen((open) => !open)}
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                aria-label={t.projects}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium"
              >
                {t.projects}
                <HiChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-gray-200 bg-white py-1.5 shadow-lg dark:border-gray-700 dark:bg-gray-900"
                  >
                    {projectLinks.map((item) => (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full px-4 py-2.5 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-amber-400"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.slice(projectsMenuIndex).map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (projectsMenuIndex + 1 + index) * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                aria-label={`Navigate to ${item.name}`}
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
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
            >
              {isOpen ? (
                <HiX size={28} aria-hidden="true" />
              ) : (
                <HiMenu size={28} aria-hidden="true" />
              )}
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
              onClick={() => {
                setIsOpen(false);
                setMobileProjectsOpen(false);
              }}
            />
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative md:hidden z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.slice(0, projectsMenuIndex).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    aria-label={`Navigate to ${item.name}`}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 md:hover:text-amber-500 md:dark:hover:text-amber-400 transition-colors font-medium py-2 focus:outline-none"
                  >
                    {item.name}
                  </button>
                ))}

                <div>
                  <button
                    type="button"
                    onClick={() => setMobileProjectsOpen((open) => !open)}
                    aria-expanded={mobileProjectsOpen}
                    className="flex w-full items-center justify-between text-left text-gray-700 dark:text-gray-300 font-medium py-2 focus:outline-none"
                  >
                    {t.projects}
                    <HiChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${mobileProjectsOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {mobileProjectsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {projectLinks.map((item) => (
                          <button
                            key={item.href}
                            type="button"
                            onClick={() => handleNavigation(item.href)}
                            aria-label={`Navigate to ${item.name}`}
                            className="block w-full py-2 pl-3 text-left text-gray-700 dark:text-gray-300 font-medium transition-colors hover:text-amber-500 dark:hover:text-amber-400 focus:outline-none"
                          >
                            {item.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(projectsMenuIndex).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    aria-label={`Navigate to ${item.name}`}
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
