"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperienceIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-10 border-b border-white/[0.10] pb-12 lg:flex-row lg:items-end lg:justify-between"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-20" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white/70" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/45">
            Career
          </p>
        </div>

        <h2 className="mt-5 text-[clamp(2.75rem,7vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
          Where I learned.
          <br />
          <span className="font-display italic font-normal text-white/40">
            Where I ship.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-white/55 sm:text-[17px]">
          From structured Java training to building production-style backend
          features — every role pushed me closer to writing code I&apos;d
          actually deploy.
        </p>
      </div>

      <div className="relative flex shrink-0 flex-col items-start gap-5 lg:items-end lg:pb-1">
        <p
          className="pointer-events-none rotate-[-6deg] font-handwritten text-[25px] leading-none text-[#f59e0b] lg:-translate-x-8"
          aria-hidden="true"
        >
          the grind mattered ↗
        </p>

        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 border border-white/[0.14] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.07]"
        >
          Full timeline
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
