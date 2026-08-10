import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceCTA from "./ExperienceCTA";
import ExperienceStats from "./ExperienceStats";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="bg-black py-24"
    >
      <Container>

        {/* Top Stats */}

        <ExperienceStats />

        {/* Main Content */}
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[0.65fr_1.35fr]
          "
        >
          <ExperienceHeader />

          <ExperienceTimeline />
        </div>

        <ExperienceCTA />

      </Container>
    </Section>
  );
}