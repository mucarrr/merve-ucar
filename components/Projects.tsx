"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaCode, FaCalendar } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import {
  getGithubProjects,
  getGithubProjectContent,
  type GithubProject,
} from "@/lib/githubProjects";

const shapes = [
  { size: 100, x: "10%", y: "20%", delay: 0 },
  { size: 150, x: "75%", y: "15%", delay: 0.5 },
  { size: 80, x: "15%", y: "70%", delay: 1 },
  { size: 120, x: "75%", y: "75%", delay: 0.7 },
  { size: 60, x: "50%", y: "10%", delay: 1.2 },
];

export default function Projects() {
  const projects = getGithubProjects();
  const [mounted, setMounted] = useState(false);
  const [previewProject, setPreviewProject] = useState<GithubProject | null>(null);
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  const previewContent = previewProject
    ? getGithubProjectContent(previewProject, currentLanguage)
    : null;

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

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-f8f7f4 px-4 pb-20 pt-24 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 backdrop-blur-3xl"
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-amber-600 dark:text-amber-400">
            <FaCode />
            <span>{"<projects>"}</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {mounted ? t.portfolioProjectsTitle : "Portfolio Projects"}
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {mounted ? t.portfolioProjectsSubtitle : ""}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const content = getGithubProjectContent(project, currentLanguage);
            const updatedAt = new Date(project.updatedAt).toLocaleDateString(
              currentLanguage === "tr" ? "tr-TR" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            );

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-amber-200/30 bg-gradient-to-br from-white/90 to-amber-50/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-amber-700/30 dark:from-gray-800/90 dark:to-gray-900/50"
              >
                <button
                  type="button"
                  className="group relative flex h-48 cursor-pointer items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700"
                  onClick={() => setPreviewProject(project)}
                  style={{ aspectRatio: "16/9" }}
                  aria-label={content.title}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${content.title} - ${content.description}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width={400}
                      height={225}
                    />
                  ) : (
                    <div className="p-6 text-center">
                      <FaCode className="mx-auto mb-4 text-6xl text-gray-500 dark:text-gray-400" />
                      <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {content.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
                    </div>
                  )}
                </button>

                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-3 flex items-start">
                    <h3 className="flex-1 text-xl font-semibold text-gray-900 dark:text-white">
                      {content.title}
                    </h3>
                    {project.featured && (
                      <span className="ml-2 shrink-0 rounded-full bg-amber-500 px-1.5 py-0.5 text-xs font-normal text-white">
                        {t.featured}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 flex-grow text-gray-700 dark:text-gray-300">
                    {content.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendar className="mr-2" />
                    <span>{updatedAt}</span>
                  </div>
                  <div className="mt-auto flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${content.title} on GitHub`}
                      className="group flex flex-1 items-center justify-center rounded-full bg-gray-800 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-gray-900 hover:shadow-amber-500/20"
                    >
                      <motion.div
                        className="flex items-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaGithub className="mr-2" aria-hidden="true" />
                        <span>{t.viewOnGitHub}</span>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: projects.length * 0.1 + 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/mucarrr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="inline-flex items-center rounded-full border-2 border-gray-900 px-8 py-4 font-medium text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-amber-400 dark:text-amber-400"
          >
            <FaGithub className="mr-3" aria-hidden="true" />
            {mounted ? t.moreProjects : ""}
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {previewProject && previewContent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60"
              onClick={() => setPreviewProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
              aria-modal="true"
              role="dialog"
            >
              <div className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-xl border border-amber-200/30 bg-white shadow-2xl dark:border-amber-700/30 dark:bg-gray-900">
                <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {previewContent.title}
                  </h3>
                  <button
                    onClick={() => setPreviewProject(null)}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {previewProject.image && (
                  <div className="h-64 w-full bg-gray-100 md:h-80 dark:bg-gray-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewProject.image}
                      alt={`${previewContent.title} screenshot`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                  </div>
                )}

                <div className="space-y-4 p-5">
                  <p className="text-gray-700 dark:text-gray-300">{previewContent.description}</p>
                  {previewContent.longDescription && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {previewContent.longDescription}
                    </p>
                  )}

                  {!!previewProject.technologies.length && (
                    <div className="flex flex-wrap gap-2">
                      {previewProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    {previewProject.liveUrl && (
                      <a
                        href={previewProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 font-medium text-gray-900 shadow-md transition hover:shadow-amber-500/20"
                      >
                        Live Preview
                      </a>
                    )}
                    <a
                      href={previewProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gray-800 px-5 py-2.5 font-medium text-white transition hover:bg-gray-900"
                    >
                      {t.viewOnGitHub}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
