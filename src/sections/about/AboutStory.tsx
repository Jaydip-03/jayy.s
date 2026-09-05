"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function CornerWeb({ className = "" }: { className?: string }) {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-20 ${className}`}
    >
      <line x1="0" y1="0" x2="140" y2="0" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="130" y2="50" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="100" y2="100" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="50" y2="130" stroke={SPIDEY_RED} strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="140" stroke={SPIDEY_RED} strokeWidth="1" />
      <path d="M40 0 Q 38 18, 28 28 Q 18 38, 0 40" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
      <path d="M80 0 Q 75 35, 56 56 Q 35 75, 0 80" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
      <path d="M120 0 Q 112 52, 85 85 Q 52 112, 0 120" stroke={SPIDEY_BLUE} strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function HangingSpiderDoodle() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="hidden sm:flex flex-col items-center"
      aria-hidden="true"
    >
      <div className="h-10 w-px bg-gradient-to-b from-neutral-400/40 via-[#e23636]/60 to-[#e23636]" />
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#18181b] shadow-md border border-[#e23636]/50">
        <span className="text-xs">🕷️</span>
      </div>
    </motion.div>
  );
}

function IssueBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="hidden sm:inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 shadow-xs"
      style={{
        borderColor: `${SPIDEY_RED}50`,
        backgroundColor: `${SPIDEY_RED}0f`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SPIDEY_RED }} />
      <span className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
        ISSUE #01 · ORIGINS
      </span>
    </motion.div>
  );
}

export default function AboutStory() {
  const { isSpideyMode } = useTheme();
  const { story } = aboutContent;

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[#f5f5f0] pt-20 pb-16 text-zinc-950 sm:pt-24 sm:pb-20">
      {/* Background Decor */}
      {isSpideyMode && (
        <>
          <CornerWeb className="left-0 top-0" />
          <CornerWeb className="right-0 top-0 -scale-x-100" />
        </>
      )}

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(260px,0.8fr)_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {isSpideyMode ? (
                  <>
                    <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
                      ORIGIN STORY // SPIDER-LOGS
                    </p>
                    <IssueBadge />
                  </>
                ) : (
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400">
                    {story.label}
                  </p>
                )}
              </div>

              {isSpideyMode && <HangingSpiderDoodle />}
            </div>

            <h2 className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              {story.title}
              <br />
              <span className="italic font-normal text-neutral-500">
                {story.italic}
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

            {/* Slightly reduced, well-proportioned Polaroid Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`group relative mt-8 w-full rounded-xl bg-white p-3 pb-3.5 shadow-[0_14px_35px_rgba(0,0,0,0.07)] ring-1 ring-neutral-900/5 transition-all duration-300 hover:rotate-0 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] ${
                isSpideyMode ? "max-w-[260px]" : "max-w-[245px]"
              }`}
            >
              {/* Spidey Mode Subtle Washi Tape Decor */}
              {isSpideyMode && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2.5 left-4 z-20 h-4 w-12 -rotate-6 rounded-xs bg-[#fef08a]/90 shadow-xs border-t border-b border-yellow-300/60"
                />
              )}

              {/* Mono Label at Top of Photo */}
              <p
                className="mb-2 font-mono text-[8.5px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: isSpideyMode ? SPIDEY_RED : "#a3a3a3" }}
              >
                {isSpideyMode ? "JAYDIP // THE ENGINEER BEHIND THE MASK" : "JAYDIP // PUNE, INDIA"}
              </p>

              {/* Photo */}
              <div
                className={`relative w-full overflow-hidden rounded-md bg-neutral-100 shadow-inner ${
                  isSpideyMode ? "aspect-[710/1024]" : "aspect-[3/3.8]"
                }`}
              >
                <Image
                  src={isSpideyMode ? "/about/jayySpideySelfieCollage.jpg" : "/about/jayyAbout.jpg"}
                  alt="Jaydip Desale"
                  fill
                  sizes="260px"
                  className={`transition-transform duration-500 group-hover:scale-[1.03] ${
                    isSpideyMode ? "object-cover object-center" : "object-cover object-[center_18%]"
                  }`}
                  priority
                />
              </div>

              {/* Polaroid Bottom Margin */}
              <div className="relative mt-3 flex items-end justify-between px-1">
                {/* Centered Handwritten Note */}
                <div className="flex-1 text-center">
                  <p
                    className="font-handwritten text-[19px] leading-none"
                    style={{ color: isSpideyMode ? SPIDEY_BLUE : "#404040" }}
                  >
                    {isSpideyMode ? "friendly neighborhood dev ⤷" : "glad you're here ⤷"}
                  </p>
                </div>

                {/* Bottom Right Doodle */}
                <div className="absolute right-0 bottom-[-2px] opacity-85 transition-transform duration-300 group-hover:scale-110">
                  {isSpideyMode ? (
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                      <ellipse cx="14" cy="14" rx="10" ry="11" fill={SPIDEY_RED} />
                      <path d="M14 3V25M4 14H24M7 7L21 21M21 7L7 21" stroke="#18181b" strokeWidth="0.8" opacity="0.6" />
                      <path d="M8 11Q11 11 13 14Q10 16 7 14Z" fill="white" stroke="#18181b" strokeWidth="1" />
                      <path d="M20 11Q17 11 15 14Q18 16 21 14Z" fill="white" stroke="#18181b" strokeWidth="1" />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-700"
                    >
                      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                      <path d="M6 2v2" />
                      <path d="M10 2v2" />
                      <path d="M14 2v2" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[15px] leading-relaxed text-neutral-600 sm:text-[16.5px] sm:leading-8"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="border-l-2 border-neutral-300 pl-6 font-display text-xl italic leading-relaxed text-neutral-700 sm:text-2xl"
              style={{
                borderColor: isSpideyMode ? SPIDEY_RED : undefined,
              }}
            >
              &ldquo;{story.quote}&rdquo;
            </motion.blockquote>

            {/* Spidey Mode Retro Comic Caption Box */}
            {isSpideyMode ? (
              <motion.div
                initial={{ opacity: 0, rotate: -2, y: 16 }}
                whileInView={{ opacity: 1, rotate: -1.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mt-6 max-w-md rounded-lg border-2 border-black bg-[#fef08a] p-4 shadow-[5px_5px_0px_#000]"
              >
                {/* Comic Caption Box Header */}
                <div className="mb-2 flex items-center justify-between border-b-2 border-black pb-1.5">
                  <span className="rounded-xs bg-[#e23636] px-2 py-0.5 font-mono text-xs font-black uppercase tracking-wider text-white">
                    MEANWHILE...
                  </span>
                  <span className="font-mono text-[10px] font-bold text-neutral-800">
                    ISSUE #03 · EARTH-1610
                  </span>
                </div>
                <p className="font-display text-sm font-semibold leading-relaxed text-black">
                  &ldquo;While the city sleeps, the web-slinger refactors the backend. Java 21, Spring Boot, zero downtime.&rdquo;
                </p>
                <div className="mt-2.5 flex items-center justify-between font-mono text-[11px] text-neutral-700">
                  <span className="font-bold text-[#e23636]">THWIP! 🕸️</span>
                  <span className="italic text-neutral-600">to be continued...</span>
                </div>
              </motion.div>
            ) : (
              <div className="mt-6 flex items-center gap-3 pt-2 text-neutral-400">
                <div className="h-px w-10 bg-neutral-300" />
                <span className="font-handwritten text-base text-neutral-500">
                  built with intention, shipped to last ✦
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
