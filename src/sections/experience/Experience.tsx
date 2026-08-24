"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";

import ExperienceIntro from "./ExperienceIntro";
import ExperienceStack from "./ExperienceStack";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function CornerWeb({ className = "" }: { className?: string }) {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-25 ${className}`}
    >
      {/* Radiating Web Spines */}
      <line x1="0" y1="0" x2="140" y2="0" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="130" y2="50" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="100" y2="100" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="50" y2="130" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="140" stroke={SPIDEY_RED} strokeWidth="1" />
      {/* Concentric Web Arcs */}
      <path d="M40 0 Q 38 18, 28 28 Q 18 38, 0 40" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
      <path d="M80 0 Q 75 35, 56 56 Q 35 75, 0 80" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
      <path d="M120 0 Q 112 52, 85 85 Q 52 112, 0 120" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function WebPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="exp-spidey-web" width="140" height="140" patternUnits="userSpaceOnUse">
          <path d="M70 0 L70 140 M0 70 L140 70 M0 0 L140 140 M140 0 L0 140" stroke={SPIDEY_RED} strokeWidth="0.6" fill="none" />
          <circle cx="70" cy="70" r="22" stroke={SPIDEY_BLUE} strokeWidth="0.5" fill="none" />
          <circle cx="70" cy="70" r="44" stroke={SPIDEY_BLUE} strokeWidth="0.4" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#exp-spidey-web)" />
    </svg>
  );
}

export default function Experience() {
  const { isSpideyMode } = useTheme();

  return (
    <Section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] py-24 text-[#f5f5f0] md:py-32"
    >
      {/* Top Border Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
      />

      {/* Spidey Mode Corner Webs & Ambient Glow */}
      {isSpideyMode && (
        <>
          <CornerWeb className="left-0 top-0" />
          <CornerWeb className="right-0 top-0 -scale-x-100" />
          <WebPattern />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-10%] top-[10%] h-[380px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(226,54,54,0.06),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-10%] bottom-[5%] h-[380px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(0,111,185,0.05),transparent_70%)]"
          />
        </>
      )}

      <Container className="relative z-10">
        <ExperienceIntro />
        <ExperienceStack />
      </Container>
    </Section>
  );
}
