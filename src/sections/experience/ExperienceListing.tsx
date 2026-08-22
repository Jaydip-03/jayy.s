"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ExperiencePageShell from "@/components/experience/ExperiencePageShell";
import { experiences } from "@/constants/experience";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function HangingSpider() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute right-4 top-[-20px] hidden sm:block md:right-10"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <div className="h-10 w-px bg-white/20" />
        <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="14" r="5" stroke={SPIDEY_RED} strokeWidth="1.8" />
          <path
            d="M17 19V24 M11 16L5 13 M23 16L29 13 M12 11L7 7 M22 11L27 7 M13 18L8 22 M21 18L26 22"
            stroke={SPIDEY_RED}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function ClassifiedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 shadow-xs"
      style={{
        borderColor: `${SPIDEY_RED}50`,
        backgroundColor: `${SPIDEY_RED}0f`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SPIDEY_RED }} />
      <span className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
        VERIFIED FIELD RECORD
      </span>
    </motion.div>
  );
}

export default function ExperienceListing() {
  const { isSpideyMode } = useTheme();

  return (
    <ExperiencePageShell backHref="/#experience" backLabel="Back to experience">
      <div className="relative mt-8 max-w-3xl">
        {isSpideyMode && <HangingSpider />}

        <div className="flex items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
            {isSpideyMode ? "SPIDER-DOSSIER // FIELD LOGS" : "Career"}
          </p>
          {isSpideyMode && <ClassifiedBadge />}
        </div>

        <h1 className="mt-3 font-display text-4xl font-normal tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          Full Timeline
          {isSpideyMode && (
            <span
              className="ml-2 font-display italic text-2xl sm:text-3xl"
              style={{ color: SPIDEY_BLUE }}
            >
              🕷️
            </span>
          )}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-[17px] sm:leading-8">
          {isSpideyMode
            ? "Every verified operational chapter — internships, high-velocity training, and the engineering discipline behind building robust systems."
            : "Every chapter — internship, training, and the work that shaped how I build with Java and Spring Boot."}
        </p>
      </div>

      <div className="mt-14 space-y-6 md:mt-16">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Link
              href={`/experience/${experience.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
              style={{
                borderColor: isSpideyMode ? undefined : undefined,
              }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: isSpideyMode ? SPIDEY_RED : "rgba(255,255,255,0.4)" }}
                >
                  {experience.chapter ?? String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-zinc-400">
                  {experience.duration}
                </span>
                {experience.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Current Mission
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    {experience.company}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-normal tracking-[-0.03em] text-white transition-colors group-hover:text-zinc-200 sm:text-3xl">
                    {experience.role}
                  </h2>
                  {experience.highlight && (
                    <p className="mt-2 font-display text-base italic text-zinc-500">
                      {experience.highlight}
                    </p>
                  )}
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-zinc-400 transition-colors group-hover:text-white"
                  style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
                >
                  <span>{isSpideyMode ? "Read Dossier" : "Open Story"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </ExperiencePageShell>
  );
}
