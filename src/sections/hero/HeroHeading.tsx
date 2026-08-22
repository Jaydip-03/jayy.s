import SelectionBox from "@/components/ui/SelectionBox";

import HeroNameNote from "./HeroNameNote";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

type HeroHeadingProps = {
  isSpideyMode: boolean;
};

export default function HeroHeading({
  isSpideyMode,
}: HeroHeadingProps) {
  return (
    <div className="relative">
      <h1 className="font-display font-normal leading-[1.02] tracking-[-0.03em] text-white/95">
        <span className="relative block w-fit max-w-full text-[clamp(3rem,10vw,6rem)]">
          <SelectionBox isSpideyMode={isSpideyMode}>
            Jaydip
          </SelectionBox>
          <HeroNameNote
  variant="desktop"
  isSpideyMode={isSpideyMode}
/>
        </span>

        <HeroNameNote
  variant="mobile"
  isSpideyMode={isSpideyMode}
/>

        <span className="mt-[-0.04em] flex items-center gap-3 sm:gap-4">
          <span className="ml-[0.38em] shrink-0 text-[clamp(3rem,10vw,6rem)] text-white/60 sm:ml-[0.44em] lg:ml-[0.5em]">
            Desale
          </span>

          <span
            className="h-px min-w-[3.5rem] flex-1 max-w-[9rem] opacity-80 sm:max-w-[11rem] lg:max-w-[14rem]"
            style={{
  background: isSpideyMode
    ? `linear-gradient(90deg, ${SPIDEY_RED}99, ${SPIDEY_BLUE}99)`
    : "linear-gradient(90deg, rgba(255,255,255,0.28), rgba(255,255,255,0.05))",
}}
            aria-hidden="true"
          />
        </span>
      </h1>
    </div>
  );
}
