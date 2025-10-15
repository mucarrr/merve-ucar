"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Finaghy Consultancy",
    role: "Full Stack Developer",
    period: "Haziran 2025 - Devam Ediyor",
    location: "Toronto, Kanada",
    description: "MERN stack ve Next.js ile full stack web uygulamaları geliştiriyorum. RESTful API'ler, responsive arayüzler ve Docker ile containerization üzerine çalışıyorum.",
    highlights: [
      "MongoDB, Express.js, React.js, Node.js (MERN) ile web uygulamaları geliştirme",
      "Next.js ile server-side rendering implementasyonu",
      "RESTful API tasarımı ve geliştirmesi",
      "Docker ile containerization ve environment yönetimi",
      "Git ve Agile/Scrum metodolojileri ile ekip çalışması",
    ],
  },
  {
    company: "Juniors",
    role: "Frontend Developer (Part-Time)",
    period: "Aralık 2024 - Temmuz 2025",
    location: "İstanbul, Türkiye",
    description: "JWT authentication, Redux Toolkit state management ve Tailwind CSS ile responsive arayüzler geliştirdim.",
    highlights: [
      "JWT tabanlı authentication sistemi ve token refresh mekanizması",
      "Tailwind CSS ile responsive UI tasarımı",
      "Redux Toolkit ile state management",
      "Proje yönetim sistemi (CRUD operasyonları)",
      "Axios ile RESTful API entegrasyonu ve custom interceptors",
      "Error boundary ve merkezi hata yönetimi",
    ],
  },
  {
    company: "Didiyos",
    role: "Frontend Developer",
    period: "Ocak 2024 - Mayıs 2025",
    location: "Stockholm, İsveç",
    description: "React, TypeScript ve Redux ile ölçeklenebilir frontend uygulamaları geliştirdim. TanStack Query ile server-state yönetimi ve performans optimizasyonları yaptım.",
    highlights: [
      "JavaScript, React ve Redux ile scalable frontend geliştirme",
      "TypeScript migrasyon ve type safety iyileştirmeleri",
      "TanStack Query ile server-state management ve caching",
      "Tailwind CSS ile modern UX/UI implementasyonu",
      "Code splitting, lazy loading ve memoization ile performans optimizasyonu",
      "Code review ve reusable component geliştirme",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            İş Deneyimlerim
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
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <FaBriefcase />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-500 space-y-1 mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

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

