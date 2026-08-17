"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getFeaturedRecognitions } from "@/lib/recognition";

import RecognitionList from "./RecognitionList";

export default function Recognition() {
  const featured = getFeaturedRecognitions();

  return (
    <Section
      id="recognition"
      className="border-t border-neutral-200/60 bg-[#f5f5f0] pb-24 pt-20 text-neutral-900 md:pb-32 md:pt-24"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              Credentials
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Recognition &amp;{" "}
              <span className="font-display italic font-normal text-neutral-500">
                growth
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:text-[17px] sm:leading-8">
              Certifications, training, and research — proof of the learning
              that happens outside tutorials.
            </p>
          </motion.div>

          <Link
            href="/recognition"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
          >
            All credentials
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 md:mt-14">
          <RecognitionList items={featured} />
        </div>

        <p
          className="pointer-events-none mt-12 text-center font-handwritten text-[24px] text-[#c17a12]"
          aria-hidden="true"
        >
          learning never stops ↗
        </p>
      </Container>
    </Section>
  );
}
