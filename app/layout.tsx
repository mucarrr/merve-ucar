import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://merveucar.dev'),
  title: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer | Website & Mobile App Developer | Yazılım Geliştirici",
  description: "Freelance Frontend Developer, Backend Developer & Full Stack Developer available for hire. Software developer specializing in websites, web applications, mobile apps, React, Next.js (Frontend), Node.js, MongoDB (Backend), MERN Stack (Full Stack). Website developer, mobil uygulama geliştirici, yazılım geliştirici. Hire a freelance software developer today.",
  keywords: [
    // Name variations
    "Merve Uçar", "Merve Ucar", 
    
    // Full Stack - EN
    "Freelance Full Stack Developer", "Full Stack Developer", "Full Stack Developer for Hire", "Hire Full Stack Developer",
    "MERN Stack Developer", "Full Stack Web Developer", "Full Stack Programmer", "Full Stack Software Engineer",
    "Full Stack Engineer", "Full Stack Developer Remote", "Full Stack Developer Freelance",
    // Full Stack - TR
    "Freelance Full Stack Geliştirici", "Full Stack Geliştirici", "Full Stack Yazılım Geliştirici", "Full Stack Developer",
    
    // Frontend - EN
    "Freelance Frontend Developer", "Frontend Developer", "Frontend Developer for Hire", "Hire Frontend Developer",
    "React Developer", "React Freelancer", "Hire React Developer", "React Developer for Hire", "React Engineer",
    "Next.js Developer", "Next.js Freelancer", "Hire Next.js Developer", "Next.js Engineer",
    "Frontend Web Developer", "Frontend Programmer", "UI Developer", "Frontend Engineer", "Frontend Software Engineer",
    "Client-side Developer", "Frontend Architect", "React.js Developer", "Vue.js Developer", "Angular Developer",
    // Frontend - TR
    "Freelance Frontend Geliştirici", "Frontend Geliştirici", "Frontend Yazılım Geliştirici", "React Geliştirici",
    "Next.js Geliştirici", "UI Geliştirici", "Frontend Developer", "React Developer",
    
    // Backend - EN
    "Freelance Backend Developer", "Backend Developer", "Backend Developer for Hire", "Hire Backend Developer",
    "Node.js Developer", "Node.js Freelancer", "Hire Node.js Developer", "Node.js Developer for Hire", "Node.js Engineer",
    "Backend Web Developer", "Backend Programmer", "API Developer", "Server-side Developer", "Backend Software Engineer",
    "REST API Developer", "GraphQL Developer", "Database Developer", "Backend Architect", "Server Developer",
    // Backend - TR
    "Freelance Backend Geliştirici", "Backend Geliştirici", "Backend Yazılım Geliştirici", "Node.js Geliştirici",
    "API Geliştirici", "Backend Developer", "Node.js Developer", "Server-side Developer",
    
    // Software Developer - EN
    "Software Developer", "Software Engineer", "Freelance Software Developer", "Hire Software Developer",
    "Software Developer for Hire", "Software Engineer for Hire", "Freelance Software Engineer",
    "Web Software Developer", "Application Developer", "Software Programmer", "Software Development",
    "Custom Software Development", "Software Solutions", "Software Services", "Software Consultant",
    // Software Developer - TR
    "Yazılım Geliştirici", "Yazılım Mühendisi", "Freelance Yazılım Geliştirici", "Yazılım Geliştirici İşe Al",
    "Yazılım Geliştirme", "Özel Yazılım Geliştirme", "Yazılım Çözümleri", "Yazılım Hizmetleri",
    "Software Developer", "Software Engineer", "Freelance Software Developer",
    
    // Web Developer - EN
    "Freelance Web Developer", "Hire Web Developer", "Hire Developer", "Freelance Developer",
    "Web Developer for Hire", "Professional Web Developer", "Web Development Services",
    "Custom Web Development", "Web Application Developer", "Web Developer Remote", "Remote Web Developer",
    "Website Developer", "Website Development", "Website Designer Developer", "Custom Website Development",
    "Website Builder", "Website Creation", "Professional Website Development", "Website Services",
    // Web Developer - TR
    "Freelance Web Geliştirici", "Web Geliştirici", "Web Yazılım Geliştirici", "Web Developer",
    "Web Geliştirme Hizmetleri", "Özel Web Geliştirme", "Web Uygulama Geliştirici",
    "Website Geliştirici", "Website Geliştirme", "Website Tasarım Geliştirici", "Özel Website Geliştirme",
    "Website Developer", "Website Development", "Website Hizmetleri",
    
    // Technologies - EN
    "TypeScript Developer", "JavaScript Developer", "MongoDB Developer", "Express.js Developer",
    "React.js Developer", "Node.js Developer", "MongoDB Expert", "TypeScript Expert",
    // Technologies - TR
    "TypeScript Geliştirici", "JavaScript Geliştirici", "MongoDB Geliştirici", "React.js Geliştirici",
    
    // Programmer - EN
    "Remote Developer", "Freelance Programmer", "Hire Programmer", "Remote Programmer",
    "Freelance Coder", "Hire Coder", "Programmer for Hire", "Remote Software Developer",
    // Programmer - TR
    "Uzaktan Geliştirici", "Freelance Programcı", "Programcı İşe Al", "Remote Developer",
    
    // Tech Stack
    "MERN Stack", "MEAN Stack", "Next.js", "React", "TypeScript", "Node.js", "MongoDB",
    "Express", "JavaScript", "HTML", "CSS", "Tailwind CSS", "REST API", "GraphQL",
    
    // Services
    "Portfolio", "Web Development", "Application Development", "Mobile App Development",
    "E-commerce Development", "Custom Software", "API Development", "Database Design",
    "UI/UX Development", "Responsive Design", "Progressive Web Apps", "SPA Development",
    // Mobile App - EN
    "Mobile App Developer", "Mobile Application Developer", "Freelance Mobile Developer", "Hire Mobile Developer",
    "iOS Developer", "Android Developer", "React Native Developer", "Mobile App Development",
    "Mobile Software Developer", "Mobile Application Development", "Cross-platform Mobile Developer",
    // Mobile App - TR
    "Mobil Uygulama Geliştirici", "Mobil Uygulama Developer", "Freelance Mobil Geliştirici", "Mobil Geliştirici İşe Al",
    "iOS Geliştirici", "Android Geliştirici", "React Native Geliştirici", "Mobil Uygulama Geliştirme",
    "Mobil Yazılım Geliştirici", "Mobil Uygulama Geliştirme", "Cross-platform Mobil Geliştirici",
    "Mobile App Developer", "Mobile Application Developer", "Freelance Mobile Developer"
  ],
  authors: [{ name: "Merve Uçar" }],
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://merveucar.dev',
      'tr': 'https://merveucar.dev',
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "3y5tXxF34nFYZe_KVWKuYy_v2iAiDuJYSL1Cfp2dmqU",
  },
  openGraph: {
    title: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer | Website & Mobile App Developer",
    description: "Freelance Frontend Developer, Backend Developer & Full Stack Developer available for hire. Software developer specializing in websites, web applications, mobile apps, React, Next.js (Frontend), Node.js, MongoDB (Backend), MERN Stack (Full Stack). Website developer, mobil uygulama geliştirici, yazılım geliştirici. Professional software development services.",
    type: "website",
    url: "https://merveucar.dev",
    locale: "en_US",
    alternateLocale: "tr_TR",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer | Website & Mobile App Developer",
    description: "Freelance Frontend, Backend & Full Stack Developer available for hire. Software developer expert in websites, mobile apps, React, Next.js, Node.js, MongoDB, MERN Stack. Website developer, mobil uygulama geliştirici, yazılım geliştirici.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
