"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getFeaturedRecognitions } from "@/lib/recognition";
import { useTheme } from "@/context/ThemeContext";

import RecognitionList from "./RecognitionList";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

// ── Hero Shield Comic Sticker ─────────────────────────────────────

function HeroShieldSticker() {
  return (
    <motion.div
      animate={{ rotate: [-3, 3, -3], scale: [1, 1.04, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="hidden sm:block"
    >
      <div className="relative flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-2 shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
        {/* Mini Shield Icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 5V11C4 16.5 7.5 21.5 12 22C16.5 21.5 20 16.5 20 11V5L12 2Z"
            fill={SPIDEY_RED}
            stroke={SPIDEY_BLUE}
            strokeWidth="1.5"
          />
          {/* Star in shield */}
          <path
            d="M12 7L13.5 10.5H17L14.2 12.5L15.3 16L12 14L8.7 16L9.8 12.5L7 10.5H10.5L12 7Z"
            fill="white"
          />
        </svg>

        <div>
          <p className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
            VERIFIED CREDENTIALS
          </p>
          <p className="font-mono text-[7px] uppercase tracking-wide text-zinc-500">
            Level 100 · Certified
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Recognition() {
  const { isSpideyMode } = useTheme();
  const featured = getFeaturedRecognitions();

  return (
    <Section
      id="recognition"
      className="border-t border-neutral-200/60 bg-[#f5f5f0] pb-24 pt-20 text-neutral-900 md:pb-32 md:pt-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5">
              {isSpideyMode ? (
                <>
                  <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
                    SPIDER-CERTIFIED // BADGES &amp; ACHIEVEMENTS
                  </p>
                </>
              ) : (
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400">
                  Credentials
                </p>
              )}
            </div>

            <h2 className="mt-3 font-display text-4xl font-normal tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Recognition &amp;{" "}
              <span className="italic font-normal text-neutral-500">
                Growth
              </span>
              {isSpideyMode && (
                <span
                  className="ml-2 font-display italic text-2xl sm:text-3xl"
                  style={{ color: SPIDEY_BLUE }}
                >
                  ✦
                </span>
              )}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-7">
              {isSpideyMode
                ? "Official certifications, rigorous training programs, and research papers — proof of continuous mastery behind every mission."
                : "Certifications, intensive training, and published research — proof of the continuous learning behind the code."}
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            {isSpideyMode && <HeroShieldSticker />}

            <Link
              href="/recognition"
              className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-neutral-600 transition-colors hover:text-neutral-950"
              style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
            >
              <span>{isSpideyMode ? "Browse all hero credentials" : "All credentials"}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <RecognitionList items={featured} />
        </div>
      </Container>
    </Section>
  );
}
