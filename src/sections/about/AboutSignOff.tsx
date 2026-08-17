"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";

export default function AboutSignOff() {
  const { signoff } = aboutContent;

  return (
    <section className="bg-black pb-20 pt-10 text-white md:pb-24 md:pt-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <p className="text-center text-[15px] leading-8 text-zinc-400 sm:text-base sm:leading-8">
            {signoff.line}
          </p>

          <div
            className="my-10 h-px w-full bg-white/10 md:my-12"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-5">
            <p className="font-handwritten text-[36px] leading-none text-white sm:text-[42px]">
              {signoff.signature}
            </p>

            <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full ring-1 ring-white/15 sm:h-20 sm:w-20">
              <Image
                src={signoff.photo}
                alt={signoff.photoAlt}
                fill
                sizes="80px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
