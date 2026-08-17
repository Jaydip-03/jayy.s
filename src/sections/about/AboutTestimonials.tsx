"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/data/testimonials";

import SpiderMagSticker from "./SpiderMagSticker";

/**
 * Reference layout (920×500 canvas, centered):
 *  [0 left]     [1 top-center]  [sticker] [3 right]
 *               [2 bottom-center]
 */
const cardLayouts = [
  {
    mobile: "relative z-[10]",
    desktop: "lg:left-[24px] lg:top-[96px] lg:w-[268px]",
    z: "lg:z-[10]",
  },
  {
    mobile: "relative -mt-10 z-[30]",
    desktop: "lg:left-[278px] lg:top-0 lg:w-[302px]",
    z: "lg:z-[30]",
  },
  {
    mobile: "relative -mt-10 z-[20]",
    desktop: "lg:left-[196px] lg:top-[258px] lg:w-[332px]",
    z: "lg:z-[20]",
  },
  {
    mobile: "relative -mt-10 z-[40]",
    desktop: "lg:left-[598px] lg:top-[108px] lg:w-[262px]",
    z: "lg:z-[40]",
  },
] as const;

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
      className={`rounded-2xl bg-[#141414] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.55)] transition-[box-shadow,z-index] duration-300 hover:!z-[50] hover:shadow-[0_28px_70px_rgba(0,0,0,0.7)] md:p-7 lg:absolute ${layout.mobile} ${layout.desktop} ${layout.z}`}
    >
      <p className="text-[15px] leading-[1.65] text-zinc-300 sm:text-base sm:leading-[1.7]">
        {item.quote}
      </p>
      <div className="mt-5 pt-4">
        <p className="text-[15px] font-semibold text-white">{item.name}</p>
        <p className="mt-0.5 text-sm text-zinc-500">{item.role}</p>
      </div>
    </motion.article>
  );
}

export default function AboutTestimonials() {
  return (
    <section className="overflow-hidden bg-black pb-16 pt-16 text-white md:pb-20 md:pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-white">
            Hear it from humans
            <br />
            I&apos;ve worked with
          </h2>
          <div className="mt-6 h-px w-full max-w-2xl bg-white/25" />
        </motion.div>

        {/* Mobile */}
        <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center pb-4 lg:hidden">
          <SpiderMagSticker size={80} className="mb-4 rotate-[-6deg]" />
          <div className="w-full">
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

        {/* Desktop — reference canvas, centered on page */}
        <div className="mt-14 hidden w-full justify-center lg:flex">
          <div className="relative h-[500px] w-[920px] max-w-[94vw]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[45%] h-[400px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,60,180,0.11),transparent_70%)]"
            />

            {/* Jerry → spidermag slot: between top-center & right card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="absolute left-[558px] top-[18px] z-[35]"
            >
              <SpiderMagSticker size={96} />
            </motion.div>

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
