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
    "jobTitle": ["Freelance Frontend Developer", "Freelance Backend Developer", "Freelance Full Stack Developer"],
    "url": "https://merveucar.dev",
    "image": "https://merveucar.dev/favicon.svg",
    "sameAs": [
      "https://github.com/mucarrr",
      "https://www.linkedin.com/in/ucar-merve/"
    ],
    "knowsAbout": [
      // Frontend
      "React", "Next.js", "TypeScript", "Frontend Development", "UI Development", "Client-side Development",
      // Backend
      "Node.js", "MongoDB", "Backend Development", "API Development", "Server-side Development", "Database Design",
      // Full Stack
      "Full Stack Development", "MERN Stack", "Web Development",
      // General
      "Freelance Web Development", "Custom Web Applications", "Responsive Design", "RESTful APIs"
    ],
    "email": "mucar2326@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Athens",
      "addressCountry": "GR"
    },
    "description": "Merve Uçar - Freelance Frontend Developer, Backend Developer & Full Stack Developer. React, Next.js (Frontend), Node.js, MongoDB (Backend), MERN Stack (Full Stack). Available for hire as frontend developer, backend developer, or full stack developer.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Boğaziçi University"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Freelance Frontend, Backend & Full Stack Development Services",
    "description": "Professional freelance web development services. Frontend development (React, Next.js, TypeScript), Backend development (Node.js, MongoDB, APIs), Full Stack development (MERN Stack). Custom web solutions, responsive design, and modern web applications.",
    "provider": {
      "@type": "Person",
      "name": "Merve Uçar",
      "url": "https://merveucar.dev",
      "email": "mucar2326@gmail.com"
    },
    "serviceType": [
      // Frontend Services
      "Frontend Development", "React Development", "Next.js Development", "UI Development", "Client-side Development",
      // Backend Services
      "Backend Development", "Node.js Development", "API Development", "Server-side Development", "Database Design", "MongoDB Development",
      // Full Stack Services
      "Full Stack Development", "Web Development", "MERN Stack Development",
      // General Services
      "Custom Web Applications", "Responsive Web Design", "TypeScript Development"
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
      <>
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen">
          <Hero />
          <Services />
          <About />
          <Skills />
          <Stats />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </>
    </>
  );
}
