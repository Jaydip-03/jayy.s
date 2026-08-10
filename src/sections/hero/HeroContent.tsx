import AvailabilityBadge from "./AvailabilityBadge";
import HeroBadges from "./HeroBadges";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import AnimatedUnderline from "./AnimatedUnderline";
import TypewriterRole from "./TypewriterRole";

export default function HeroContent() {
  return (
    <div className="max-w-[640px]">
      <AvailabilityBadge />

      <div className="mt-5">
        <HeroBadges />
      </div>

      <div className="mt-8">
        <h1 className="leading-[0.88] tracking-[-0.06em]">
          <span className="block text-[72px] lg:text-[88px] font-bold text-white">
            Jaydip
          </span>
          <span className="block text-[72px] lg:text-[88px] font-bold text-zinc-600">
            Desale.
          </span>
        </h1>
      </div>

      <AnimatedUnderline />

      <p className="mt-5 text-[15px] h-6">
        <TypewriterRole />
      </p>

      <p className="mt-2 max-w-[540px] text-[16px] lg:text-[18px] leading-[1.7] text-zinc-400"> </p>

      <p className="mt-5 max-w-[540px] text-[16px] lg:text-[18px] leading-[1.7] text-zinc-400">
        Java Full Stack Developer crafting scalable backend systems with
        Spring Boot, and modern web experiences with the MERN stack —
        clean, reliable, and built with purpose.
      </p>

      <div className="mt-8">
        <HeroButtons />
      </div>

      <div className="mt-8">
        <HeroSocials />
      </div>
    </div>
  );
}