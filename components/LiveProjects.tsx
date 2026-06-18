"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FaCode, FaExternalLinkAlt, FaApple, FaChevronDown } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import {
  getProjects,
  getProjectContent,
  getProjectFilterGroup,
  getProjectLinkType,
  getProjectTopics,
  getTopicLabel,
  getBadgeLabel,
  projectHasTopic,
  normalizeBadge,
  isProjectLive,
  type Project,
  type ProjectFilter,
  type StatusFilter,
  type TopicSlug,
} from "@/lib/projects";

const FILTER_KEYS: { key: ProjectFilter; labelKey: keyof (typeof translations)["tr"] }[] = [
  { key: "all", labelKey: "filterAll" },
  { key: "saas", labelKey: "filterSaas" },
  { key: "mobile", labelKey: "filterMobile" },
  { key: "web", labelKey: "filterWeb" },
];

const IMAGE_ASPECT = "aspect-[16/10]";

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="w-full sm:w-auto sm:min-w-[180px]">
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-dark dark:text-brand-light"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-full border border-gray-200 bg-surface-card py-2 pl-4 pr-10 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-brand/40 hover:text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand-dark/40 dark:hover:text-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FaChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-brand-dark/70 dark:text-brand-light/70"
        />
      </div>
    </div>
  );
}

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  SaaS: "from-violet-500/20 via-brand/30 to-ember/20",
  Mobile: "from-sky-500/20 via-accent/25 to-teal-600/20",
  Web: "from-brand/25 via-amber-400/20 to-orange-500/15",
  "E-commerce": "from-rose-500/15 via-brand/25 to-ember/20",
};

function ProjectThumbnail({
  project,
  content,
}: {
  project: Project;
  content: ReturnType<typeof getProjectContent>;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.image) && !imageFailed;

  if (!showImage) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <FaCode className="mb-3 text-6xl text-brand/50 transition-transform duration-300 group-hover:scale-110" />
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-600/80 dark:text-gray-300/80">
          {project.category}
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={`${content.title} — ${content.description}`}
      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      loading="eager"
      decoding="async"
      width={480}
      height={300}
      onError={() => setImageFailed(true)}
    />
  );
}

