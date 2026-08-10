import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperienceCTA() {
  return (
    <div className="mt-28 flex justify-center">

      <Link
        href="/experience"
        className="
          group
          inline-flex
          items-center
          gap-3
          text-lg
          font-medium
          text-white
          transition-all
        "
      >
        Explore Experience

        <ArrowRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        />

      </Link>

    </div>
  );
}