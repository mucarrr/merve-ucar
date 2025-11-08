import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://merveucar.dev'),
  title: "Experience - Merve Uçar | Work Experience & Professional Background | Full Stack Developer",
  description: "My professional work experience and background in web development. Experience with MERN Stack, React, Next.js, TypeScript, Node.js, MongoDB. Work experience as Full Stack Developer, Frontend Developer, and Backend Developer. Freelance developer experience, full stack development projects. Professional experience in web development. İş deneyimi, web geliştirme deneyimi.",
  keywords: [
    "Work Experience", "Professional Experience", "Developer Experience", "Full Stack Experience",
    "Merve Uçar Experience", "Freelance Developer Experience", "Web Developer Background",
    "İş Deneyimi", "Profesyonel Deneyim", "Geliştirici Deneyimi", "Full Stack Deneyim",
    "Web Developer Experience", "React Developer Experience", "Next.js Experience",
    "MERN Stack Experience", "Software Developer Experience", "Career Background"
  ],
  authors: [{ name: "Merve Uçar" }],
  openGraph: {
    title: "Experience - Merve Uçar | Professional Background",
    description: "My professional work experience and background in web development. MERN Stack, React, Next.js experience.",
    type: "website",
    url: "https://merveucar.dev/experience",
    locale: "en_US",
    alternateLocale: "tr_TR",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Merve Uçar Experience",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Experience - Merve Uçar | Professional Background",
    description: "Professional work experience in web development. MERN Stack, React, Next.js experience.",
    images: ["/favicon.svg"],
  },
  alternates: {
    canonical: '/experience',
    languages: {
      'en': 'https://merveucar.dev/experience',
      'tr': 'https://merveucar.dev/experience',
    },
  },
};

export default function ExperiencePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <div className="pt-16">
          <Experience />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
