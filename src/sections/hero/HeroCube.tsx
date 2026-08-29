"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

type HeroCubeProps = {
  isSpideyMode: boolean;
};

// ── Interactive Eye-Tracking Component ────────────────────────────

function InteractiveEyes() {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilX = useSpring(0, { stiffness: 150, damping: 16 });
  const pupilY = useSpring(0, { stiffness: 150, damping: 16 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(
        8,
        Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 18
      );

      pupilX.set(Math.cos(angle) * distance);
      pupilY.set(Math.sin(angle) * distance);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pupilX, pupilY]);

  return (
    <div
      ref={eyeRef}
      className="flex items-center gap-1.5 drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/90 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
        >
          <motion.div
            style={{ x: pupilX, y: pupilY }}
            className="h-3.5 w-3.5 rounded-full bg-[#006fb9] shadow-inner"
          >
            <div className="ml-0.5 mt-0.5 h-1 w-1 rounded-full bg-white" />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// ── Stylized Ringed Planet (Saturn) ───────────────────────────────

function RingedPlanet() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Planetary Atmosphere Ambient Glow */}
      <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),rgba(59,130,246,0.06)_50%,transparent_75%)] blur-xl" />

      {/* Planetary Outer Ring (Back Half) */}
      <div
        className="absolute h-[150px] w-[150px] rounded-full border-[1.5px] border-white/20 border-t-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        style={{
          transform: "rotateX(74deg) rotateY(-22deg)",
        }}
      />
      <div
        className="absolute h-[175px] w-[175px] rounded-full border border-dashed border-indigo-400/25"
        style={{
          transform: "rotateX(74deg) rotateY(-22deg)",
        }}
      />

      {/* Planet Sphere */}
      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/30 bg-gradient-to-br from-indigo-500 via-purple-600 to-slate-900 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.8),0_10px_30px_rgba(79,70,229,0.35)]">
        {/* Surface Atmospheric Bands */}
        <div className="absolute inset-0 opacity-40">
          <div className="h-2 w-full bg-indigo-300/30 blur-[0.5px] mt-4" />
          <div className="h-3 w-full bg-purple-300/25 blur-[1px] mt-2" />
          <div className="h-1.5 w-full bg-indigo-200/20 blur-[0.5px] mt-2" />
        </div>
        {/* Top-left specular sunlight shine */}
        <div className="absolute -left-2 -top-2 h-10 w-10 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-[2px]" />
      </div>

      {/* Planetary Front Ring Accent (Front Half) */}
      <div
        className="pointer-events-none absolute h-[150px] w-[150px] rounded-full border-b-[2px] border-b-white/45 border-l-transparent border-r-transparent border-t-transparent"
        style={{
          transform: "rotateX(74deg) rotateY(-22deg)",
        }}
      />
    </motion.div>
  );
}

// ── Glowing Crescent Moon ─────────────────────────────────────────

function CrescentMoon() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative drop-shadow-[0_0_16px_rgba(253,230,138,0.5)]"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M28 18C28 24.6274 22.6274 30 16 30C12.5 30 9.35 28.5 7.15 26.1C13.2 26.1 18.1 21.2 18.1 15.15C18.1 10.3 14.95 6.2 10.6 4.8C12.25 4.3 14.05 4 16 4C22.6274 4 28 9.37258 28 18Z"
          fill="url(#moon-grad)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="moon-grad" x1="8" y1="4" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// ── Shooting Star Meteor with Trail ───────────────────────────────

function ShootingStar() {
  return (
    <motion.div
      initial={{ x: 80, y: -40, opacity: 0 }}
      animate={{
        x: [-60, -260],
        y: [0, 160],
        opacity: [0, 1, 0.8, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 4.5,
        ease: "easeOut",
      }}
      className="pointer-events-none absolute right-10 top-8 z-[2]"
    >
      <div className="relative flex items-center">
        {/* Meteor Head */}
        <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
        {/* Meteor Trail */}
        <div className="h-[1.5px] w-28 bg-gradient-to-l from-white via-cyan-300/60 to-transparent -rotate-[35deg] origin-left -translate-y-1" />
      </div>
    </motion.div>
  );
}

export default function HeroCube({ isSpideyMode }: HeroCubeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isSpideyMode || !mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[1%] top-[8%] z-[4] hidden h-[580px] w-[530px] md:block lg:right-[3%] xl:right-[7%]"
    >
      {/* Ambient Deep Space Glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.08),rgba(59,130,246,0.03)_50%,transparent_75%)] blur-3xl" />

      {/* ── Shooting Star ── */}
      <ShootingStar />

      {/* ── Constellation Connecting Lines (SVG Network) ── */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" fill="none">
        {/* Line from Moon to Amber Star */}
        <line x1="85" y1="130" x2="160" y2="250" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" strokeDasharray="3 3" />
        {/* Line from Planet to Blue Star */}
        <line x1="260" y1="280" x2="420" y2="120" stroke="rgba(147,197,253,0.6)" strokeWidth="0.8" strokeDasharray="3 3" />
        {/* Line to bottom violet star */}
        <line x1="260" y1="280" x2="380" y2="430" stroke="rgba(196,181,253,0.5)" strokeWidth="0.8" strokeDasharray="3 3" />
      </svg>

      {/* ── 1. Central Ringed Planet (Saturn) ── */}
      <div className="absolute left-[48%] top-[50%] -translate-x-1/2 -translate-y-1/2">
        <RingedPlanet />
      </div>

      {/* ── 2. Glowing Crescent Moon (Top-Left) ── */}
      <div className="absolute left-16 top-20">
        <CrescentMoon />
      </div>

      {/* ── 3. Interactive Googly Eyes (Mid-Right) ── */}
      <div className="pointer-events-auto absolute right-12 top-[245px] z-10">
        <InteractiveEyes />
      </div>

      {/* ── 4. Galaxy Constellation Stars ✨ ── */}

      {/* Star 1: Large Amber 8-Point Cosmic Star (Bottom Left) */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 45, 90] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-12 bottom-24 text-amber-300 drop-shadow-[0_0_16px_rgba(252,211,77,0.75)]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </motion.div>

      {/* Star 2: Cosmic Blue 4-Point Star (Top Right) */}
      <motion.div
        animate={{ scale: [0.85, 1.3, 0.85], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-16 top-16 text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,0.85)]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
        </svg>
      </motion.div>

      {/* Star 3: Radiant White Diamond Sparkle (Center-Top) */}
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0.95, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute left-[45%] top-14 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </motion.div>

      {/* Star 4: Soft Violet 4-Point Star (Bottom Right) */}
      <motion.div
        animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.5, 0.95, 0.5] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute right-16 bottom-28 text-indigo-300 drop-shadow-[0_0_14px_rgba(165,180,252,0.8)]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
        </svg>
      </motion.div>

      {/* Star 5: Golden Micro-Star (Upper Mid-Left) */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute left-24 top-[250px] text-amber-200 drop-shadow-[0_0_8px_rgba(253,230,138,0.7)]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
        </svg>
      </motion.div>

      {/* ── 5. Delicate Pinpoint Stardust Specks ── */}
      {[
        { top: "110px", left: "190px", delay: 0 },
        { top: "340px", left: "90px", delay: 1.5 },
        { top: "420px", right: "120px", delay: 2.2 },
        { top: "200px", right: "30px", delay: 0.8 },
        { top: "320px", right: "70px", delay: 1.8 },
      ].map((dot, idx) => (
        <motion.div
          key={idx}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          style={{ top: dot.top, left: dot.left, right: dot.right }}
          className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]"
        />
      ))}
    </div>
  );
}