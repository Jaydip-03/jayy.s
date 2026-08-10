import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Button href="#projects">
        Explore Work
      </Button>

      <Button href="#contact" variant="secondary">
        Let&apos;s Connect
      </Button>
    </div>
  );
}
