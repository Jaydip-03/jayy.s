"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import SpiderMagSticker from "@/sections/about/SpiderMagSticker";
import { contactContent } from "@/data/contact";

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

function SelectionBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 rounded-[3px] border-2"
        style={{ borderColor: SPIDEY_RED }}
      />
      {[
        "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
        "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
        "right-0 top-0 translate-x-1/2 -translate-y-1/2",
        "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
        "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
        "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
      ].map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute h-2 w-2 rounded-[2px] border bg-black ${position}`}
          style={{ borderColor: `${SPIDEY_RED}99` }}
        />
      ))}
    </span>
  );
}

function KeywordRibbon() {
  return (
    <div
      aria-hidden="true"
      className="mb-6 h-px w-12 opacity-70"
      style={{
        background: `linear-gradient(90deg, ${SPIDEY_RED}, ${SPIDEY_BLUE})`,
      }}
    />
  );
}

function FaqBubble({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
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
          className={`relative rounded-2xl rounded-tl-md bg-[#141414] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-colors duration-300 ${
            isOpen
              ? "border border-[#e23636]/40"
              : "border border-transparent hover:border-[#e23636]/25"
          }`}
        >
          <p className="text-[15px] leading-relaxed text-zinc-200">{question}</p>
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
          isOpen
            ? "border-[#e23636]/50 text-[#e23636]"
            : "border-[#006fb9]/40 text-[#006fb9] hover:border-[#006fb9]/70 hover:bg-[#006fb9]/10"
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
  const { faq } = contactContent;
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden bg-black pb-16 pt-28 text-white md:pb-20 md:pt-32">
      <WebPattern />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,54,54,0.07),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(0,111,185,0.06),transparent_35%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.85fr)_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <KeywordRibbon />
            <p
              className="text-xs font-medium uppercase tracking-[0.28em]"
              style={{ color: SPIDEY_BLUE }}
            >
              {faq.label}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              {faq.titleLine}{" "}
              <SelectionBox>{faq.titleHighlight}</SelectionBox>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-8 text-zinc-400">
              {faq.subtitle}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-zinc-600">
              {contactContent.ribbonKeywords.join(" · ")}
            </p>
            <p
              className="mt-8 inline-block rounded-md px-2 py-1 font-mono text-[11px]"
              style={{ backgroundColor: `${SPIDEY_BLUE}22`, color: SPIDEY_BLUE }}
            >
              {faq.fromLabel}
            </p>

            <motion.div
              initial={{ opacity: 0, rotate: -8 }}
              whileInView={{ opacity: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pointer-events-none absolute -right-2 top-0 hidden lg:block"
              aria-hidden="true"
            >
              <SpiderMagSticker size={72} className="rotate-[-8deg] opacity-90" />
            </motion.div>
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
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
