"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import SpiderMagSticker from "@/sections/about/SpiderMagSticker";
import { contactContent } from "@/data/contact";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function WebPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="contact-web"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120"
            stroke={SPIDEY_RED}
            strokeWidth="0.6"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="18"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="36"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.4"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-web)" />
    </svg>
  );
}

// ── Small, Discrete Compact Sticky Note / Sticker ─────────────────

function CompactNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.2 }}
      className="mt-6 inline-flex max-w-[260px] items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#141417] px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs">
        ☕
      </span>
      <div className="min-w-0">
        <p className="font-handwritten text-[14px] leading-tight text-neutral-300">
          quick reply · within 24 hours ⤷
        </p>
        <p className="font-mono text-[8px] uppercase tracking-wider text-neutral-500">
          No formal deck needed
        </p>
      </div>
    </motion.div>
  );
}

function FaqBubble({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  isSpideyMode,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isSpideyMode: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="flex items-start gap-3"
    >
      <div className="min-w-0 flex-1">
        <div
          onClick={onToggle}
          className={`relative cursor-pointer rounded-2xl rounded-tl-md px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${
            isSpideyMode
              ? isOpen
                ? "border border-[#e23636]/60 bg-[#161618]"
                : "border border-white/[0.06] bg-[#141414] hover:border-[#e23636]/40"
              : isOpen
                ? "border border-white/20 bg-[#17171a]"
                : "border border-white/[0.06] bg-[#121214] hover:border-white/15"
          }`}
        >
          <p className="text-[15px] font-normal leading-relaxed text-zinc-200">{question}</p>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-3 max-w-md pl-1 text-sm leading-7 text-zinc-400">
                {answer}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Hide answer" : "Show answer"}
        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
          isSpideyMode
            ? isOpen
              ? "border-[#e23636]/60 text-[#e23636] bg-[#e23636]/10"
              : "border-[#006fb9]/40 text-[#006fb9] hover:border-[#006fb9]/70 hover:bg-[#006fb9]/10"
            : isOpen
              ? "border-white/30 text-white bg-white/10"
              : "border-white/10 text-zinc-400 hover:border-white/25 hover:text-white"
        }`}
      >
        <Plus
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
    </motion.div>
  );
}

export default function ContactFAQ() {
  const { isSpideyMode } = useTheme();
  const { faq } = contactContent;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden bg-black pb-16 pt-28 text-white md:pb-20 md:pt-32">
      {isSpideyMode && (
        <>
          <WebPattern />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,54,54,0.07),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(0,111,185,0.06),transparent_35%)]"
          />
        </>
      )}

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.88fr)_1.12fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            {isSpideyMode ? (
              <p
                className="text-xs font-mono font-bold uppercase tracking-[0.28em]"
                style={{ color: SPIDEY_RED }}
              >
                FREQUENTLY ASKED // SPIDER-FAQ
              </p>
            ) : (
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                FAQ &amp; Working Together
              </p>
            )}

            <h2 className="mt-4 text-3xl font-normal tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              {faq.titleLine}{" "}
              <span className={isSpideyMode ? "font-semibold text-white" : "italic text-zinc-400"}>
                {faq.titleHighlight}
              </span>
              {isSpideyMode && (
                <span
                  className="ml-2 font-display italic text-2xl"
                  style={{ color: SPIDEY_BLUE }}
                >
                  ✦
                </span>
              )}
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-7">
              {faq.subtitle}
            </p>

            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-zinc-600">
              {contactContent.ribbonKeywords.join(" · ")}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span
                className="inline-block rounded-md px-2.5 py-1 font-mono text-[10px]"
                style={{
                  backgroundColor: isSpideyMode ? `${SPIDEY_BLUE}22` : "rgba(255,255,255,0.06)",
                  color: isSpideyMode ? SPIDEY_BLUE : "#a1a1aa",
                }}
              >
                {faq.fromLabel}
              </span>
            </div>

            {/* Small, discrete compact sticker / note */}
            {isSpideyMode ? (
              <div className="mt-6 flex items-center gap-3">
                <SpiderMagSticker size={46} className="rotate-[-6deg]" />
                <span className="font-handwritten text-[15px] text-blue-400">
                  direct transmission line 🕷️ ⤷
                </span>
              </div>
            ) : (
              <CompactNote />
            )}
          </motion.div>

          <div className="space-y-5">
            {faq.items.map((item, index) => (
              <FaqBubble
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((current) =>
                    current === item.id ? null : item.id,
                  )
                }
                index={index}
                isSpideyMode={isSpideyMode}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
