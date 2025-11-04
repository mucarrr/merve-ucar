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
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Merve Uçar",
    "alternateName": "Merve Ucar",
    "jobTitle": "Freelance Full Stack Developer",
    "url": "https://merveucar.dev",
    "image": "https://merveucar.dev/favicon.svg",
    "sameAs": [
      "https://github.com/mucarrr",
      "https://www.linkedin.com/in/ucar-merve/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
      "Web Development",
      "MERN Stack",
      "Freelance Web Development",
      "Custom Web Applications"
    ],
    "email": "mucar2326@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Athens",
      "addressCountry": "GR"
    },
    "description": "Merve Uçar - Freelance Full Stack Developer. MERN Stack, Next.js, TypeScript, React ve modern web teknolojileri ile profesyonel web uygulamaları geliştiriyorum. Available for hire.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Boğaziçi University"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Freelance Web Development Services",
    "description": "Professional freelance web development services. Full stack web applications, React, Next.js, TypeScript, MERN Stack development. Custom web solutions, responsive design, and modern web applications.",
    "provider": {
      "@type": "Person",
      "name": "Merve Uçar",
      "url": "https://merveucar.dev",
      "email": "mucar2326@gmail.com"
    },
    "serviceType": [
      "Web Development",
      "Full Stack Development",
      "React Development",
      "Next.js Development",
      "Custom Web Applications",
      "Responsive Web Design",
      "API Development",
      "Database Design"
    ],
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://merveucar.dev",
      "serviceType": "Online"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
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
