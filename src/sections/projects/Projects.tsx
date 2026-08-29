"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useTheme } from "@/context/ThemeContext";

import ProjectGrid from "./ProjectGrid";
import ProjectHeader from "./ProjectHeader";

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
      <line x1="0" y1="0" x2="140" y2="0" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="130" y2="50" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="100" y2="100" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="50" y2="130" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="140" stroke={SPIDEY_RED} strokeWidth="1" />
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="projects-spidey-web" width="140" height="140" patternUnits="userSpaceOnUse">
          <path d="M70 0 L70 140 M0 70 L140 70 M0 0 L140 140 M140 0 L0 140" stroke={SPIDEY_RED} strokeWidth="0.6" fill="none" />
          <circle cx="70" cy="70" r="22" stroke={SPIDEY_BLUE} strokeWidth="0.5" fill="none" />
          <circle cx="70" cy="70" r="44" stroke={SPIDEY_BLUE} strokeWidth="0.4" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#projects-spidey-web)" />
    </svg>
  );
}

export default function Projects() {
  const { isSpideyMode } = useTheme();

  return (
    <Section
      id="projects"
      className="relative overflow-hidden bg-[#f5f5f0] py-24 text-zinc-950 md:py-32"
    >
      {/* ── Subtle Architectural Paper Dot Grid Texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Swiss Precision Crosshairs at Top Corners ── */}
      <div aria-hidden="true" className="pointer-events-none absolute left-6 top-6 font-mono text-[11px] text-zinc-400 select-none">
        +
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-6 top-6 font-mono text-[11px] text-zinc-400 select-none">
        +
      </div>

      {/* Spidey Mode Background Web & Corner Spiderwebs */}
      {isSpideyMode && (
        <>
          <CornerWeb className="left-0 top-0" />
          <CornerWeb className="right-0 top-0 -scale-x-100" />
          <WebPattern />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-10%] top-[-5%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(226,54,54,0.08),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-10%] bottom-[-5%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,111,185,0.06),transparent_70%)]"
          />
        </>
      )}

      <Container className="relative z-10">
        {/* Editorial Section Introduction */}
        <ProjectHeader />

        {/* Featured Project & Supporting Editorial Rows */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <ProjectGrid />
        </div>

        {/* Clean Editorial Bottom Link */}
        <div className="mt-14 flex items-center justify-between border-t border-zinc-200/80 pt-8 sm:mt-20">
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>ALL SYSTEMS VERIFIED &amp; TESTED</span>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            <span>{isSpideyMode ? "Browse all classified dossiers" : "View all projects archive"}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}