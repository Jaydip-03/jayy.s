import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

import Container from "@/components/ui/Container";

type WorkPageShellProps = {
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
  className?: string;
};

export default function WorkPageShell({
  backHref = "/",
  backLabel = "Back home",
  children,
  className = "",
}: WorkPageShellProps) {
  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-[#f5f5f0] pb-24 pt-28 text-zinc-950 md:pt-32 ${className}`}
    >
      {/* ── Subtle Architectural Paper Dot Grid Texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Swiss Precision Crosshairs at Top Corners ── */}
      <div aria-hidden="true" className="pointer-events-none absolute left-6 top-8 font-mono text-[11px] text-zinc-400 select-none">
        +
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-6 top-8 font-mono text-[11px] text-zinc-400 select-none">
        +
      </div>

      <Container className="relative z-10">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-zinc-950"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {backLabel}
        </Link>
        {children}
      </Container>
    </main>
  );
}
