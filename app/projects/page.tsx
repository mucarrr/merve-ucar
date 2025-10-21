import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Projelerim - Merve Uçar | Full Stack Developer",
  description: "Modern teknolojilerle geliştirdiğim web uygulamaları ve dijital çözümler. React, Next.js, TypeScript, MERN Stack projeleri.",
  keywords: ["Web Projeleri", "React Projeleri", "Next.js Projeleri", "Full Stack Projeler", "Portfolio"],
  openGraph: {
    title: "Projelerim - Merve Uçar",
    description: "Modern teknolojilerle geliştirdiğim web uygulamaları ve dijital çözümler.",
    type: "website",
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
