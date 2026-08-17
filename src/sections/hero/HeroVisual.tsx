import InteractiveVisual from "@/components/three/InteractiveVisual";

export default function HeroVisual() {
  return (
    <div
      data-hero-visual
      className="relative hidden h-[480px] items-center justify-center lg:flex lg:h-[560px] lg:translate-x-10 xl:translate-x-16"
    >
      <InteractiveVisual />
    </div>
  );
}
