import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navigation />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
