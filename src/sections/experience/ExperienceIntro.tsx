"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <div className="h-10 w-px bg-gradient-to-b from-zinc-500/40 via-[#e23636]/60 to-[#e23636]" />
      {/* Spider body */}
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#18181b] shadow-md border border-[#e23636]/50">
        <span className="text-xs">🕷️</span>
      </div>
    </motion.div>
  );
}

// ── Spidey Mask / Spider-Sense Comic Sticker ──────────────────────

function SpideyOriginSticker() {
  return (
    <motion.div
      animate={{ rotate: [-4, 2, -4], scale: [1, 1.04, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="hidden sm:block"
    >
      <div className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-[#18181c] px-3 py-2 shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
        {/* Mini Spidey Mask Doodle */}
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
          <ellipse cx="14" cy="14" rx="11" ry="12" fill={SPIDEY_RED} />
          {/* Web lines on mask */}
          <path d="M14 2V26M3 14H25M6 6L22 22M22 6L6 22" stroke="#18181b" strokeWidth="1" opacity="0.6" />
          {/* Eyes */}
          <path d="M7 11Q11 11 13 14Q10 17 6 15Z" fill="white" stroke="#18181b" strokeWidth="1.2" />
          <path d="M21 11Q17 11 15 14Q18 17 22 15Z" fill="white" stroke="#18181b" strokeWidth="1.2" />
        </svg>

        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-white">
            ORIGIN STORY
          </p>
          <p className="font-mono text-[7.5px] uppercase tracking-wide text-zinc-400">
            Level 1 · Intern to Builder
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceIntro() {
  const { isSpideyMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-10 border-b border-white/[0.10] pb-12 lg:flex-row lg:items-end lg:justify-between"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          {isSpideyMode ? (
            <>
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em]" style={{ color: SPIDEY_RED }}>
                SPIDER-TRACK // FIELD EXPERIENCE
              </p>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white/70" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/45">
                Career
              </p>
            </>
          )}
        </div>

        <h2 className="mt-5 text-[clamp(2.75rem,7vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-white">
          Where I learned.
          <br />
          <span className="font-display italic font-normal text-white/40">
            Where I ship.
          </span>
          {isSpideyMode && (
            <span
              className="ml-3 font-display italic text-3xl"
              style={{ color: SPIDEY_BLUE }}
            >
              ✦
            </span>
          )}
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base sm:leading-7">
          {isSpideyMode
            ? "From deep Java fundamentals to production-grade distributed backend systems — trained to respond when the city calls."
            : "From structured Java training to building production-style backend features — every role pushed me closer to writing code I'd actually deploy."}
        </p>
      </div>

      <div className="relative flex shrink-0 flex-col items-start gap-5 lg:items-end lg:pb-1">
        {isSpideyMode && (
          <div className="flex items-center gap-4">
            <HangingSpiderDoodle />
            <SpideyOriginSticker />
          </div>
        )}

        <p
          className="pointer-events-none rotate-[-6deg] font-handwritten text-[22px] leading-none text-white/45 lg:-translate-x-8"
          style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
          aria-hidden="true"
        >
          {isSpideyMode ? "the web slinger's grind 🕷️" : "the grind mattered ↗"}
        </p>

        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white/[0.08]"
          style={{
            borderColor: isSpideyMode ? `${SPIDEY_RED}50` : "rgba(255,255,255,0.14)",
            backgroundColor: isSpideyMode ? `${SPIDEY_RED}0a` : "rgba(255,255,255,0.03)",
          }}
        >
          <span>{isSpideyMode ? "Full dossier timeline" : "Full timeline"}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
