"use client";

import { useLayoutEffect, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

type HeroCubeProps = {
  isSpideyMode: boolean;
};

// ── Realistic Optical Star with Diffraction Spikes (James Webb / Hubble Style) ──
function OpticalStar({
  className = "",
  size = 28,
  glowColor = "#38bdf8",
  pulseDuration = 4,
  delay = 0,
}: {
  className?: string;
  size?: number;
  glowColor?: string;
  pulseDuration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        scale: [0.9, 1.15, 0.9],
        opacity: [0.75, 1, 0.75],
      }}
      transition={{
        duration: pulseDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`pointer-events-none absolute flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Central Corona Glow */}
      <div
        className="absolute h-3 w-3 rounded-full blur-[2px]"
        style={{ backgroundColor: glowColor, opacity: 0.8 }}
      />
      {/* Bright Stellar Core */}
      <div className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />

      {/* Horizontal Optical Spike */}
      <div
        className="absolute h-[1px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${glowColor}80 40%, #ffffff 50%, ${glowColor}80 60%, transparent 100%)`,
        }}
      />
      {/* Vertical Optical Spike */}
      <div
        className="absolute h-full w-[1px]"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${glowColor}80 40%, #ffffff 50%, ${glowColor}80 60%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
}

// ── Realistic Gas Giant Exoplanet with Cassini Rings & Volumetric Atmosphere ──
function VolumetricExoplanet() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 1. Deep Atmospheric Outer Corona Glow */}
      <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,rgba(99,102,241,0.12)_45%,transparent_72%)] blur-2xl pointer-events-none" />

      {/* 2. Planetary Rings — Back Occluded Half */}
      <div
        className="pointer-events-none absolute h-[250px] w-[250px] rounded-full"
        style={{
          transform: "rotateX(74deg) rotateY(-22deg)",
        }}
      >
        {/* Outer A Ring */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-cyan-100/30 border-t-cyan-100/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]" />
        {/* Cassini Division Gap & B Ring */}
        <div className="absolute inset-3 rounded-full border-[2.5px] border-indigo-200/35 border-t-indigo-100/55" />
        {/* Inner Crepe Dust Ring */}
        <div className="absolute inset-7 rounded-full border-[1px] border-dashed border-cyan-400/25" />
      </div>

      {/* 3. The Planet Sphere (Volumetric Light & Shadow Terminator) */}
      <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border border-white/20 shadow-[0_0_45px_rgba(56,189,248,0.25)]">
        {/* Deep space base tone */}
        <div className="absolute inset-0 bg-[#070710]" />

        {/* Surface Atmospheric Bands & Storms */}
        <motion.div
          animate={{ x: [-24, 0, -24] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-[160%] opacity-85"
        >
          <div className="h-full w-full bg-gradient-to-r from-[#1e1b4b] via-[#3b0764] to-[#0f172a]" />
          <div className="absolute top-[18%] h-3.5 w-full bg-gradient-to-r from-cyan-400/30 via-indigo-300/20 to-transparent blur-[1px]" />
          <div className="absolute top-[34%] h-4.5 w-full bg-gradient-to-r from-purple-400/25 via-pink-400/20 to-indigo-900/40 blur-[1px]" />
          <div className="absolute top-[52%] h-3 w-full bg-gradient-to-r from-cyan-300/25 via-blue-400/15 to-transparent blur-[0.8px]" />
          <div className="absolute top-[68%] h-4 w-full bg-gradient-to-r from-indigo-400/20 via-violet-300/25 to-transparent blur-[1px]" />
        </motion.div>

        {/* Specular Key Light (Starlight hitting top-left horizon) */}
        <div className="pointer-events-none absolute -left-4 -top-4 h-18 w-18 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(56,189,248,0.5)_40%,transparent_75%)] blur-[3px]" />

        {/* Rayleigh Scattering Atmospheric Rim Light (Crescent blue rim) */}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_3px_3px_14px_rgba(186,230,253,0.9),inset_7px_7px_24px_rgba(56,189,248,0.65)]" />

        {/* Space Shadow Terminator (The dark side of the planet fading into black) */}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_-18px_-18px_38px_rgba(0,0,0,0.98),inset_-28px_-28px_56px_rgba(0,0,0,0.95)]" />
      </div>

      {/* 4. Planetary Rings — Front Foreground Half (Passing over front of planet) */}
      <div
        className="pointer-events-none absolute h-[250px] w-[250px] rounded-full z-10"
        style={{
          transform: "rotateX(74deg) rotateY(-22deg)",
        }}
      >
        <div className="absolute inset-0 rounded-full border-b-[2px] border-b-cyan-100/60 border-l-transparent border-r-transparent border-t-transparent shadow-[0_4px_16px_rgba(56,189,248,0.3)]" />
        <div className="absolute inset-3 rounded-full border-b-[3px] border-b-indigo-200/50 border-l-transparent border-r-transparent border-t-transparent" />
        <div className="absolute inset-7 rounded-full border-b-[1px] border-b-cyan-300/35 border-l-transparent border-r-transparent border-t-transparent" />
      </div>
    </div>
  );
}

