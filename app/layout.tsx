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
  title: "Merve Uçar - Freelance Full Stack Developer | Hire Web Developer | React & Next.js Expert",
  description: "Freelance Full Stack Developer available for hire. Merve Uçar specializes in React, Next.js, TypeScript, MERN Stack. Professional web development services, custom web applications, and modern solutions. Hire a freelance web developer today.",
  keywords: [
    "Merve Uçar", "Merve Ucar", 
    "Freelance Full Stack Developer", "Freelance Web Developer", "Hire Web Developer", "Hire Developer", "Freelance Developer",
    "React Developer", "Next.js Developer", "React Freelancer", "Next.js Freelancer", "TypeScript Developer",
    "Full Stack Developer", "Web Developer", "MERN Stack Developer", "Node.js Developer",
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
    title: "Merve Uçar - Freelance Full Stack Developer | Hire Web Developer",
    description: "Freelance Full Stack Developer available for hire. Specializes in React, Next.js, TypeScript, MERN Stack. Professional web development services.",
    type: "website",
    url: "https://merveucar.dev",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Merve Uçar - Freelance Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Merve Uçar - Freelance Full Stack Developer | Hire Web Developer",
    description: "Freelance Full Stack Developer available for hire. React, Next.js, TypeScript, MERN Stack expert.",
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
