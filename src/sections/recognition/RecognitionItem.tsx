import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Recognition } from "@/types/recognition";

type RecognitionItemProps = {
  recognition: Recognition;
};

export default function RecognitionItem({
  recognition,
}: RecognitionItemProps) {
  return (
    <Link
      href={`/recognition/${recognition.slug}`}
      className="
        group
        block
        border-b
        border-neutral-200
        py-8
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between gap-8">

        {/* Left */}

        <div className="flex-1">

          {/* Category */}

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-400">
            {recognition.category}
          </p>

          {/* Title */}

          <h3
            className="
              text-2xl
              font-semibold
              leading-tight
              transition-colors
              duration-300
              group-hover:text-black
            "
          >
            {recognition.title}
          </h3>

          {/* Organization */}

          <p className="mt-2 text-neutral-500">
            {recognition.organization}
          </p>

          {/* Description */}

          <p className="mt-5 max-w-xl leading-8 text-neutral-600">
            {recognition.description}
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col items-end">

          <span className="text-sm text-neutral-400">
            {recognition.year}
          </span>

          <ArrowUpRight
            size={22}
            className="
              mt-10
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />

        </div>

      </div>

    </Link>
  );
}