import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Recognition } from "@/types/recognition";

export default function RecognitionCard({ item }: { item: Recognition }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-emerald-300">
      <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill className="object-cover object-top" />
        ) : (
          <div className="flex h-full items-center justify-center text-xs font-semibold text-neutral-400">
            {item.organization.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <p className="mt-4 text-xs uppercase tracking-wide text-neutral-400">
        {item.category}
      </p>
      <h3 className="mt-1.5 text-lg font-semibold leading-snug">{item.title}</h3>
      <p className="mt-1 text-sm text-neutral-500">
        {item.organization} · {item.year}
      </p>
      <p className="mt-2.5 text-sm leading-6 text-neutral-600">{item.description}</p>

      {(item.credential || item.image) && (
        <a
          href={item.credential || item.image}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800"
        >
          View credential <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}