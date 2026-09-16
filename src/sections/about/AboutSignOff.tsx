"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Jaydip-03",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaydip-desale-760770234/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:jaydesale003@gmail.com",
    icon: Mail,
  },
];

// ── Die-Cut Holographic Studio Sticker ─────────────────────
function SignOffSticker() {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className="relative shrink-0 select-none cursor-grab active:cursor-grabbing"
    >
      {/* Translucent Washi Tape on top */}
      <div
        className="pointer-events-none absolute -top-3.5 left-1/2 z-20 h-5 w-16 -translate-x-1/2 rotate-[-2.5deg] rounded-[1px] bg-amber-200/50 shadow-xs backdrop-blur-[2px]"
        aria-hidden="true"
      >
        <div className="h-full w-full border-y border-amber-300/40 opacity-70" />
      </div>

      {/* Secondary mini sticker peeking behind */}
      <div
        className="pointer-events-none absolute -bottom-2 -right-3 z-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-rose-600 via-red-500 to-amber-500 shadow-md rotate-12 ring-2 ring-black"
        aria-hidden="true"
      >
        <span className="font-mono text-[9.5px] font-black text-white tracking-tight">2023</span>
      </div>

      {/* Main Die-Cut Sticker Card */}
      <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-between rounded-2xl border-2 border-white/20 bg-gradient-to-b from-zinc-800 via-[#131316] to-black p-3.5 shadow-[0_24px_48px_rgba(0,0,0,0.8)] sm:h-32 sm:w-32">
        {/* Subtle holographic sheen overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-70"
          aria-hidden="true"
        />

        {/* Top Tag */}
        <div className="flex w-full items-center justify-between">
          <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-amber-400">
            ★ DEV
          </span>
          <span className="font-mono text-[8px] text-zinc-500 tracking-wider">PUNE</span>
        </div>

        {/* Center Illustration — Sunflower Icon */}
        <div className="relative my-auto flex items-center justify-center">
          <div className="absolute h-10 w-10 rounded-full bg-amber-400/20 blur-md" />
          <svg width="48" height="48" viewBox="0 0 100 100" className="relative drop-shadow-md">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse
                key={angle}
                cx="50"
                cy="20"
                rx="7"
                ry="16"
                fill="#fbbf24"
                transform={`rotate(${angle} 50 50)`}
              />
            ))}
            <circle cx="50" cy="50" r="16" fill="#78350f" />
            <circle cx="50" cy="50" r="13" fill="#451a03" />
            {/* Cute smile face */}
            <circle cx="45" cy="48" r="2.2" fill="#fbbf24" />
            <circle cx="55" cy="48" r="2.2" fill="#fbbf24" />
            <path
              d="M45 54 Q50 58 55 54"
              stroke="#fbbf24"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Bottom Tag */}
        <div className="flex items-center gap-1">
          <span className="font-mono text-[10px] font-bold tracking-tight text-white/90">
            &lt;jayy/&gt;
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSignOff() {
  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-16 text-white md:pb-32 md:pt-20">
      {/* Top separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]"
        aria-hidden="true"
      />

      {/* Subtle background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(226,54,54,0.6) 0%, rgba(0,111,185,0.4) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Sticker + closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left"
          >
            <SignOffSticker />

            {/* Text */}
            <div>
              {/* Eyebrow */}
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                That&apos;s a wrap — for now
              </p>

              {/* Main closing quote */}
              <p className="font-display text-2xl italic leading-relaxed text-white/90 sm:text-3xl">
                &ldquo;Still learning. Still building.{" "}
                <span className="text-[#e23636]">Always becoming better.</span>&rdquo;
              </p>

              {/* Signature */}
              <p className="mt-5 font-handwritten text-[26px] leading-none text-zinc-400">
                — Jayy
              </p>

              {/* Sub-line */}
              <p className="mt-4 max-w-md text-[14px] leading-7 text-zinc-500">
                If something here resonated — my inbox and GitHub are always open.
                Let&apos;s build something worth talking about.
              </p>

              {/* CTA buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  See my work
                </Link>
              </div>

              {/* Social links */}
              <div className="mt-6 flex items-center gap-1">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-500 transition-all duration-300 hover:border-white/20 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
