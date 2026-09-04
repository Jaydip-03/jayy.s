"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/lib/site";

const SPIDEY_RED = "#e23636";

export default function AvailabilityBadge() {
  const { isSpideyMode } = useTheme();
  const { availability } = siteConfig;

  return (
    <Link
      href="/contact"
      aria-label={`${availability.label} — click to get in touch`}
      className={`group inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 transition-all duration-300 ${
        isSpideyMode
          ? "border-[#e23636]/30 bg-[#e23636]/[0.08] shadow-[0_0_20px_rgba(226,54,54,0.15)] hover:border-[#e23636]/60 hover:bg-[#e23636]/[0.15]"
          : "border-emerald-500/25 bg-emerald-500/[0.06] shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:border-emerald-500/50 hover:bg-emerald-500/[0.12]"
      }`}
    >
      {/* Radar Ping Wave Indicator */}
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
            isSpideyMode ? "bg-[#e23636]" : "bg-emerald-400"
          }`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            isSpideyMode ? "bg-[#e23636]" : "bg-emerald-500"
          }`}
        />
      </span>

      {/* Status Label */}
      <span className="font-mono text-xs sm:text-[13px] tracking-tight">
        <span
          className={`font-semibold ${
            isSpideyMode ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {isSpideyMode ? availability.spideyLabel : availability.label}
        </span>
        <span className="hidden sm:inline text-zinc-500 ml-1.5">
          · {availability.subtext}
        </span>
      </span>

      {/* Subtle arrow affordance on hover */}
      <ArrowUpRight
        className={`h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          isSpideyMode ? "text-red-400/80" : "text-emerald-400/80"
        }`}
      />
    </Link>
  );
}
