"use client";

import { motion } from "framer-motion";

function Float({
  children,
  y = 8,
  duration = 4,
  delay = 0,
  rotateRange = 0,
  className = "",
}: {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  rotateRange?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -y, 0],
        rotate: rotateRange !== 0 ? [-rotateRange, rotateRange, -rotateRange] : undefined,
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Reveal wrapper ───────────────────────────────────────
function Reveal({ children, delay = 0, className = "", style }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Sunflower SVG ────────────────────────────────────────
function Sunflower() {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <div className="relative">
      {/* Glow behind */}
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ backgroundColor: "rgba(251,191,36,0.12)", transform: "scale(1.4)" }}
      />
      <svg width="112" height="112" viewBox="0 0 100 100" className="relative z-10 drop-shadow-lg">
        {/* Petals */}
        {petals.map((angle, i) => (
          <ellipse
            key={angle}
            cx="50" cy="19" rx="7" ry="16"
            fill={i % 2 === 0 ? "#fbbf24" : "#f59e0b"}
            transform={`rotate(${angle} 50 50)`}
            opacity="0.94"
          />
        ))}
        {/* Petal inner highlight */}
        {petals.map((angle, i) => (
          <ellipse
            key={`h-${angle}`}
            cx="50" cy="22" rx="3" ry="9"
            fill="#fef08a"
            transform={`rotate(${angle} 50 50)`}
            opacity="0.35"
          />
        ))}
        {/* Center dark */}
        <circle cx="50" cy="50" r="16" fill="#92400e" />
        <circle cx="50" cy="50" r="12.5" fill="#78350f" />
        {/* Seed pattern */}
        {[
          [44,44],[50,42],[56,44],
          [42,50],[50,50],[58,50],
          [44,56],[50,58],[56,56],
          [47,47],[53,47],[47,53],[53,53],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" fill="#d97706" opacity="0.55" />
        ))}
      </svg>
    </div>
  );
}

