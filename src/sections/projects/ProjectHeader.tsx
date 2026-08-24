"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

// ── Hanging Spider Doodle ────────────────────────────────────────

function HangingSpiderDoodle() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="hidden sm:flex flex-col items-center"
      aria-hidden="true"
    >
      {/* Silk thread */}
      <div className="h-10 w-px bg-gradient-to-b from-zinc-400/40 via-[#e23636]/60 to-[#e23636]" />
      {/* Spider body */}
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#18181b] shadow-md border border-[#e23636]/40">
        <span className="text-xs">🕷️</span>
      </div>
    </motion.div>
  );
}

// ── THWIP! Comic Burst Sticker ────────────────────────────────────

function ThwipSticker() {
  return (
    <motion.div
      animate={{ scale: [1, 1.06, 1], rotate: [6, 9, 6] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="hidden sm:block"
      aria-hidden="true"
    >
      <div className="relative flex h-[54px] w-[54px] items-center justify-center drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
        <svg width="54" height="54" viewBox="0 0 62 62" fill="none">
          <path
            d="M31 2L35 22L52 10L42 28L60 26L46 34L58 48L40 40L36 60L31 42L26 60L22 40L4 48L16 34L2 26L20 28L10 10L27 22Z"
            fill={SPIDEY_RED}
            stroke="white"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="absolute font-mono text-[8px] font-black uppercase tracking-tight text-white"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
        >
          THWIP!
        </span>
      </div>
    </motion.div>
  );
}

export default function ProjectHeader() {
  const { isSpideyMode } = useTheme();

  return (
    <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div className="relative max-w-2xl">
        <div className="flex items-center gap-2.5">
          {isSpideyMode ? (
            <>
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.25em]" style={{ color: SPIDEY_RED }}>
                SPIDER-FILES // SELECTED WORK
              </p>
            </>
          ) : (
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
              Selected Work
            </p>
          )}
        </div>

        {/* Clean Editorial Heading */}
        <h2 className="relative mt-3 font-display text-4xl font-normal leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl">
          Projects
          {isSpideyMode && (
            <span
              className="ml-2 font-display italic text-2xl sm:text-3xl"
              style={{ color: SPIDEY_BLUE }}
            >
              ✦
            </span>
          )}
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-7">
          {isSpideyMode
            ? "Every system built with precision, resilience, and web-slinging architectural clarity."
            : "A curated selection of full-stack systems and web applications I've designed, built, and delivered."}
        </p>
      </div>

      {isSpideyMode && (
        <div className="flex items-center gap-4">
          <HangingSpiderDoodle />
          <ThwipSticker />
        </div>
      )}
    </div>
  );
}