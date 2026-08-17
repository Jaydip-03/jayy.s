import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/about";

export default function AboutCTA() {
  const { cta } = aboutContent;

  return (
    <section className="bg-[#f5f5f0] py-20 text-neutral-900 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-2xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
                {cta.line1}
              </p>
              <p className="mt-1 font-display text-2xl italic text-neutral-400 sm:text-3xl">
                {cta.line2}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                Explore my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
