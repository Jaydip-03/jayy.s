import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Experience from "@/sections/experience/Experience";
import Recognition from "@/sections/recognition/Recognition";
import Skills from "@/sections/skills/Skills";
import IntroGate from "@/components/intro/IntroGate";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <IntroGate />
      <Hero />
      <Projects  spiderMode />
      <Experience />
      <Skills />
      <Recognition />
    </>
  );
}
