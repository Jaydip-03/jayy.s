"use client";

import { siteConfig } from "@/lib/site";

import AvailabilityBadge from "./AvailabilityBadge";
import HeroButtons from "./HeroButtons";
import HeroHeading from "./HeroHeading";
import HeroMobileVisual from "./HeroMobileVisual";
import HeroRevealItem from "./HeroRevealItem";
import HeroSocials from "./HeroSocials";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export default function HeroContent() {
  return (
    <div className="max-w-[640px]">
      <HeroRevealItem delay={0}>
        <div
          aria-hidden="true"
          className="mb-4 h-px w-12 opacity-70"
          style={{
            background: `linear-gradient(90deg, ${SPIDEY_RED}, ${SPIDEY_BLUE})`,
          }}
        />
        <AvailabilityBadge />
      </HeroRevealItem>

      <div className="relative mt-5 overflow-visible sm:mt-6">
        <HeroRevealItem delay={0.08}>
          <HeroHeading />
        </HeroRevealItem>

        <HeroRevealItem delay={0.14}>
          <HeroMobileVisual />
        </HeroRevealItem>
      </div>

      <HeroRevealItem delay={0.2} className="mt-5 space-y-1.5 sm:mt-6">
        <p
          className="font-display text-[15px] italic leading-snug sm:text-base"
          style={{ color: SPIDEY_BLUE }}
        >
          {siteConfig.role}
        </p>
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          {siteConfig.location}
        </p>
      </HeroRevealItem>

      <HeroRevealItem delay={0.28} className="mt-5 sm:mt-6">
        <p className="max-w-[520px] text-[15px] leading-[1.65] text-zinc-400 sm:text-base lg:max-w-[480px]">
          I like turning complex ideas into simple, usable experiences —
          writing the backend, shaping the product, and making every piece
          work together.
        </p>
      </HeroRevealItem>

      <HeroRevealItem delay={0.36} className="mt-5 sm:mt-6">
        <HeroButtons />
      </HeroRevealItem>

      <HeroRevealItem delay={0.44} className="mt-5 sm:mt-6">
        <HeroSocials />
      </HeroRevealItem>
    </div>
  );
}
