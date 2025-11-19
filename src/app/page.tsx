import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Philosophy />
        <Experience />
        <Skills />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
