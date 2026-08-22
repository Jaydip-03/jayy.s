"use client";

import { motion } from "framer-motion";

type HeroCubeProps = {
  isSpideyMode: boolean;
};

export default function HeroCube({ isSpideyMode }: HeroCubeProps) {
  if (isSpideyMode) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[12%] top-[48%] z-[2] hidden -translate-y-1/2 md:block lg:right-[14%] xl:right-[16%]"
    >
      {/* Outer slow-rotating wrapper */}
      <motion.div
        animate={{ rotateY: 360, rotateX: 12 }}
        transition={{
          rotateY: { duration: 28, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 0, ease: "linear" },
        }}
        style={{ transformStyle: "preserve-3d", perspective: 600 }}
      >
        {/* Slow gentle float */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60"
          >
            {/* top face */}
            <path
              d="M36 7L60 20L36 33L12 20L36 7Z"
              stroke="rgba(255,255,255,0.30)"
              strokeWidth="0.8"
            />
            {/* left face */}
            <path
              d="M12 20V47L36 61V33L12 20Z"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.8"
            />
            {/* right face */}
            <path
              d="M60 20V47L36 61V33L60 20Z"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth="0.8"
            />
            {/* center vertical */}
            <path
              d="M36 33V61"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="0.8"
            />
            {/* inner top subdivision */}
            <path
              d="M36 7L36 33M12 20L60 20"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
            {/* glowing corner dot — top */}
            <circle cx="36" cy="7" r="1.4" fill="rgba(255,255,255,0.45)" />
            {/* glowing corner dot — bottom */}
            <circle cx="36" cy="61" r="1" fill="rgba(255,255,255,0.2)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Subtle label below the cube */}
      <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.24em] text-white/20">
        always building
      </p>
    </div>
  );
}