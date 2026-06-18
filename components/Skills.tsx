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
  gradient: string;
  accent: string;
  skills: Skill[];
  spanFull?: boolean;
}

const getSkillCategories = (t: Translation): SkillCategory[] => [
  {
    title: t.frontend,
    icon: FaReact,
    gradient: "from-violet-500/15 via-brand/10 to-ember/10",
    accent: "text-violet-600 dark:text-violet-400",
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
    gradient: "from-accent/15 via-teal-500/10 to-brand/10",
    accent: "text-accent-dark dark:text-accent-light",
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
    gradient: "from-sky-500/15 via-accent/10 to-teal-600/10",
    accent: "text-sky-600 dark:text-sky-400",
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
    gradient: "from-ember/15 via-brand/10 to-amber-500/10",
    accent: "text-ember dark:text-brand-light",
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
    gradient: "from-fuchsia-500/15 via-violet-500/10 to-brand/10",
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
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
      whileHover={{ y: -2 }}
      className="group inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white/70 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-brand/35 hover:shadow-md dark:border-gray-700/80 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:border-brand-light/30"
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
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
    <section
      id="skills"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-surface-alt px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{t.skillsTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            {t.skillsSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-brand/15 bg-surface-card p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-brand-dark/20 sm:p-6${category.spanFull ? " sm:col-span-2" : ""}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm dark:bg-gray-900/70 ${category.accent}`}
                    >
                      <CategoryIcon size={18} />
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillChip key={skill.name} skill={skill} index={skillIndex} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="relative mt-5 overflow-hidden rounded-2xl border border-brand/15 bg-surface-card p-5 shadow-lg dark:border-brand-dark/20 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-accent/5"
          />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex shrink-0 items-center gap-3 sm:w-48">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand-dark dark:bg-brand/20 dark:text-brand-light">
                <FaBrain size={18} />
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.softSkills}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.04 }}
                  className="rounded-full border border-brand/20 bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand-dark backdrop-blur-sm dark:border-brand-light/20 dark:bg-brand/15 dark:text-brand-light"
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
