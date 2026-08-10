

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ProjectHeader from "./ProjectHeader";
import ProjectGrid from "./ProjectGrid";
import ViewAllButton from "./ViewAllButton";

export default function Projects() {
  return (
    <Section
      id="projects"
      className="relative isolate overflow-hidden bg-white py-24 text-zinc-900 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#a3a3a3_0.9px,transparent_0.9px)] [background-position:0_0] [background-size:18px_18px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <Container className="relative">
        <ProjectHeader />
        <div className="mt-10 md:mt-12">
          <ProjectGrid />
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium text-slate-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Available for freelance and full-time opportunities
        </div>
        <div className="mt-10 flex justify-center md:mt-12">
          <ViewAllButton />
        </div>
      </Container>
    </Section>
  );
}