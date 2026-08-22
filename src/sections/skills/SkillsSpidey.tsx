"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export default function SkillsSpidey() {
  const { isSpideyMode } = useTheme();

  if (!isSpideyMode) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Top-left Web Corner */}
        <svg
          viewBox="0 0 320 320"
          className="absolute -left-16 -top-12 h-[300px] w-[300px] opacity-25"
          fill="none"
        >
          <path
            d="M0 80C70 30 145 20 220 55C260 74 290 100 320 135"
            stroke={SPIDEY_RED}
            strokeWidth="1.2"
          />
          <path
            d="M0 145C75 95 150 90 220 125C260 145 290 175 320 210"
            stroke={SPIDEY_BLUE}
            strokeWidth="1.2"
          />
          <path
            d="M40 0C20 70 35 145 85 210C115 250 150 280 195 320"
            stroke={SPIDEY_RED}
            strokeWidth="1.2"
          />
          <path
            d="M125 0C105 65 120 130 165 190C195 230 230 270 280 320"
            stroke={SPIDEY_BLUE}
            strokeWidth="1"
          />
        </svg>

        {/* Hanging Swinging Spider */}
        <motion.div
          className="absolute left-10 top-[28%] hidden lg:block"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Web Thread */}
            <div
              className="absolute bottom-full h-32 w-px"
              style={{ backgroundColor: `${SPIDEY_BLUE}66` }}
            />

            {/* Spider Figure */}
            <svg
              viewBox="0 0 100 130"
              className="h-[64px] w-[50px]"
              fill="none"
            >
              <circle cx="50" cy="25" r="10" fill={SPIDEY_RED} />
              <ellipse cx="50" cy="62" rx="20" ry="28" fill={SPIDEY_RED} />

              {/* Spider Eyes */}
              <ellipse cx="46" cy="24" rx="2" ry="3" fill="white" />
              <ellipse cx="54" cy="24" rx="2" ry="3" fill="white" />

              {/* Legs */}
              <path
                d="M38 35C22 28 10 26 -2 32 M62 35C78 28 90 26 102 32 M34 45C18 43 8 47 -4 57 M66 45C82 43 92 47 104 57 M34 62C18 70 10 82 5 96 M66 62C82 70 90 82 95 96"
                stroke={SPIDEY_BLUE}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Top-right Web Rings */}
        <svg
          viewBox="0 0 240 240"
          className="absolute -right-12 -top-8 h-[220px] w-[220px] opacity-20"
          fill="none"
        >
          <circle cx="180" cy="55" r="30" stroke={SPIDEY_RED} strokeWidth="1" />
          <circle cx="180" cy="55" r="65" stroke={SPIDEY_BLUE} strokeWidth="1" />
          <circle cx="180" cy="55" r="100" stroke={SPIDEY_RED} strokeWidth="0.8" />
          <path d="M180 55L80 0 M180 55L145 0 M180 55L205 0 M180 55L240 10" stroke={SPIDEY_BLUE} strokeWidth="0.8" />
        </svg>

        {/* Spider Web Badge */}
        <div className="absolute bottom-6 right-8 hidden lg:flex items-center gap-2 rounded-full border border-spidey-red/20 bg-white/80 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-spidey-red shadow-xs">
          <span>Spidey Mode Active</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}