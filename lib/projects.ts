/**
 * Live projects shown on the /projects page.
 */

import { translations } from "./translations";

export interface ProjectContent {
  title: string;
  description: string;
  longDescription: string;
}

export interface Project {
  /** Stable unique id (used as React key). */
  id: string;
  /** Public URL of the deployed, live site. Empty when not yet published. */
  liveUrl: string;
  /** iOS App Store link (mobile projects). */
  appStoreUrl?: string;
  /** Google Play link (mobile projects). */
  playStoreUrl?: string;
  /** Live mobile app without a public store link (e.g. corporate / contributor work). */
  isLive?: boolean;
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
  /** Topic tags shown as small pills (e.g. "saas", "education"). Status is derived from liveUrl. */
  badges: string[];
  /** Lower numbers appear first. */
  order: number;
  /** ISO date string, shown as "last updated". */
  updatedAt: string;
  tr: ProjectContent;
  en: ProjectContent;
}

export const projects: Project[] = [
  {
    id: "logos-speechy",
    liveUrl: "",
    githubUrl: "",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "MongoDB / Mongoose",
      "NextAuth",
      "TanStack Query",
      "Zustand",
      "Zod",
      "Playwright",
      "Vercel",
    ],
    image: "/screenshots/logos-speechy.png",
    featured: true,
    category: "SaaS",
    badges: ["saas", "education"],
    order: 1,
    updatedAt: "2026-06-18",
    tr: {
      title: "LOGOS Speechy",
      description:
        "Konuşma geriliği, artikülasyon ve kekemelik için çok kiracılı (multi-tenant) dijital dil ve konuşma terapisi SaaS platformu — terapist paneli, öğrenci ödevleri, interaktif müfredat ve beyaz etiket klinik vitrini.",
      longDescription:
        "Subdomain tabanlı multi-tenant mimari ve KVKK odaklı kiracı izolasyonu üzerine kurulu bir dil ve konuşma terapisi platformu. Beyaz etiket desteğiyle her klinik kendi logosu, renkleri ve markasıyla yayınlanır. Terapist, öğrenci ve platform admin rolleri RBAC ile yönetilir; konuşma geriliği, artikülasyon ve kekemelik müfredat modülleri, interaktif egzersizler, ödev atama ve ilerleme takibi içerir. Çocuk odaklı gamification (rozet, puan, oyun hissi), “Bukalemun” marka dili ve mobil uyumlu modern arayüz; Zod validasyon, soft delete, audit ve güvenli auth altyapısıyla desteklenir.",
    },
    en: {
      title: "LOGOS Speechy",
      description:
        "A multi-tenant digital speech and language therapy SaaS — therapist dashboards, student homework, interactive curriculum modules, and white-label clinic branding for speech delay, articulation, and stuttering.",
      longDescription:
        "A speech and language therapy platform built on a subdomain-based multi-tenant architecture with privacy-first tenant isolation. White-label support lets each clinic publish with its own logo, colors, and brand. Therapist, student, and platform-admin roles are managed via RBAC, with curriculum modules for speech delay, articulation, and stuttering, interactive exercises, homework assignment, and progress tracking. Child-focused gamification (badges, points, playful feel), a “Chameleon” brand language, and a mobile-friendly modern UI are backed by Zod validation, soft delete, audit logging, and secure auth.",
    },
  },
  {
    id: "time-garden",
    liveUrl: "",
    githubUrl: "https://github.com/mucarrr/timeGarden--ReactNative-",
    technologies: ["React Native", "i18next", "Lottie", "Geolocation API", "Push Notifications"],
    image: "/screenshots/time-garden.png",
    featured: false,
    category: "Mobile",
    badges: ["mobile", "education"],
    order: 2,
    updatedAt: "2026-06-18",
    tr: {
      title: "Time Garden",
      description:
        "Çocukların namaz vakitlerini oyunlaştırarak takip etmesini sağlayan mobil uygulama — sticker & bahçe sistemi, namaz rehberi, konum bazlı vakit hatırlatıcıları ve çift dilli çocuk dostu arayüz.",
      longDescription:
        "Çocukların günlük rutinlerini tamamladıkça ödüllendirildiği dinamik sticker, koleksiyon ve seviye atlama mekanizmasına sahip oyunlaştırılmış alışkanlık takip uygulaması. Geolocation API entegrasyonu ile konuma göre gerçek zamanlı vakit hesaplama ve push bildirim hatırlatıcıları sunar. Lottie animasyonları ve çocuk dostu responsive arayüz; i18next ile Türkçe/İngilizce dinamik dil geçişi; reklamsız, GDPR/KVKK uyumlu güvenli mimari ve tek kod tabanından iOS/Android cross-platform dağıtım.",
    },
    en: {
      title: "Time Garden",
      description:
        "A gamified habit-tracking mobile app that helps children build daily routines and prayer habits through interactive sticker rewards and a customizable virtual garden.",
      longDescription:
        "A gamified habit-tracking app with dynamic stickers, collections, and level-ups that reward children for completing daily routines. It integrates the Geolocation API for real-time, location-based prayer-time calculation and push-notification reminders. Lottie animations and a child-friendly responsive UI; bilingual Turkish/English switching via i18next; an ad-free, GDPR/KVKK-compliant secure architecture; and cross-platform iOS/Android delivery from a single codebase.",
    },
  },
  {
    id: "cappadocia-grill",
    liveUrl: "https://www.cappadociagrill.com",
    githubUrl: "https://github.com/mucarrr/Cappadocia-restaurant",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Resend",
      "Vercel",
    ],
    image: "/screenshots/cappadocia.png",
    featured: false,
    category: "Web",
    badges: ["web", "gastronomy"],
    order: 3,
    updatedAt: "2026-06-18",
    tr: {
      title: "Cappadocia Grill",
      description:
        "Atina Kallithea'da faaliyet gösteren grill restoranı için dijital menü, WhatsApp rezervasyonu, online sipariş ve çift dilli SEO odaklı premium restoran sitesi.",
      longDescription:
        "Profesyonel vitrin ve mobil uyumlu tasarım; dijital menü, WhatsApp rezervasyonu ve Wolt / e-food sipariş entegrasyonu. Gerçek Google yorumları ile sosyal kanıt, Google Maps, sosyal medya ve platform entegrasyonları. İngilizce ve Yunanca dil desteği, yerel SEO ile hızlı ve güvenli altyapı.",
    },
    en: {
      title: "Cappadocia Grill",
      description:
        "A premium restaurant website for a grill restaurant in Kallithea, Athens — digital menu, WhatsApp reservations, online ordering, and bilingual SEO.",
      longDescription:
        "A professional, mobile-friendly storefront with a digital menu, WhatsApp reservations, and Wolt / e-food ordering integration. Social proof from real Google reviews, plus Google Maps, social media, and platform integrations. English and Greek language support with local SEO on fast, secure infrastructure.",
    },
  },
  {
    id: "smyrni-baklava",
    liveUrl: "https://www.smyrnibaklava.com",
    githubUrl: "",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
      "Stripe",
      "Resend",
      "Vercel",
    ],
    image: "/screenshots/smyrni.png",
    featured: true,
    category: "E-commerce",
    badges: ["web", "e-commerce", "gastronomy"],
    order: 4,
    updatedAt: "2026-06-18",
    tr: {
      title: "Smyrni Baklava",
      description:
        "Smyrni Baklava için geliştirilen, Atina'daki 4 şubeyi dijital katalog, online sipariş, toptan teklif ve çift dilli (Yunanca/İngilizce) vitrinle bir araya getiren modern e-ticaret sitesi.",
      longDescription:
        "Profesyonel vitrin ve mobil uyumlu tasarım; dijital katalog, sepet ve online ödeme (Stripe / nakit). Toptan ve kurumsal teklif sistemi, 4 şube sayfası ve Google Maps entegrasyonu. Müşteri yorumları ve sosyal medya (FB · IG · TikTok), admin panel ve mağaza B2B portalı; Yunanca ve İngilizce dil desteği, yerel SEO ile hızlı ve güvenli altyapı.",
    },
    en: {
      title: "Smyrni Baklava",
      description:
        "A modern e-commerce website for Smyrni Baklava, bringing together four Athens stores with a digital catalog, online ordering, bulk quote requests, and a bilingual (Greek/English) storefront.",
      longDescription:
        "A professional, mobile-friendly storefront with a digital catalog, cart, and online payment (Stripe / cash). A wholesale and corporate quote system, four branch pages with Google Maps integration, customer reviews and social media (FB · IG · TikTok), an admin panel and a B2B store portal; Greek and English support with local SEO on fast, secure infrastructure.",
    },
  },
  {
    id: "didiyos-event",
    liveUrl: "",
    isLive: true,
    githubUrl: "",
    technologies: [
      "React Native",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Push Notifications",
    ],
    image: "/screenshots/didiyos.png",
    featured: false,
    category: "Mobile",
    badges: ["mobile", "community"],
    order: 5,
    updatedAt: "2026-06-18",
    tr: {
      title: "Didiyos (Event Mobile App)",
      description:
        "Büyük ölçekli organizasyonlar ve etkinlik yönetimi için geliştirilen, tüm dinamik içerik yönetimini, bildirim sistemini ve kullanıcı akışlarını kapsayan React Native tabanlı mobil uygulama projesi.",
      longDescription:
        "Cross-platform mobil mimariye, frontend süreçlerine ve backend/API entegrasyonlarına katkı sağlanan bir etkinlik yönetimi uygulaması (Contributor). Dinamik etkinlik yönetimi (CRUD): etkinlik ekleme, çıkarma, güncelleme ve detay yönetimi uçtan uca mobil arayüzde. Katılımcı etkileşim altyapısı, anlık bildirim sistemi (Push Notifications) ile gerçek zamanlı güncellemeler ve güvenli kayıt/giriş (Authentication) ekranları ile kullanıcı yönetimi.",
    },
    en: {
      title: "Didiyos (Event Mobile App)",
      description:
        "A cross-platform mobile event-management application built with React Native, featuring dynamic event CRUD workflows, attendee engagement, and push-notification systems.",
      longDescription:
        "An event-management app where I contributed to the cross-platform mobile architecture, frontend flows, and backend/API integrations (Contributor). Dynamic event management (CRUD): creating, removing, updating, and managing event details end-to-end in the mobile UI. Attendee-engagement infrastructure, a real-time push-notification system, and user management with secure registration/login (authentication) screens.",
    },
  },
  {
    id: "lifelong-guidance",
    liveUrl: "https://www.lifelongguidance.com",
    githubUrl: "https://github.com/mucarrr/Life-long-learning",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/screenshots/lifelong.png",
    featured: true,
    category: "Web",
    badges: ["web", "education"],
    order: 6,
    updatedAt: "2026-06-18",
    tr: {
      title: "Lifelong Guidance GR",
      description:
        "Atina merkezli konuşma-dil terapisi ve pedagojik danışmanlık merkezi için çift dilli, SEO odaklı premium kurumsal site — hizmet vitrini, Erasmus+ projeleri, akademik kaynaklar ve WhatsApp iletişim.",
      longDescription:
        "Profesyonel vitrin ve mobil uyumlu tasarım; konuşma-dil terapisi, eğitim desteği, ebeveyn eğitimi ve seminer sayfaları. Erasmus+ projeleri (REMath for REST, DM4Res, Up-Res) ve PDF çıktılar, sunumlar, makaleler ve indirilebilir kaynaklar kütüphanesi. WhatsApp, e-posta ve Instagram entegrasyonları; Türkçe ve İngilizce (geo/locale-aware yönlendirme), yerel SEO, structured data, sitemap ve KVKK uyumlu çerez onayı ile koşullu analytics.",
    },
    en: {
      title: "Lifelong Guidance GR",
      description:
        "A bilingual, SEO-focused premium corporate website for an Athens-based speech therapy & pedagogical counselling centre — service showcase, Erasmus+ projects, academic resources, and WhatsApp contact.",
      longDescription:
        "A professional, mobile-friendly storefront with pages for speech-language therapy, educational support, parent training, and seminars. Erasmus+ projects (REMath for REST, DM4Res, Up-Res) with PDF outputs, plus a library of presentations, articles, and downloadable resources. WhatsApp, email, and Instagram integrations; Turkish and English (geo/locale-aware routing), local SEO, structured data, sitemap, and KVKK-compliant cookie consent with conditional analytics.",
    },
  },
  {
    id: "ratiomind",
    liveUrl: "https://ratiomind.online",
    githubUrl: "https://github.com/mucarrr/RatioMind",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Express",
      "MongoDB",
      "NextAuth",
      "Anthropic / OpenAI",
      "RAG",
      "Lemon Squeezy",
      "Resend",
      "Web Push",
      "AES-256-GCM",
      "Vitest",
      "Vercel",
    ],
    image: "/screenshots/ratio-mind.png",
    featured: true,
    category: "SaaS",
    badges: ["saas", "mental-health"],
    order: 7,
    updatedAt: "2026-06-18",
    tr: {
      title: "RatioMind",
      description:
        "Risale-i Nur hakikatlerini modern psikoloji yöntemleriyle birleştiren, AI destekli dijital tefekkür ve teselli platformu — doğrulanmış kaynak alıntıları, şifreli sohbet, çift dilli arayüz ve abonelik modeli.",
      longDescription:
        "Risale-i Nur RAG ile psikoloji köprüsü kuran, doğrulanmış kaynak alıntıları ve streaming AI sohbet sunan bir platform. AES-256-GCM ile uçtan uca şifreli sohbet depolama, Google + e-posta kimlik doğrulama ve e-posta doğrulama. Sohbet yönetimi (sabitle, arşivle, paylaş, yeniden adlandır), Kaydedilen Hakikatler ile push/e-posta hatırlatmaları, Pro abonelik (Lemon Squeezy — aylık/yıllık) ve admin paneli (KPI, maliyet, anahtar kelime analizi). Türkçe ve İngilizce, Mid-Dark / Paper tema, PWA; gizlilik politikası, kullanım koşulları, paywall ve fiyatlandırma sayfası.",
    },
    en: {
      title: "RatioMind",
      description:
        "An AI-powered digital contemplation and consolation platform that combines Risale-i Nur teachings with modern psychology — verified source citations, encrypted chat, a bilingual UI, and a subscription model.",
      longDescription:
        "A platform that bridges Risale-i Nur RAG with psychology, offering verified source citations and streaming AI chat. End-to-end encrypted chat storage with AES-256-GCM, Google + email authentication, and email verification. Chat management (pin, archive, share, rename), Saved Truths with push/email reminders, a Pro subscription (Lemon Squeezy — monthly/yearly), and an admin panel (KPIs, cost, keyword analysis). Turkish and English, Mid-Dark / Paper themes, PWA; privacy policy, terms of use, paywall, and pricing page.",
    },
  },
  {
    id: "daylight-gergi-tavan",
    liveUrl: "https://www.daylightgergitavan.com",
    githubUrl: "",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Swiper",
      "Resend",
      "Vercel",
    ],
    image: "/screenshots/daylight.png",
    featured: true,
    category: "Web",
    badges: ["web", "interior-design"],
    order: 8,
    updatedAt: "2026-06-18",
    tr: {
      title: "Daylight Gergi Tavan",
      description:
        "İstanbul merkezli gergi tavan firması için modern dijital vitrin — 6+ model tanıtımı, 119+ parçalık katalog galerisi, proje portföyü, WhatsApp iletişim, Resend teklif formu ve yerel SEO odaklı kurumsal web sitesi.",
      longDescription:
        "Profesyonel vitrin ve mobil uyumlu tasarım; 6 gergi tavan modeli (Lake, Baskılı, Duvar Kağıdı, Lineer Aydınlatma, Lightbox, Matrix LED) ve 119+ parçalık katalog galerisi ile lightbox modal. Öne çıkan proje slider'ı (optik, eczane, otel vb. referanslar), video destekli hero slider ve model kartları. WhatsApp hızlı iletişim, Resend e-posta formu, Schema.org JSON-LD, sitemap, Open Graph; SSS ve ücretsiz keşif/teklif CTA akışı, yerel SEO ile hızlı ve güvenli altyapı.",
    },
    en: {
      title: "Daylight Gergi Tavan",
      description:
        "A modern corporate website for an Istanbul-based stretch-ceiling company — model showcase, a 119+ item catalog gallery, project portfolio, WhatsApp contact, Resend quote form, and local SEO architecture.",
      longDescription:
        "A professional, mobile-friendly storefront with 6 stretch-ceiling models (Lake, Printed, Wallpaper, Linear Lighting, Lightbox, Matrix LED) and a 119+ item catalog gallery with a lightbox modal. A featured-project slider (optician, pharmacy, hotel, and other references), a video-backed hero slider, and model cards. WhatsApp quick contact, a Resend email form, Schema.org JSON-LD, sitemap, Open Graph; an FAQ and a free site-visit/quote CTA flow, with local SEO on fast, secure infrastructure.",
    },
  },
  {
    id: "juniors-center",
    liveUrl: "https://www.juniorscenter.com",
    githubUrl: "",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    image: "/screenshots/juniors.png",
    featured: false,
    category: "Web",
    badges: ["web", "community"],
    order: 9,
    updatedAt: "2026-06-18",
    tr: {
      title: "Juniors Center",
      description:
        "Yeni mezun yazılımcıları gerçek projeler ve takımlarla buluşturarak sektörel deneyim kazandıran topluluk ve iş birliği platformunun tek başıma üstlendiğim frontend mimarisi.",
      longDescription:
        "Tüm kullanıcı arayüzü, çoklu sayfa akışları ve state yönetim mimarisinin sıfırdan ve tek başıma kurulduğu solo frontend geliştirme projesi. Kullanıcıların açık projeleri inceleyip geliştirme ekiplerine katılabildiği proje ve takım eşleştirme sistemi; genç yazılımcı topluluğuna hitap eden dinamik, temiz ve tamamen responsive tasarım. Takım kayıtları ve kullanıcı başvuruları için optimize edilmiş gelişmiş form yönetimi.",
    },
    en: {
      title: "Juniors Center",
      description:
        "A collaborative community platform connecting junior developers with real-world projects and teams — where I solely designed and developed the entire frontend architecture.",
      longDescription:
        "A solo frontend project where the entire user interface, multi-page flows, and state-management architecture were built from scratch single-handedly. A project-and-team matching system where users can browse open projects and join development teams; a dynamic, clean, fully responsive design aimed at a junior-developer community. Advanced form management optimized for team registrations and user applications.",
    },
  },
];

