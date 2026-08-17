import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-black px-6 py-32 text-center text-white">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
        404
      </p>
      <h1 className="mt-6 max-w-lg text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        This page doesn&apos;t exist — yet.
      </h1>
      <p className="mt-5 max-w-md text-base leading-7 text-zinc-400">
        The link might be broken, or the page was moved. Either way, you&apos;re
        not lost.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.08]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          View projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <p
        className="pointer-events-none mt-16 rotate-[-4deg] font-handwritten text-[28px] text-[#e8a849]"
        aria-hidden="true"
      >
        wrong turn ↗
      </p>
    </main>
  );
}
