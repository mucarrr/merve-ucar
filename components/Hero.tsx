"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-4 font-mono text-sm">
                <FaCode />
                <span>{'<developer>'}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">{t.heroGreeting}</span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  {t.heroName}
                </span>
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-20">
                <span className="text-gray-700 dark:text-gray-300">{t.heroRoles[0]}</span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                {t.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-full font-medium"
                >
                  {t.ctaGetQuote}
                </a>
                <a
                  href="/projects"
                  className="px-8 py-4 border-2 border-gray-900 dark:border-amber-400 text-gray-900 dark:text-amber-400 rounded-full font-medium"
                >
                  {t.ctaViewProjects}
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mucarrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="mailto:mucar2326@gmail.com"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mt-8 font-mono text-sm">
                <FaCode className="rotate-180" />
                <span>{'</developer>'}</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Image src="/laptop.svg" alt="Laptop" width={64} height={64} className="text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  // Tech stack badges with icons
  const techStack = [
    { name: "React", delay: 0.2 },
    { name: "Next.js", delay: 0.3 },
    { name: "TypeScript", delay: 0.4 },
    { name: "Node.js", delay: 0.5 },
    { name: "MongoDB", delay: 0.6 },
    { name: "Tailwind", delay: 0.7 },
  ];

  // Floating shapes
  const shapes = [
    { size: 100, x: "10%", y: "20%", delay: 0 },
    { size: 150, x: "75%", y: "15%", delay: 0.5 },
    { size: 80, x: "15%", y: "70%", delay: 1 },
    { size: 120, x: "75%", y: "75%", delay: 0.7 },
    { size: 60, x: "50%", y: "10%", delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-amber-400/10 to-orange-500/10 backdrop-blur-3xl"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Code-like intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-4 font-mono text-sm"
            >
              <FaCode />
              <span>{'<developer>'}</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">{t.heroGreeting}</span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {t.heroName}
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-20">
              <TypeAnimation
                key={currentLanguage} // Force re-render when language changes
                sequence={[
                  t.heroRoles[0],
                  1500,
                  t.heroRoles[1],
                  1500,
                  t.heroRoles[2],
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="text-gray-700 dark:text-gray-300"
                repeat={Infinity}
              />
            </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
                >
                  {t.heroDescription}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <a
                    href="#contact"
                    aria-label="Get free quote - Navigate to contact section"
                    className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-full font-medium overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t.ctaGetQuote}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    </span>
                  </a>
                  <a
                    href="/projects"
                    aria-label="View my projects portfolio"
                    className="px-8 py-4 border-2 border-gray-900 dark:border-amber-400 text-gray-900 dark:text-amber-400 rounded-full font-medium hover:bg-gray-900 dark:hover:bg-amber-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
                  >
                    {t.ctaViewProjects}
                  </a>
                </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/mucarrr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Merve Uçar's GitHub profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
              >
                <FaGithub size={24} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="mailto:mucar2326@gmail.com"
                aria-label="Send email to Merve Uçar"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
              >
                <FaEnvelope size={24} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ucar-merve/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Merve Uçar's LinkedIn profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
              >
                <FaLinkedin size={24} aria-hidden="true" />
              </motion.a>
            </motion.div>

            {/* Code-like closing tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mt-8 font-mono text-sm"
            >
              <FaCode className="rotate-180" />
              <span>{'</developer>'}</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Tech Stack Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Center Icon */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl"
              style={{
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Image 
                src="/laptop.svg" 
                alt="Merve Uçar - Freelance Full Stack Developer" 
                width={64} 
                height={64} 
                priority
                className="text-gray-900" 
              />
            </motion.div>

            {/* Orbiting Tech Badges */}
            {techStack.map((tech, index) => {
              const angle = (index * 360) / techStack.length;
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tech.delay, duration: 0.5 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border-2 border-amber-400 text-gray-900 dark:text-white font-semibold text-sm whitespace-nowrap cursor-default"
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator - Dışarıda */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-500"
        >
          <span className="text-sm">{t.scrollDown}</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-amber-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}