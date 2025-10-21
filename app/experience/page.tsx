import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Deneyimlerim - Merve Uçar | Full Stack Developer",
  description: "Web geliştirme alanındaki iş deneyimlerim ve çalıştığım projeler. MERN Stack, React, Next.js deneyimi.",
  keywords: ["İş Deneyimi", "Web Developer Experience", "Full Stack Deneyim", "React Developer"],
  openGraph: {
    title: "Deneyimlerim - Merve Uçar",
    description: "Web geliştirme alanındaki iş deneyimlerim ve çalıştığım projeler.",
    type: "website",
  },
  alternates: {
    canonical: '/experience',
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Experience />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
