"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaCode, FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { getProjects, getProjectContent, type Project } from "@/lib/projects";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  const projects = getProjects();

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

  // Floating background shapes (matches Hero)
  const shapes = [
    { size: 100, x: "10%", y: "20%", delay: 0 },
    { size: 150, x: "75%", y: "15%", delay: 0.5 },
    { size: 80, x: "15%", y: "70%", delay: 1 },
    { size: 120, x: "75%", y: "75%", delay: 0.7 },
    { size: 60, x: "50%", y: "10%", delay: 1.2 },
  ];

  const previewContent = previewProject ? getProjectContent(previewProject, currentLanguage) : null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      {/* Animated Background Shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-brand-light/20 to-ember/20 backdrop-blur-3xl"
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
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-brand-dark dark:text-brand-light">
            <FaCode />
            <span>{"<projects>"}</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {mounted ? t.projectsTitle : "Projects"}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {mounted ? t.projectsDescription : ""}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const content = getProjectContent(project, currentLanguage);
            const updatedAt = new Date(project.updatedAt).toLocaleDateString(
              currentLanguage === "tr" ? "tr-TR" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            );

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-brand/15 bg-surface-card shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-brand-dark/25"
              >
                <button
                  type="button"
                  onClick={() => setPreviewProject(project)}
                  aria-label={content.title}
                  className="group relative flex h-48 items-center justify-center overflow-hidden bg-surface-alt"
                  style={{ aspectRatio: "16/9" }}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${content.title} — ${content.description}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width={400}
                      height={225}
                    />
                  ) : (
                    <div className="p-6 text-center">
                      <FaCode className="mx-auto mb-3 text-5xl text-brand/60" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
                    </div>
                  )}

                  {/* Live badge */}
                  {project.liveUrl && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent-dark/90 px-2.5 py-1 text-xs font-medium text-white shadow">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      Live
                    </span>
                  )}
                  {project.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-gradient px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">
                      {mounted ? t.featured : "Featured"}
                    </span>
                  )}
                </button>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {content.title}
                  </h3>
                  <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                    {content.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-surface-alt px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendar className="mr-2" />
                    <span>{updatedAt}</span>
                  </div>

                  <div className="mt-auto flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${content.title} — ${t.liveDemo}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span>{mounted ? t.liveDemo : "Live Demo"}</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${content.title} — ${t.viewCode}`}
                        className="flex items-center justify-center gap-2 rounded-full bg-gray-800 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        <FaGithub aria-hidden="true" />
                        <span>{mounted ? t.viewCode : "Code"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/mucarrr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center rounded-full border-2 border-gray-900 px-8 py-4 font-medium text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-brand-light dark:text-brand-light"
          >
            <FaGithub className="mr-3" aria-hidden="true" />
            {mounted ? t.moreProjects : ""}
          </a>
        </motion.div>
      </div>

      {/* Preview Modal */}
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
              <div className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-xl border border-brand/15 bg-surface-card shadow-2xl dark:border-brand-dark/25">
                <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {previewContent.title}
                  </h3>
                  <button
                    onClick={() => setPreviewProject(null)}
                    className="text-2xl leading-none text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {previewProject.image && (
                  <div className="w-full bg-surface-alt" style={{ aspectRatio: "16/9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewProject.image}
                      alt={`${previewContent.title} — ${previewContent.description}`}
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
                          className="rounded-full bg-surface-alt px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200"
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
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 font-medium text-white shadow-md transition hover:shadow-lg"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        {t.liveDemo}
                      </a>
                    )}
                    {previewProject.githubUrl && (
                      <a
                        href={previewProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-800 px-5 py-2.5 font-medium text-white transition hover:bg-gray-900"
                      >
                        <FaGithub aria-hidden="true" />
                        {t.viewCode}
                      </a>
                    )}
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
