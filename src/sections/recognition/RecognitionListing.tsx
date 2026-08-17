"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import { recognitions } from "@/data/recognitions";

import RecognitionList from "./RecognitionList";

export default function RecognitionListing() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] pb-24 pt-28 text-neutral-900 md:pt-32">
      <Container>
        <Link
          href="/#recognition"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to recognition
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
            Credentials
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            All recognition
          </h1>
          <p className="mt-4 text-base leading-8 text-neutral-600">
            Certifications, programs, and published research — the full record.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-14 md:mt-16"
        >
          <RecognitionList items={recognitions} />
        </motion.div>
      </Container>
    </main>
  );
}
