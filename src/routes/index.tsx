import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Background, ScrollProgress } from "@/components/portfolio/Background";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vignesh A — AWS Cloud Engineer" },
      { name: "description", content: "Portfolio of Vignesh A, AWS Cloud Engineer designing scalable, secure, and highly available infrastructure on AWS." },
      { property: "og:title", content: "Vignesh A — AWS Cloud Engineer" },
      { property: "og:description", content: "Designing scalable, secure, and highly available cloud infrastructure on AWS." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
