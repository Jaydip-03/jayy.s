"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";

const SPIDEY_RED = "#e23636";

function HangingSpider() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute right-4 top-[-10px] hidden sm:block md:right-12"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <div className="h-12 w-px bg-zinc-600" />
        <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="14" r="5" stroke={SPIDEY_RED} strokeWidth="1.8" />
          <path
            d="M17 19V24 M11 16L5 13 M23 16L29 13 M12 11L7 7 M22 11L27 7 M13 18L8 22 M21 18L26 22"
            stroke={SPIDEY_RED}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function ClassifiedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 shadow-xs"
      style={{
        borderColor: `${SPIDEY_RED}60`,
        backgroundColor: `${SPIDEY_RED}15`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
      <span className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
        LEVEL 4 · CLASSIFIED
      </span>
    </motion.div>
  );
}

export default function WorkPageHeader({ totalProjects }: { totalProjects: number }) {
  const { isSpideyMode } = useTheme();

  return (
    <header className="relative overflow-hidden bg-[#000000] pb-16 pt-28 text-white sm:pb-20 md:pt-36 border-b border-white/[0.08]">
      {/* Subtle Ambient Starlight & Nebula Glow in Header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),rgba(147,197,253,0.02)_50%,transparent_75%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 bottom-0 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(252,211,77,0.04),transparent_70%)] blur-2xl"
      />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-white/50">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white">Work</span>
        </nav>

        {isSpideyMode && <HangingSpider />}

        {/* Section Category Kicker */}
        <div className="flex items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
            {isSpideyMode ? "SPIDER-ARCHIVES // FULL DOSSIER" : "PORTFOLIO // COMPLETE ARCHIVE"}
          </p>
          {isSpideyMode && <ClassifiedBadge />}
        </div>

        {/* Big Bold Headline */}
        <h1 className="mt-4 font-display text-4xl font-normal leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {isSpideyMode ? "Spider-Archives." : "Works & Systems."}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
          {isSpideyMode
            ? "The complete index of mission-critical backends, distributed microservices, and full-stack applications engineered for speed, resilience, and zero vulnerabilities."
            : "Production-grade backend architectures, full-stack platforms, and web applications built from scratch with Java, Spring Boot, and modern web engineering."}
        </p>

        {/* Engineering Telemetry Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08] font-mono text-xs uppercase tracking-wider text-white/60">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-white/90">{totalProjects} SHIPPED REPOSITORIES</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="hidden sm:block text-white/70">100% PRODUCTION HARDENED</div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="hidden sm:block text-white/50">PUNE, INDIA</div>
        </div>
      </Container>
    </header>
  );
}
