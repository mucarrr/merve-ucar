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
import TechStack from "@/components/TechStack";

const FILTER_KEYS: { key: ProjectFilter; labelKey: keyof (typeof translations)["tr"] }[] = [
  { key: "all", labelKey: "filterAll" },
  { key: "saas", labelKey: "filterSaas" },
  { key: "mobile", labelKey: "filterMobile" },
  { key: "web", labelKey: "filterWeb" },
];

const PLACEHOLDER_MEDIA = "h-48 w-full";

const PLACEHOLDER_PALETTES: Record<
  string,
  { gradient: string; iconClass: string; labelClass: string }
> = {
  "time-garden": {
    gradient:
      "from-[#d1fae5] via-[#ecfdf5] to-[#cffafe] dark:from-emerald-950/70 dark:via-teal-950/50 dark:to-cyan-950/40",
    iconClass: "text-emerald-300 dark:text-emerald-400/70",
    labelClass: "text-emerald-600/70 dark:text-emerald-300/80",
  },
  "didiyos-event": {
    gradient:
      "from-[#ffedd5] via-[#fff7ed] to-[#fef3c7] dark:from-orange-950/70 dark:via-amber-950/50 dark:to-yellow-950/40",
    iconClass: "text-orange-300 dark:text-amber-400/70",
    labelClass: "text-orange-600/70 dark:text-amber-300/80",
  },
};

const DEFAULT_PLACEHOLDER = {
  gradient:
    "from-amber-50 via-orange-50 to-rose-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950",
  iconClass: "text-amber-300 dark:text-amber-500/50",
  labelClass: "text-gray-500 dark:text-gray-400",
};

function getPlaceholderStyle(projectId: string) {
  return PLACEHOLDER_PALETTES[projectId] ?? DEFAULT_PLACEHOLDER;
}

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
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-full border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-amber-300 hover:text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/25 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-amber-500/40 dark:hover:text-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FaChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-amber-600/70 dark:text-amber-400/70"
        />
      </div>
    </div>
  );
}

function PlaceholderVisual({
  projectId,
  category,
  size = "card",
}: {
  projectId: string;
  category?: string;
  size?: "card" | "modal";
}) {
  const palette = getPlaceholderStyle(projectId);
  const iconSize = size === "modal" ? "text-7xl" : "text-5xl mb-3";

  return (
    <div
      className={`flex ${PLACEHOLDER_MEDIA} flex-col items-center justify-center bg-gradient-to-br ${palette.gradient}`}
    >
      <FaCode className={`${iconSize} ${palette.iconClass}`} />
      {category && (
        <p className={`text-sm font-medium ${palette.labelClass}`}>{category}</p>
      )}
    </div>
  );
}

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
    return <PlaceholderVisual projectId={project.id} category={project.category} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={`${content.title} — ${content.description}`}
      className={`${PLACEHOLDER_MEDIA} object-cover transition-transform duration-300 group-hover:scale-105`}
      loading="lazy"
      width={400}
      height={225}
      onError={() => setImageFailed(true)}
    />
  );
}

const liveBtnClass =
  "flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-medium text-gray-900 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20";
const storeBtnClass =
  "flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-gray-900";

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

  if (linkType === "web") {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} — ${t.liveDemo}`}
        className={`${liveBtnClass} ${className}`}
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
        className={`${liveBtnClass} cursor-default ${className}`}
      >
        {mounted ? t.liveMobileApp : "Live · Mobile App"}
      </span>
    );
  }

  return (
    <span
      aria-disabled="true"
      className={`flex w-full cursor-default items-center justify-center gap-2 rounded-full border-2 border-dashed border-amber-500/75 bg-amber-50/80 px-6 py-3 text-sm font-medium text-amber-800 dark:border-amber-400/65 dark:bg-amber-950/25 dark:text-amber-300 ${className}`}
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
  const displayBadges = project.badges.filter((badge) => normalizeBadge(badge) !== "in progress");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-amber-200/30 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-amber-700/30 dark:bg-gray-900"
    >
      <button
        type="button"
        onClick={() => onPreview(project)}
        aria-label={content.title}
        className="group relative flex h-48 cursor-pointer items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700"
      >
        <ProjectThumbnail project={project} content={content} />

        {live && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Live
          </span>
        )}
      </button>

      <div className="flex flex-grow flex-col p-6">
        <div className="mb-3 flex items-start gap-2">
          <h3 className="flex-1 text-xl font-semibold text-gray-900 dark:text-white">
            {content.title}
          </h3>
          {!!displayBadges.length &&
            displayBadges.map((badge) => (
              <span
                key={badge}
                className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
              >
                {getBadgeLabel(badge, lang)}
              </span>
            ))}
        </div>

        <p className="mb-4 flex-grow text-gray-700 dark:text-gray-300">{content.description}</p>

        <TechStack technologies={project.technologies} className="mb-4" />

        <div className="mt-auto flex gap-4">
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
    <section id="projects" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-amber-600 dark:text-amber-400">
            <FaCode />
            <span>{"<projects>"}</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {mounted ? t.liveProjectsTitle : "Live Projects"}
          </h2>
          <p className="section-subtitle mx-auto mb-4 max-w-2xl">
            {mounted ? t.liveProjectsSubtitle : ""}
          </p>
          <a
            href="/projects"
            className="inline-block text-sm font-medium text-amber-600 underline decoration-amber-400 underline-offset-4 transition-colors hover:text-amber-700 dark:text-amber-400 dark:decoration-amber-500 dark:hover:text-amber-300"
          >
            {mounted ? t.viewPortfolioProjects : "View my portfolio projects"}
          </a>
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
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 shadow-md"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-white"
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

        <motion.div layout className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-xl border border-amber-200/30 bg-white shadow-2xl dark:border-amber-700/30 dark:bg-gray-900">
                <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {previewContent.title}
                    </h3>
                    {isProjectLive(previewProject) && (
                      <span className="rounded-full bg-amber-500/90 px-2 py-0.5 text-xs font-medium text-white">
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
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={previewProject.image}
                    alt={`${previewContent.title} — ${previewContent.description}`}
                    className="block w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <PlaceholderVisual projectId={previewProject.id} size="modal" />
                )}

                <div className="space-y-4 p-5">
                  {!!previewProject.badges.filter((b) => normalizeBadge(b) !== "in progress").length && (
                    <div className="flex flex-wrap gap-1.5">
                      {previewProject.badges
                        .filter((b) => normalizeBadge(b) !== "in progress")
                        .map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
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

                  <TechStack technologies={previewProject.technologies} collapsible={false} />

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
