"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SpiderMagSticker from "@/sections/about/SpiderMagSticker";
import { contactContent } from "@/data/contact";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED  = "#e23636";
const SPIDEY_BLUE = "#006fb9";

// ── Spider web pattern ───────────────────────────────────────────────
function WebPattern() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="contact-web" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120" stroke={SPIDEY_RED} strokeWidth="0.6" fill="none" />
          <circle cx="60" cy="60" r="18" stroke={SPIDEY_BLUE} strokeWidth="0.5" fill="none" />
          <circle cx="60" cy="60" r="36" stroke={SPIDEY_BLUE} strokeWidth="0.4" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-web)" />
    </svg>
  );
}

// ── Single FAQ item ──────────────────────────────────────────────────
function FaqItem({
  question, answer, num, isOpen, onToggle, index, isSpideyMode,
}: {
  question: string; answer: string; num: string;
  isOpen: boolean; onToggle: () => void;
  index: number; isSpideyMode: boolean;
}) {
  const redAccent  = isSpideyMode ? SPIDEY_RED  : "#ffffff";
  const blueAccent = isSpideyMode ? SPIDEY_BLUE : "#a1a1aa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Question row */}
      <button type="button" onClick={onToggle} className="group w-full text-left" aria-expanded={isOpen}>
        <div
          className="relative flex items-center gap-4 border-b py-5 transition-all duration-300"
          style={{ borderColor: isOpen ? `${redAccent}30` : "rgba(255,255,255,0.07)" }}
        >
          {/* Animated left accent bar */}
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300"
            style={{
              height: isOpen ? "60%" : "0%",
              backgroundColor: redAccent,
              opacity: isOpen ? 1 : 0,
            }}
          />

          {/* Number */}
          <span
            className="shrink-0 font-mono text-[10px] font-bold tabular-nums pl-4 transition-colors duration-300"
            style={{ color: isOpen ? redAccent : "#3f3f46" }}
          >
            {num}
          </span>

          {/* Question text */}
          <p
            className="flex-1 text-[15px] font-normal leading-snug transition-colors duration-300"
            style={{ color: isOpen ? "#ffffff" : "#a1a1aa" }}
          >
            {question}
          </p>

          {/* Toggle icon */}
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
            style={isOpen
              ? { borderColor: `${redAccent}50`, backgroundColor: `${redAccent}12`, color: redAccent, transform: "rotate(45deg)" }
              : { borderColor: "rgba(255,255,255,0.08)", color: "#52525b", transform: "rotate(0deg)" }}
          >
            <Plus className="h-3.5 w-3.5" />
          </span>
        </div>
      </button>

      {/* Answer — expands below */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-[52px] pr-10 py-4">
              {/* "Jaydip" label */}
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-5" style={{ backgroundColor: `${blueAccent}60` }} />
                <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: blueAccent }}>
                  {isSpideyMode ? "Spider-Jaydip" : "Jaydip"}
                </span>
              </div>
              <p className="text-[14px] leading-[1.8] text-zinc-400">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main export ──────────────────────────────────────────────────────
export default function ContactFAQ() {
  const { isSpideyMode } = useTheme();
  const { faq } = contactContent;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden bg-[#080808] pb-20 pt-28 text-white md:pb-24 md:pt-32">
      {/* Backgrounds */}
      {isSpideyMode ? (
        <>
          <WebPattern />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226,54,54,0.08) 0%, transparent 60%)" }} />
        </>
      ) : (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(255,255,255,0.015) 0%, transparent 70%)" }} />
      )}

      {/* Big decorative watermark "?" */}
      <p aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-16 select-none font-mono font-black leading-none opacity-[0.025]"
        style={{ fontSize: "clamp(10rem, 28vw, 22rem)", color: isSpideyMode ? SPIDEY_RED : "#fff" }}>
        ?
      </p>

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            {/* Eyebrow */}
            {isSpideyMode ? (
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
                Spider-FAQ // Direct Answers
              </p>
            ) : (
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                FAQ & Working Together
              </p>
            )}

            {/* Heading */}
            <h2 className="mt-4 text-[2.4rem] font-normal tracking-[-0.035em] leading-[1.08] text-white sm:text-[2.8rem]">
              Things I&apos;ve
              <br />
              been{" "}
              <span className={isSpideyMode ? "font-semibold" : "italic text-zinc-400"}>
                asked
              </span>
              {isSpideyMode && (
                <span className="ml-2 font-display italic text-2xl" style={{ color: SPIDEY_BLUE }}>✦</span>
              )}
            </h2>

            <p className="mt-5 max-w-[260px] text-[13.5px] leading-[1.75] text-zinc-500">
              {faq.subtitle}
            </p>

            {/* Badge */}
            <div className="mt-5">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em]"
                style={{
                  borderColor: isSpideyMode ? `${SPIDEY_BLUE}30` : "rgba(255,255,255,0.08)",
                  color: isSpideyMode ? SPIDEY_BLUE : "#52525b",
                  backgroundColor: isSpideyMode ? `${SPIDEY_BLUE}0c` : "rgba(255,255,255,0.03)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isSpideyMode ? SPIDEY_BLUE : "#52525b" }} />
                {faq.fromLabel}
              </span>
            </div>

            {/* Inline traits — minimal text list */}
            <div className="mt-8 space-y-2.5">
              {[
                { dot: "✦", text: "Backend-first, full-stack when it counts" },
                { dot: "✦", text: "No ghosting — I reply within 24h" },
                { dot: "✦", text: "Clean code · real production mindset" },
              ].map(({ dot, text }) => (
                <p key={text} className="flex items-start gap-2.5 text-[13px] leading-snug text-zinc-500">
                  <span className="mt-px shrink-0 text-[10px]" style={{ color: isSpideyMode ? SPIDEY_RED : "#52525b" }}>{dot}</span>
                  {text}
                </p>
              ))}
            </div>

            {/* Handwritten note / sticker */}
            <div className="mt-8">
              {isSpideyMode ? (
                <div className="flex items-center gap-3">
                  <SpiderMagSticker size={44} className="rotate-[-6deg]" />
                  <span className="font-handwritten text-[16px] text-blue-400">
                    direct line 🕷️ ⤷
                  </span>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, rotate: -2 }}
                  whileInView={{ opacity: 1, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5"
                >
                  <span className="text-base">☕</span>
                  <div>
                    <p className="font-handwritten text-[14px] leading-tight text-zinc-300">
                      quick reply · within 24 hours ⤷
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-600">
                      No formal deck needed
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mini CTA */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group mt-8 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-white"
            >
              Jump to the form
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

          {/* ── RIGHT COLUMN — FAQ list ── */}
          <div>
            {/* Subtle top line */}
            <div className="mb-2 h-px bg-white/[0.06]" />

            {faq.items.map((item, index) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                num={`0${index + 1}`}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(cur => cur === item.id ? null : item.id)}
                index={index}
                isSpideyMode={isSpideyMode}
              />
            ))}

            {/* Bottom line + note */}
            <div className="mt-0 h-px bg-white/[0.06]" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center justify-between"
            >
              <p className="font-mono text-[10.5px] text-zinc-600">
                {faq.items.length} questions answered
              </p>
              <a
                href="mailto:jaydesale003@gmail.com"
                className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] text-zinc-500 transition-colors hover:text-white"
              >
                Still have one?
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