// ── Realistic Cinematic Astronaut (Zero-G Spacewalk EVA with Gold Visor & Tether) ──
function RealisticSpacewalkAstronaut() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [-2, 3, -2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none relative flex flex-col items-center"
    >
      {/* Wavy Umbilical Safety Tether trailing into deep space */}
      <svg
        className="absolute -left-12 -top-10 h-16 w-20 opacity-40 pointer-events-none"
        fill="none"
        viewBox="0 0 80 60"
      >
        <path
          d="M75 45 C 50 55, 30 15, 5 25"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <circle cx="75" cy="45" r="1.5" fill="#38bdf8" />
      </svg>

      {/* Realistic Detailed Spacesuit Vector SVG */}
      <div className="relative drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]">
        <svg width="54" height="66" viewBox="0 0 54 66" fill="none">
          <defs>
            {/* Metallic Gold Helmet Visor with Curvature */}
            <linearGradient id="astro-gold-visor" x1="18" y1="8" x2="36" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            {/* Titanium Life Support Backpack */}
            <linearGradient id="astro-pack" x1="8" y1="18" x2="46" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            {/* White Pressurized Thermal Fabric Gradient */}
            <linearGradient id="astro-suit" x1="12" y1="16" x2="42" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>

          {/* Life Support Backpack (PLSS) */}
          <rect x="8" y="16" width="38" height="32" rx="6" fill="url(#astro-pack)" stroke="#475569" strokeWidth="1.2" />
          {/* SAFER Micro Thruster Blocks */}
          <rect x="5" y="20" width="3" height="6" rx="1" fill="#94a3b8" />
          <rect x="46" y="20" width="3" height="6" rx="1" fill="#94a3b8" />
          {/* Telemetry Antenna Mast */}
          <line x1="42" y1="16" x2="44" y2="8" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="44" cy="8" r="1.2" fill="#38bdf8" />

          {/* Left Arm Floating Outward */}
          <path
            d="M14 26 L6 34 C4 36 6 40 9 39 L16 32"
            stroke="url(#astro-suit)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Arm Reaching Forward */}
          <path
            d="M40 26 L48 20 C50 18 53 21 51 23 L44 31"
            stroke="url(#astro-suit)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Pressurized Torso */}
          <rect x="14" y="20" width="26" height="26" rx="8" fill="url(#astro-suit)" stroke="#94a3b8" strokeWidth="1" />

          {/* Chest Display & Control Module (DCM) */}
          <rect x="20" y="26" width="14" height="11" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          {/* O2 & Power Status Telemetry LEDs */}
          <circle cx="23.5" cy="30" r="1" fill="#10b981" />
          <circle cx="27" cy="30" r="1" fill="#38bdf8" />
          <circle cx="30.5" cy="30" r="1" fill="#f59e0b" />
          <line x1="23" y1="33.5" x2="31" y2="33.5" stroke="#64748b" strokeWidth="0.8" />

          {/* Floating Zero-G Legs with Knee Joints */}
          <path
            d="M19 46 L16 57 C15 59 18 61 20 59 L23 53"
            stroke="url(#astro-suit)"
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 46 L38 56 C39 58 36 60 34 58 L31 53"
            stroke="url(#astro-suit)"
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Helmet Base Ring */}
          <ellipse cx="27" cy="20" rx="12" ry="4" fill="#64748b" />

          {/* Helmet Outer Shell */}
          <circle cx="27" cy="14" r="13" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Curved Gold Reflective Visor */}
          <ellipse cx="27" cy="14" rx="9.5" ry="8" fill="url(#astro-gold-visor)" stroke="#b45309" strokeWidth="0.6" />

          {/* Visor Specular Glint Reflection */}
          <path
            d="M22 10 C25 8.5, 29 9, 32 11"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle cx="21" cy="15" r="0.8" fill="#ffffff" opacity="0.8" />
        </svg>
      </div>

      {/* Realistic Monospace Telemetry HUD Tag */}
      <div className="mt-2 rounded border border-cyan-400/20 bg-black/75 px-2 py-0.5 backdrop-blur-md font-mono text-[8.5px] text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
          <span>EVA-01 // LIFE SUPPORT 99%</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Futuristic Orbital Interplanetary Spacecraft (Cruiser with Ion Thruster Plume) ──
