"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import { useTheme } from "@/context/ThemeContext";

import SpiderMagSticker from "./SpiderMagSticker";

/**
 * Exact Asymmetric Floating Layout matching Reference (Parul's portfolio):
 *  [Card 1 Left]       [Card 2 Top-Center]     [Avatar Sticker]  [Card 4 Right]
 *                      [Card 3 Bottom-Center]
 */
const cardLayouts = [
  {
    mobile: "relative z-[10]",
    desktop: "lg:left-[24px] lg:top-[90px] lg:w-[280px]",
    z: "lg:z-[10]",
  },
  {
    mobile: "relative -mt-6 z-[30]",
    desktop: "lg:left-[285px] lg:top-[0px] lg:w-[310px]",
    z: "lg:z-[30]",
  },
  {
    mobile: "relative -mt-6 z-[20]",
    desktop: "lg:left-[215px] lg:top-[260px] lg:w-[335px]",
    z: "lg:z-[20]",
  },
  {
    mobile: "relative -mt-6 z-[40]",
    desktop: "lg:left-[610px] lg:top-[110px] lg:w-[280px]",
    z: "lg:z-[40]",
  },
] as const;

// ── Cute Jerry-style Avatar Sticker for Normal Mode ──────────────

function ChillAvatarSticker() {
  return (
    <div className="relative h-[92px] w-[92px] overflow-hidden rounded-2xl border border-white/10 bg-[#bbf2f6] shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
      {/* Cute sleeping/chill character SVG (Jerry-vibe) */}
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
        {/* Soft blue room wall */}
        <rect width="100%" height="100%" fill="#bae6fd" />
        
        {/* Cozy pillow */}
        <path
          d="M10 75 Q 30 55 60 62 Q 90 70 95 85 L 10 95 Z"
          fill="#fef08a"
          stroke="#fde047"
          strokeWidth="2"
        />
        
        {/* Little Mouse / Chill character */}
        {/* Ear */}
        <ellipse cx="68" cy="38" rx="14" ry="16" fill="#ca8a04" stroke="#a16207" strokeWidth="2" />
        <ellipse cx="68" cy="38" rx="8" ry="10" fill="#fbcfe8" />
        
        {/* Head */}
        <ellipse cx="48" cy="52" rx="18" ry="15" fill="#ca8a04" stroke="#a16207" strokeWidth="2" />
        
        {/* Cheek / Snout */}
        <ellipse cx="36" cy="58" rx="12" ry="9" fill="#fef08a" />
        <ellipse cx="28" cy="55" rx="3.5" ry="2.5" fill="#1c1917" />
        
        {/* Sleeping Eye */}
        <path d="M42 48 Q 48 53 54 49" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 46 L 52 42" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Whiskers */}
        <path d="M28 58 L 16 57 M28 61 L 18 63" stroke="#713f12" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Paw */}
        <ellipse cx="38" cy="68" rx="6" ry="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// ── Clean Editorial Card (Exact Reference Hierarchy) ─────────────

function TestimonialCard({
  item,
  index,
  layout,
}: {
  item: (typeof testimonials)[number];
  index: number;
  layout: (typeof cardLayouts)[number];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`rounded-2xl border border-white/[0.04] bg-[#141416] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:!z-[60] hover:border-white/15 hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)] md:p-7 lg:absolute ${layout.mobile} ${layout.desktop} ${layout.z}`}
    >
      {/* Clean Quote Text */}
      <p className="text-[14.5px] leading-[1.68] text-zinc-300 sm:text-[15px] sm:leading-[1.7]">
        {item.quote}
      </p>

      {/* Author Details (Matching Parul's Reference: Bold Name + Grey Subtitle) */}
      <div className="mt-5 pt-1">
        <p className="text-[15px] font-semibold text-white tracking-tight">
          {item.name}
        </p>
        <p className="text-[13px] text-zinc-400 mt-0.5">
          {item.role}
        </p>
      </div>
    </motion.article>
  );
}

export default function AboutTestimonials() {
  const { isSpideyMode } = useTheme();

  return (
    <section className="overflow-hidden bg-black pb-16 pt-16 text-white md:pb-24 md:pt-20">
      <Container>
        
        {/* Header matching Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.02em] text-white">
            Hear It From Humans I&apos;ve Worked With
          </h2>
          <div className="mt-4 h-px w-full max-w-2xl bg-white/20" />
        </motion.div>

        {/* Mobile View */}
        <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center pb-4 lg:hidden">
          <div className="mb-6">
            {isSpideyMode ? (
              <SpiderMagSticker size={80} className="rotate-[-6deg]" />
            ) : (
              <ChillAvatarSticker />
            )}
          </div>
          <div className="w-full space-y-4">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                index={index}
                layout={cardLayouts[index]}
              />
            ))}
          </div>
        </div>

        {/* Desktop View — Floating Canvas matching Parul's Composition */}
        <div className="mt-14 hidden w-full justify-center lg:flex">
          <div className="relative h-[510px] w-[920px] max-w-[94vw]">
            
            {/* Subtle Ambient Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[45%] h-[400px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_70%)]"
            />

            {/* Sticker / Avatar Slot (Between Top-Center Card & Right Card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="absolute left-[565px] top-[15px] z-[35]"
            >
              {isSpideyMode ? (
                <SpiderMagSticker size={92} />
              ) : (
                <ChillAvatarSticker />
              )}
            </motion.div>

            {/* 4 Asymmetric Testimonial Cards */}
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                index={index}
                layout={cardLayouts[index]}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
