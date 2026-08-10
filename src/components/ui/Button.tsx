

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-3 rounded-full px-8 py-4 text-[16px] font-medium transition-all duration-300",

        variant === "primary"
          ? "bg-white text-black hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-[0_10px_40px_rgba(255,255,255,.10)]"
          : "border border-white/10 bg-transparent text-white hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,.15)]"
      )}
    >
      {children}

      <ArrowUpRight
        className="
          h-5
          w-5
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </Link>
  );
}