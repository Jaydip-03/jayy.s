import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Experience from "@/sections/experience/Experience";
import About from "@/sections/about/About";
import Recognition from "@/sections/recognition/Recognition";
import Skills from "@/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Recognition />
    </>
  );
}