"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import { recognitions } from "@/data/recognitions";
import { useTheme } from "@/context/ThemeContext";

import RecognitionList from "./RecognitionList";

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
        <div className="h-10 w-px bg-zinc-400/60" />
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

export default function RecognitionListing() {
  const { isSpideyMode } = useTheme();

  return (
    <main className="min-h-screen bg-[#f5f5f0] pb-24 pt-28 text-neutral-900 md:pt-32">
      <Container>
        <Link
          href="/#recognition"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-neutral-400 transition-colors hover:text-neutral-950"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to recognition
        </Link>

        <div className="relative mt-8 max-w-2xl">
          {isSpideyMode && <HangingSpider />}

          <div className="flex items-center gap-2.5">
            {isSpideyMode ? (
              <>
                <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
                <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
                  SPIDER-ARCHIVES // VERIFIED CERTIFICATES
                </p>
              </>
            ) : (
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400">
                Credentials
              </p>
            )}
          </div>

          <h1 className="mt-3 font-display text-4xl font-normal tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl">
            All Recognition
            {isSpideyMode && (
              <span
                className="ml-2 font-display italic text-2xl sm:text-3xl"
                style={{ color: SPIDEY_BLUE }}
              >
                ✦
              </span>
            )}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-[17px] sm:leading-8">
            {isSpideyMode
              ? "Official certifications, high-intensity training, and published research papers — all verified."
              : "Certifications, verified programs, and published research — the complete record of verified milestones."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <RecognitionList items={recognitions} />
        </motion.div>
      </Container>
    </main>
  );
}
