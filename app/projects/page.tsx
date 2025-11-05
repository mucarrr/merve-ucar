import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://merveucar.dev'),
  title: "Projects - Merve Uçar | Freelance Developer Portfolio | React, Next.js, Node.js Projects",
  description: "Explore my portfolio of web development projects. Modern web applications built with React, Next.js, TypeScript, Node.js, MongoDB. Freelance developer projects, full stack applications, and custom software solutions. Projelerim, web uygulamaları, React projeleri.",
  keywords: [
    "Projects", "Portfolio", "Web Projects", "React Projects", "Next.js Projects", "Full Stack Projects",
    "Merve Uçar Projects", "Freelance Developer Projects", "Web Application Projects",
    "Projelerim", "Web Projeleri", "React Projeleri", "Next.js Projeleri", "Full Stack Projeler",
    "Portfolio", "Yazılım Projeleri", "Web Uygulama Projeleri",
    "TypeScript Projects", "Node.js Projects", "MERN Stack Projects", "Custom Software Projects"
  ],
  authors: [{ name: "Merve Uçar" }],
  openGraph: {
    title: "Projects - Merve Uçar | Freelance Developer Portfolio",
    description: "Explore my portfolio of web development projects. Modern web applications built with React, Next.js, TypeScript, Node.js, MongoDB.",
    type: "website",
    url: "https://merveucar.dev/projects",
    locale: "en_US",
    alternateLocale: "tr_TR",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Merve Uçar Projects",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Projects - Merve Uçar | Developer Portfolio",
    description: "Web development projects portfolio. React, Next.js, TypeScript, Node.js projects.",
    images: ["/favicon.svg"],
  },
  alternates: {
    canonical: '/projects',
    languages: {
      'en': 'https://merveucar.dev/projects',
      'tr': 'https://merveucar.dev/projects',
    },
  },
};

export default function ProjectsPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <div className="pt-16">
          <Projects />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
