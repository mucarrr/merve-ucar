"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Türkçe çeviriler - Yeni projeler
  const turkishTranslations: { [key: string]: { title: string; description: string; longDescription: string } } = {
    'Premium Car Rental Service': {
      title: 'Premium Araç Kiralama Hizmeti',
      description: 'Kolay rezervasyon ve güvenli ödemeli modern araç kiralama platformu',
      longDescription: 'TypeScript ile geliştirilmiş modern araç kiralama platformu. Kullanıcılar kolayca araç arayabilir, rezervasyon yapabilir ve güvenli ödeme gerçekleştirebilir. Responsive tasarım ve kullanıcı dostu arayüz.'
    },
    'Smart QR Menu System': {
      title: 'Akıllı QR Menü Sistemi',
      description: 'QR kod teknolojisi ile temassız dijital menü sistemi',
      longDescription: 'QR kod teknolojisi kullanarak restoranların dijital menü sistemini oluşturan uygulama. Müşteriler QR kod okutarak menüyü görüntüleyebilir ve sipariş verebilir. Temassız hizmet deneyimi sunar.'
    },
    'Complete Restaurant Management': {
      title: 'Komple Restoran Yönetimi',
      description: 'Stok ve müşteri takipli kapsamlı restoran yönetim sistemi',
      longDescription: 'Restoranlar için geliştirilmiş kapsamlı yönetim sistemi. Sipariş yönetimi, stok takibi, müşteri veritabanı ve raporlama özellikleri içerir. Modern web teknolojileri ile geliştirildi.'
    },
    'Property Search Platform': {
      title: 'Emlak Arama Platformu',
      description: 'Akıllı arama ve gelişmiş filtreleme ile emlak platformu',
      longDescription: 'Emlak sektörü için geliştirilmiş modern platform. Akıllı arama algoritmaları, gelişmiş filtreleme seçenekleri ve harita entegrasyonu ile kullanıcıların ideal evlerini bulmasını kolaylaştırır.'
    },
    'Modern E-commerce Store': {
      title: 'Modern E-ticaret Mağazası',
      description: 'Güvenli ödeme ve hızlı teslimat ile tam donanımlı online mağaza',
      longDescription: 'Modern e-ticaret deneyimi sunan kapsamlı online mağaza. Güvenli ödeme sistemleri, stok yönetimi, kullanıcı hesapları ve sipariş takibi özellikleri ile tam donanımlı e-ticaret çözümü.'
    },
    'Interactive Learning Platform': {
      title: 'İnteraktif Öğrenme Platformu',
      description: 'İnteraktif dersler ve ilerleme takipli online eğitim platformu',
      longDescription: 'Öğrenciler ve eğitmenler için tasarlanmış kapsamlı online eğitim platformu. Video dersler, quizler, ödev sistemi ve detaylı ilerleme raporları ile modern eğitim deneyimi sunar.'
    },
    'Ice Cream Business Manager': {
      title: 'Dondurma İşletme Yöneticisi',
      description: 'Ürün ve sipariş takipli dondurma dükkanı yönetim sistemi',
      longDescription: 'Dondurma dükkanları için özel olarak tasarlanmış yönetim sistemi. Ürün kataloğu, sipariş yönetimi, müşteri takibi ve satış raporları ile işletme verimliliğini artırır.'
    },
    'Premium Shoe Store': {
      title: 'Premium Ayakkabı Mağazası',
      description: 'Gelişmiş filtrelerle modern ayakkabı alışveriş deneyimi',
      longDescription: 'Ayakkabı severler için tasarlanmış modern e-ticaret platformu. Gelişmiş filtreleme, ürün karşılaştırma ve güvenli ödeme seçenekleri ile mükemmel alışveriş deneyimi sunar.'
    },
    'Professional Tech Services': {
      title: 'Profesyonel Teknoloji Hizmetleri',
      description: 'Teknoloji hizmet şirketleri için kurumsal web sitesi',
      longDescription: 'Teknoloji şirketleri için profesyonel kurumsal web sitesi. Hizmet tanıtımları, proje portföyü, iletişim formları ve modern tasarım ile güvenilir kurumsal imaj oluşturur.'
    },
    'Fast Food Delivery App': {
      title: 'Hızlı Yemek Teslimat Uygulaması',
      description: 'Gerçek zamanlı takip ve hızlı teslimatla yemek sipariş platformu',
      longDescription: 'Restoranlar ve müşteriler arasında köprü kuran yemek sipariş platformu. Gerçek zamanlı sipariş takibi, güvenli ödeme ve hızlı teslimat seçenekleri ile modern yemek sipariş deneyimi.'
    },
    'Smart Hotel Reservation': {
      title: 'Akıllı Otel Rezervasyonu',
      description: 'Dinamik fiyatlandırma ve kolay rezervasyon ile otel sistemi',
      longDescription: 'Otel işletmeleri için geliştirilmiş rezervasyon yönetim sistemi. Oda müsaitlik takibi, dinamik fiyatlandırma, müşteri yönetimi ve detaylı raporlama özellikleri ile kapsamlı çözüm.'
    },
    'Video Sharing Network': {
      title: 'Video Paylaşım Ağı',
      description: 'YouTube benzeri modern arayüzlü video platformu',
      longDescription: 'YouTube benzeri video paylaşım ve izleme platformu. Video yükleme, kategorilere ayırma, beğeni/yorum sistemi ve kullanıcı kanalları ile kapsamlı video deneyimi sunar.'
    },
    'Travel Map API Service': {
      title: 'Seyahat Haritası API Servisi',
      description: 'Konum ve rota yönetimi için backend servisi',
      longDescription: 'Seyahat uygulamaları için geliştirilmiş backend servisi. Konum veritabanı, rota hesaplama, gezi planlama ve kullanıcı etkileşimleri için API servisleri sunar.'
    },
    'Live Chat Messenger': {
      title: 'Canlı Sohbet Messenger',
      description: 'WebSocket teknolojisi ile gerçek zamanlı mesajlaşma',
      longDescription: 'WebSocket teknolojisi kullanarak geliştirilmiş gerçek zamanlı mesajlaşma uygulaması. Anlık mesaj gönderimi, grup sohbetleri, dosya paylaşımı ve kullanıcı durumu takibi özellikleri.'
    },
    'Social Recipe Network': {
      title: 'Sosyal Tarif Ağı',
      description: 'Sosyal özelliklerle tarif paylaşım platformu',
      longDescription: 'Yemek severler için tasarlanmış tarif paylaşım platformu. Tarif yayınlama, kategorilere ayırma, beğeni sistemi, yorumlar ve kullanıcı profilleri ile sosyal yemek deneyimi.'
    },
    'COVID-19 Data Tracker': {
      title: 'COVID-19 Veri Takipçisi',
      description: 'Gerçek zamanlı pandemi verisi görselleştirme haritası',
      longDescription: 'COVID-19 salgın verilerini görselleştiren interaktif harita uygulaması. Gerçek zamanlı veri güncellemeleri, bölgesel istatistikler ve trend analizleri ile kapsamlı salgın takibi.'
    },
    'Business Admin Panel': {
      title: 'İşletme Yönetim Paneli',
      description: 'Analitik ve raporlamalı kapsamlı yönetim paneli',
      longDescription: 'İşletmeler için geliştirilmiş kapsamlı yönetim paneli. Kullanıcı yönetimi, veri analizi, raporlama, sistem ayarları ve gerçek zamanlı dashboard ile tam kontrol sağlar.'
    },
    'React Shopping Store': {
      title: 'React Alışveriş Mağazası',
      description: 'Kusursuz kullanıcı deneyimli modern e-ticaret',
      longDescription: 'React teknolojisi ile geliştirilmiş modern e-ticaret mağazası. Responsive tasarım, hızlı yükleme, güvenli ödeme ve kullanıcı dostu arayüz ile mükemmel alışveriş deneyimi.'
    },
    'Online Bookstore Hub': {
      title: 'Online Kitap Mağazası Merkezi',
      description: 'Akıllı önerilerle kitap pazarı',
      longDescription: 'Kitap severler için tasarlanmış kapsamlı online mağaza. Geniş kitap kataloğu, akıllı öneri sistemi, yazar bilgileri ve kullanıcı yorumları ile zengin kitap alışveriş deneyimi.'
    },
  };

  const getTranslatedProject = (project: Project, lang: string) => {
    if (lang === 'tr' && turkishTranslations[project.title]) {
      const translated = turkishTranslations[project.title];
      return {
        ...project,
        title: translated.title,
        description: translated.description,
        longDescription: translated.longDescription,
      };
    }
    return project; // İngilizce için orijinal veriyi döndür
  };

  const translatedPreview = previewProject ? getTranslatedProject(previewProject, currentLanguage) : null;

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
      setProjects(data.projects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 mb-4 font-mono text-sm">
            <FaCode />
            <span>{'<projects>'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projectsTitle}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {t.projectsDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const translatedProject = getTranslatedProject(project, currentLanguage);
            const updatedAt = new Date(project.updatedAt).toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <motion.article
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/90 to-amber-50/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/30 dark:border-amber-700/30 overflow-hidden flex flex-col h-full"
              >
                <div
                  className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden cursor-pointer group"
                  onClick={() => setPreviewProject(project)}
                  style={{ aspectRatio: '16/9' }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${translatedProject.title} - ${translatedProject.description} - Merve Uçar Portfolio Project`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width={400}
                      height={225}
                      style={{ aspectRatio: '16/9' }}
                    />
                  ) : (
                    <div className="text-center p-6">
                      <div className="text-gray-500 dark:text-gray-400 text-6xl mb-4">
                        <FaCode />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {translatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.category}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-1">
                      {translatedProject.title}
                    </h3>
                    {project.featured && (
                      <span className="ml-2 px-1.5 py-0.5 rounded-full text-xs font-normal bg-amber-500 text-white flex-shrink-0">
                        {t.featured}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                    {translatedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {translatedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <FaCalendar className="mr-2" />
                    <span>{updatedAt}</span>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${translatedProject.title} project on GitHub`}
                      className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gradient-to-r from-amber-400 to-orange-500 hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-amber-500/20 group"
                    >
                      <motion.div
                        className="flex items-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaGithub className="mr-2" aria-hidden="true" />
                        <span>{t.viewOnGitHub}</span>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: projects.length * 0.1 + 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/mucarrr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Merve Uçar's GitHub profile to see more projects and code examples"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-900 dark:border-amber-400 text-gray-900 dark:text-amber-400 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaGithub className="mr-3" aria-hidden="true" />
            {t.moreProjects}
          </a>
        </motion.div>
      </div>

    {/* Preview Modal */}
    <AnimatePresence>
      {previewProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60]"
            onClick={() => setPreviewProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-auto border border-amber-200/30 dark:border-amber-700/30">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {translatedPreview?.title || previewProject.title}
                </h3>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {previewProject.image && (
                <div className="w-full h-64 md:h-80 bg-gray-100 dark:bg-gray-800" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={previewProject.image}
                    alt={`${translatedPreview?.title || previewProject.title} - ${translatedPreview?.description || previewProject.description} - Merve Uçar Portfolio Project Screenshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={450}
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              )}

              <div className="p-5 space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {translatedPreview?.description || previewProject.description}
                </p>
                {previewProject.longDescription && (
                  <p className="text-gray-600 dark:text-gray-400">
                    {translatedPreview?.longDescription || previewProject.longDescription}
                  </p>
                )}

                {!!previewProject.technologies?.length && (
                  <div className="flex flex-wrap gap-2">
                    {previewProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  {previewProject.liveUrl && (
                    <a
                      href={previewProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live preview of ${translatedPreview?.title || previewProject.title} project`}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-medium shadow-md hover:shadow-amber-500/20 transition"
                    >
                      Live Preview
                    </a>
                  )}
                  {previewProject.githubUrl && (
                    <a
                      href={previewProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${translatedPreview?.title || previewProject.title} project source code on GitHub`}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
                    >
                      {t.viewOnGitHub}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </section>
  );
}