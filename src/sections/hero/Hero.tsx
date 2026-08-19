"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import HeroAside from "./HeroAside";
import HeroAsideReveal from "./HeroAsideReveal";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroModeToggle from "./HeroModeToggle";
import ScrollIndicator from "./ScrollIndicator";

import { useTheme } from "@/context/ThemeContext";
import SplashCursor from "@/components/effects/HeroAura";

import HeroCube from "./HeroCube";



export default function Hero() {
  const { isSpideyMode } = useTheme();

  return (
    <Section
      id="hero-main"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black py-0"
    >
      {/* Normal Mode */}
      {!isSpideyMode && (
        <SplashCursor
          RAINBOW_MODE={false}
          COLOR="#8b9bb4"
          DYE_RESOLUTION={900}
          SPLAT_FORCE={3500}
          SPLAT_RADIUS={0.16}
        />
      )}

      {/* Spidey Mode */}
      {isSpideyMode && (
        <HeroBackground isSpideyMode={isSpideyMode} />
      )}

      <HeroCube isSpideyMode={isSpideyMode} />

      <Container className="relative z-10 flex flex-1 items-center py-8 sm:py-10">
        <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:gap-8 xl:gap-12">
          
          <HeroContent isSpideyMode={isSpideyMode} />

          {isSpideyMode && (
            <HeroAsideReveal>
              <HeroAside />
            </HeroAsideReveal>
          )}

        </div>
      </Container>

      {/* Mode Toggle */}
      <HeroModeToggle />

      <ScrollIndicator />
    </Section>
  );
}