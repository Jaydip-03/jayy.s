import Button from "@/components/ui/Button";
import HeroEmailCopy from "./HeroEmailCopy";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 lg:gap-x-8">
      <Button
        href="/resume.pdf"
        variant="secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
      <HeroEmailCopy />
    </div>
  );
}
