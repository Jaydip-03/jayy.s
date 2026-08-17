"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";

export default function AboutStory() {
  const { story } = aboutContent;

  return (
    <section className="bg-[#f5f5f0] pb-16 pt-14 text-neutral-900 md:pb-20 md:pt-16">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(240px,0.85fr)_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              {story.label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              {story.title}
              <br />
              <span className="font-display italic font-normal text-neutral-500">
                {story.italic}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-10">
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
                className="text-[16px] leading-8 text-neutral-600 sm:text-[17px]"
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
            >
              &ldquo;{story.quote}&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
