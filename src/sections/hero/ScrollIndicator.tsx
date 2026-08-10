import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">

      <span className="text-xs tracking-[0.3em] uppercase">
        Scroll
      </span>

      <ChevronDown className="animate-bounce" />

    </div>
  );
}