function FuturisticOrbitalCruiser() {
  return (
    <motion.div
      animate={{
        x: [0, 8, 0],
        y: [0, -6, 0],
        rotate: [-12, -9, -12],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none relative flex flex-col items-center"
      style={{ transformOrigin: "center" }}
    >
      <div className="relative flex items-center">
        {/* Glowing Ion Plasma Propulsion Exhaust Trails */}
        <div className="absolute -left-16 flex flex-col gap-1.5 items-end">
          {/* Main Thruster Plume */}
          <motion.div
            animate={{ scaleX: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-16 rounded-l-full bg-gradient-to-l from-cyan-400 via-blue-500 to-transparent shadow-[0_0_12px_#38bdf8] origin-right"
          />
          {/* Secondary Thruster Plume */}
          <motion.div
            animate={{ scaleX: [1.2, 0.9, 1.2], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="h-1 w-12 rounded-l-full bg-gradient-to-l from-cyan-300 via-indigo-500 to-transparent shadow-[0_0_8px_#38bdf8] origin-right"
          />
        </div>

        {/* Spacecraft Vector Hull */}
        <svg width="68" height="34" viewBox="0 0 68 34" fill="none">
          <defs>
            {/* Dark Titanium Lifting-Body Hull */}
            <linearGradient id="craft-hull" x1="0" y1="8" x2="64" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            {/* Ceramic Heatshield Underbelly */}
            <linearGradient id="craft-tiles" x1="0" y1="20" x2="68" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            {/* Cockpit Canopy HUD Blue */}
            <linearGradient id="craft-cockpit" x1="38" y1="12" x2="54" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Upper Aerodynamic Wing / Stabilizer */}
          <path d="M12 17 L22 4 L34 14 Z" fill="#1e293b" stroke="#475569" strokeWidth="0.8" />

          {/* Main Fuselage Needle Body */}
          <path
            d="M8 12 L44 10 L62 17 L44 24 L8 22 Z"
            fill="url(#craft-hull)"
            stroke="#64748b"
            strokeWidth="1"
          />

          {/* Lower Heatshield Belly */}
          <path
            d="M10 21 L42 23 L60 17 L44 24 Z"
            fill="url(#craft-tiles)"
          />

          {/* Sleek Cockpit Canopy Glass */}
          <path
            d="M40 13 L52 16 L42 18 Z"
            fill="url(#craft-cockpit)"
            stroke="#e0f2fe"
            strokeWidth="0.6"
          />

          {/* Engine Exhaust Nozzle Bell */}
          <rect x="4" y="14" width="5" height="6" rx="1" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <ellipse cx="4" cy="17" rx="1.5" ry="3" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }} />

          {/* Forward Optical Sensor / Nav Beacon */}
          <circle cx="60" cy="17" r="1.2" fill="#38bdf8" />
          <circle cx="28" cy="17" r="1" fill="#f43f5e" />
        </svg>
      </div>

      {/* Monospace Orbital Flight Status Tag */}
      <div className="mt-1 rounded border border-white/10 bg-black/75 px-2 py-0.5 backdrop-blur-md font-mono text-[8px] text-zinc-400">
        <span className="text-zinc-200 font-semibold">ORBITER // JAYY-01</span> · 7.8 KM/S
      </div>
    </motion.div>
  );
}

// ── Deep-Space Observatory Telescope (Inspired by James Webb) ──
function SpaceTelescopeJWST() {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
        rotate: [12, 15, 12],
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none relative flex flex-col items-center"
    >
      <div className="relative">
        <svg width="48" height="42" viewBox="0 0 48 42" fill="none">
          <defs>
            <linearGradient id="jwst-gold" x1="12" y1="8" x2="36" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="jwst-shield" x1="2" y1="26" x2="46" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>

          {/* Multi-Layer Thermal Sunshield Layers */}
          <polygon points="2,32 24,24 46,32 24,40" fill="url(#jwst-shield)" stroke="#94a3b8" strokeWidth="0.8" />
          <polygon points="4,30 24,23 44,30 24,37" fill="#cbd5e1" opacity="0.6" />

          {/* Central Hexagonal Segmented Gold Mirror Array */}
          <polygon points="24,6 34,12 34,24 24,30 14,24 14,12" fill="url(#jwst-gold)" stroke="#78350f" strokeWidth="1" />
          {/* Secondary Mirror Support Struts */}
          <line x1="24" y1="18" x2="16" y2="10" stroke="#1e293b" strokeWidth="0.8" />
          <line x1="24" y1="18" x2="32" y2="10" stroke="#1e293b" strokeWidth="0.8" />
          <line x1="24" y1="18" x2="24" y2="27" stroke="#1e293b" strokeWidth="0.8" />
          {/* Secondary Focal Mirror */}
          <circle cx="24" cy="18" r="2.2" fill="#0f172a" stroke="#f59e0b" strokeWidth="0.8" />
        </svg>
      </div>

      <p className="mt-0.5 font-mono text-[7.5px] text-amber-300/80 tracking-widest uppercase">
        DEEP SURVEY // OPTICAL
      </p>
    </motion.div>
  );
}

// ── Sleek Deep-Space Telemetry Probe ──
function DeepSpaceProbe() {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
        rotate: [-1, 2, -1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none relative flex flex-col items-start"
    >
      <div className="relative flex items-center">
        {/* Left Solar Array Wing */}
        <div className="relative h-5 w-10 rounded-[2px] border border-cyan-400/40 bg-[#071322] shadow-[0_0_10px_rgba(56,189,248,0.15)] overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 divide-x divide-cyan-400/25">
            <div className="border-b border-cyan-400/25 h-1/2" />
            <div className="border-b border-cyan-400/25 h-1/2" />
            <div className="border-b border-cyan-400/25 h-1/2" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-transparent" />
        </div>

        {/* Central Core Truss Module */}
        <div className="relative mx-1 h-7 w-5 rounded-sm border border-zinc-400/50 bg-[#151922] shadow-md flex flex-col items-center justify-between py-1">
          <div className="h-1.5 w-1.5 rounded-full border border-cyan-300 bg-cyan-500 shadow-[0_0_6px_#38bdf8]" />
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </span>
          <div className="h-1 w-3 rounded-[1px] bg-amber-500/80" />
        </div>

        {/* Right Solar Array Wing */}
        <div className="relative h-5 w-10 rounded-[2px] border border-cyan-400/40 bg-[#071322] shadow-[0_0_10px_rgba(56,189,248,0.15)] overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 divide-x divide-cyan-400/25">
            <div className="border-b border-cyan-400/25 h-1/2" />
            <div className="border-b border-cyan-400/25 h-1/2" />
            <div className="border-b border-cyan-400/25 h-1/2" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-transparent" />
        </div>
      </div>

      <div className="mt-2 rounded border border-white/10 bg-black/70 px-2 py-0.5 backdrop-blur-md font-mono text-[8px] text-zinc-400 shadow-lg">
        <span className="text-zinc-200 font-semibold">PROBE // NODE 03</span> · 42,164 KM
      </div>
    </motion.div>
  );
}

// ── Realistic Ion Shooting Star / Plasma Meteor ──
function IonMeteor() {
  return (
    <motion.div
      initial={{ x: 120, y: -60, opacity: 0 }}
      animate={{
        x: [-40, -320],
        y: [0, 200],
        opacity: [0, 1, 0.8, 0],
      }}
      transition={{
        duration: 2.1,
        repeat: Infinity,
        repeatDelay: 5.5,
        ease: "easeOut",
      }}
      className="pointer-events-none absolute right-12 top-6 z-[2]"
    >
      <div className="relative flex items-center">
        <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_#ffffff,0_0_24px_#38bdf8]" />
        <div
          className="h-[1.5px] w-36 origin-left -rotate-[32deg] -translate-y-1"
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, rgba(56,189,248,0.7) 25%, rgba(99,102,241,0.4) 60%, transparent 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

// ── Astronomical Orbital Vector Trajectory Rings ──
function OrbitalTelemetryRings() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" fill="none">
      {/* Major Elliptical Trajectory Path */}
      <ellipse
        cx="280"
        cy="300"
        rx="240"
        ry="160"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        strokeDasharray="4 6"
        transform="rotate(-15 280 300)"
      />
      {/* Inner Telemetry Radius */}
      <ellipse
        cx="280"
        cy="300"
        rx="160"
        ry="100"
        stroke="rgba(56,189,248,0.45)"
        strokeWidth="0.6"
        strokeDasharray="2 4"
        transform="rotate(-15 280 300)"
      />
      {/* Vector Intersection Tick Crosshairs */}
      <circle cx="120" cy="210" r="2" fill="rgba(56,189,248,0.8)" />
      <circle cx="440" cy="240" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="350" cy="430" r="2" fill="rgba(196,181,253,0.7)" />
    </svg>
  );
}

export default function HeroCube({ isSpideyMode }: HeroCubeProps) {
  const [mounted, setMounted] = useState(false);

  // Smooth mouse-driven 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Multi-layer parallax depth values
  const planetX = useTransform(springX, [-300, 300], [-10, 10]);
  const planetY = useTransform(springY, [-300, 300], [-8, 8]);

  const astronautX = useTransform(springX, [-300, 300], [16, -16]);
  const astronautY = useTransform(springY, [-300, 300], [12, -12]);

  const cruiserX = useTransform(springX, [-300, 300], [-20, 20]);
  const cruiserY = useTransform(springY, [-300, 300], [-16, 16]);

  const probeX = useTransform(springX, [-300, 300], [18, -18]);
  const probeY = useTransform(springY, [-300, 300], [14, -14]);

  const starfieldX = useTransform(springX, [-300, 300], [-5, 5]);
  const starfieldY = useTransform(springY, [-300, 300], [-4, 4]);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted || isSpideyMode) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[0%] top-[4%] z-[4] hidden h-[660px] w-[580px] md:block lg:right-[2%] xl:right-[5%]"
    >
      {/* ── Volumetric Deep Space Nebula Atmospheric Glow ── */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_45%_45%,rgba(99,102,241,0.12)_0%,rgba(147,51,234,0.08)_40%,rgba(56,189,248,0.03)_65%,transparent_80%)] blur-3xl" />
      <div className="absolute left-[35%] top-[38%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] blur-2xl" />

      {/* ── Shooting Ion Meteor Streak ── */}
      <IonMeteor />

      {/* ── Astronomical Orbital Vector Trajectories ── */}
      <OrbitalTelemetryRings />

      {/* ── Layer 1: Parallax Deep Starfield ── */}
      <motion.div style={{ x: starfieldX, y: starfieldY }} className="absolute inset-0">
        <OpticalStar className="left-14 top-16" size={32} glowColor="#38bdf8" pulseDuration={4.8} delay={0.2} />
        <OpticalStar className="right-14 top-8" size={36} glowColor="#818cf8" pulseDuration={5.5} delay={1.1} />
        <OpticalStar className="left-12 bottom-28" size={26} glowColor="#fbbf24" pulseDuration={4.2} delay={0.8} />
        <OpticalStar className="right-16 bottom-36" size={28} glowColor="#c084fc" pulseDuration={6.0} delay={1.9} />
        <OpticalStar className="left-[44%] top-10" size={20} glowColor="#ffffff" pulseDuration={3.6} delay={0.4} />

        {/* Pinpoint Astronomical Stardust Points */}
        {[
          { top: "110px", left: "190px", delay: 0 },
          { top: "180px", left: "80px", delay: 1.2 },
          { top: "370px", left: "160px", delay: 1.7 },
          { top: "450px", right: "130px", delay: 2.1 },
          { top: "220px", right: "40px", delay: 0.6 },
          { top: "330px", right: "70px", delay: 1.5 },
          { top: "510px", left: "260px", delay: 2.8 },
        ].map((dot, idx) => (
          <motion.div
            key={idx}
            animate={{ opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            style={{ top: dot.top, left: dot.left, right: dot.right }}
            className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.9)]"
          />
        ))}
      </motion.div>

      {/* ── Layer 2: Deep-Space James Webb Style Space Observatory (Top Left) ── */}
      <div className="absolute left-10 top-[75px] z-10">
        <SpaceTelescopeJWST />
      </div>

      {/* ── Layer 3: Central Volumetric Gas Giant Exoplanet ── */}
      <motion.div
        style={{ x: planetX, y: planetY }}
        className="absolute left-[48%] top-[48%] -translate-x-1/2 -translate-y-1/2"
      >
        <VolumetricExoplanet />
      </motion.div>

      {/* ── Layer 4: Realistic Spacewalking Astronaut (Top Right, In Zero-G) ── */}
      <motion.div
        style={{ x: astronautX, y: astronautY }}
        className="absolute right-8 top-[100px] z-20"
      >
        <RealisticSpacewalkAstronaut />
      </motion.div>

      {/* ── Layer 5: High-Tech Deep-Space Telemetry Probe (Mid-Left Orbit) ── */}
      <motion.div
        style={{ x: probeX, y: probeY }}
        className="absolute left-6 top-[310px] z-20"
      >
        <DeepSpaceProbe />
      </motion.div>

      {/* ── Layer 6: Futuristic Orbital Cruiser with Ion Plume (Bottom Right, Cruising) ── */}
      <motion.div
        style={{ x: cruiserX, y: cruiserY }}
        className="absolute right-12 bottom-[75px] z-20"
      >
        <FuturisticOrbitalCruiser />
      </motion.div>
    </div>
  );
}