"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";

export default function AvailabilityBadge() {
  const { isSpideyMode } = useTheme();

  return (
    <Link
      href="/contact"
      className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-85"
    >
      {/* Precision indicator dot with subtle breathing wave */}
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
            isSpideyMode ? "bg-[#e23636]" : "bg-emerald-400"
          }`}
        />
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            isSpideyMode ? "bg-[#e23636]" : "bg-emerald-500"
          }`}
        />
      </span>

      {/* Clean, editorial monospace status string */}
      <span className="font-mono text-xs text-zinc-400 sm:text-[13px]">
        {isSpideyMode ? (
          <span className="text-zinc-300">
            patrolling sector <span className="text-[#e23636] font-semibold">//</span> on call
          </span>
        ) : (
          <>
            <span className="text-zinc-300 transition-colors group-hover:text-white">
              open to full-time roles
            </span>
            <span className="text-zinc-600 hidden sm:inline ml-1.5">
              · remote &amp; pune
            </span>
          </>
        )}
      </span>
    </Link>
  );
}
