import { siteConfig } from "@/lib/site";

export default function AboutDevCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-6 select-none font-mono text-[140px] font-bold leading-none tracking-[-0.06em] text-white/[0.03]"
      >
        JD
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#070707] shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#0d0d0d] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-zinc-500">
            developer.json
          </span>
        </div>

        <div className="p-6 font-mono text-[13px] leading-7 sm:p-7">
          <p className="text-zinc-600">{"{"}</p>
          <p className="pl-4">
            <span className="text-sky-400/90">&quot;name&quot;</span>
            <span className="text-zinc-600">: </span>
            <span className="text-emerald-400/90">&quot;{siteConfig.name}&quot;</span>
            <span className="text-zinc-600">,</span>
          </p>
          <p className="pl-4">
            <span className="text-sky-400/90">&quot;role&quot;</span>
            <span className="text-zinc-600">: </span>
            <span className="text-emerald-400/90">&quot;{siteConfig.role}&quot;</span>
            <span className="text-zinc-600">,</span>
          </p>
          <p className="pl-4">
            <span className="text-sky-400/90">&quot;location&quot;</span>
            <span className="text-zinc-600">: </span>
            <span className="text-emerald-400/90">&quot;{siteConfig.location}&quot;</span>
            <span className="text-zinc-600">,</span>
          </p>
          <p className="pl-4">
            <span className="text-sky-400/90">&quot;stack&quot;</span>
            <span className="text-zinc-600">: [</span>
          </p>
          <p className="pl-8 text-amber-300/90">
            &quot;Java&quot;, &quot;Spring Boot&quot;, &quot;React&quot;, &quot;Next.js&quot;
          </p>
          <p className="pl-4 text-zinc-600">],</p>
          <p className="pl-4">
            <span className="text-sky-400/90">&quot;openToWork&quot;</span>
            <span className="text-zinc-600">: </span>
            <span className="text-purple-400/90">true</span>
          </p>
          <p className="text-zinc-600">
            {"}"}
            <span className="ml-1 inline-block h-[14px] w-[7px] animate-pulse bg-emerald-400/80 align-middle" />
          </p>
        </div>
      </div>
    </div>
  );
}
