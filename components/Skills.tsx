"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Translation = (typeof translations)[keyof typeof translations];

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const getSkillCategories = (t: Translation): { title: string; skills: Skill[] }[] => [
  {
    title: t.frontend,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: t.backend,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: FaNodeJs, color: "#FF6C37" },
    ],
  },
  {
    title: t.tools,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];

const getSoftSkills = (t: Translation) => [
  t.problemSolving,
  t.teamwork,
  t.agile,
  t.communication,
  t.criticalThinking,
  t.fastLearning,
  t.timeManagement,
  t.adaptation,
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];
  const skillCategories = getSkillCategories(t);
  const softSkills = getSoftSkills(t);

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
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-24 bg-surface-alt px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl font-bold sm:text-4xl"
        >
          {t.skillsTitle}
        </motion.h2>

        {/* Technical skills as compact chips, grouped by category */}
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-start"
            >
              <h3 className="w-full shrink-0 text-sm font-semibold uppercase tracking-wide text-brand-dark dark:text-brand-light sm:w-28 sm:pt-1.5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-surface-card px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md dark:border-gray-700 dark:text-gray-200"
                    >
                      <Icon size={16} style={{ color: skill.color }} className="dark:opacity-90" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-start dark:border-gray-700"
        >
          <h3 className="w-full shrink-0 text-sm font-semibold uppercase tracking-wide text-brand-dark dark:text-brand-light sm:w-28 sm:pt-1">
            {currentLanguage === "tr" ? "Kişisel" : "Soft"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand-dark dark:bg-brand/15 dark:text-brand-light"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
