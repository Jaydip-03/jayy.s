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
      className={`min-h-screen bg-[#f5f5f0] pb-24 pt-28 text-zinc-950 md:pt-32 ${className}`}
    >
      <Container>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        {children}
      </Container>
    </main>
  );
}
