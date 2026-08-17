"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function WebPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="about-web"
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
          <circle cx="60" cy="60" r="18" stroke={SPIDEY_BLUE} strokeWidth="0.5" fill="none" />
          <circle cx="60" cy="60" r="36" stroke={SPIDEY_BLUE} strokeWidth="0.4" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-web)" />
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

function DesignCursor({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="pointer-events-none absolute -bottom-8 right-0 z-20 sm:-bottom-10 sm:-right-6"
      aria-hidden="true"
    >
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        style={{ color: SPIDEY_BLUE }}
      >
        <path
          d="M4 2L4 19L8.5 14.5L12.5 22L15 20.5L11 13L17 13L4 2Z"
          fill="currentColor"
          stroke="white"
          strokeWidth="1.2"
        />
      </svg>
      <span
        className="absolute left-5 top-4 whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-medium text-white shadow-lg"
        style={{ backgroundColor: SPIDEY_BLUE }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function SpiderDoodle() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -top-9 left-[38%] sm:-top-10 sm:left-[42%]"
      aria-hidden="true"
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="14" r="5" stroke={SPIDEY_RED} strokeWidth="1.8" />
        <path
          d="M17 19V24 M11 16L5 13 M23 16L29 13 M12 11L7 7 M22 11L27 7 M13 18L8 22 M21 18L26 22"
          stroke={SPIDEY_RED}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

function AvatarFrame() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-8, -5, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -left-2 top-4 hidden sm:block md:-left-8 md:top-8"
      aria-hidden="true"
    >
      <div
        className="rotate-[-8deg] rounded-xl border-2 bg-black p-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{
          borderImage: `linear-gradient(135deg, ${SPIDEY_RED}, ${SPIDEY_BLUE}) 1`,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: SPIDEY_RED,
        }}
      >
        <div
          className="flex h-[68px] w-[54px] items-center justify-center rounded-lg font-mono text-lg font-bold text-white"
          style={{
            background: `linear-gradient(145deg, ${SPIDEY_RED}22, ${SPIDEY_BLUE}33)`,
          }}
        >
          JD
        </div>
      </div>
    </motion.div>
  );
}

function FloatingTools() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [6, 10, 6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-2 top-2 hidden md:block lg:-right-6 lg:top-6"
        aria-hidden="true"
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-dashed bg-white/[0.02] p-3.5"
          style={{ borderColor: `${SPIDEY_RED}55` }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2 L14 26 M2 14 L26 14 M4 4 L24 24 M24 4 L4 24"
              stroke={SPIDEY_RED}
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="14" cy="14" r="4" stroke={SPIDEY_BLUE} strokeWidth="1.2" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [-4, 0, -4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-8 top-20 hidden md:block lg:right-2 lg:top-24"
        aria-hidden="true"
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-lg"
          style={{
            backgroundColor: SPIDEY_BLUE,
            boxShadow: `0 12px 30px ${SPIDEY_BLUE}55`,
          }}
        >
          {"</>"}
        </div>
      </motion.div>
    </>
  );
}

export default function AboutIntro() {
  const { intro } = aboutContent;

  return (
    <section className="relative overflow-hidden bg-black pb-6 pt-28 text-white md:pb-8 md:pt-32">
      <WebPattern />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,54,54,0.06),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(0,111,185,0.05),transparent_35%)]"
      />

      <Container className="relative z-10">
        <div className="relative mx-auto flex min-h-[260px] max-w-4xl flex-col justify-center sm:min-h-[300px] md:min-h-[340px]">
          <AvatarFrame />
          <FloatingTools />
          <SpiderDoodle />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center font-display text-[clamp(2.35rem,7vw,4.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white/95"
          >
            {intro.line1}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <SelectionBox>{intro.line2}</SelectionBox>
              <DesignCursor label={intro.cursorLabel} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 max-w-sm font-display text-base italic sm:mt-12 sm:text-lg"
            style={{ color: SPIDEY_BLUE }}
          >
            {intro.tagline}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
