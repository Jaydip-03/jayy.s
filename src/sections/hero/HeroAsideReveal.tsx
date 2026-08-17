"use client";

import HeroRevealItem from "./HeroRevealItem";

type HeroAsideRevealProps = {
  children: React.ReactNode;
};

export default function HeroAsideReveal({ children }: HeroAsideRevealProps) {
  return (
    <HeroRevealItem delay={0.1} className="hidden min-h-[320px] lg:block xl:min-h-[360px]">
      {children}
    </HeroRevealItem>
  );
}
