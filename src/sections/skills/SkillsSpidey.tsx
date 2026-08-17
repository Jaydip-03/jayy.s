"use client";

import { motion } from "framer-motion";

export default function SkillsSpidey() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Top-left web */}
      <svg
        viewBox="0 0 320 320"
        className="absolute -left-20 -top-16 h-[300px] w-[300px] text-neutral-900/[0.10]"
        fill="none"
      >
        <path
          d="M0 80C70 30 145 20 220 55C260 74 290 100 320 135"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M0 145C75 95 150 90 220 125C260 145 290 175 320 210"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M40 0C20 70 35 145 85 210C115 250 150 280 195 320"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M125 0C105 65 120 130 165 190C195 230 230 270 280 320"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M220 0C195 65 210 120 250 170C275 205 300 235 320 255"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Small hanging spider */}
      <motion.div
        className="absolute left-7 top-[38%] hidden lg:block"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative flex flex-col items-center">
          {/* silk */}
          <div className="absolute bottom-full h-24 w-px bg-neutral-900/[0.14]" />

          <svg
            viewBox="0 0 100 130"
            className="h-[78px] w-[60px] text-neutral-900/[0.55]"
            fill="currentColor"
          >
            <circle cx="50" cy="25" r="12" />

            <ellipse cx="50" cy="68" rx="23" ry="35" />

            <path
              d="M38 40C22 32 10 30 -2 36"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M62 40C78 32 90 30 102 36"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M34 50C18 48 8 52 -4 62"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M66 50C82 48 92 52 104 62"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M34 68C18 76 10 88 5 102"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M66 68C82 76 90 88 95 102"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </motion.div>

      {/* Top-right small web */}
      <svg
        viewBox="0 0 240 240"
        className="absolute -right-16 -top-12 h-[230px] w-[230px] text-neutral-900/[0.09]"
        fill="none"
      >
        <circle cx="180" cy="55" r="28" stroke="currentColor" />
        <circle cx="180" cy="55" r="58" stroke="currentColor" />
        <circle cx="180" cy="55" r="92" stroke="currentColor" />
        <circle cx="180" cy="55" r="128" stroke="currentColor" />

        <path d="M180 55L80 0" stroke="currentColor" />
        <path d="M180 55L145 0" stroke="currentColor" />
        <path d="M180 55L205 0" stroke="currentColor" />
        <path d="M180 55L240 10" stroke="currentColor" />
        <path d="M180 55L240 75" stroke="currentColor" />
        <path d="M180 55L235 130" stroke="currentColor" />
      </svg>

      {/* Tiny crawling spider near the bottom */}
      <motion.div
        className="absolute bottom-8 right-[42%] hidden lg:block"
        animate={{
          x: [0, 10, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="h-10 w-10 rotate-[-8deg] text-neutral-900/[0.48]"
          fill="currentColor"
        >
          <circle cx="50" cy="30" r="10" />
          <ellipse cx="50" cy="58" rx="17" ry="25" />

          <path
            d="M38 40L10 25M37 48L5 45M37 58L8 68M40 68L18 88"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M62 40L90 25M63 48L95 45M63 58L92 68M60 68L82 88"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}