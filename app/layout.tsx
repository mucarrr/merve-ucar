import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://merveucar.dev'),
  title: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer | Hire React, Node.js Expert",
  description: "Freelance Frontend Developer, Backend Developer & Full Stack Developer available for hire. Merve Uçar specializes in React, Next.js (Frontend), Node.js, MongoDB (Backend), and MERN Stack (Full Stack). Hire a freelance frontend developer, backend developer, or full stack developer today.",
  keywords: [
    "Merve Uçar", "Merve Ucar", 
    // Full Stack
    "Freelance Full Stack Developer", "Full Stack Developer", "Full Stack Developer for Hire", "Hire Full Stack Developer",
    "MERN Stack Developer", "Full Stack Web Developer", "Full Stack Programmer",
    // Frontend
    "Freelance Frontend Developer", "Frontend Developer", "Frontend Developer for Hire", "Hire Frontend Developer",
    "React Developer", "React Freelancer", "Hire React Developer", "React Developer for Hire",
    "Next.js Developer", "Next.js Freelancer", "Hire Next.js Developer",
    "Frontend Web Developer", "Frontend Programmer", "UI Developer", "Frontend Engineer",
    // Backend
    "Freelance Backend Developer", "Backend Developer", "Backend Developer for Hire", "Hire Backend Developer",
    "Node.js Developer", "Node.js Freelancer", "Hire Node.js Developer", "Node.js Developer for Hire",
    "Backend Web Developer", "Backend Programmer", "API Developer", "Server-side Developer",
    // General
    "Freelance Web Developer", "Hire Web Developer", "Hire Developer", "Freelance Developer",
    "TypeScript Developer", "JavaScript Developer", "MongoDB Developer",
    "Custom Web Development", "Professional Web Developer", "Web Development Services",
    "Remote Developer", "Freelance Programmer", "Hire Programmer", "Web Developer for Hire",
    "MERN Stack", "Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Portfolio"
  ],
  authors: [{ name: "Merve Uçar" }],
  alternates: {
    canonical: '/',
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
    title: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer",
    description: "Freelance Frontend Developer, Backend Developer & Full Stack Developer available for hire. React, Next.js (Frontend), Node.js, MongoDB (Backend), MERN Stack (Full Stack). Professional web development services.",
    type: "website",
    url: "https://merveucar.dev",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Merve Uçar - Freelance Frontend, Backend & Full Stack Developer",
    description: "Freelance Frontend, Backend & Full Stack Developer available for hire. React, Next.js, Node.js, MongoDB, MERN Stack expert.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
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