export type ProjectFilter = "all" | "saas" | "mobile" | "web";

/** Maps project category to homepage filter tabs (E-commerce → web). */
export function getProjectFilterGroup(project: Project): Exclude<ProjectFilter, "all"> {
  if (project.category === "SaaS") return "saas";
  if (project.category === "Mobile") return "mobile";
  return "web";
}

export type ProjectLinkType = "web" | "stores" | "mobile-live" | "none";

export function getProjectLinkType(project: Project): ProjectLinkType {
  if (project.liveUrl) return "web";
  if (project.appStoreUrl || project.playStoreUrl) return "stores";
  if (project.isLive) return "mobile-live";
  return "none";
}

export function isProjectLive(project: Project): boolean {
  return getProjectLinkType(project) !== "none";
}

export type StatusFilter = "all" | "live" | "in-development";

/** Filterable topic slugs (excludes platform tags: saas, web, mobile). */
export const TOPIC_SLUGS = [
  "education",
  "gastronomy",
  "e-commerce",
  "community",
  "mental-health",
  "interior-design",
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];

const LEGACY_BADGE_ALIASES: Record<string, string> = {
  "community app": "community",
  "mental health": "mental-health",
  "interior design": "interior-design",
};

const TOPIC_LABEL_KEYS: Record<TopicSlug, keyof (typeof translations)["tr"]> = {
  education: "topicEducation",
  gastronomy: "topicGastronomy",
  "e-commerce": "topicEcommerce",
  community: "topicCommunity",
  "mental-health": "topicMentalHealth",
  "interior-design": "topicInteriorDesign",
};

