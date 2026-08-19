import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ProjectGrid from "./ProjectGrid";
import ProjectHeader from "./ProjectHeader";
import ProjectSpider from "./ProjectSpider";

type ProjectsProps = {
  /** Signature "spider mode" visual. */
  spiderMode?: boolean;
};

export default function Projects({ spiderMode = false }: ProjectsProps) {
  return (
    <Section
      id="projects"
      className="relative overflow-hidden bg-[#f5f5f0] py-24 text-zinc-900 md:py-32"
    >
      <Container className="relative z-10">
        {spiderMode && <ProjectSpider />}

        <ProjectHeader />

        <div className="mt-12 sm:mt-14 md:mt-16">
          <ProjectGrid />
        </div>
      </Container>
    </Section>
  );
}
