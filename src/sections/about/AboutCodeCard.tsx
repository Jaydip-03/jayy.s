export default function AboutCodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-[#0a0a0a] shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#151515] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-zinc-500">developer.json</span>
      </div>

      <div className="p-6 font-mono text-[13px] leading-7 sm:text-sm">
        <p className="text-zinc-500">{"{"}</p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;name&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-emerald-400">&quot;Jaydip Desale&quot;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;role&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-emerald-400">&quot;Java + MERN Stack Developer&quot;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;location&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-emerald-400">&quot;Pune, Maharashtra&quot;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;education&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-emerald-400">&quot;B.Tech IT, 2025&quot;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;currentRole&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-emerald-400">&quot;Intern @ Robowaves Technologies&quot;</span>
          <span className="text-zinc-500">,</span>
        </p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;stack&quot;</span>
          <span className="text-zinc-500">: [</span>
        </p>
        <p className="pl-8">
          <span className="text-amber-300">&quot;Java&quot;</span>
          <span className="text-zinc-500">, </span>
          <span className="text-amber-300">&quot;Spring Boot&quot;</span>
          <span className="text-zinc-500">, </span>
          <span className="text-amber-300">&quot;React&quot;</span>
          <span className="text-zinc-500">, </span>
          <span className="text-amber-300">&quot;Next.js&quot;</span>
        </p>
        <p className="pl-4 text-zinc-500">],</p>
        <p className="pl-4">
          <span className="text-sky-400">&quot;openToWork&quot;</span>
          <span className="text-zinc-500">: </span>
          <span className="text-purple-400">true</span>
        </p>
        <p className="text-zinc-500">
          {"}"}
          <span className="ml-1 inline-block h-[14px] w-[7px] animate-pulse bg-emerald-400 align-middle" />
        </p>
      </div>
    </div>
  );
}