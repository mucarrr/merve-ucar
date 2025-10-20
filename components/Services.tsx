"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  FaGlobe, 
  FaLaptopCode, 
  FaMobile, 
  FaLightbulb, 
  FaTools, 
  FaSearch,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const getServices = (currentLanguage: string) => [
  {
    icon: FaGlobe,
    title: currentLanguage === 'tr' ? "Web Sitesi Geliştirme" : "Website Development",
    description: currentLanguage === 'tr' 
      ? "Kurumsal web siteleri, e-ticaret siteleri ve blog geliştirme"
      : "Corporate websites, e-commerce sites and blog development",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaLaptopCode,
    title: currentLanguage === 'tr' ? "Web Uygulaması" : "Web Application",
    description: currentLanguage === 'tr' 
      ? "Dashboard, admin paneli ve CRM sistemleri"
      : "Dashboard, admin panels and CRM systems",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FaTools,
    title: currentLanguage === 'tr' ? "Bakım ve Destek" : "Maintenance & Support",
    description: currentLanguage === 'tr' 
      ? "Site güncellemeleri, güvenlik yamaları ve teknik destek"
      : "Site updates, security patches and technical support",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: FaSearch,
    title: currentLanguage === 'tr' ? "SEO ve Optimizasyon" : "SEO & Optimization",
    description: currentLanguage === 'tr' 
      ? "Site hızlandırma, SEO optimizasyonu ve analytics"
      : "Site speed optimization, SEO and analytics setup",
    color: "from-indigo-500 to-blue-500"
  }
];

export default function Services() {
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

  const services = getServices(currentLanguage);

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
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
              {currentLanguage === 'tr' ? 'Hizmet' : 'Service'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {currentLanguage === 'tr' ? 'Kategorileri' : 'Categories'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {currentLanguage === 'tr' 
              ? 'Freelance olarak sunduğum web geliştirme hizmetleri'
              : 'Web development services I offer as a freelancer'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
