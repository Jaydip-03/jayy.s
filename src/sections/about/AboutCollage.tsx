"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";

// ── Hover Caption Tooltip (Ultra High Z-Index) ────────────────────

function HoverCaption({ label, caption }: { label: string; caption: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.95 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className="pointer-events-none absolute left-1/2 top-full z-[9999] mt-3 w-[220px] -translate-x-1/2"
    >
      {/* Top Center Pointer Triangle (▲) */}
      <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#1f1f23]" />
      
      {/* Dark Tooltip Card */}
      <div className="rounded-xl border border-white/10 bg-[#1f1f23] p-3.5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] backdrop-blur-md">
        <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-neutral-400">
          {label}
        </p>
        <div className="my-2 h-px w-full bg-white/10" />
        <p className="font-display text-[12.5px] italic leading-relaxed text-white/90">
          &ldquo;{caption}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

// ── Hoverable Item Wrapper (Elevates Outer Stacking Context) ─────

function HoverableItem({
  label,
  caption,
  rotate,
  className = "",
  style = {},
  children,
}: {
  label: string;
  caption: string;
  rotate: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: hovered ? 9999 : undefined,
      }}
    >
      <motion.div
        style={{ rotate }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative cursor-pointer"
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {hovered && <HoverCaption label={label} caption={caption} />}
      </AnimatePresence>
    </div>
  );
}

// ── 3D Realistic Push Pins (Thumbtacks) ───────────────────────────

function PushPin({ color = "red" }: { color?: "red" | "purple" | "blue" }) {
  const pinThemes = {
    red: {
      gradient: "radial-gradient(circle at 35% 30%, #ff8080 0%, #ef4444 45%, #b91c1c 85%, #7f1d1d 100%)",
      shadow: "rgba(239, 68, 68, 0.45)",
    },
    purple: {
      gradient: "radial-gradient(circle at 35% 30%, #d8b4fe 0%, #a855f7 45%, #7e22ce 85%, #581c87 100%)",
      shadow: "rgba(168, 85, 247, 0.45)",
    },
    blue: {
      gradient: "radial-gradient(circle at 35% 30%, #93c5fd 0%, #3b82f6 45%, #1d4ed8 85%, #1e3a8a 100%)",
      shadow: "rgba(59, 130, 246, 0.45)",
    },
  };

  const theme = pinThemes[color];

  return (
    <div className="pointer-events-none absolute -top-3.5 left-1/2 z-50 -translate-x-1/2">
      <div
        className="relative h-6 w-6 rounded-full shadow-lg"
        style={{
          background: theme.gradient,
          boxShadow: `0 4px 8px ${theme.shadow}, 0 2px 4px rgba(0,0,0,0.6)`,
        }}
      >
        <div className="absolute left-1.5 top-1.5 h-2 w-2 rounded-full bg-white/80 blur-[0.4px]" />
      </div>
    </div>
  );
}

// ── Realistic Masking Tape Strip ──────────────────────────────────

function MaskingTape({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <div
      className={`pointer-events-none absolute z-50 h-5.5 bg-[#fde68a]/80 shadow-[0_2px_6px_rgba(0,0,0,0.25)] backdrop-blur-[1.5px] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="h-full w-full border-y border-amber-300/30 opacity-60" />
    </div>
  );
}

// ── SVG Stickers ──────────────────────────────────────────────────

function GuitarSticker() {
  return (
    <div className="relative drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
      <svg width="78" height="46" viewBox="0 0 85 50" fill="none" className="overflow-visible">
        {/* White Die-cut outline */}
        <path
          d="M6 25 Q10 8 26 8 Q40 8 44 18 L72 16 Q78 16 78 22 L78 28 Q78 34 72 34 L44 32 Q40 42 26 42 Q10 42 6 25 Z"
          fill="white"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Guitar Red Body */}
        <path
          d="M6 25 Q10 10 26 10 Q38 10 42 18 L42 32 Q38 40 26 40 Q10 40 6 25 Z"
          fill="#dc2626"
        />
        {/* White Pickguard */}
        <path
          d="M16 18 Q24 16 32 24 Q26 32 18 28 Z"
          fill="white"
        />
        {/* Pickups */}
        <rect x="24" y="22" width="7" height="4" rx="1" fill="#18181b" />
        <circle cx="14" cy="24" r="2.5" fill="#18181b" />
        {/* Neck */}
        <rect x="42" y="22" width="28" height="4" fill="#d4b996" />
        {/* Headstock */}
        <path d="M70 20 L78 18 L80 26 L70 26 Z" fill="#dc2626" />
        {/* Pegs */}
        <circle cx="73" cy="16" r="1.5" fill="white" />
        <circle cx="76" cy="16" r="1.5" fill="white" />
        <circle cx="79" cy="16" r="1.5" fill="white" />
        {/* Strings */}
        <line x1="18" y1="23.5" x2="76" y2="23.5" stroke="#f8fafc" strokeWidth="0.8" opacity="0.9" />
        <line x1="18" y1="24.5" x2="76" y2="24.5" stroke="#f8fafc" strokeWidth="0.8" opacity="0.9" />
      </svg>
    </div>
  );
}

function MicroscopeSticker() {
  return (
    <div className="relative drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
      <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
        <path
          d="M18 8 L32 8 L32 24 L18 24 Z M12 38 L40 38 M28 24 L28 38 M8 46 L44 46"
          fill="white"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="20" y="8" width="10" height="15" rx="2" fill="#0284c7" />
        <rect x="22" y="23" width="6" height="5" fill="#38bdf8" />
        <path d="M30 16 Q40 18 38 34 L26 34" stroke="#0369a1" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <rect x="14" y="32" width="20" height="3.5" rx="1" fill="#0f172a" />
        <path d="M12 46 Q12 38 24 38 L32 38 Q42 38 42 46 Z" fill="#0284c7" />
      </svg>
    </div>
  );
}

function LlamaSticker() {
  return (
    <div className="relative drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)]">
      <svg width="60" height="72" viewBox="0 0 52 64" fill="none">
        <path
          d="M15 52 L15 34 L15 16 Q15 6 23 6 L27 10 L25 24 L38 26 Q43 28 43 36 L43 52 L38 52 L38 42 L21 42 L21 52 Z"
          fill="white"
          stroke="white"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path
          d="M15 52 L15 34 L15 16 Q15 6 23 6 L27 10 L25 24 L38 26 Q43 28 43 36 L43 52 L38 52 L38 42 L21 42 L21 52 Z"
          fill="#fbf9f5"
        />
        <path d="M15 30 Q18 20 26 24 Q32 26 29 36 Z" fill="#ede5d8" />
        <path d="M25 28 L36 29 L34 37 L25 36 Z" fill="#ef4444" />
        <path d="M27 30 L34 31" stroke="#fef08a" strokeWidth="1.5" />
        <circle cx="22" cy="11" r="1.5" fill="#1c1917" />
        <path d="M23 14 Q21 16 24 16" stroke="#a8a29e" strokeWidth="1" />
        <ellipse cx="20" cy="8" rx="2" ry="4" fill="#ede5d8" />
        <circle cx="41" cy="32" r="3" fill="#a89a85" />
      </svg>
    </div>
  );
}

function StarSparkleSticker() {
  return (
    <div className="relative drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 2 L21.5 13.5 L33 18 L21.5 22.5 L18 34 L14.5 22.5 L3 18 L14.5 13.5 Z"
          fill="white"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M18 4 L21 14 L31 18 L21 22 L18 32 L15 22 L5 18 L15 14 Z"
          fill="#fbbf24"
        />
      </svg>
    </div>
  );
}

function RedAsteriskSticker() {
  return (
    <div className="relative drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <g stroke="white" strokeWidth="9" strokeLinecap="round">
          <line x1="22" y1="6" x2="22" y2="38" />
          <line x1="6" y1="22" x2="38" y2="22" />
          <line x1="11" y1="11" x2="33" y2="33" />
          <line x1="11" y1="33" x2="33" y2="11" />
        </g>
        <g stroke="#ef4444" strokeWidth="5" strokeLinecap="round">
          <line x1="22" y1="6" x2="22" y2="38" />
          <line x1="6" y1="22" x2="38" y2="22" />
          <line x1="11" y1="11" x2="33" y2="33" />
          <line x1="11" y1="33" x2="33" y2="11" />
        </g>
      </svg>
    </div>
  );
}

// ── Main Collage Component ────────────────────────────────────────

export default function AboutCollage() {
  return (
    <section className="relative overflow-hidden bg-black py-10 text-white md:py-14">
      
      {/* Subtle Dark Graph Grid Overlay on Black */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="exact-scrapbook-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#exact-scrapbook-grid)" />
      </svg>

      <Container className="relative z-10">
        <div className="flex justify-center">

          {/* Unified Physical Scrapbook Spread (Matching Mockup 1:1) */}
          <div className="relative h-[480px] w-full max-w-[820px] sm:h-[510px]">

            {/* 1. TOP-LEFT: Bookshelf Polaroid + Red Pin */}
            <HoverableItem
              label="CURIOUS READER"
              caption="always learning. fascinated by books, history, and how things work under the hood."
              rotate={-5}
              className="absolute left-[20px] top-[15px] z-20"
            >
              <div className="relative w-[155px] rounded-lg bg-[#f9f8f5] p-2.5 pb-4 shadow-[0_16px_35px_rgba(0,0,0,0.7)] ring-1 ring-black/10 sm:w-[170px]">
                <PushPin color="red" />
                <div className="relative aspect-[3/3.7] w-full overflow-hidden rounded-md bg-neutral-900">
                  <Image
                    src="/about/bookshelf.jpg"
                    alt="Jaydip at Bookshelf"
                    fill
                    sizes="170px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </HoverableItem>

            {/* 2. TOP-CENTER-LEFT: Guitar Sticker */}
            <HoverableItem
              label="MUSIC"
              caption="good music fuels every creative session."
              rotate={-20}
              className="absolute left-[195px] top-[20px] z-40"
            >
              <GuitarSticker />
            </HoverableItem>

            {/* 3. CENTER: Purple Philosophy Sticky Note + Purple Pin */}
            <HoverableItem
              label="PHILOSOPHY"
              caption="stay curious, build with intent, and keep experimenting."
              rotate={-3}
              className="absolute left-[175px] top-[95px] z-30"
            >
              <div className="relative w-[170px] rounded-2xl bg-[#dcd4ff] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:w-[185px]">
                <PushPin color="purple" />
                <p className="font-display text-[13px] italic leading-snug text-[#3b2d6b] sm:text-[14px]">
                  I believe that great ideas are a result of
                </p>
                <p className="mt-1 text-[13px] font-bold leading-tight text-[#4c1d95] sm:text-[14px]">
                  continuous curiosity
                </p>
                <p className="font-display text-[13px] italic leading-snug text-[#3b2d6b] sm:text-[14px]">
                  and an
                </p>
                <p className="text-[13px] font-bold leading-tight text-[#4c1d95] sm:text-[14px]">
                  experimental spirit.
                </p>
                {/* Purple Heart Doodle */}
                <div className="mt-2 flex justify-end">
                  <span className="font-handwritten text-xl font-bold leading-none text-[#581c87]">
                    ♡
                  </span>
                </div>
              </div>
            </HoverableItem>

            {/* 4. TOP-RIGHT: Pune Polaroid + Tape on Top */}
            <HoverableItem
              label="PUNE // BASE"
              caption="Pune — where the code, the craft, and the engineering journey grow."
              rotate={4}
              className="absolute left-[410px] top-[20px] z-20"
            >
              <div className="relative w-[175px] rounded-lg bg-[#f9f8f5] p-2.5 pb-3 shadow-[0_16px_35px_rgba(0,0,0,0.7)] ring-1 ring-black/10 sm:w-[195px]">
                {/* Masking Tape Strip across Top Center */}
                <MaskingTape className="-top-3 left-1/2 -translate-x-1/2 w-20" rotate={-1} />
                
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-900">
                  <Image
                    src="/about/marine_drive.jpg"
                    alt="Pune, India"
                    fill
                    sizes="195px"
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-2 text-center font-mono text-[9px] font-bold tracking-[0.2em] text-neutral-800">
                  MARINE DRIVE
                </p>
              </div>
            </HoverableItem>

            {/* 5. CENTER-RIGHT: Microscope Sticker */}
            <HoverableItem
              label="OBSERVATION"
              caption="paying attention to details that others overlook."
              rotate={-8}
              className="absolute left-[380px] top-[165px] z-40"
            >
              <MicroscopeSticker />
            </HoverableItem>

            {/* 6. Hand-drawn Dashed Swirl Arrow SVG */}
            <svg
              className="pointer-events-none absolute left-[370px] top-[225px] z-10 hidden sm:block"
              width="55"
              height="55"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M10 10 Q 30 20 25 40 Q 20 50 40 45"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeLinecap="round"
              />
              <path
                d="M34 42 L42 45 L38 52"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* 7. BOTTOM-LEFT: Star Sparkle Sticker */}
            <HoverableItem
              label="SPARK"
              caption="inspiration in unexpected places."
              rotate={-8}
              className="absolute left-[10px] top-[245px] z-30"
            >
              <StarSparkleSticker />
            </HoverableItem>

            {/* 8. BOTTOM-LEFT: Ocean Sunset Polaroid + Angled Tape */}
            <HoverableItem
              label="GOLDEN HOUR"
              caption="the calm before the code. ocean waves at sunset."
              rotate={-7}
              className="absolute left-[45px] top-[225px] z-30"
            >
              <div className="relative w-[155px] rounded-lg bg-[#f9f8f5] p-2.5 pb-3 shadow-[0_18px_38px_rgba(0,0,0,0.7)] ring-1 ring-black/10 sm:w-[175px]">
                {/* Angled Masking Tape Strip on Top-Left */}
                <MaskingTape className="-left-4 -top-2 w-16" rotate={-35} />

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-900">
                  <Image
                    src="/about/sunset.jpg"
                    alt="Sunset Ocean Waves"
                    fill
                    sizes="175px"
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-2 text-center font-mono text-[8.5px] font-bold tracking-[0.2em] text-neutral-800">
                  OCEAN SUNSET
                </p>
              </div>
            </HoverableItem>

            {/* 9. BOTTOM-CENTER: Yellow "KEEP EXPLORING" Sticky Note + Red Pin */}
            <HoverableItem
              label="CURIOSITY"
              caption="curiosity is the fuel. consistency is the engine."
              rotate={2}
              className="absolute left-[215px] top-[260px] z-30"
            >
              <div className="relative w-[150px] rounded-2xl bg-[#fef08a] p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.5)] sm:w-[165px]">
                <PushPin color="red" />
                <p className="font-handwritten text-[13px] font-bold tracking-wider text-red-600 underline decoration-red-400">
                  KEEP EXPLORING
                </p>
                <p className="mt-2 font-handwritten text-[13.5px] leading-snug text-neutral-800">
                  Curiosity is the fuel. Consistency is the engine.
                </p>
                {/* Red Heart Doodle */}
                <div className="mt-1 flex justify-end">
                  <span className="font-handwritten text-lg font-bold leading-none text-red-500">
                    ♡
                  </span>
                </div>
              </div>
            </HoverableItem>

            {/* 10. BOTTOM-RIGHT: Lined Pink "BUILD / BREAK / REPEAT" Note + Blue Pin */}
            <HoverableItem
              label="BUILDER MINDSET"
              caption="make it, break it, understand it, build it better."
              rotate={-2}
              className="absolute left-[395px] top-[250px] z-30"
            >
              <div
                className="relative w-[165px] rounded-2xl p-4 shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:w-[185px]"
                style={{
                  background: "linear-gradient(180deg, #fef08a 0%, #fda4af 60%, #f472b6 100%)",
                }}
              >
                <PushPin color="blue" />
                
                {/* Blue Header */}
                <p className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#1e40af] underline decoration-[#3b82f6]">
                  BUILD / BREAK / REPEAT
                </p>
                
                {/* Handwritten Lined Rules */}
                <div className="mt-2.5 space-y-1.5 font-handwritten text-[13.5px] leading-snug text-neutral-900">
                  <p>Make it. Break it.</p>
                  <p>Understand it.</p>
                  <p>Build it better.</p>
                </div>

                {/* Blue Smiley Doodle */}
                <div className="mt-1 flex justify-end">
                  <span className="font-handwritten text-lg font-bold leading-none text-[#1e3a8a]">
                    ◡̈
                  </span>
                </div>
              </div>
            </HoverableItem>

            {/* 11. FAR-RIGHT: Llama Sticker */}
            <HoverableItem
              label="STAY CHILL"
              caption="calm mindset, steady progress."
              rotate={-3}
              className="absolute left-[595px] top-[205px] z-40"
            >
              <LlamaSticker />
            </HoverableItem>

            {/* 12. BOTTOM-RIGHT: Red Asterisk / Flower Sticker */}
            <HoverableItem
              label="CREATIVE SPARK"
              caption="details that bring the composition together."
              rotate={12}
              className="absolute left-[605px] top-[325px] z-40"
            >
              <RedAsteriskSticker />
            </HoverableItem>

          </div>

        </div>
      </Container>
    </section>
  );
}