"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  beginIntroExit,
  INTRO_EXIT_DELAY_S,
  INTRO_EXIT_DURATION_S,
} from "@/lib/intro";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

const greetings = ["नमस्ते", "Hello", "こんにちは", "Namaskar"];

const TAGLINE = "Thanks for being here.";
const GREETING_INTERVAL_MS = 380;

type IntroProps = {
  onFinished: () => void;
};

function IntroBackdrop() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="intro-web"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120"
              stroke={SPIDEY_RED}
              strokeWidth="0.6"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="18"
              stroke={SPIDEY_BLUE}
              strokeWidth="0.5"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="36"
              stroke={SPIDEY_BLUE}
              strokeWidth="0.4"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#intro-web)" />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(226,54,54,0.07),transparent_45%),radial-gradient(circle_at_78%_22%,rgba(0,111,185,0.06),transparent_38%)]"
      />
    </>
  );
}

export default function Intro({ onFinished }: IntroProps) {
  const [index, setIndex] = useState(0);
  const exitStartedRef = useRef(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      if (exitStartedRef.current) return;
      exitStartedRef.current = true;
      beginIntroExit();
    }, INTRO_EXIT_DELAY_S * 1000);

    return () => window.clearTimeout(exitTimer);
  }, []);

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
    onFinished();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: INTRO_EXIT_DELAY_S,
        duration: INTRO_EXIT_DURATION_S,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <IntroBackdrop />

      <div className="relative z-10 flex flex-col items-center px-6">
        <motion.div
          aria-hidden="true"
          className="mb-5 h-px w-12 opacity-70"
          style={{
            background: `linear-gradient(90deg, ${SPIDEY_RED}, ${SPIDEY_BLUE})`,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.7, scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="font-mono text-[clamp(28px,5vw,56px)] font-semibold tracking-[-0.04em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-zinc-600">&lt;</span>
          <span className="text-white">jayy</span>
          <span className="text-spidey-blue">/</span>
          <span className="text-zinc-600">&gt;</span>
        </motion.p>

        <div className="mt-3 flex flex-col items-center sm:mt-4">
          <div className="relative h-9 overflow-hidden sm:h-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={greetings[index]}
                className="font-display text-xl italic tracking-[0.02em] text-spidey-blue sm:text-2xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {greetings[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-2.5 flex text-[13px] tracking-[0.04em] sm:text-sm">
            {TAGLINE.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, color: "rgb(226 54 54)" }}
                animate={{ opacity: 1, color: "rgb(113 113 122)" }}
                transition={{
                  delay: 0.95 + i * 0.018,
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
