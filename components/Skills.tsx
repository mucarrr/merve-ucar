"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: FaNodeJs, color: "#FF6C37" },
    ],
  },
  {
    title: "Araçlar & Diğer",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];

const softSkills = [
  "Problem Çözme",
  "Takım Çalışması",
  "Agile/Scrum",
  "İletişim",
  "Eleştirel Düşünme",
  "Hızlı Öğrenme",
  "Zaman Yönetimi",
  "Adaptasyon",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Yeteneklerim
          </h2>

          {/* Technical Skills */}
          <div className="space-y-12 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-amber-600 dark:text-amber-400">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.2 + index * 0.05,
                        }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-3 border border-gray-200 dark:border-gray-800"
                      >
                        <Icon
                          size={48}
                          style={{ color: skill.color }}
                          className="dark:opacity-90"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-amber-600 dark:text-amber-400">
              Kişisel Beceriler
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

