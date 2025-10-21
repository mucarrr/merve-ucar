"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const getExperiences = (currentLanguage: string) => [
  {
    company: "Finaghy Consultancy",
    role: "Full Stack Developer",
    period: currentLanguage === 'tr' ? "Haziran 2025 - Devam Ediyor" : "June 2025 - Present",
    location: currentLanguage === 'tr' ? "Toronto, Kanada" : "Toronto, Canada",
    description: currentLanguage === 'tr' 
      ? "MERN stack ve Next.js ile full stack web uygulamaları geliştiriyorum. RESTful API'ler, responsive arayüzler ve Docker ile containerization üzerine çalışıyorum."
      : "I develop full stack web applications with MERN stack and Next.js. I work on RESTful APIs, responsive interfaces and containerization with Docker.",
    highlights: currentLanguage === 'tr' ? [
      "MongoDB, Express.js, React.js, Node.js (MERN) ile web uygulamaları geliştirme",
      "Next.js ile server-side rendering implementasyonu",
      "RESTful API tasarımı ve geliştirmesi",
      "Docker ile containerization ve environment yönetimi",
      "Git ve Agile/Scrum metodolojileri ile ekip çalışması",
    ] : [
      "Web application development with MongoDB, Express.js, React.js, Node.js (MERN)",
      "Server-side rendering implementation with Next.js",
      "RESTful API design and development",
      "Containerization and environment management with Docker",
      "Team collaboration with Git and Agile/Scrum methodologies",
    ],
  },
  {
    company: "Juniors",
    role: "Frontend Developer (Part-Time)",
    period: currentLanguage === 'tr' ? "Aralık 2024 - Temmuz 2025" : "December 2024 - July 2025",
    location: currentLanguage === 'tr' ? "İstanbul, Türkiye" : "Istanbul, Turkey",
    description: currentLanguage === 'tr'
      ? "JWT authentication, Redux Toolkit state management ve Tailwind CSS ile responsive arayüzler geliştirdim."
      : "I developed responsive interfaces with JWT authentication, Redux Toolkit state management and Tailwind CSS.",
    highlights: currentLanguage === 'tr' ? [
      "JWT tabanlı authentication sistemi ve token refresh mekanizması",
      "Tailwind CSS ile responsive UI tasarımı",
      "Redux Toolkit ile state management",
      "Proje yönetim sistemi (CRUD operasyonları)",
      "Axios ile RESTful API entegrasyonu ve custom interceptors",
      "Error boundary ve merkezi hata yönetimi",
    ] : [
      "JWT-based authentication system and token refresh mechanism",
      "Responsive UI design with Tailwind CSS",
      "State management with Redux Toolkit",
      "Project management system (CRUD operations)",
      "RESTful API integration with Axios and custom interceptors",
      "Error boundary and centralized error management",
    ],
  },
  {
    company: "Didiyos",
    role: "Frontend Developer",
    period: currentLanguage === 'tr' ? "Ocak 2024 - Mayıs 2025" : "January 2024 - May 2025",
    location: currentLanguage === 'tr' ? "Stockholm, İsveç" : "Stockholm, Sweden",
    description: currentLanguage === 'tr'
      ? "React, TypeScript ve Redux ile ölçeklenebilir frontend uygulamaları geliştirdim. TanStack Query ile server-state yönetimi ve performans optimizasyonları yaptım."
      : "I developed scalable frontend applications with React, TypeScript and Redux. I implemented server-state management with TanStack Query and performance optimizations.",
    highlights: currentLanguage === 'tr' ? [
      "JavaScript, React ve Redux ile scalable frontend geliştirme",
      "TypeScript migrasyon ve type safety iyileştirmeleri",
      "TanStack Query ile server-state management ve caching",
      "Tailwind CSS ile modern UX/UI implementasyonu",
      "Code splitting, lazy loading ve memoization ile performans optimizasyonu",
      "Code review ve reusable component geliştirme",
    ] : [
      "Scalable frontend development with JavaScript, React and Redux",
      "TypeScript migration and type safety improvements",
      "Server-state management and caching with TanStack Query",
      "Modern UX/UI implementation with Tailwind CSS",
      "Performance optimization with code splitting, lazy loading and memoization",
      "Code review and reusable component development",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentLanguage(customEvent.detail);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const experiences = getExperiences(currentLanguage);

  // Floating shapes - Hero'daki ile aynı
  const shapes = [
    { size: 100, x: "10%", y: "20%", delay: 0 },
    { size: 150, x: "75%", y: "15%", delay: 0.5 },
    { size: 80, x: "15%", y: "70%", delay: 1 },
    { size: 120, x: "75%", y: "75%", delay: 0.7 },
    { size: 60, x: "50%", y: "10%", delay: 1.2 },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-f8f7f4 dark:bg-gray-950 min-h-screen overflow-hidden"
    >
      {/* Animated Background Shapes - Hero'daki ile birebir aynı */}
      <div className="absolute inset-0 -z-10">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-amber-400/10 to-orange-500/10 backdrop-blur-3xl"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            {t.experienceTitle}
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                  {exp.role}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-amber-600 dark:text-amber-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

