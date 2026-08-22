"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import SkillsBlueprint from "./SkillsBlueprint";
import SkillsSpidey from "./SkillsSpidey";

export default function Skills() {
  return (
    <Section
      id="skills"
      className="relative overflow-hidden bg-[#f5f5f0] py-24 text-neutral-900 md:py-32"
    >
      {/* Spider-Man Easter Egg Background (Active only in Spidey Mode) */}
      <SkillsSpidey />

      <div className="relative z-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.85fr)_1.15fr] lg:items-start lg:gap-16">
            {/* Sticky Left Column: Systems Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400">
                System Architecture & Stack
              </p>

              <h2 className="mt-4 font-display text-4xl font-normal leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
                I don&apos;t collect frameworks.
                <br />
                <span className="italic font-normal text-neutral-500">
                  I learn what earns its place.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-7">
                Java &amp; Spring Boot form the core application engine. Every other tool is chosen intentionally to serve clean architecture, schema integrity, and resilient delivery.
              </p>

              <div className="mt-8 border-t border-neutral-200/80 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  Engineering Blueprint
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  Structured from Client &amp; DOM interfaces down to Core Application Logic, Data Persistence, and Cloud Tooling.
                </p>
              </div>

              <p
                className="pointer-events-none mt-8 rotate-[-5deg] font-handwritten text-[22px] text-neutral-400"
                aria-hidden="true"
              >
                always adding more ↗
              </p>
            </motion.div>

            {/* Right Column: Architectural Blueprint Layout */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-0"
            >
              <SkillsBlueprint />
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
