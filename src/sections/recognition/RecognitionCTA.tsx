import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RecognitionCTA() {
  return (
    <div className="sticky top-32 h-fit">

      {/* Small Label */}

      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Continuous Learning
      </p>

      {/* Main Title */}

      <h3 className="text-4xl font-bold leading-tight lg:text-5xl">
        Every milestone
        <br />
        tells a story.
      </h3>

      {/* Description */}

      <div className="mt-8 space-y-6 text-[17px] leading-8 text-neutral-600">

        <p>
          I enjoy learning beyond the classroom. Every certification,
          publication and training program has helped me sharpen my
          technical knowledge and strengthen my problem-solving mindset.
        </p>

        <p>
          Rather than collecting certificates, I focus on understanding
          concepts and applying them in real-world projects that create
          meaningful impact.
        </p>

      </div>

      {/* Quote */}

      <div className="mt-12 border-l-2 border-neutral-300 pl-5">

        <p className="text-lg italic text-neutral-700">
          "Learning never stops.
          <br />
          Neither do I."
        </p>

      </div>

      {/* CTA */}

      <Link
        href="/recognition"
        className="group mt-12 inline-flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:gap-5"
      >
        Explore Credentials

        <ArrowUpRight
          size={22}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />

      </Link>

    </div>
  );
}