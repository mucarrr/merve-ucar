"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaBrain,
  FaLayerGroup,
  FaVial,
  FaUsersCog,
  FaLock,
  FaBell,
  FaFilm,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiReact,
  SiFramer,
  SiZod,
  SiReactquery,
  SiStripe,
  SiVercel,
  SiI18Next,
  SiOpenai,
  SiAnthropic,
  SiResend,
  SiLemonsqueezy,
  SiGooglesearchconsole,
  SiPwa,
  SiVitest,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Translation = (typeof translations)[keyof typeof translations];

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
  spanFull?: boolean;
}

const getSkillCategories = (t: Translation): SkillCategory[] => [
  {
    title: t.frontend,
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: FaLayerGroup, color: "#443F38" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "PWA", icon: SiPwa, color: "#5A0FC8" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: t.backend,
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: FaNodeJs, color: "#FF6C37" },
      { name: "NextAuth", icon: SiNextdotjs, color: "#000000" },
      { name: "Zod", icon: SiZod, color: "#3E67B1" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Multi-tenant & RBAC", icon: FaUsersCog, color: "#6366F1" },
      { name: "AES-256 Encryption", icon: FaLock, color: "#64748B" },
    ],
  },
  {
    title: t.mobile,
    icon: FaMobileAlt,
    skills: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Push Notifications", icon: FaMobileAlt, color: "#14b8a6" },
      { name: "Web Push", icon: FaBell, color: "#F59E0B" },
      { name: "Lottie", icon: FaFilm, color: "#00DDB3" },
      { name: "i18next", icon: SiI18Next, color: "#26A69A" },
    ],
  },
  {
    title: t.tools,
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Playwright", icon: FaVial, color: "#2EAD33" },
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
  {
    title: t.integrations,
    icon: FaRobot,
    spanFull: true,
    skills: [
      { name: "AI / RAG / LLM", icon: SiOpenai, color: "#412991" },
      { name: "Anthropic", icon: SiAnthropic, color: "#191919" },
      { name: "Resend", icon: SiResend, color: "#000000" },
      { name: "Lemon Squeezy", icon: SiLemonsqueezy, color: "#FFC233" },
      { name: "SEO & Structured Data", icon: SiGooglesearchconsole, color: "#458CF5" },
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

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-200 dark:hover:border-amber-500/40"
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white dark:bg-gray-900"
        style={{ backgroundColor: `${skill.color}18` }}
      >
        <Icon size={15} style={{ color: skill.color }} className="dark:opacity-90" />
      </span>
      {skill.name}
    </motion.span>
  );
}

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
    <section id="skills" ref={ref} className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">{t.skillsTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {t.skillsSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
                className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg${category.spanFull ? " sm:col-span-2" : ""}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                    <CategoryIcon size={18} />
                  </span>
                  <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillChip key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex shrink-0 items-center gap-3 sm:w-48">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <FaBrain size={18} />
              </span>
              <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400">
                {t.softSkills}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.04 }}
                  className="rounded-full bg-gray-100 px-3.5 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
