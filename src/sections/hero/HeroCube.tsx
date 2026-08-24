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
          className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
        >
          {/* Pupil that tracks mouse */}
          <motion.div
            style={{ x: pupilX, y: pupilY }}
            className="h-3.5 w-3.5 rounded-full bg-[#006fb9] shadow-inner"
          >
            {/* Pupil eye highlight */}
            <div className="ml-0.5 mt-0.5 h-1 w-1 rounded-full bg-white" />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// ── Hanging Kinetic Sticker Item ──────────────────────────────────

function HangingSticker({
  height,
  swayDuration,
  delay,
  children,
  className = "",
}: {
  height: number;
  swayDuration: number;
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.15,
        rotate: 0,
        transition: { type: "spring", stiffness: 350, damping: 14 },
      }}
      style={{ transformOrigin: "top center" }}
      className={`pointer-events-auto relative flex flex-col items-center cursor-pointer select-none ${className}`}
    >
      {/* Hanging Golden String line */}
      <div
        className="w-[1.5px] bg-gradient-to-b from-orange-400/90 via-orange-400/40 to-orange-400/90 shadow-[0_0_8px_rgba(251,146,60,0.5)]"
        style={{ height }}
      />

      {/* Golden Hook / Knot */}
      <div className="h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)]" />

      {/* Attached Sticker */}
      <div className="relative mt-1">{children}</div>
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
      className="pointer-events-none absolute right-[2%] top-[10px] z-[4] hidden h-[580px] w-[500px] md:block lg:right-[4%] xl:right-[8%]"
    >
      {/* ── 1. Hanging Coffee Cup (Left of Cube) ── */}
      <div className="absolute left-10 top-0">
        <HangingSticker height={95} swayDuration={5.2} delay={0}>
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl border-2 border-white/90 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-2 shadow-[0_12px_28px_rgba(6,182,212,0.45)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white drop-shadow-sm">
              <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
          </div>
        </HangingSticker>
      </div>

      {/* ── 2. Hanging Nature Cloud (Right of Cube) ── */}
      <div className="absolute right-14 top-0">
        <HangingSticker height={110} swayDuration={6} delay={0.4}>
          <div className="flex h-13 w-18 items-center justify-center rounded-2xl border-2 border-white/80 bg-gradient-to-tr from-emerald-600 via-lime-500 to-emerald-400 p-2 shadow-[0_12px_28px_rgba(16,185,129,0.45)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white drop-shadow-sm">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
        </HangingSticker>
      </div>

      {/* ── 3. Central 3D Rotating Cube ── */}
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotateY: 360, rotateX: 12 }}
          transition={{
            rotateY: { duration: 28, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 0, ease: "linear" },
          }}
          style={{ transformStyle: "preserve-3d", perspective: 600 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="140"
              height="140"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-75 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              {/* top face */}
              <path
                d="M36 7L60 20L36 33L12 20L36 7Z"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="0.8"
              />
              {/* left face */}
              <path
                d="M12 20V47L36 61V33L12 20Z"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="0.8"
              />
              {/* right face */}
              <path
                d="M60 20V47L36 61V33L60 20Z"
                stroke="rgba(255,255,255,0.30)"
                strokeWidth="0.8"
              />
              {/* center vertical */}
              <path
                d="M36 33V61"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="0.8"
              />
              {/* inner top subdivision */}
              <path
                d="M36 7L36 33M12 20L60 20"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="0.5"
              />
              {/* glowing corner dots */}
              <circle cx="36" cy="7" r="1.5" fill="rgba(255,255,255,0.6)" />
              <circle cx="36" cy="61" r="1.2" fill="rgba(255,255,255,0.35)" />
            </svg>
          </motion.div>
        </motion.div>

        <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
          always building
        </p>
      </div>

      {/* ── 4. Interactive Googly Eyes (Top-Right of Cube) ── */}
      <div className="pointer-events-auto absolute right-4 top-[240px] z-10">
        <InteractiveEyes />
      </div>

      {/* ── 5. Multiple Sparkling Stars Around Composition ── */}
      {/* Star 1: Large Gold Sparkle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 bottom-20 text-amber-300 drop-shadow-[0_0_14px_rgba(252,211,77,0.7)]"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </motion.div>

      {/* Star 2: Small 4-Point Blue Sparkle */}
      <motion.div
        animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-12 bottom-28 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
        </svg>
      </motion.div>

      {/* Star 3: Mini White Sparkle */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        className="absolute left-28 top-[160px] text-white/70 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </motion.div>
    </div>
  );
}