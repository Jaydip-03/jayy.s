import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ViewAllButton() {
  return (
    <Link
      href="/work"
      className="group inline-flex items-center gap-2 rounded-full border border-[#cfd9e6] bg-white/70 px-5 py-2.5 text-sm font-bold text-[#1b335a] shadow-[0_4px_12px_rgba(30,64,110,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white hover:shadow-[0_10px_20px_rgba(24,24,27,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
    >
      View All Projects
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}