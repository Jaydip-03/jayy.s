import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutFooter() {
  return (
    <footer className="mt-24">
      <div className="border-t border-neutral-300" />

      <div className="flex flex-col items-start justify-between gap-10 py-12 lg:flex-row lg:items-center">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-black">
            Always Learning.
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-neutral-400">
            Always Building.
          </p>
        </div>

        <Link
          href="/work"
          className="group inline-flex items-center gap-3 text-lg font-medium text-black transition-all duration-300 hover:gap-5"
        >
          Explore My Work
          <ArrowUpRight
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            size={20}
          />
        </Link>
      </div>

      <div className="border-b border-neutral-300" />
    </footer>
  );
}