const PLATFORM_LABEL_KEYS: Record<string, keyof (typeof translations)["tr"]> = {
  saas: "filterSaas",
  web: "filterWeb",
  mobile: "filterMobile",
};

export function normalizeBadge(badge: string): string {
  return LEGACY_BADGE_ALIASES[badge] ?? badge;
}

export function isTopicSlug(value: string): value is TopicSlug {
  return (TOPIC_SLUGS as readonly string[]).includes(value);
}

/** Topics that appear in at least one project, in display order. */
export function getProjectTopics(projects: Project[]): TopicSlug[] {
  const found = new Set<TopicSlug>();
  for (const project of projects) {
    for (const badge of project.badges) {
      const slug = normalizeBadge(badge);
      if (isTopicSlug(slug)) found.add(slug);
    }
  }
  return TOPIC_SLUGS.filter((topic) => found.has(topic));
}

export function projectHasTopic(project: Project, topic: TopicSlug): boolean {
  return project.badges.some((badge) => normalizeBadge(badge) === topic);
}

export function getTopicLabel(topic: TopicSlug, lang: string): string {
  const t = translations[lang as keyof typeof translations] ?? translations.en;
  const label = t[TOPIC_LABEL_KEYS[topic]];
  return typeof label === "string" ? label : topic;
}

export function getBadgeLabel(badge: string, lang: string): string {
  const normalized = normalizeBadge(badge);
  if (normalized === "in progress") return "";

  const t = translations[lang as keyof typeof translations] ?? translations.en;

  if (isTopicSlug(normalized)) {
    const label = t[TOPIC_LABEL_KEYS[normalized]];
    return typeof label === "string" ? label : normalized;
  }
  if (normalized in PLATFORM_LABEL_KEYS) {
    const label = t[PLATFORM_LABEL_KEYS[normalized]];
    return typeof label === "string" ? label : normalized;
  }

  return normalized;
}

/** Returns the projects sorted by their `order` field. */
export function getProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** Picks the localized content for a project. Falls back to English. */
export function getProjectContent(project: Project, lang: string): ProjectContent {
  return lang === "tr" ? project.tr : project.en;
}