function TechStack({ technologies }: { technologies: string[] }) {
  if (!technologies.length) return null;

  return (
    <div className="relative mb-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-surface-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-surface-card to-transparent" />
      <div className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="shrink-0 rounded-full border border-gray-200/70 bg-white/70 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-gray-600 backdrop-blur-sm dark:border-gray-700/80 dark:bg-gray-800/50 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectActions({
  project,
  title,
  mounted,
  t,
  className = "",
}: {
  project: Project;
  title: string;
  mounted: boolean;
  t: (typeof translations)[keyof typeof translations];
  className?: string;
}) {
  const linkType = getProjectLinkType(project);
  const inProgressLabel = mounted ? t.inProgress : "In Development";
  const storeBtnClass =
    "flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600";

  if (linkType === "web") {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} — ${t.liveDemo}`}
        className={`flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg ${className}`}
      >
        <FaExternalLinkAlt aria-hidden="true" />
        <span>{mounted ? t.liveDemo : "Live Demo"}</span>
      </a>
    );
  }

  if (linkType === "stores") {
    return (
      <div className={`flex gap-2 ${className}`}>
        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — ${t.appStore}`}
            className={storeBtnClass}
          >
            <FaApple aria-hidden="true" />
            <span>{t.appStore}</span>
          </a>
        )}
        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — ${t.googlePlay}`}
            className={storeBtnClass}
          >
            <SiGoogleplay aria-hidden="true" />
            <span>{t.googlePlay}</span>
          </a>
        )}
      </div>
    );
  }

  if (linkType === "mobile-live") {
    return (
      <span
        aria-disabled="true"
        className={`flex w-full cursor-default items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent-dark dark:border-accent/30 dark:bg-accent/15 dark:text-accent-light ${className}`}
      >
        {mounted ? t.liveMobileApp : "Live · Mobile App"}
      </span>
    );
  }

  return (
    <span
      aria-disabled="true"
      className={`flex w-full cursor-default items-center justify-center gap-2 rounded-full border border-dashed border-amber-400/45 bg-amber-50/80 px-5 py-2.5 text-sm font-medium text-amber-800 dark:border-amber-500/35 dark:bg-amber-950/25 dark:text-amber-300 ${className}`}
    >
      {inProgressLabel}
    </span>
  );
}

function ProjectCard({
  project,
  content,
  index,
  mounted,
  t,
  lang,
  onPreview,
}: {
  project: Project;
  content: ReturnType<typeof getProjectContent>;
  index: number;
  mounted: boolean;
  t: (typeof translations)[keyof typeof translations];
  lang: string;
  onPreview: (project: Project) => void;
}) {
  const live = isProjectLive(project);
  const gradient =
    PLACEHOLDER_GRADIENTS[project.category] ?? "from-brand/20 via-surface-alt to-ember/15";
  const displayBadges = project.badges.filter((badge) => normalizeBadge(badge) !== "in progress");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-brand/15 bg-surface-card shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-brand-dark/25"
    >
      {/* Fixed-ratio media — same height on every card */}
      <button
        type="button"
        onClick={() => onPreview(project)}
        aria-label={content.title}
        className={`group relative block w-full shrink-0 overflow-hidden bg-gradient-to-br ${gradient} ${IMAGE_ASPECT}`}
      >
        <ProjectThumbnail project={project} content={content} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4 text-left">
          <h3 className="text-xl font-bold text-white drop-shadow-sm sm:text-2xl">{content.title}</h3>
        </div>

        {live && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent-dark/95 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Live
          </span>
        )}
      </button>

      <div className="flex min-h-[220px] flex-1 flex-col p-5">
        {!!displayBadges.length && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {displayBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand-dark dark:bg-brand-dark/20 dark:text-brand-light"
              >
                {getBadgeLabel(badge, lang)}
              </span>
            ))}
          </div>
        )}

        <p className="mb-2 line-clamp-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {content.description}
        </p>

        <TechStack technologies={project.technologies} />

        <div className="mt-auto pt-1">
          <ProjectActions project={project} title={content.title} mounted={mounted} t={t} />
        </div>
      </div>
    </motion.article>
  );
}

export default function LiveProjects() {
  const [mounted, setMounted] = useState(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  const projects = getProjects();
  const topicOptions = useMemo(() => getProjectTopics(projects), [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "all" || getProjectFilterGroup(project) === activeFilter;

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "live" && isProjectLive(project)) ||
        (statusFilter === "in-development" && !isProjectLive(project));

      const matchesTopic =
        topicFilter === "all" || projectHasTopic(project, topicFilter as TopicSlug);

      return matchesCategory && matchesStatus && matchesTopic;
    });
  }, [projects, activeFilter, statusFilter, topicFilter]);

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

  const previewContent = previewProject ? getProjectContent(previewProject, currentLanguage) : null;

  return (
    <section id="projects" className="scroll-mt-24 bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-brand-dark dark:text-brand-light">
            <FaCode />
            <span>{"<projects>"}</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {mounted ? t.liveProjectsTitle : "Live Projects"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {mounted ? t.liveProjectsSubtitle : ""}
          </p>
        </motion.div>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <FilterSelect
            id="project-status-filter"
            label={mounted ? t.filterStatus : "Status"}
            value={statusFilter}
            onChange={(value) => setStatusFilter(value as StatusFilter)}
            options={[
              { value: "all", label: mounted ? t.filterStatusAll : "All statuses" },
              { value: "live", label: mounted ? t.filterLive : "Live" },
              { value: "in-development", label: mounted ? t.inProgress : "In Development" },
            ]}
          />

          <div
            role="tablist"
            aria-label={mounted ? t.liveProjectsTitle : "Project filters"}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {FILTER_KEYS.map(({ key, labelKey }) => {
              const active = activeFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(key)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-brand-gradient text-gray-900 shadow-md"
                      : "border border-gray-200 bg-surface-card text-gray-600 hover:border-brand/40 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {mounted ? t[labelKey] : labelKey.replace("filter", "")}
                </button>
              );
            })}
          </div>

          <FilterSelect
            id="project-topic-filter"
            label={mounted ? t.filterTopic : "Topic"}
            value={topicFilter}
            onChange={setTopicFilter}
            options={[
              { value: "all", label: mounted ? t.filterTopicAll : "All topics" },
              ...topicOptions.map((topic) => ({
                value: topic,
                label: getTopicLabel(topic, currentLanguage),
              })),
            ]}
          />
        </div>

        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                content={getProjectContent(project, currentLanguage)}
                index={index}
                mounted={mounted}
                t={t}
                lang={currentLanguage}
                onPreview={setPreviewProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-gray-500 dark:text-gray-400">
            {mounted ? "Bu kategoride proje yok." : "No projects in this category."}
          </p>
        )}
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
              <div className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-xl border border-brand/15 bg-surface-card shadow-2xl dark:border-brand-dark/25">
                <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {previewContent.title}
                    </h3>
                    {isProjectLive(previewProject) && (
                      <span className="rounded-full bg-accent-dark/90 px-2 py-0.5 text-xs font-medium text-white">
                        Live
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setPreviewProject(null)}
                    className="text-2xl leading-none text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {previewProject.image ? (
                  <div className={`relative w-full bg-surface-alt ${IMAGE_ASPECT}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewProject.image}
                      alt={`${previewContent.title} — ${previewContent.description}`}
                      className="h-full w-full object-cover object-top"
                      loading="eager"
                      decoding="async"
                      width={800}
                      height={500}
                    />
                  </div>
                ) : (
                  <div
                    className={`flex w-full items-center justify-center bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[previewProject.category] ?? "from-brand/20 to-ember/15"} ${IMAGE_ASPECT}`}
                  >
                    <FaCode className="text-7xl text-brand/40" />
                  </div>
                )}

                <div className="space-y-4 p-5">
                  {!!previewProject.badges.filter((b) => normalizeBadge(b) !== "in progress").length && (
                    <div className="flex flex-wrap gap-1.5">
                      {previewProject.badges
                        .filter((b) => normalizeBadge(b) !== "in progress")
                        .map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand-dark dark:text-brand-light"
                          >
                            {getBadgeLabel(badge, currentLanguage)}
                          </span>
                        ))}
                    </div>
                  )}

                  <p className="text-gray-700 dark:text-gray-300">{previewContent.description}</p>
                  {previewContent.longDescription && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {previewContent.longDescription}
                    </p>
                  )}

                  <TechStack technologies={previewProject.technologies} />

                  <div className="pt-2">
                    <ProjectActions
                      project={previewProject}
                      title={previewContent.title}
                      mounted={mounted}
                      t={t}
                      className="inline-flex w-auto"
                    />
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
