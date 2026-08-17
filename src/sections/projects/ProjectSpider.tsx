"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ProjectSpider() {
  const sectionRef = useRef(null);

 const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});

const rawY = useTransform(scrollYProgress, [0, 1], [220, 420]);
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.6 });

  const rawSway = useTransform(scrollYProgress, [0, 0.35, 0.7], [-6, 6, -3]);
  const sway = useSpring(rawSway, { stiffness: 80, damping: 12 });

  return (
    <div
      ref={sectionRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 hidden w-[230px] lg:block xl:w-[270px]"
    >
      <svg
        viewBox="0 0 270 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-zinc-900/[0.16]"
        fill="none"
      >
        <path d="M72 0V1000" stroke="currentColor" strokeWidth="1" />
        <path d="M136 0V1000" stroke="currentColor" strokeWidth="0.8" />
        <path d="M198 0V1000" stroke="currentColor" strokeWidth="0.7" />

        <path d="M0 70C54 42 112 38 136 70C160 102 214 100 270 66" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 150C58 120 112 118 136 150C160 182 214 180 270 146" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 235C58 204 112 202 136 235C160 268 214 266 270 230" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 325C58 294 112 292 136 325C160 358 214 356 270 320" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 420C58 389 112 387 136 420C160 453 214 451 270 415" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 520C58 489 112 487 136 520C160 553 214 551 270 515" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 625C58 594 112 592 136 625C160 658 214 656 270 620" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 735C58 704 112 702 136 735C160 768 214 766 270 730" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 850C58 819 112 817 136 850C160 883 214 881 270 845" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 965C58 934 112 932 136 965C160 998 214 996 270 960" stroke="currentColor" strokeWidth="0.8" />

        <path d="M0 0L270 1000" stroke="currentColor" strokeWidth="0.45" />
        <path d="M0 240L190 1000" stroke="currentColor" strokeWidth="0.35" />
        <path d="M270 0L0 1000" stroke="currentColor" strokeWidth="0.45" />
      </svg>

      <motion.div
        className="absolute left-[112px] top-0 origin-top"
        style={{ y, rotate: sway }}
      >
        <div className="absolute bottom-[70px] left-1/2 h-[400px] w-px -translate-x-1/2 bg-zinc-900/[0.22]" />

        <svg
          viewBox="0 0 100 130"
          className="relative h-[104px] w-[80px] text-zinc-900/[0.88] drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]"
          fill="currentColor"
        >
          <circle cx="50" cy="20" r="12" />
          <path d="M50 46C65 46 76 62 76 82C76 104 64 118 50 118C36 118 24 104 24 82C24 62 35 46 50 46Z" />

          <path d="M42 26C34 18 34 8 40 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M58 26C66 18 66 8 60 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />

          <path d="M38 30C18 34 2 34 -12 26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M62 30C82 34 98 34 112 26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M40 38C24 46 12 50 0 50" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M60 38C76 46 88 50 100 50" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          <path d="M38 70C26 84 20 98 20 114" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M62 70C74 84 80 98 80 114" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          <circle cx="45" cy="17" r="2.6" fill="#f5f5f0" />
          <circle cx="55" cy="17" r="2.6" fill="#f5f5f0" />
        </svg>
      </motion.div>
    </div>
  );
}
