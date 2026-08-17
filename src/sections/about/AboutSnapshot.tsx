"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";

export default function AboutSnapshot() {
  const { snapshot } = aboutContent;

  return (
    <section className="relative bg-black pb-12 pt-12 text-white md:pb-14 md:pt-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#f5f5f0]">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-6"
        >
          {snapshot.map((item, index) => (
            <div
              key={item.label}
              className={`${
                index === snapshot.length - 1 && snapshot.length % 2 !== 0
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-zinc-200 sm:text-[15px]">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
