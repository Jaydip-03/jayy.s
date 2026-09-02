"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useTheme } from "@/context/ThemeContext";

import SkillsBlueprint, {
  TechItem,
  architectureLayers,
} from "./SkillsBlueprint";
import SkillsSpidey from "./SkillsSpidey";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export default function Skills() {
  const { isSpideyMode } = useTheme();

  // Default to Spring Boot as initial featured skill
  const [activeTech, setActiveTech] = useState<TechItem | null>(
    architectureLayers[0].technologies[1]
  );

  return (
    <Section
      id="skills"
      className="relative overflow-hidden bg-[#f5f5f0] py-24 text-zinc-950 md:py-32"
    >
      {/* Spider-Man Easter Egg Background (Active only in Spidey Mode) */}
      <SkillsSpidey />

      {/* Subtle Architectural Paper Dot Grid Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Swiss Precision Crosshairs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-8 font-mono text-[11px] text-zinc-400 select-none"
      >
        +
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-8 font-mono text-[11px] text-zinc-400 select-none"
      >
        +
      </div>

      <div className="relative z-10">
        <Container>
          {/* Top Architectural Coordinate Ruler Guide */}
          <div className="mb-10 flex items-center justify-between border-b border-zinc-200/90 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {isSpideyMode
                  ? "SPIDER-ARSENAL // COMBAT TECH LEDGER"
                  : "ARCHITECTURE LEDGER // 01—05"}
              </span>
            </div>

            <div className="hidden sm:block">
              <span>
                {isSpideyMode
                  ? "STATUS: OPERATIONAL 100%"
                  : "PUNE, IN · 2026 REPO AUDIT"}
              </span>
            </div>

            <div>
              <span>
                {isSpideyMode
                  ? "LEVEL 04 CLEARANCE"
                  : "28+ PRODUCTION NODES"}
              </span>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(310px,0.88fr)_1.12fr] lg:items-start lg:gap-16">
            {/* ─────────────────────────────────────────────────────────────
                LEFT COLUMN: Systems Philosophy & Live Inspection HUD
                ───────────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: isSpideyMode ? SPIDEY_RED : "#18181b",
                  }}
                />
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-600 font-semibold">
                  {isSpideyMode ? "TECH WEAPONRY" : "System Architecture & Stack"}
                </p>
              </div>

              <h2 className="mt-4 font-display text-4xl font-normal leading-[1.04] tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-[3.25rem]">
                {isSpideyMode ? (
                  <>
                    Engineered to scale.
                    <br />
                    <span
                      className="font-display italic font-normal"
                      style={{ color: SPIDEY_BLUE }}
                    >
                      Web precision.
                    </span>
                  </>
                ) : (
                  <>
                    I don&apos;t collect frameworks.
                    <br />
                    <span className="font-display italic font-normal text-zinc-600">
                      I learn what earns its place.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-7">
                Java &amp; Spring Boot form the core application engine. Every other tool is chosen intentionally to serve clean architecture, schema integrity, and resilient delivery.
              </p>

              {/* ── Live Technical Telemetry HUD ── */}
              <div className="mt-8 rounded-2xl border border-zinc-900/10 bg-white/95 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3 font-mono text-[9.5px] uppercase tracking-wider text-zinc-600">
                  <span className="flex items-center gap-1.5">
                    <Activity className="h-3 w-3 text-emerald-600 animate-pulse" />
                    LIVE TELEMETRY INSPECTOR
                  </span>
                  <span className="text-zinc-600">NODE 1:1 AUDIT</span>
                </div>

                <AnimatePresence mode="wait">
                  {activeTech ? (
                    <motion.div
                      key={activeTech.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3.5 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <activeTech.icon
                            className="h-4 w-4"
                            style={{ color: activeTech.color }}
                          />
                          <h4 className="font-display text-lg font-normal text-zinc-950">
                            {activeTech.name}
                          </h4>
                        </div>
                        <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                          {activeTech.layer}
                        </span>
                      </div>

                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-600 block">
                          Capability Matrix
                        </span>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-700">
                          {activeTech.capability}
                        </p>
                      </div>

                      <div className="border-t border-zinc-100 pt-2.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-600 block">
                          Shipped In Production
                        </span>
                        <p className="mt-0.5 font-mono text-xs font-medium text-zinc-900">
                          {activeTech.shippedIn}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 py-3 text-center"
                    >
                      <p className="font-mono text-xs text-zinc-600">
                        Hover or tap any architectural node on the right to inspect technical capability and system footprint.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Craft Seal / Verified Footer */}
              <div className="mt-6 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>ZERO TEMPLATES · 100% PRODUCTION HARDENED</span>
              </div>
            </motion.div>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT COLUMN: 5-Layer Architectural Systems Blueprint
                ───────────────────────────────────────────────────────────── */}
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
              <SkillsBlueprint
                activeTech={activeTech}
                onSelectTech={(tech) => setActiveTech(tech)}
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
