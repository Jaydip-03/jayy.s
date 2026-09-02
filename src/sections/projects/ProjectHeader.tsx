"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

// ── Rotating Architectural Craft Emblem (Normal Mode) ─────────────

function CraftSeal() {
  return (
    <div className="hidden sm:flex flex-col items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="relative flex h-22 w-22 items-center justify-center drop-shadow-xs"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path
            id="craft-seal-path"
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
          />
          <text className="fill-zinc-500 font-mono text-[8.5px] uppercase tracking-[0.24em]">
            <textPath href="#craft-seal-path" startOffset="0%">
              • PRODUCTION CODE • ZERO TEMPLATES
            </textPath>
          </text>
        </svg>
        <span className="absolute font-serif text-sm text-zinc-700">✦</span>
      </motion.div>
    </div>
  );
}

// ── Hanging Spider Doodle ────────────────────────────────────────

function HangingSpiderDoodle() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="hidden sm:flex flex-col items-center"
      aria-hidden="true"
    >
      <div className="h-10 w-px bg-gradient-to-b from-zinc-400/40 via-[#e23636]/60 to-[#e23636]" />
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
    <div className="relative">
      {/* ── Top Architectural Ruler Guide ── */}
      <div className="mb-6 flex items-center justify-between border-b border-zinc-200/90 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{isSpideyMode ? "DOSSIER ARCHIVE // SPIDER-TRACK" : "INDEX // 01 — 03"}</span>
        </div>

        <div className="hidden sm:block">
          <span>{isSpideyMode ? "STATUS: ACTIVE COMBAT CODE" : "PUNE, IN · 2024–2025"}</span>
        </div>

        <div>
          <span>{isSpideyMode ? "PRIORITY: OMEGA" : "03 SHIPPED REPOSITORIES"}</span>
        </div>
      </div>

      {/* ── Main Two-Tier Heading & Actions ── */}
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="relative max-w-2xl">
          {/* Two-Tier Editorial Headline */}
          <h2 className="font-display text-4xl font-normal leading-[1.04] tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl">
            {isSpideyMode ? "Spider-Files." : "Selected Works."}
            <br />
            <span className="font-display italic font-normal text-zinc-600">
              {isSpideyMode ? "Built with web precision." : "Crafted from scratch."}
            </span>
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
              ? "Every system built with resilience, concurrency discipline, and web-slinging architectural clarity."
              : "Full-stack architectures and web systems built with production discipline — security hardened, tested under load, and designed to scale."}
          </p>
        </div>

        {/* Right-hand Emblem */}
        {isSpideyMode ? (
          <div className="flex items-center gap-4">
            <HangingSpiderDoodle />
            <ThwipSticker />
          </div>
        ) : (
          <CraftSeal />
        )}
      </div>
    </div>
  );
}