// ── 2. Vinyl Record 🎵 (Grooved LP with Warm Center Label) ──
function VinylRecord() {
  return (
    <div className="group relative cursor-pointer select-none">
      <div className="absolute inset-0 rounded-full blur-xl bg-cyan-500/[0.06]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="relative flex h-[105px] w-[105px] items-center justify-center rounded-full bg-gradient-to-br from-[#1c1c20] via-[#0f0f11] to-[#17171a] p-1 shadow-[0_12px_32px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
      >
        {/* Concentric Grooves */}
        <div className="absolute inset-2 rounded-full border border-white/[0.07]" />
        <div className="absolute inset-3.5 rounded-full border border-white/[0.05]" />
        <div className="absolute inset-5 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-6.5 rounded-full border border-white/[0.04]" />

        {/* Center Label */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 shadow-inner">
          <span className="font-mono text-[6.5px] font-bold tracking-widest text-amber-950 uppercase">
            LO-FI
          </span>
          {/* Spindle hole */}
          <div className="absolute h-2.5 w-2.5 rounded-full bg-black ring-1 ring-white/30" />
        </div>
      </motion.div>
    </div>
  );
}

// ── 3. Cozy Steaming Ceramic Mug ☕ ─────────────────────
function CeramicMug() {
  return (
    <div className="relative flex items-center gap-2.5 select-none">
      {/* Steam animated swirls */}
      <div className="absolute -top-4 left-3 flex gap-1 pointer-events-none">
        <motion.span
          animate={{ y: [-2, -8, -2], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[11px] text-amber-200/50"
        >
          ~
        </motion.span>
        <motion.span
          animate={{ y: [-1, -9, -1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="text-[12px] text-amber-200/60"
        >
          ~
        </motion.span>
      </div>

      <svg width="44" height="42" viewBox="0 0 44 42" fill="none" className="drop-shadow-lg">
        {/* Mug Body */}
        <rect x="5" y="10" width="26" height="24" rx="6" fill="#f8fafc" />
        <rect x="7" y="12" width="22" height="20" rx="4" fill="#f1f5f9" />
        {/* Coffee Surface */}
        <ellipse cx="18" cy="13" rx="10" ry="3.5" fill="#451a03" />
        <ellipse cx="18" cy="13" rx="7" ry="2" fill="#78350f" opacity="0.8" />
        {/* Mug Handle */}
        <path
          d="M31 16C36 16 38 19 38 23C38 27 35 29 31 29"
          stroke="#f8fafc"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Subtle cute warmth indicator */}
        <circle cx="18" cy="23" r="3.5" fill="#f59e0b" opacity="0.3" />
      </svg>
      <div className="leading-tight">
        <p className="font-handwritten text-[13px] text-amber-200/80">fresh brew</p>
        <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-500">always fueled</p>
      </div>
    </div>
  );
}

// ── 4. Botanical Green Foliage 🌿 ────────────────────────
function BotanicalLeaf() {
  return (
    <div className="relative select-none">
      <svg width="58" height="74" viewBox="0 0 60 76" fill="none" className="drop-shadow-md">
        {/* Stem */}
        <path d="M30 72C30 50 30 18 30 6" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" />
        {/* Left Leaf 1 */}
        <path d="M30 54C20 54 8 48 10 38C16 38 24 46 30 50" fill="#22c55e" opacity="0.85" />
        {/* Right Leaf 1 */}
        <path d="M30 46C40 46 52 40 50 30C44 30 36 38 30 42" fill="#16a34a" opacity="0.9" />
        {/* Left Leaf 2 */}
        <path d="M30 34C18 34 10 26 12 16C18 16 25 24 30 30" fill="#4ade80" opacity="0.8" />
        {/* Right Leaf 2 */}
        <path d="M30 24C42 24 48 16 46 8C40 8 34 16 30 20" fill="#22c55e" opacity="0.95" />
        {/* Top Tip */}
        <path d="M30 12C28 6 30 2 30 2C30 2 32 6 30 12" fill="#86efac" />
      </svg>
    </div>
  );
}

// ── 5. Vintage Postage Stamp / Polaroid 🏷️ ──────────────
function PostageStamp() {
  return (
    <div className="relative flex flex-col items-center rounded-sm bg-[#faf8f5] p-2 text-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.45)] select-none">
      {/* Top washi tape hint */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3.5 w-10 bg-amber-400/35 backdrop-blur-[1px] rotate-[-2deg] rounded-xs" />

      {/* Stamp Art frame */}
      <div className="relative h-[58px] w-[64px] overflow-hidden rounded-xs bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 p-1 flex flex-col justify-end">
        {/* Mini mountain/sun graphic */}
        <div className="absolute top-2 right-2 h-4 w-4 rounded-full bg-amber-200/90" />
        <div className="absolute -bottom-2 -left-2 h-8 w-12 rounded-full bg-indigo-950/70" />
        <div className="absolute -bottom-3 right-0 h-9 w-12 rounded-full bg-rose-950/70" />
        <span className="relative z-10 font-mono text-[6px] font-bold tracking-widest text-white/90 uppercase">
          PUNE · 2023
        </span>
      </div>

      <div className="mt-1 flex w-full items-center justify-between px-0.5">
        <span className="font-handwritten text-[11px] text-zinc-700 leading-none">craft</span>
        <span className="font-mono text-[7px] font-semibold text-zinc-400">10c</span>
      </div>
    </div>
  );
}

// ── 6. Minimal Open Book / Journal 📖 ─────────────────────
function OpenBook() {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.09] bg-white/[0.04] px-3.5 py-2.5 backdrop-blur-md select-none">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"
          stroke="#f8fafc"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 2v20"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M10 6h6M10 10h5M10 14h4"
          stroke="#cbd5e1"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Ribbon bookmark */}
        <path d="M16 2v7l-2-1.5L12 9V2" fill="#ef4444" opacity="0.85" />
      </svg>
      <div>
        <p className="text-[11.5px] font-medium text-zinc-200 leading-none">Clean Code</p>
        <p className="mt-1 font-handwritten text-[12px] text-amber-300/80 leading-none">daily reader</p>
      </div>
    </div>
  );
}

// ── Decorative Celestial Rings ───────────────────────────
function Rings() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.025]" />
    </>
  );
}

// ── Sparkle Doodles ✦ ────────────────────────────────────
function Sparkles() {
  const list = [
    { top: "8%", left: "12%", size: "14px", delay: 0.2, color: "#fbbf24" },
    { top: "72%", left: "84%", size: "11px", delay: 0.7, color: "#38bdf8" },
    { top: "24%", left: "80%", size: "12px", delay: 1.1, color: "#f472b6" },
    { top: "82%", left: "28%", size: "10px", delay: 0.5, color: "#fbbf24" },
  ];
  return (
    <>
      {list.map((s, i) => (
        <motion.span
          key={i}
          animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          className="pointer-events-none absolute select-none font-serif"
          style={{ top: s.top, left: s.left, fontSize: s.size, color: s.color }}
        >
          ✦
        </motion.span>
      ))}
    </>
  );
}

// ── Main Moodboard Export ────────────────────────────────
export default function HeroMoodboard() {
  return (
    <aside className="relative hidden lg:flex items-center justify-end">
      <div className="relative h-[480px] w-full max-w-[440px]">
        <Rings />
        <Sparkles />

        {/* 1. Sunflower — Anchor piece, center top */}
        <Reveal delay={0.15} className="absolute" style={{ top: "4%", left: "32%" }}>
          <Float y={11} duration={4.5} delay={0} rotateRange={2}>
            <Sunflower />
          </Float>
        </Reveal>

        {/* Sunflower handwritten tag */}
        <Reveal delay={0.35} className="absolute" style={{ top: "31%", left: "34%" }}>
          <Float y={4} duration={4} delay={0.5}>
            <p className="font-handwritten text-[13px] text-amber-300/70 rotate-[-5deg] select-none">
              ✦ sunflower energy
            </p>
          </Float>
        </Reveal>

        {/* 2. Vinyl Record — Upper right */}
        <Reveal delay={0.3} className="absolute" style={{ top: "2%", right: "3%" }}>
          <Float y={8} duration={4.8} delay={0.8} rotateRange={3}>
            <VinylRecord />
          </Float>
        </Reveal>

        {/* 3. Steaming Ceramic Mug — Left side upper */}
        <Reveal delay={0.4} className="absolute" style={{ top: "18%", left: "2%" }}>
          <Float y={7} duration={3.8} delay={0.3} rotateRange={-2}>
            <CeramicMug />
          </Float>
        </Reveal>

        {/* 4. Botanical Green Leaf — Floating left-middle */}
        <Reveal delay={0.5} className="absolute" style={{ top: "46%", left: "8%" }}>
          <Float y={10} duration={5.2} delay={0.6} rotateRange={4}>
            <BotanicalLeaf />
          </Float>
        </Reveal>

        {/* 5. Vintage Postage Stamp / Polaroid — Center bottom */}
        <Reveal delay={0.55} className="absolute" style={{ bottom: "14%", left: "38%" }}>
          <Float y={7} duration={4.2} delay={1.1} rotateRange={-3}>
            <PostageStamp />
          </Float>
        </Reveal>

        {/* 6. Open Book (Reading) — Bottom right */}
        <Reveal delay={0.65} className="absolute" style={{ bottom: "8%", right: "4%" }}>
          <Float y={6} duration={4} delay={0.4} rotateRange={2}>
            <OpenBook />
          </Float>
        </Reveal>

        {/* 7. Location Badge — Subtle bottom left */}
        <Reveal delay={0.7} className="absolute" style={{ bottom: "6%", left: "6%" }}>
          <Float y={5} duration={3.6} delay={0.9}>
            <div className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md select-none">
              <span className="text-[10px]">📍</span>
              <span className="font-mono text-[10px] text-zinc-400">Pune, IN</span>
              <span className="text-[10px]">🇮🇳</span>
            </div>
          </Float>
        </Reveal>
      </div>
    </aside>
  );
}
