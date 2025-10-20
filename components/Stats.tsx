"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  FaCode, 
  FaProjectDiagram, 
  FaGithub, 
  FaLaptopCode, 
  FaSmile, 
  FaClock,
  FaRocket,
  FaLanguage,
  FaCertificate
} from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const getStats = (currentLanguage: string) => [
  {
    icon: FaClock,
    number: "2+",
    label: currentLanguage === 'tr' ? "Yıl Deneyim" : "Years Experience",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaProjectDiagram,
    number: "50+",
    label: currentLanguage === 'tr' ? "GitHub Projesi" : "GitHub Projects",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FaGithub,
    number: "50+",
    label: currentLanguage === 'tr' ? "GitHub Repository" : "GitHub Repositories",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: FaLaptopCode,
    number: "10+",
    label: currentLanguage === 'tr' ? "Kullanılan Teknoloji" : "Technologies Used",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FaSmile,
    number: "100%",
    label: currentLanguage === 'tr' ? "Müşteri Memnuniyeti" : "Client Satisfaction",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: FaRocket,
    number: "25+",
    label: currentLanguage === 'tr' ? "Başarılı Deployment" : "Successful Deployments",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: FaLanguage,
    number: "3",
    label: currentLanguage === 'tr' ? "Öğrenilen Dil" : "Languages Learned",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: FaCertificate,
    number: "5+",
    label: currentLanguage === 'tr' ? "Sertifika" : "Certificates",
    color: "from-violet-500 to-purple-500"
  }
];

export default function Stats() {
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

  const stats = getStats(currentLanguage);

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              {currentLanguage === 'tr' ? 'Rakamlarla' : 'By the'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {currentLanguage === 'tr' ? 'Başarılarım' : 'Numbers'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {currentLanguage === 'tr' 
              ? 'Web geliştirme yolculuğumda elde ettiğim başarılar ve deneyimler'
              : 'Achievements and experiences gained in my web development journey'
            }
          </p>
        </motion.div>

        {/* Yatay Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * stats.length]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `${stats.length * 200}px` }}
          >
            {/* İlk set */}
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={`first-${stat.label}`}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex-shrink-0 w-48"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  
                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300"
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label */}
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              );
            })}
            
            {/* İkinci set (seamless loop için) */}
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={`second-${stat.label}`}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex-shrink-0 w-48"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
