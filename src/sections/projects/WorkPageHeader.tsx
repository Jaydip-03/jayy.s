"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function HangingSpider() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute right-4 top-[-20px] hidden sm:block md:right-10"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        {/* Web thread */}
        <div className="h-10 w-px bg-zinc-400/60" />
        {/* Little spider */}
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
        borderColor: `${SPIDEY_RED}50`,
        backgroundColor: `${SPIDEY_RED}0f`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SPIDEY_RED }} />
      <span className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
        LEVEL 4 · CLASSIFIED
      </span>
    </motion.div>
  );
}

export default function WorkPageHeader({ totalProjects }: { totalProjects: number }) {
  const { isSpideyMode } = useTheme();

  return (
    <div className="relative mt-8 max-w-3xl">
      {isSpideyMode && <HangingSpider />}

      <div className="flex items-center gap-3">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
          {isSpideyMode ? "SPIDER-ARCHIVES // FULL DOSSIER" : "Selected & Archive"}
        </p>
        {isSpideyMode && <ClassifiedBadge />}
      </div>

      <h1 className="mt-3 font-display text-4xl font-normal tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl">
        All Projects
        {isSpideyMode && (
          <span
            className="ml-2 font-display italic text-2xl sm:text-3xl"
            style={{ color: SPIDEY_BLUE }}
          >
            🕷️
          </span>
        )}
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-7">
        {isSpideyMode
          ? "The complete index of mission-critical systems, distributed backends, and full-stack applications engineered for speed and scale."
          : "A comprehensive index of web applications, full-stack architectures, IoT research, and backend services I've designed and engineered."}
      </p>

      <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-zinc-400">
        <span>{totalProjects} Total Projects</span>
        {isSpideyMode && (
          <span className="font-mono text-[10px]" style={{ color: SPIDEY_RED }}>
            ● ZERO VULNERABILITIES
          </span>
        )}
      </div>
    </div>
  );
}
