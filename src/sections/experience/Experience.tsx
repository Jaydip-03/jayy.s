import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

import ExperienceIntro from "./ExperienceIntro";
import ExperienceStack from "./ExperienceStack";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] py-24 text-[#f5f5f0] md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-[18%] h-64 w-64 rounded-full border border-white/[0.035]"
      />

      <Container>
        <ExperienceIntro />
        <ExperienceStack />
      </Container>
    </Section>
  );
}
