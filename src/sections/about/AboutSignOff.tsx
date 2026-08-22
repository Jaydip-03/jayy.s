"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";

export default function AboutSignOff() {
  const { signoff } = aboutContent;

  return (
    <section className="bg-black pb-16 pt-10 text-white md:pb-20 md:pt-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[15px] leading-8 text-zinc-400 sm:text-base sm:leading-8">
            {signoff.line}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
