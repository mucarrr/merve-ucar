import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Work Experience - Merve Uçar",
  description: "Merve Uçar's work experience in web development and projects she has worked on.",
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
