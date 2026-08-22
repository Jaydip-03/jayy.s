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
      {/* Spidey Mode Background Web & Glow */}
      {isSpideyMode && (
        <>
          <WebPattern />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-10%] top-[-5%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(226,54,54,0.06),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-10%] bottom-[-5%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,111,185,0.05),transparent_70%)]"
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
        <div className="mt-14 flex items-center justify-end border-t border-zinc-200/80 pt-8 sm:mt-20">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            <span>{isSpideyMode ? "Browse all classified files" : "View all projects"}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}