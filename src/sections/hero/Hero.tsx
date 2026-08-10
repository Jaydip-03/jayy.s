import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <Section className="relative min-h-screen overflow-hidden">
      <Container className="flex min-h-[calc(100vh-90px)] items-center pt-12 lg:pt-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>

      <ScrollIndicator />
    </Section>
  );
}