"use client";

import { ChevronDown } from "lucide-react";

import HeroRevealItem from "./HeroRevealItem";

export default function ScrollIndicator() {
  return (
    <HeroRevealItem
      delay={0.52}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
    >
      <div className="flex flex-col items-center gap-1.5 text-zinc-500 sm:gap-2">
        <span className="text-[10px] tracking-[0.28em] uppercase sm:text-xs sm:tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce sm:h-5 sm:w-5" />
      </div>
    </HeroRevealItem>
  );
}
