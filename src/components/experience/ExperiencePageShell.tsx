import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

import Container from "@/components/ui/Container";

type ExperiencePageShellProps = {
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
};

export default function ExperiencePageShell({
  backHref = "/#experience",
  backLabel = "Back to experience",
  children,
}: ExperiencePageShellProps) {
  return (
    <main className="min-h-screen bg-black pb-24 pt-28 text-white md:pt-32">
      <Container>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        {children}
      </Container>
    </main>
  );
}
