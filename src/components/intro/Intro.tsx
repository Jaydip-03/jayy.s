"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  beginIntroExit,
  INTRO_EXIT_DELAY_S,
  INTRO_EXIT_DURATION_S,
} from "@/lib/intro";

const greetings = ["Hello", "नमस्ते", "नमस्कार", "こんにちは", "Jaydip Desale"];

const TAGLINE = "Thanks for being here.";
const GREETING_INTERVAL_MS = 380;

type IntroProps = {
  onFinished: () => void;
};

export default function Intro({ onFinished }: IntroProps) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const exitStartedRef = useRef(false);

  const triggerExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setIsExiting(true);
    beginIntroExit();
  }, []);

  // Keyboard shortcut to skip (Space, Escape, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        triggerExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerExit]);

  // Smooth numeric counter 0 -> 100%
  useEffect(() => {
    const startTime = performance.now();
    const duration = INTRO_EXIT_DELAY_S * 1000;

    let animId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        animId = requestAnimationFrame(tick);
      }
    };
    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, []);

  // Auto exit timer
  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      triggerExit();
    }, INTRO_EXIT_DELAY_S * 1000);

    return () => window.clearTimeout(exitTimer);
  }, [triggerExit]);

  // Greeting text interval cycler
  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => {
        if (current === greetings.length - 1) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, GREETING_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    if (isExiting) {
      onFinished();
    }
  };

  const isFinalName = index === greetings.length - 1;

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Welcome intro screen. Click or press space to enter immediately."
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#070709] select-none cursor-pointer"
      initial={{ y: 0 }}
      animate={isExiting ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: INTRO_EXIT_DURATION_S,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={handleAnimationComplete}
      onClick={triggerExit}
    >
      {/* ── Atmospheric Warm Corona & Paper Grid (Matching Normal Hero) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Amber & Slate ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] rounded-full blur-[140px] opacity-35 animate-pulse"
          style={{
            animationDuration: "5s",
            background:
              "radial-gradient(circle, rgba(251, 191, 36, 0.22) 0%, rgba(139, 155, 180, 0.12) 45%, transparent 75%)",
          }}
        />
        {/* Subtle dot matrix texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Main Intro Center Stack ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        animate={
          isExiting
            ? { opacity: 0, y: -24, filter: "blur(10px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Warm Golden Hairline */}
        <motion.div
          aria-hidden="true"
          className="mb-5 h-[1.5px] w-14 rounded-full"
          style={{
            background: "linear-gradient(90deg, #f59e0b, #fbbf24, #fef08a)",
            boxShadow: "0 0 14px rgba(251, 191, 36, 0.5)",
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.95, scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Monogram — Warm Ivory & Amber */}
        <motion.p
          className="font-mono text-[clamp(34px,5.5vw,62px)] font-medium tracking-[-0.04em] text-white"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-zinc-600 font-normal">&lt;</span>
          <span className="text-zinc-100 font-semibold tracking-tight">jayy</span>
          <span className="text-amber-400 font-normal">/</span>
          <span className="text-zinc-600 font-normal">&gt;</span>
        </motion.p>

        {/* Multilingual Greeting Cycler in Fraunces Serif */}
        <div className="mt-3.5 flex flex-col items-center sm:mt-4">
          <div className="relative h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={greetings[index]}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(2px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {!isFinalName ? (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                    <p className="font-serif italic text-2xl sm:text-3xl text-zinc-100 tracking-wide">
                      {greetings[index]}
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <p className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                      Jaydip Desale
                    </p>
                    <span className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.24em] text-amber-400 font-semibold">
                      Java Full Stack Developer · Pune
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tagline — Warm Champagne to Zinc Shimmer */}
          <p className="mt-3 flex text-[13px] tracking-[0.04em] sm:text-sm font-sans">
            {TAGLINE.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, color: "#fef08a" }}
                animate={{ opacity: 1, color: "rgb(161 161 170)" }}
                transition={{
                  delay: 0.85 + i * 0.016,
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
        </div>
      </motion.div>

      {/* ── Bottom Controls: Live Precision Counter & Skip Prompt ── */}
      <div className="absolute bottom-6 inset-x-0 px-6 sm:px-10 flex items-center justify-between text-zinc-500 pointer-events-auto">
        {/* Skip Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider hover:text-zinc-300 transition-colors"
        >
          <span>click anywhere or space to skip</span>
          <span className="text-[12px] opacity-75">↵</span>
        </motion.div>

        {/* Live Monospace Counter (00% -> 100%) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="font-mono text-xs font-semibold tabular-nums text-amber-400/90"
        >
          {String(progress).padStart(2, "0")}%
        </motion.div>
      </div>

      {/* ── Bottom Hairline Progress Bar (Amber / Gold) ── */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/[0.06] overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTRO_EXIT_DELAY_S, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
