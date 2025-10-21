import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Merve Uçar",
    "jobTitle": "Full Stack Developer",
    "url": "https://merve-ucar.vercel.app",
    "sameAs": [
      "https://github.com/mucarrr",
      "https://www.linkedin.com/in/merve-ucar/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Full Stack Development"
    ],
    "email": "mucar2326@gmail.com",
    "description": "Full Stack Developer - MERN Stack, Next.js, TypeScript, React ve modern web teknolojileri ile web uygulamaları geliştiriyorum."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Skills />
        <Stats />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
