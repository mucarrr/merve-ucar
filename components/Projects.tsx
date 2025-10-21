"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaGithub, FaCode, FaCalendar, FaStar, FaCodeBranch, FaHourglassHalf } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  language: string;
  updatedAt: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  featured: boolean;
  category: string;
  order: number;
}

export default function 
Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Türkçe çeviriler
  const turkishTranslations: { [key: string]: { title: string; description: string; longDescription: string } } = {
    'Education Website Udemig': {
      title: 'Eğitim Platformu Udemig',
      description: 'Kurs yönetimi ile eğitim platformu.',
      longDescription: 'Kurs listeleri, kullanıcı kaydı ve öğrenme yönetim sistemi ile kapsamlı eğitim web sitesi. Modern web teknolojileri ile geliştirildi.'
    },
    'Map Integration App': {
      title: 'Harita Entegrasyon Uygulaması',
      description: 'Konum servisleri ile interaktif harita uygulaması.',
      longDescription: 'Konum takibi, işaretçiler ve rota planlama ile interaktif harita uygulaması. Gerçek zamanlı konum güncellemeleri ve özel işaretçiler içerir.'
    },
    'MERN Stack Post Actions': {
      title: 'MERN Stack Sosyal Medya',
      description: 'MERN stack ile sosyal medya platformu.',
      longDescription: 'Gönderiler, beğeniler, yorumlar ve kullanıcı etkileşimleri ile tam özellikli sosyal medya platformu. Tam MERN stack ile geliştirildi.'
    },
    'Filmboxx Movie Website': {
      title: 'Filmboxx Film Sitesi',
      description: 'Gelişmiş film izleme platformu.',
      longDescription: 'Kullanıcı kimlik doğrulama, film önerileri ve izleme özellikleri ile sofistike film izleme platformu. Modern web teknolojileri ile geliştirildi.'
    },
    'Job Application Tracker Redux': {
      title: 'İş Başvuru Takip Sistemi',
      description: 'Redux ile iş başvuru yönetim sistemi.',
      longDescription: 'Durum yönetimi, mülakat planlama ve ilerleme takibi ile kapsamlı iş başvuru takip sistemi. Durum yönetimi için Redux ile geliştirildi.'
    },
    'E-commerce Website React': {
      title: 'E-ticaret Sitesi React',
      description: 'React ve Redux ile modern e-ticaret platformu.',
      longDescription: 'Alışveriş sepeti, kullanıcı kimlik doğrulama, ürün yönetimi ve ödeme işleme ile özellik açısından zengin e-ticaret web sitesi. Durum yönetimi için React ve Redux ile geliştirildi.'
    },
    'E-commerce Webpage': {
      title: 'E-ticaret Web Sayfası',
      description: 'Modern tasarım ile responsive e-ticaret web sitesi.',
      longDescription: 'Ürün kataloğu, alışveriş sepeti ve kullanıcı kimlik doğrulama ile güzel ve responsive e-ticaret web sitesi. Modern web teknolojileri ile geliştirildi.'
    },
    'Tour Project Backend': {
      title: 'Tur Projesi Backend',
      description: 'Tur rezervasyon platformu için backend API.',
      longDescription: 'Kullanıcı kimlik doğrulama, tur yönetimi ve rezervasyon sistemi ile tur rezervasyon için sağlam backend sistemi.'
    },
    'Film Website': {
      title: 'Film Web Sitesi',
      description: 'Film veritabanı ve bilgi web sitesi.',
      longDescription: 'Film veritabanı, puanlar, incelemeler ve kullanıcı etkileşimleri ile kapsamlı film web sitesi. Arama, filtreleme ve detaylı film bilgileri özelliklerini içerir.'
    },
    'Recipe App Fullstack': {
      title: 'Tarif Uygulaması Fullstack',
      description: 'Full-stack tarif paylaşım platformu.',
      longDescription: 'Kullanıcı kimlik doğrulama, tarif yönetimi ve sosyal özellikler ile kapsamlı tarif paylaşım platformu.'
    },
    'Gmail Clone': {
      title: 'Gmail Klonu',
      description: 'Gmail benzeri arayüz ile e-posta istemci uygulaması.',
      longDescription: 'Gelen kutusu yönetimi, e-posta oluşturma ve gerçek zamanlı güncellemeler ile Gmail ilhamlı tasarıma sahip modern e-posta istemcisi.'
    },
    'Hotel App TanStack': {
      title: 'Otel Uygulaması TanStack',
      description: 'TanStack Query ile otel rezervasyon uygulaması.',
      longDescription: 'Gerçek zamanlı müsaitlik, rezervasyon yönetimi ve kullanıcı kimlik doğrulama ile modern otel rezervasyon platformu. Verimli veri yönetimi için TanStack Query ile geliştirildi.'
    },
    'Car Rental TypeScript': {
      title: 'Araç Kiralama TypeScript',
      description: 'TypeScript ile full-stack araç kiralama uygulaması.',
      longDescription: 'Kullanıcı kimlik doğrulama, araç rezervasyon sistemi, ödeme entegrasyonu ve admin paneli ile tam araç kiralama platformu. Modern TypeScript stack ile geliştirildi.'
    },
    'JS Issue Tracker': {
      title: 'JS Sorun Takip Sistemi',
      description: 'Sorun takibi ve proje yönetim aracı.',
      longDescription: 'Proje yönetimi, hata takibi ve ekip işbirliği özellikleri ile yazılım geliştirme ekipleri için güçlü sorun takip sistemi.'
    },
    'Chat App WebSocket': {
      title: 'WebSocket Chat Uygulaması',
      description: 'WebSocket teknolojisi ile gerçek zamanlı sohbet.',
      longDescription: 'Anlık mesajlaşma için WebSocket ile geliştirilmiş gerçek zamanlı sohbet uygulaması. Özel sohbetler, grup mesajlaşması ve gerçek zamanlı bildirimler özelliklerini içerir.'
    },
    'Admin Dashboard Next.js': {
      title: 'Admin Dashboard Next.js',
      description: 'Next.js ve TypeScript ile modern admin dashboard.',
      longDescription: 'Kullanıcı yönetimi, analitik, veri görselleştirme ve responsive tasarım özellikleri ile kapsamlı admin dashboard. Next.js 14, TypeScript ve modern UI bileşenleri ile geliştirildi.'
    },
    'Fiverr Clone Fullstack': {
      title: 'Fiverr Klonu Fullstack',
      description: 'Full-stack freelance pazar yeri platformu.',
      longDescription: 'Kullanıcı profilleri, hizmet listeleri, mesajlaşma sistemi ve ödeme entegrasyonu ile Fiverr benzeri tam freelance pazar yeri.'
    },
    'Travel Map Backend': {
      title: 'Seyahat Haritası Backend',
      description: 'Seyahat haritalama uygulaması için backend.',
      longDescription: 'Konum servisleri, rota planlama ve seyahat önerileri ile seyahat haritalama için backend servisi.'
    },
    'Car Project Backend': {
      title: 'Araç Projesi Backend',
      description: 'Araç kiralama sistemi için backend.',
      longDescription: 'Rezervasyon yönetimi, kullanıcı kimlik doğrulama ve ödeme işleme ile araç kiralama için backend servisi.'
    },
    'Guitar Worlds': {
      title: 'Gitar Dünyaları',
      description: 'Gitar mağazası ve öğrenme platformu.',
      longDescription: 'Ürün kataloğu, dersler ve topluluk özellikleri ile kapsamlı gitar mağazası web sitesi. Gitar meraklıları için geliştirildi.'
    }
  };

  // Proje başlığını ve açıklamasını dile göre çevir
  const getTranslatedProject = (project: Project) => {
    // Eğer dil Türkçe ise çeviri yap, değilse orijinal İngilizce'yi döndür
    if (currentLanguage === 'tr') {
      const translation = turkishTranslations[project.title];
      if (translation) {
        return {
          ...project,
          title: translation.title,
          description: translation.description,
          longDescription: translation.longDescription
        };
      }
    }
    return project; // İngilizce için orijinal veriyi döndür
  };

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      
      if (data.success && data.projects) {
        setProjects(data.projects);
      } else {
        throw new Error('API response error');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "TypeScript":
        return "bg-blue-500";
      case "JavaScript":
        return "bg-yellow-500";
      case "React":
        return "bg-cyan-500";
      case "Next.js":
        return "bg-gray-800";
      case "Node.js":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  // Floating shapes - Hero'daki ile aynı
  const shapes = [
    { size: 100, x: "10%", y: "20%", delay: 0 },
    { size: 150, x: "75%", y: "15%", delay: 0.5 },
    { size: 80, x: "15%", y: "70%", delay: 1 },
    { size: 120, x: "75%", y: "75%", delay: 0.7 },
    { size: 60, x: "50%", y: "10%", delay: 1.2 },
  ];

  // Loading state için de currentLanguage güncellenmesini bekle
  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentLanguage(customEvent.detail);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  if (loading || !mounted) {
    return (
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-f8f7f4 dark:bg-gray-950 min-h-screen overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 backdrop-blur-3xl"
              style={{
                width: shape.size,
                height: shape.size,
                left: shape.x,
                top: shape.y,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCode className="text-4xl text-amber-500" />
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {mounted ? t.projectsTitle : 'Projects'}
              </h1>
            </div>
          </motion.div>

          <div className="text-center flex flex-col items-center gap-4 py-20">
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaHourglassHalf className="text-5xl text-amber-500" />
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {mounted ? t.projectsLoading : 'Loading...'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-f8f7f4 dark:bg-gray-950 min-h-screen overflow-hidden">
      {/* Animated Background Shapes - Hero'daki ile birebir aynı */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 backdrop-blur-3xl"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 mb-4 font-mono text-sm">
            <FaCode />
            <span>{'<projects>'}</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent gradient-animate">
              {t.projectsTitle}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.projectsDescription}
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 mt-8 font-mono text-sm">
            <FaCode className="rotate-180" />
            <span>{'</projects>'}</span>
          </div>
        </motion.div>


        {projects.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Henüz proje bulunamadı.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const translatedProject = getTranslatedProject(project);
              return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-0 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 border border-white/20 dark:border-gray-800/50 group flex flex-col h-full overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  {translatedProject.image ? (
                    <img
                      src={translatedProject.image}
                      alt={`${translatedProject.title} demo`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-amber-800/30 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <FaCode size={40} className="text-gray-900" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg font-bold">
                          {translatedProject.title}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                          {translatedProject.category}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  
                  {/* GitHub Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <a
                      href={translatedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(translatedProject.language)} shadow-sm`}></div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {translatedProject.title}
                      </h3>
                    </div>
                    {/* Featured Badge */}
                    {translatedProject.featured && (
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-1 py-0.5 rounded-full text-xs font-normal shadow-sm ml-2 flex-shrink-0">
                        {t.featured}
                      </div>
                    )}
                  </div>

                {/* Project Content - Flex grow to push button to bottom */}
                <div className="flex flex-col flex-grow">
                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                    {translatedProject.longDescription || translatedProject.description || 'Açıklama bulunmuyor.'}
                  </p>

                  {/* Technologies */}
                  {translatedProject.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {translatedProject.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Category */}
                  <div className="mb-6">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium">
                      {translatedProject.category}
                    </span>
                  </div>
                </div>

                  {/* GitHub Link Button - Always at bottom */}
                  <a
                    href={translatedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-medium hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/30 dark:hover:to-orange-900/30 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mt-auto group/btn"
                  >
                    <FaGithub className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>{t.viewOnGitHub}</span>
                  </a>
                </div>
              </motion.div>
              );
            })}
          </div>
        )}

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            {t.moreProjects}
          </p>
          <a
            href="https://github.com/mucarrr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaGithub size={20} />
            {t.visitProfile}
          </a>
        </motion.div>
      </div>
    </section>
  );
}