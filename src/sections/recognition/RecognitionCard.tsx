import { ArrowUpRight } from "lucide-react";
import type { Recognition } from "@/types/recognition";

function getInitials(organization: string) {
  const words = organization.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return organization.slice(0, 2).toUpperCase();
}

type RecognitionCardProps = {
  item: Recognition;
};

export default function RecognitionCard({ item }: RecognitionCardProps) {
  const href = item.credential || item.image;
  const isPublication = item.category === "Publication";
  const actionLabel = isPublication ? "View paper" : "Verify";

  return (
    <article className="group flex flex-col gap-3.5 border-b border-neutral-200/80 py-4 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-5">
      <div className="flex items-center gap-3.5 sm:gap-4">
        {/* Organization Avatar */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-semibold ${
            isPublication
              ? "border-amber-200/80 bg-amber-50 text-amber-800"
              : "border-neutral-200/80 bg-white text-neutral-600"
          }`}
        >
          {getInitials(item.organization)}
        </div>

        {/* Title & Organization */}
        <div className="min-w-0">
          <h3 className="font-display text-[15px] font-normal leading-snug tracking-[-0.01em] text-neutral-950 sm:text-base">
            {item.title}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
            {item.organization}
            <span aria-hidden="true" className="mx-1.5 text-neutral-300">
              ·
            </span>
            {item.year}
          </p>
        </div>
      </div>

      {/* Action / Category */}
      <div className="flex shrink-0 items-center gap-3 pl-13 sm:pl-0">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
          {item.category}
        </span>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-950"
          >
            <span>{actionLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
