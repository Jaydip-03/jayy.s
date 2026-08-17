import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroAside from "./HeroAside";
import HeroAsideReveal from "./HeroAsideReveal";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

import { useTheme } from "@/context/ThemeContext";
import HeroAura from "@/components/effects/HeroAura";

export default function Hero() {
  return (
    <Section
      id="hero-main"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black py-0"
    >
      <HeroBackground />

      <Container className="relative z-10 flex flex-1 items-center py-8 sm:py-10">
        <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:gap-8 xl:gap-12">
          <HeroContent />
          <HeroAsideReveal>
            <HeroAside />
          </HeroAsideReveal>
        </div>
      </Container>

      <ScrollIndicator />
    </Section>
  );
}
