"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  beginIntroExit,
  INTRO_EXIT_DELAY_S,
  INTRO_EXIT_DURATION_S,
} from "@/lib/intro";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

const greetings = ["Hello", "नमस्ते", "नमस्कार", "こんにちは", "Jaydip Desale"];

const TAGLINE = "Thanks for being here.";
const GREETING_INTERVAL_MS = 380;

type IntroProps = {
  onFinished: () => void;
};

export default function Intro({ onFinished }: IntroProps) {
  const [index, setIndex] = useState(0);
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

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Welcome intro screen. Click or press space to enter immediately."
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#060608] select-none cursor-pointer"
      initial={{ y: 0 }}
      animate={isExiting ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: INTRO_EXIT_DURATION_S,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={handleAnimationComplete}
      onClick={triggerExit}
    >
      {/* Atmospheric ambient glow & subtle star grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full blur-[130px] opacity-40 animate-pulse pointer-events-none"
          style={{
            animationDuration: "4s",
            background:
              "radial-gradient(circle, rgba(0, 111, 185, 0.28) 0%, rgba(226, 54, 54, 0.2) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main Intro Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6"
        animate={
          isExiting
            ? { opacity: 0, y: -20, filter: "blur(8px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Accent Top Hairline */}
        <motion.div
          aria-hidden="true"
          className="mb-5 h-[1.5px] w-14 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${SPIDEY_RED}, ${SPIDEY_BLUE})`,
            boxShadow: `0 0 16px ${SPIDEY_RED}80`,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.9, scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Monogram */}
        <motion.p
          className="font-mono text-[clamp(32px,5.5vw,60px)] font-semibold tracking-[-0.04em] text-white"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-zinc-600">&lt;</span>
          <span>jayy</span>
          <span className="text-[#006fb9]">/</span>
          <span className="text-zinc-600">&gt;</span>
        </motion.p>

        {/* Greeting & Tagline */}
        <div className="mt-3 flex flex-col items-center sm:mt-4">
          <div className="relative h-10 overflow-hidden sm:h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={greetings[index]}
                className={`text-xl sm:text-2xl font-normal tracking-[0.03em] ${
                  index === greetings.length - 1
                    ? "font-mono text-lg sm:text-xl font-semibold text-white tracking-normal"
                    : "font-display italic text-[#006fb9]"
                }`}
                initial={{ opacity: 0, y: 14, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(2px)" }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                {greetings[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-2 flex text-[13px] tracking-[0.04em] sm:text-sm font-sans">
            {TAGLINE.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, color: "rgb(226 54 54)" }}
                animate={{ opacity: 1, color: "rgb(161 161 170)" }}
                transition={{
                  delay: 0.85 + i * 0.016,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
        </div>
      </motion.div>

      {/* Subtle Skip Cue */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-5 flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-zinc-500 hover:text-zinc-300 transition-colors pointer-events-auto"
      >
        <span>click anywhere or press space to skip</span>
        <span className="text-[12px] opacity-75">↵</span>
      </motion.div>

      {/* Bottom Hairline Progress Bar */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/[0.06] overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#e23636] via-[#006fb9] to-emerald-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTRO_EXIT_DELAY_S, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
