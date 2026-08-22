"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

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
    <section className="bg-[#f5f5f0] pb-16 pt-14 text-neutral-900 md:pb-24 md:pt-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(260px,0.8fr)_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
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
              className="group relative mt-8 w-full max-w-[235px] rounded-xl bg-white p-3 pb-3.5 shadow-[0_14px_35px_rgba(0,0,0,0.07)] ring-1 ring-neutral-900/5 transition-all duration-300 hover:rotate-0 hover:shadow-[0_20px_45px_rgba(0,0,0,0.11)]"
            >
              {/* Mono Label at Top of Photo */}
              <p
                className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em]"
                style={{ color: isSpideyMode ? SPIDEY_RED : "#a3a3a3" }}
              >
                {isSpideyMode ? "JAYDIP // FRIENDLY NEIGHBORHOOD DEV" : "JAYDIP // MUMBAI, INDIA"}
              </p>

              {/* Photo */}
              <div className="relative aspect-[3/3.8] w-full overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src="/about/jayyAbout.jpg"
                  alt="Jaydip Desale"
                  fill
                  sizes="235px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
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
                    glad you&apos;re here ⤷
                  </p>
                </div>

                {/* Bottom Right Doodle (Coffee cup in Normal Mode vs Spider in Spidey Mode) */}
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
          </div>
        </div>
      </Container>
    </section>
  );
}
