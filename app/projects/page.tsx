import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "My Projects - Merve Uçar",
  description: "Web projects and works developed by Merve Uçar.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
