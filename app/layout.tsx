import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Merve Uçar - Full Stack Developer",
  description: "Junior Full Stack Developer - MERN Stack, Next.js, TypeScript, React ve modern web teknolojileri ile web uygulamaları geliştiriyorum.",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
  authors: [{ name: "Merve Uçar" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
  },
  openGraph: {
    title: "Merve Uçar - Full Stack Developer",
    description: "Junior Full Stack Developer - MERN Stack, Next.js, TypeScript",
    type: "website",
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
      </body>
    </html>
  );
}
