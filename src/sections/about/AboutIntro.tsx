"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

// ─── Spidey Background ────────────────────────────────────────────

function WebPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="about-web" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120" stroke={SPIDEY_RED} strokeWidth="0.6" fill="none" />
          <circle cx="60" cy="60" r="18" stroke={SPIDEY_BLUE} strokeWidth="0.5" fill="none" />
          <circle cx="60" cy="60" r="36" stroke={SPIDEY_BLUE} strokeWidth="0.4" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-web)" />
    </svg>
  );
}

// ─── Spidey Heading Helpers (unchanged from original) ────────────

function SelectionBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 rounded-[3px] border-2"
        style={{ borderColor: SPIDEY_RED }}
      />
      {[
        "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
        "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
        "right-0 top-0 translate-x-1/2 -translate-y-1/2",
        "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
        "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
        "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
      ].map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute h-2 w-2 rounded-[2px] border bg-black ${position}`}
          style={{ borderColor: `${SPIDEY_RED}99` }}
        />
      ))}
    </span>
  );
}

function DesignCursor({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="pointer-events-none absolute -bottom-8 right-0 z-20 sm:-bottom-10 sm:-right-6"
      aria-hidden="true"
    >
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" style={{ color: SPIDEY_BLUE }}>
        <path d="M4 2L4 19L8.5 14.5L12.5 22L15 20.5L11 13L17 13L4 2Z" fill="currentColor" stroke="white" strokeWidth="1.2" />
      </svg>
      <span
        className="absolute left-5 top-4 whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-medium text-white shadow-lg"
        style={{ backgroundColor: SPIDEY_BLUE }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── NEW Spidey Floating Sticker Elements ─────────────────────────

/** Bouncing spider doodle — top center */
function SpiderDoodle() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -top-9 left-[38%] sm:-top-10 sm:left-[42%]"
      aria-hidden="true"
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="14" r="5" stroke={SPIDEY_RED} strokeWidth="1.8" />
        <path
          d="M17 19V24 M11 16L5 13 M23 16L29 13 M12 11L7 7 M22 11L27 7 M13 18L8 22 M21 18L26 22"
          stroke={SPIDEY_RED}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/** Comic issue card sticker — top left (replaces old JD AvatarFrame) */
function ComicIssueSticker() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-6, -3, -6] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -left-2 top-2 hidden sm:block md:-left-6 md:top-4"
      aria-hidden="true"
    >
      <div
        className="w-[80px] rotate-[-6deg] overflow-hidden rounded-md border-2 shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
        style={{ borderColor: SPIDEY_RED, backgroundColor: "#0a0a0a" }}
      >
        {/* Red header band */}
        <div className="px-1.5 py-1" style={{ backgroundColor: SPIDEY_RED }}>
          <p className="font-mono text-[7px] font-black uppercase tracking-tight text-white">
            AMAZING JAYY
          </p>
        </div>
        {/* Body */}
        <div className="flex flex-col items-center px-1.5 py-2">
          {/* Mini web SVG */}
          <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
            <path d="M16 0 L16 22 M0 11 L32 11 M2 2 L30 20 M30 2 L2 20" stroke={SPIDEY_RED} strokeWidth="0.8" opacity="0.7" />
            <circle cx="16" cy="11" r="5" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
            <circle cx="16" cy="11" r="2" fill={SPIDEY_RED} />
          </svg>
          <p className="mt-1 font-mono text-[6px] uppercase tracking-widest text-white/40">
            #001
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/** Web strands from top-right corner (replaces old web icon box) */
function WebCornerStrands() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="pointer-events-none absolute -right-4 -top-4 hidden md:block lg:-right-8"
      aria-hidden="true"
    >
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
        {/* Web strands radiating from corner */}
        <path d="M120 0 Q90 30 60 100" stroke={SPIDEY_RED} strokeWidth="0.8" opacity="0.5" />
        <path d="M120 0 Q80 20 20 80" stroke={SPIDEY_RED} strokeWidth="0.8" opacity="0.5" />
        <path d="M120 0 Q100 10 40 40" stroke={SPIDEY_RED} strokeWidth="0.8" opacity="0.4" />
        {/* Cross threads */}
        <path d="M100 8 Q80 25 55 75" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.3" />
        <path d="M80 4 Q65 22 38 58" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.3" />
        {/* Circular cross threads */}
        <path d="M105 15 Q90 20 70 30" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.35" />
        <path d="M95 35 Q78 38 50 52" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.3" />
        <path d="M82 55 Q68 56 42 68" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.25" />
      </svg>
    </motion.div>
  );
}

/** THWIP! comic burst sticker — bottom right (replaces old </> badge) */
function ThwipSticker() {
  return (
    <motion.div
      animate={{ scale: [1, 1.08, 1], rotate: [8, 12, 8] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -right-2 bottom-6 hidden md:block lg:-right-4"
      aria-hidden="true"
    >
      <div className="relative flex h-[62px] w-[62px] items-center justify-center">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
          {/* Jagged comic burst */}
          <path
            d="M31 2L35 22L52 10L42 28L60 26L46 34L58 48L40 40L36 60L31 42L26 60L22 40L4 48L16 34L2 26L20 28L10 10L27 22Z"
            fill={SPIDEY_RED}
          />
        </svg>
        <span
          className="absolute font-mono text-[8.5px] font-black uppercase tracking-tight text-white"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
        >
          THWIP!
        </span>
      </div>
    </motion.div>
  );
}

// ─── Normal Mode Components ───────────────────────────────────────

function NormalCursor({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.75, duration: 0.5 }}
      className="pointer-events-none absolute -bottom-8 right-0 z-20 sm:-bottom-9 sm:-right-4"
      aria-hidden="true"
    >
      <svg width="20" height="22" viewBox="0 0 22 24" fill="none" style={{ color: "rgba(255,255,255,0.7)" }}>
        <path d="M4 2L4 19L8.5 14.5L12.5 22L15 20.5L11 13L17 13L4 2Z" fill="currentColor" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" />
      </svg>
      <span className="absolute left-5 top-3.5 whitespace-nowrap rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/90 shadow backdrop-blur-sm">
        {label}
      </span>
    </motion.div>
  );
}

function FloatingStickerNote() {
  return (
    <motion.div
      animate={{ y: [0, -7, 0], rotate: [-4, -2, -4] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -left-2 top-0 hidden sm:block md:-left-6 md:top-2"
      aria-hidden="true"
    >
      <div
        className="relative w-[148px] rotate-[-5deg] rounded-sm px-4 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.55),0_2px_8px_rgba(0,0,0,0.3)]"
        style={{ backgroundColor: "#f5f0e8" }}
      >
        <div className="mb-2.5 flex justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#c17a12" aria-hidden="true">
            <path d="M12 2l1.6 7.4L21 11l-7.4 1.6L12 20l-1.6-7.4L3 11l7.4-1.6z" />
          </svg>
        </div>
        <p className="text-center font-display text-[13px] italic leading-snug text-[#1a1a2e]">
          Always learning.
          <br />
          Always building.
        </p>
        <div className="mx-auto mt-3 h-px w-8 bg-[#c17a12]/30" />
      </div>
    </motion.div>
  );
}

function FloatingCodeBadge() {
  return (
    <motion.div
      animate={{ y: [0, 9, 0], rotate: [-5, -2, -5] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -right-2 top-4 hidden md:block lg:-right-6 lg:top-6"
      aria-hidden="true"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] font-mono text-sm font-semibold text-white/50 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md">
        {"</>"}
      </div>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────

export default function AboutIntro() {
  const { isSpideyMode } = useTheme();
  const { intro } = aboutContent;

  return (
    <section className="relative overflow-hidden bg-black pb-6 pt-28 text-white md:pb-8 md:pt-32">

      {/* Background */}
      {isSpideyMode ? (
        <>
          <WebPattern />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,54,54,0.06),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(0,111,185,0.05),transparent_35%)]"
          />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-8%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#110f20] opacity-80 blur-[100px]" />
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]">
            <filter id="about-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#about-grain)" />
          </svg>
        </>
      )}

      {/* Daily Bugle masthead strip — Spidey only ✅ (kept as user liked it) */}
      {isSpideyMode && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-20 z-20 w-full border-b border-t border-white/[0.06]"
          style={{ backgroundColor: "rgba(226,54,54,0.06)" }}
          aria-hidden="true"
        >
          <div className="flex items-center justify-between px-6 py-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: SPIDEY_RED }}>
              The Daily Bugle
            </span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/25">
              Special Edition · Vol. 1 · Origin Story
            </span>
            <span className="font-mono text-[9px]" style={{ color: SPIDEY_RED }}>●</span>
          </div>
        </motion.div>
      )}

      <Container className="relative z-10">
        <div className="relative mx-auto flex min-h-[260px] max-w-4xl flex-col justify-center sm:min-h-[300px] md:min-h-[340px]">

          {/* Floating elements — completely different per mode */}
          {isSpideyMode ? (
            <>
              <SpiderDoodle />
              <ComicIssueSticker />
              <WebCornerStrands />
              <ThwipSticker />
            </>
          ) : (
            <>
              <FloatingStickerNote />
              <FloatingCodeBadge />
            </>
          )}

          {/* Heading — RESTORED EXACTLY to original for both modes */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center font-display text-[clamp(2.35rem,7vw,4.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white/95"
          >
            {isSpideyMode ? (
              <>
                {intro.line1}{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <SelectionBox>{intro.line2}</SelectionBox>
                  <DesignCursor label={intro.cursorLabel} />
                </span>
              </>
            ) : (
              <>
                {intro.line1}
                <br />
                <span className="relative inline-block whitespace-nowrap">
                  <span className="italic text-white/70">{intro.line2}</span>
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="absolute -right-6 -top-1 text-white/25 sm:-right-7 sm:-top-2 sm:h-[18px] sm:w-[18px]"
                    fill="currentColor"
                  >
                    <path d="M12 2l1.6 7.4L21 11l-7.4 1.6L12 20l-1.6-7.4L3 11l7.4-1.6z" />
                  </svg>
                  <NormalCursor label={intro.cursorLabel} />
                </span>
              </>
            )}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 text-center font-display text-base italic sm:mt-12 sm:text-lg"
            style={{ color: isSpideyMode ? SPIDEY_BLUE : "rgba(255,255,255,0.38)" }}
          >
            {intro.tagline}
          </motion.p>

        </div>
      </Container>
    </section>
  );
}
