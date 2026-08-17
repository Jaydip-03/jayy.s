import { ArrowUpRight, BadgeCheck } from "lucide-react";

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
  const actionLabel = isPublication ? "View paper" : "Verify credential";

  return (
    <article className="group flex flex-col gap-4 rounded-xl border border-neutral-200/80 bg-white px-4 py-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:gap-5 sm:px-5 sm:py-[18px]">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold ${
          isPublication
            ? "border-amber-200/80 bg-amber-50 text-amber-800"
            : "border-neutral-100 bg-neutral-50 text-neutral-500"
        }`}
      >
        {getInitials(item.organization)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-neutral-950 sm:text-base">
            {item.title}
          </h3>
          {href && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700 sm:hidden">
              <BadgeCheck className="h-3 w-3" />
              Verified
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-neutral-500">
          {item.organization}
          <span aria-hidden="true" className="mx-1.5 text-neutral-300">
            ·
          </span>
          Issued {item.year}
        </p>
      </div>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 self-start border-neutral-100 text-sm font-medium text-neutral-600 transition hover:text-neutral-950 sm:border-l sm:pl-5 sm:self-center"
        >
          <span>{actionLabel}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <span className="inline-flex shrink-0 items-center gap-1 self-start text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-400 sm:self-center">
          {item.category}
        </span>
      )}
    </article>
  );
}
