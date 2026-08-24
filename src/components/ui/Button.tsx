import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300",

        variant === "primary"
          ? "bg-white text-black hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_10px_40px_rgba(255,255,255,.10)]"
          : "border border-white/10 bg-black/40 text-white hover:border-white/30 hover:bg-white/[0.05] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
      )}
    >
      {children}

      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}