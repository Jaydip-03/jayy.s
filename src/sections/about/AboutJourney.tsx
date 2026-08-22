"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { journeyMilestones } from "@/data/journey";
import type { JourneyMilestone } from "@/data/journey";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function JourneyStop({
  milestone,
  index,
  isSpideyMode,
}: {
  milestone: JourneyMilestone;
  index: number;
  isSpideyMode: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-0 lg:block lg:text-center"
    >
      {/* Mobile: vertical rail dot */}
      <div className="relative flex flex-col items-center lg:hidden">
        <span
          className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-[#f5f5f0]"
          style={{ backgroundColor: isSpideyMode ? SPIDEY_RED : "#0a0a0a" }}
          aria-hidden="true"
        />
        {index < journeyMilestones.length - 1 ? (
          <span
            className="mt-1 w-px flex-1 bg-neutral-300"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="pb-10 lg:pb-0">
        <p
          className="font-mono text-xs tracking-wide lg:mb-3"
          style={{ color: isSpideyMode ? SPIDEY_RED : "#a3a3a3" }}
        >
          {milestone.year}
        </p>

        {/* Desktop: dot sits on the shared rail */}
        <div className="relative hidden lg:mb-8 lg:flex lg:justify-center">
          <span
            className="relative z-10 h-2.5 w-2.5 rounded-full ring-4 ring-[#f5f5f0]"
            style={{ backgroundColor: isSpideyMode ? SPIDEY_RED : "#0a0a0a" }}
            aria-hidden="true"
          />
        </div>

        <p
          className="font-mono text-[11px] lg:mb-2"
          style={{ color: isSpideyMode ? SPIDEY_BLUE : "#a3a3a3" }}
        >
          {isSpideyMode ? `CHAPTER ${milestone.chapter} // LOG` : milestone.chapter}
        </p>

        <h3 className="text-lg font-semibold tracking-[-0.03em] text-neutral-950 sm:text-xl">
          {milestone.title}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">{milestone.subtitle}</p>

        <p className="mt-3 max-w-xs text-[15px] leading-7 text-neutral-600 lg:mx-auto">
          {milestone.description}
        </p>
      </div>
    </motion.li>
  );
}

export default function AboutJourney() {
  const { isSpideyMode } = useTheme();

  return (
    <section className="bg-[#f5f5f0] py-20 text-neutral-900 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2.5">
              {isSpideyMode ? (
                <>
                  <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
                  <p className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
                    TIMELINE // THE HERO&apos;S JOURNEY
                  </p>
                </>
              ) : (
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                  Journey
                </p>
              )}
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Before the{" "}
              <span className="font-display italic font-normal text-neutral-500">
                {isSpideyMode ? "suit" : "code"}
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
            <p className="mt-4 text-base leading-8 text-neutral-600">
              {isSpideyMode
                ? "Three developmental chapters — school, university, and the rigorous training that shaped the instincts."
                : "Three chapters — school, college, and the training that turned curiosity into a career."}
            </p>
          </motion.div>

          <Link
            href="/experience"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
          >
            <span>{isSpideyMode ? "Full operational history" : "Full work history"}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mt-14 lg:mt-16"
        >
          {/* Desktop metro rail */}
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[3.35rem] hidden h-px bg-neutral-300 lg:block"
            aria-hidden="true"
          />

          <ol className="lg:grid lg:grid-cols-3 lg:gap-8">
            {journeyMilestones.map((milestone, index) => (
              <JourneyStop
                key={milestone.id}
                milestone={milestone}
                index={index}
                isSpideyMode={isSpideyMode}
              />
            ))}
          </ol>
        </motion.div>

        <p
          className="pointer-events-none mt-6 text-center font-handwritten text-[22px] lg:mt-10"
          style={{ color: isSpideyMode ? SPIDEY_BLUE : "#c17a12" }}
          aria-hidden="true"
        >
          {isSpideyMode ? "and then the city called 🕷️ ↗" : "and then the real work began ↗"}
        </p>
      </Container>
    </section>
  );
}
