/**
 * Live projects shown on the /projects page.
 *
 * This file is the single source of truth for portfolio projects — it replaces
 * the old MongoDB-backed `/api/projects` data source. To add or edit a project,
 * just edit the `projects` array below; it is version-controlled and type-checked.
 *
 * Each project carries both Turkish (tr) and English (en) copy so the language
 * switcher works without a separate translation map.
 *
 * 👉 The entries below are PLACEHOLDERS. Replace them with your real live
 *    projects (or send Claude the details and they'll be filled in here).
 */

export interface ProjectContent {
  title: string;
  description: string;
  longDescription: string;
}

export interface Project {
  /** Stable unique id (used as React key). */
  id: string;
  /** Public URL of the deployed, live site. */
  liveUrl: string;
  /** Source code URL. Leave empty if the repo is private. */
  githubUrl: string;
  /** Tech stack badges. */
  technologies: string[];
  /** Screenshot path under /public (e.g. "/projects/foo.png") or a remote URL. */
  image: string;
  /** Highlight this project with a "featured" badge and priority placement. */
  featured: boolean;
  /** Short category label (e.g. "E-commerce", "SaaS"). */
  category: string;
  /** Lower numbers appear first. */
  order: number;
  /** ISO date string, shown as "last updated". */
  updatedAt: string;
  tr: ProjectContent;
  en: ProjectContent;
}

export const projects: Project[] = [
  {
    id: "placeholder-1",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mucarrr",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "",
    featured: true,
    category: "Web App",
    order: 1,
    updatedAt: "2026-06-18",
    tr: {
      title: "Örnek Canlı Proje 1",
      description: "Bu bir yer tutucudur — gerçek canlı projenizle değiştirin.",
      longDescription:
        "Bu metni gerçek projenizin detaylı açıklamasıyla değiştirin. lib/projects.ts dosyasını düzenleyerek başlık, açıklama, teknolojiler, canlı URL ve görseli güncelleyebilirsiniz.",
    },
    en: {
      title: "Sample Live Project 1",
      description: "This is a placeholder — replace it with your real live project.",
      longDescription:
        "Replace this text with the detailed description of your real project. Edit lib/projects.ts to update the title, description, technologies, live URL and image.",
    },
  },
  {
    id: "placeholder-2",
    liveUrl: "https://example.com",
    githubUrl: "",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "",
    featured: false,
    category: "Full Stack",
    order: 2,
    updatedAt: "2026-06-18",
    tr: {
      title: "Örnek Canlı Proje 2",
      description: "Bu bir yer tutucudur — gerçek canlı projenizle değiştirin.",
      longDescription:
        "GitHub bağlantısı olmayan (özel repo) bir proje örneği. githubUrl alanını boş bırakırsanız yalnızca 'Canlı Demo' butonu gösterilir.",
    },
    en: {
      title: "Sample Live Project 2",
      description: "This is a placeholder — replace it with your real live project.",
      longDescription:
        "An example of a project without a GitHub link (private repo). If you leave githubUrl empty, only the 'Live Demo' button is shown.",
    },
  },
];

/** Returns the projects sorted by their `order` field. */
export function getProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** Picks the localized content for a project. Falls back to English. */
export function getProjectContent(project: Project, lang: string): ProjectContent {
  return lang === "tr" ? project.tr : project.en;
}
