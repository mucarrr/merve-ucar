/**
 * Public GitHub portfolio projects shown on /projects.
 * Source: production MongoDB snapshot (merveucar.dev).
 */

export interface GithubProjectContent {
  title: string;
  description: string;
  longDescription: string;
}

export interface GithubProject {
  id: string;
  githubUrl: string;
  language: string;
  updatedAt: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  featured: boolean;
  category: string;
  order: number;
  en: GithubProjectContent;
  tr: GithubProjectContent;
}

export const githubProjects: GithubProject[] = [
  {
    id: "car-rental-typescript",
    githubUrl: "https://github.com/mucarrr/Car-rental-typescript",
    language: "TypeScript",
    updatedAt: "2025-10-21",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Car-rental-typescript/main/car-rental.gif",
    liveUrl: "",
    featured: true,
    category: "Web Application",
    order: 1,
    en: {
      title: "Premium Car Rental Service",
      description: "Modern car rental platform with easy booking and secure payments",
      longDescription: "TypeScript-powered modern car rental platform. Users can easily search for vehicles, make reservations, and complete secure payments. Features responsive design and user-friendly interface.",
    },
    tr: {
      title: "Premium Araç Kiralama Hizmeti",
      description: "Kolay rezervasyon ve güvenli ödemeli modern araç kiralama platformu",
      longDescription: "TypeScript ile geliştirilmiş modern araç kiralama platformu. Kullanıcılar kolayca araç arayabilir, rezervasyon yapabilir ve güvenli ödeme gerçekleştirebilir. Responsive tasarım ve kullanıcı dostu arayüz.",
    },
  },
  {
    id: "qr-menu-project",
    githubUrl: "https://github.com/mucarrr/QR-Menu-Project",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "QR Code", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/QR-Menu-Project/main/qr-menu1.gif",
    liveUrl: "",
    featured: true,
    category: "Mobile-First",
    order: 2,
    en: {
      title: "Smart QR Menu System",
      description: "Contactless digital menu system with QR code technology",
      longDescription: "Digital menu system for restaurants using QR code technology. Customers can view menus and place orders by scanning QR codes. Provides a contactless service experience.",
    },
    tr: {
      title: "Akıllı QR Menü Sistemi",
      description: "QR kod teknolojisi ile temassız dijital menü sistemi",
      longDescription: "QR kod teknolojisi kullanarak restoranların dijital menü sistemini oluşturan uygulama. Müşteriler QR kod okutarak menüyü görüntüleyebilir ve sipariş verebilir. Temassız hizmet deneyimi sunar.",
    },
  },
  {
    id: "restaurant-project",
    githubUrl: "https://github.com/mucarrr/Restaurant-Project",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: "https://raw.githubusercontent.com/mucarrr/Restaurant-Project/main/chefs-place.gif",
    liveUrl: "",
    featured: true,
    category: "Business Solution",
    order: 3,
    en: {
      title: "Complete Restaurant Management",
      description: "Comprehensive restaurant management system with inventory and customer tracking",
      longDescription: "Comprehensive management system developed for restaurants. Includes order management, inventory tracking, customer database, and reporting features. Built with modern web technologies.",
    },
    tr: {
      title: "Komple Restoran Yönetimi",
      description: "Stok ve müşteri takipli kapsamlı restoran yönetim sistemi",
      longDescription: "Restoranlar için geliştirilmiş kapsamlı yönetim sistemi. Sipariş yönetimi, stok takibi, müşteri veritabanı ve raporlama özellikleri içerir. Modern web teknolojileri ile geliştirildi.",
    },
  },
  {
    id: "real-estate-project",
    githubUrl: "https://github.com/mucarrr/Real-Estate-Project",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Map Integration", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Real-Estate-Project/main/emaartech.gif",
    liveUrl: "",
    featured: true,
    category: "Web Application",
    order: 4,
    en: {
      title: "Property Search Platform",
      description: "Real estate platform with intelligent search and advanced filtering",
      longDescription: "Modern platform developed for the real estate sector. Smart search algorithms, advanced filtering options, and map integration help users find their ideal homes.",
    },
    tr: {
      title: "Emlak Arama Platformu",
      description: "Akıllı arama ve gelişmiş filtreleme ile emlak platformu",
      longDescription: "Emlak sektörü için geliştirilmiş modern platform. Akıllı arama algoritmaları, gelişmiş filtreleme seçenekleri ve harita entegrasyonu ile kullanıcıların ideal evlerini bulmasını kolaylaştırır.",
    },
  },
  {
    id: "ecommerce-website-rymo",
    githubUrl: "https://github.com/mucarrr/Ecommerce-Website-Rymo",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Ecommerce-Website-Rymo/main/rymo1.gif",
    liveUrl: "",
    featured: true,
    category: "E-commerce",
    order: 5,
    en: {
      title: "Modern E-commerce Store",
      description: "Full-featured online store with secure payments and fast delivery",
      longDescription: "Comprehensive online store offering a modern e-commerce experience. Full-featured e-commerce solution with secure payment systems, inventory management, user accounts, and order tracking.",
    },
    tr: {
      title: "Modern E-ticaret Mağazası",
      description: "Güvenli ödeme ve hızlı teslimat ile tam donanımlı online mağaza",
      longDescription: "Modern e-ticaret deneyimi sunan kapsamlı online mağaza. Güvenli ödeme sistemleri, stok yönetimi, kullanıcı hesapları ve sipariş takibi özellikleri ile tam donanımlı e-ticaret çözümü.",
    },
  },
  {
    id: "educational-website",
    githubUrl: "https://github.com/mucarrr/Educational-Website",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Video Streaming", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Educational-Website/main/education2.gif",
    liveUrl: "",
    featured: true,
    category: "Education",
    order: 6,
    en: {
      title: "Interactive Learning Platform",
      description: "Online education platform with interactive lessons and progress tracking",
      longDescription: "Comprehensive online education platform designed for students and instructors. Offers modern education experience with video lessons, quizzes, assignment system, and detailed progress reports.",
    },
    tr: {
      title: "İnteraktif Öğrenme Platformu",
      description: "İnteraktif dersler ve ilerleme takipli online eğitim platformu",
      longDescription: "Öğrenciler ve eğitmenler için tasarlanmış kapsamlı online eğitim platformu. Video dersler, quizler, ödev sistemi ve detaylı ilerleme raporları ile modern eğitim deneyimi sunar.",
    },
  },
  {
    id: "ice-cream-unit-test",
    githubUrl: "https://github.com/mucarrr/Ice-cream-unit-test",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Unit Testing", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Ice-cream-unit-test/main/ice-cream.gif",
    liveUrl: "",
    featured: false,
    category: "Business Solution",
    order: 7,
    en: {
      title: "Ice Cream Business Manager",
      description: "Product and order management system for ice cream shops",
      longDescription: "Management system specifically designed for ice cream shops. Increases business efficiency with product catalog, order management, customer tracking, and sales reports.",
    },
    tr: {
      title: "Dondurma İşletme Yöneticisi",
      description: "Ürün ve sipariş takipli dondurma dükkanı yönetim sistemi",
      longDescription: "Dondurma dükkanları için özel olarak tasarlanmış yönetim sistemi. Ürün kataloğu, sipariş yönetimi, müşteri takibi ve satış raporları ile işletme verimliliğini artırır.",
    },
  },
  {
    id: "shoes-app-tanstack",
    githubUrl: "https://github.com/mucarrr/Shoes-app-tanstack",
    language: "TypeScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "TypeScript", "TanStack Query", "Node.js", "MongoDB"],
    image: "https://raw.githubusercontent.com/mucarrr/Shoes-app-tanstack/main/shoe.gif",
    liveUrl: "",
    featured: false,
    category: "E-commerce",
    order: 8,
    en: {
      title: "Premium Shoe Store",
      description: "Modern shoe shopping experience with advanced filters",
      longDescription: "Modern e-commerce platform designed for shoe enthusiasts. Offers excellent shopping experience with advanced filtering, product comparison, and secure payment options.",
    },
    tr: {
      title: "Premium Ayakkabı Mağazası",
      description: "Gelişmiş filtrelerle modern ayakkabı alışveriş deneyimi",
      longDescription: "Ayakkabı severler için tasarlanmış modern e-ticaret platformu. Gelişmiş filtreleme, ürün karşılaştırma ve güvenli ödeme seçenekleri ile mükemmel alışveriş deneyimi sunar.",
    },
  },
  {
    id: "destiny-technology-services",
    githubUrl: "https://github.com/mucarrr/Destiny-Technology-Services",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
    image: "https://raw.githubusercontent.com/mucarrr/Destiny-Technology-Services/main/destiny.gif",
    liveUrl: "",
    featured: false,
    category: "Corporate Website",
    order: 9,
    en: {
      title: "Professional Tech Services",
      description: "Corporate website for technology service companies",
      longDescription: "Professional corporate website for technology companies. Creates a reliable corporate image with service introductions, project portfolio, contact forms, and modern design.",
    },
    tr: {
      title: "Profesyonel Teknoloji Hizmetleri",
      description: "Teknoloji hizmet şirketleri için kurumsal web sitesi",
      longDescription: "Teknoloji şirketleri için profesyonel kurumsal web sitesi. Hizmet tanıtımları, proje portföyü, iletişim formları ve modern tasarım ile güvenilir kurumsal imaj oluşturur.",
    },
  },
  {
    id: "take-away-food-ordering",
    githubUrl: "https://github.com/mucarrr/Take-away-food-ordering",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Real-time", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Take-away-food-ordering/main/takeaway.gif",
    liveUrl: "",
    featured: false,
    category: "Food & Delivery",
    order: 10,
    en: {
      title: "Fast Food Delivery App",
      description: "Food ordering platform with real-time tracking and quick delivery",
      longDescription: "Food ordering platform that bridges restaurants and customers. Modern food ordering experience with real-time order tracking, secure payment, and fast delivery options.",
    },
    tr: {
      title: "Hızlı Yemek Teslimat Uygulaması",
      description: "Gerçek zamanlı takip ve hızlı teslimatla yemek sipariş platformu",
      longDescription: "Restoranlar ve müşteriler arasında köprü kuran yemek sipariş platformu. Gerçek zamanlı sipariş takibi, güvenli ödeme ve hızlı teslimat seçenekleri ile modern yemek sipariş deneyimi.",
    },
  },
  {
    id: "hotel-app-tanstack",
    githubUrl: "https://github.com/mucarrr/Hotel-app-tanstack",
    language: "TypeScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "TypeScript", "TanStack Query", "Node.js", "MongoDB"],
    image: "https://raw.githubusercontent.com/mucarrr/Hotel-app-tanstack/main/hotel.gif",
    liveUrl: "",
    featured: false,
    category: "Hospitality",
    order: 11,
    en: {
      title: "Smart Hotel Reservation",
      description: "Hotel booking system with dynamic pricing and easy reservations",
      longDescription: "Reservation management system developed for hotel businesses. Comprehensive solution with room availability tracking, dynamic pricing, customer management, and detailed reporting features.",
    },
    tr: {
      title: "Akıllı Otel Rezervasyonu",
      description: "Dinamik fiyatlandırma ve kolay rezervasyon ile otel sistemi",
      longDescription: "Otel işletmeleri için geliştirilmiş rezervasyon yönetim sistemi. Oda müsaitlik takibi, dinamik fiyatlandırma, müşteri yönetimi ve detaylı raporlama özellikleri ile kapsamlı çözüm.",
    },
  },
  {
    id: "youtube-clone-reactjs",
    githubUrl: "https://github.com/mucarrr/Youtube-clone-reactjs",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Video Streaming", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/Youtube-clone-reactjs/main/youtube.gif",
    liveUrl: "",
    featured: false,
    category: "Media & Entertainment",
    order: 12,
    en: {
      title: "Video Sharing Network",
      description: "YouTube-like video platform with modern interface",
      longDescription: "YouTube-like video sharing and viewing platform. Offers comprehensive video experience with video upload, categorization, like/comment system, and user channels.",
    },
    tr: {
      title: "Video Paylaşım Ağı",
      description: "YouTube benzeri modern arayüzlü video platformu",
      longDescription: "YouTube benzeri video paylaşım ve izleme platformu. Video yükleme, kategorilere ayırma, beğeni/yorum sistemi ve kullanıcı kanalları ile kapsamlı video deneyimi sunar.",
    },
  },
  {
    id: "travelmap-backend",
    githubUrl: "https://github.com/mucarrr/travelMap-Backend",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["Node.js", "Express", "MongoDB", "API", "Geolocation"],
    image: "https://raw.githubusercontent.com/mucarrr/travelMap-Backend/main/travelApp.gif",
    liveUrl: "",
    featured: false,
    category: "Backend Service",
    order: 13,
    en: {
      title: "Travel Map API Service",
      description: "Backend service for location and route management",
      longDescription: "Backend service developed for travel applications. Provides API services for location database, route calculation, trip planning, and user interactions.",
    },
    tr: {
      title: "Seyahat Haritası API Servisi",
      description: "Konum ve rota yönetimi için backend servisi",
      longDescription: "Seyahat uygulamaları için geliştirilmiş backend servisi. Konum veritabanı, rota hesaplama, gezi planlama ve kullanıcı etkileşimleri için API servisleri sunar.",
    },
  },
  {
    id: "chatapp-websocket",
    githubUrl: "https://github.com/mucarrr/chatApp-WebSocket",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Express"],
    image: "https://raw.githubusercontent.com/mucarrr/chatApp-WebSocket/main/chat-websocket.gif",
    liveUrl: "",
    featured: false,
    category: "Communication",
    order: 14,
    en: {
      title: "Live Chat Messenger",
      description: "Real-time messaging with WebSocket technology",
      longDescription: "Real-time messaging application developed using WebSocket technology. Features instant message delivery, group chats, file sharing, and user status tracking.",
    },
    tr: {
      title: "Canlı Sohbet Messenger",
      description: "WebSocket teknolojisi ile gerçek zamanlı mesajlaşma",
      longDescription: "WebSocket teknolojisi kullanarak geliştirilmiş gerçek zamanlı mesajlaşma uygulaması. Anlık mesaj gönderimi, grup sohbetleri, dosya paylaşımı ve kullanıcı durumu takibi özellikleri.",
    },
  },
  {
    id: "recipeapp-fullstack",
    githubUrl: "https://github.com/mucarrr/RecipeApp-Fullstack",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Image Upload"],
    image: "https://raw.githubusercontent.com/mucarrr/RecipeApp-Fullstack/main/RecipeApp.gif",
    liveUrl: "",
    featured: false,
    category: "Food & Lifestyle",
    order: 15,
    en: {
      title: "Social Recipe Network",
      description: "Recipe sharing platform with social features",
      longDescription: "Recipe sharing platform designed for food lovers. Social cooking experience with recipe publishing, categorization, like system, comments, and user profiles.",
    },
    tr: {
      title: "Sosyal Tarif Ağı",
      description: "Sosyal özelliklerle tarif paylaşım platformu",
      longDescription: "Yemek severler için tasarlanmış tarif paylaşım platformu. Tarif yayınlama, kategorilere ayırma, beğeni sistemi, yorumlar ve kullanıcı profilleri ile sosyal yemek deneyimi.",
    },
  },
  {
    id: "covid-map",
    githubUrl: "https://github.com/mucarrr/Covid-map",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Data Visualization", "Maps"],
    image: "https://raw.githubusercontent.com/mucarrr/Covid-map/main/covid.gif",
    liveUrl: "",
    featured: false,
    category: "Data Visualization",
    order: 16,
    en: {
      title: "COVID-19 Data Tracker",
      description: "Real-time pandemic data visualization map",
      longDescription: "Interactive map application visualizing COVID-19 pandemic data. Comprehensive pandemic tracking with real-time data updates, regional statistics, and trend analysis.",
    },
    tr: {
      title: "COVID-19 Veri Takipçisi",
      description: "Gerçek zamanlı pandemi verisi görselleştirme haritası",
      longDescription: "COVID-19 salgın verilerini görselleştiren interaktif harita uygulaması. Gerçek zamanlı veri güncellemeleri, bölgesel istatistikler ve trend analizleri ile kapsamlı salgın takibi.",
    },
  },
  {
    id: "admin-dashboard-nextjs",
    githubUrl: "https://github.com/mucarrr/Admin-dashboard-nextjs",
    language: "TypeScript",
    updatedAt: "2025-10-21",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Charts"],
    image: "https://raw.githubusercontent.com/mucarrr/Admin-dashboard-nextjs/main/admin-dashboard.gif",
    liveUrl: "",
    featured: false,
    category: "Admin Panel",
    order: 17,
    en: {
      title: "Business Admin Panel",
      description: "Comprehensive admin dashboard with analytics and reporting",
      longDescription: "Comprehensive admin panel developed for businesses. Provides full control with user management, data analysis, reporting, system settings, and real-time dashboard.",
    },
    tr: {
      title: "İşletme Yönetim Paneli",
      description: "Analitik ve raporlamalı kapsamlı yönetim paneli",
      longDescription: "İşletmeler için geliştirilmiş kapsamlı yönetim paneli. Kullanıcı yönetimi, veri analizi, raporlama, sistem ayarları ve gerçek zamanlı dashboard ile tam kontrol sağlar.",
    },
  },
  {
    id: "ecommerce-website-react",
    githubUrl: "https://github.com/mucarrr/Ecommerce-website-react",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Payment"],
    image: "https://raw.githubusercontent.com/mucarrr/Ecommerce-website-react/main/shop-corner.gif",
    liveUrl: "",
    featured: false,
    category: "E-commerce",
    order: 18,
    en: {
      title: "React Shopping Store",
      description: "Modern e-commerce with seamless user experience",
      longDescription: "Modern e-commerce store developed with React technology. Excellent shopping experience with responsive design, fast loading, secure payment, and user-friendly interface.",
    },
    tr: {
      title: "React Alışveriş Mağazası",
      description: "Kusursuz kullanıcı deneyimli modern e-ticaret",
      longDescription: "React teknolojisi ile geliştirilmiş modern e-ticaret mağazası. Responsive tasarım, hızlı yükleme, güvenli ödeme ve kullanıcı dostu arayüz ile mükemmel alışveriş deneyimi.",
    },
  },
  {
    id: "novel-treasures-booksite",
    githubUrl: "https://github.com/mucarrr/Novel-treasures-booksite",
    language: "JavaScript",
    updatedAt: "2025-10-21",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Search"],
    image: "https://raw.githubusercontent.com/mucarrr/Novel-treasures-booksite/main/novel.gif",
    liveUrl: "",
    featured: false,
    category: "E-commerce",
    order: 19,
    en: {
      title: "Online Bookstore Hub",
      description: "Book marketplace with smart recommendations",
      longDescription: "Comprehensive online store designed for book lovers. Rich book shopping experience with extensive book catalog, smart recommendation system, author information, and user reviews.",
    },
    tr: {
      title: "Online Kitap Mağazası Merkezi",
      description: "Akıllı önerilerle kitap pazarı",
      longDescription: "Kitap severler için tasarlanmış kapsamlı online mağaza. Geniş kitap kataloğu, akıllı öneri sistemi, yazar bilgileri ve kullanıcı yorumları ile zengin kitap alışveriş deneyimi.",
    },
  },
];

export function getGithubProjects(): GithubProject[] {
  return [...githubProjects].sort((a, b) => a.order - b.order);
}

export function getGithubProjectContent(project: GithubProject, lang: string): GithubProjectContent {
  return lang === "tr" ? project.tr : project.en;
}
