import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on Java, Spring Boot, full-stack development, and building products — coming soon.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-neutral-900">
      <Container className="pb-24 pt-28 md:pb-32 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="mt-16 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
            Writing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl">
            Blog coming soon
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-[17px]">
            I&apos;m putting together notes on backend architecture, Spring Boot
            patterns, and lessons from shipping real projects. Check back — or
            reach out if you&apos;d like to talk shop in the meantime.
          </p>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:px-10">
            <p className="font-display text-xl italic text-neutral-700">
              &ldquo;Good code is a story — I want this space to tell mine.&rdquo;
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <p
            className="pointer-events-none mt-12 font-handwritten text-[26px] text-[#c17a12]"
            aria-hidden="true"
          >
            drafts in progress...
          </p>
        </div>
      </Container>
    </main>
  );
}
