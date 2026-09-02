"use client";

import { useLayoutEffect, useEffect, useState, useRef } from "react";
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

// ── Floating Zero-Gravity Astronaut ───────────────────────────────

function FloatingAstronaut() {
  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        rotate: [-3, 6, -3],
      }}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.12,
        rotate: 12,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      className="pointer-events-auto cursor-pointer drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
    >
      <svg
        width="46"
        height="56"
        viewBox="0 0 54 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Backpack / Life Support Unit */}
        <rect
          x="10"
          y="18"
          width="34"
          height="28"
          rx="6"
          fill="#cbd5e1"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Left Arm Floating */}
        <motion.path
          animate={{ rotate: [-4, 6, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "12px 24px" }}
          d="M12 24L4 32C3 34 5 37 8 36L14 30"
          stroke="#f8fafc"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Arm Waving */}
        <motion.path
          animate={{ rotate: [6, -8, 6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "42px 24px" }}
          d="M42 24L50 16C52 14 54 17 52 19L44 28"
          stroke="#f8fafc"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Spacesuit Body Torso */}
        <rect
          x="14"
          y="20"
          width="26"
          height="25"
          rx="8"
          fill="#f8fafc"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />

        {/* Chest Console Control Box */}
        <rect x="21" y="26" width="12" height="9" rx="2.5" fill="#1e293b" />
        <circle cx="24.5" cy="30.5" r="1.2" fill="#38bdf8" />
        <circle cx="29.5" cy="30.5" r="1.2" fill="#f43f5e" />

        {/* Legs Floating */}
        <path
          d="M20 44L17 58C16.5 60.5 19.5 62 21.5 60.5L24 54"
          stroke="#f8fafc"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 44L37 57C37.5 59.5 35 61.5 33 60L30 54"
          stroke="#f8fafc"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Helmet Outer */}
        <circle
          cx="27"
          cy="14"
          r="13"
          fill="#ffffff"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />

        {/* Gold Visor with Reflection */}
        <ellipse cx="27" cy="14" rx="9" ry="7.5" fill="url(#visor-grad)" />
        {/* Visor Glint Reflection */}
        <path
          d="M23 10C26 8.5 29 9 31 10.5"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="visor-grad" x1="18" y1="7" x2="36" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// ── Retro Deep-Space Satellite Probe ──────────────────────────────

function SatelliteProbe() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-auto cursor-pointer drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]"
    >
      <svg width="42" height="28" viewBox="0 0 48 32" fill="none">
        {/* Left Solar Panel */}
        <rect x="2" y="10" width="13" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="8.5" y1="10" x2="8.5" y2="22" stroke="#bae6fd" strokeWidth="0.6" />
        <line x1="2" y1="16" x2="15" y2="16" stroke="#bae6fd" strokeWidth="0.6" />

        {/* Right Solar Panel */}
        <rect x="33" y="10" width="13" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="39.5" y1="10" x2="39.5" y2="22" stroke="#bae6fd" strokeWidth="0.6" />
        <line x1="33" y1="16" x2="46" y2="16" stroke="#bae6fd" strokeWidth="0.6" />

        {/* Central Satellite Body */}
        <rect x="18" y="8" width="12" height="16" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        {/* Antenna Mast */}
        <line x1="24" y1="8" x2="24" y2="2" stroke="#94a3b8" strokeWidth="1.2" />
        {/* Antenna Blinking Signal Tip */}
        <circle cx="24" cy="2" r="1.5" fill="#38bdf8" />
      </svg>
    </motion.div>
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

  useLayoutEffect(() => {
    // useLayoutEffect runs before paint, so this doesn't cause a visual flash
    // Hydration guard: must call setState to prevent hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Don't render if still hydrating or in spidey mode
  if (!mounted || isSpideyMode) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[1%] top-[8%] z-[4] hidden h-[580px] w-[540px] md:block lg:right-[3%] xl:right-[7%]"
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

      {/* ── 3. Floating Zero-Gravity Astronaut 👨‍🚀 (Upper Right, Above Eyes) ── */}
      <div className="absolute right-6 top-[105px] z-10">
        <FloatingAstronaut />
      </div>

      {/* ── 4. Interactive Googly Eyes (Mid-Right) ── */}
      <div className="pointer-events-auto absolute right-12 top-[245px] z-10">
        <InteractiveEyes />
      </div>

      {/* ── 5. Orbiting Satellite Probe 🛰️ (Lower Mid-Left) ── */}
      <div className="absolute left-8 top-[330px] z-10">
        <SatelliteProbe />
      </div>

      {/* ── 6. Distant Mars Red Moonlet 🔴 ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[36%] bottom-[75px] h-3.5 w-3.5 rounded-full bg-gradient-to-br from-rose-400 to-red-700 shadow-[0_0_8px_rgba(244,63,94,0.6)]"
      />

      {/* ── 7. Galaxy Constellation Stars ✨ ── */}

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
        className="absolute right-16 top-12 text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,0.85)]"
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
        className="absolute left-24 top-[240px] text-amber-200 drop-shadow-[0_0_8px_rgba(253,230,138,0.7)]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
        </svg>
      </motion.div>

      {/* ── 8. Delicate Pinpoint Stardust Specks ── */}
      {[
        { top: "110px", left: "190px", delay: 0 },
        { top: "340px", left: "140px", delay: 1.5 },
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