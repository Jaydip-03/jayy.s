"use client";

import { useState } from "react";
import Image from "next/image";

function SpiderMagFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#e23636] via-[#b91c1c] to-[#006fb9]">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <ellipse cx="22" cy="14" rx="10" ry="11" fill="#1a1a2e" />
        <path
          d="M14 12C16 8 20 6 22 6C24 6 28 8 30 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 24V34M14 28L8 34M30 28L36 34M16 26L10 22M28 26L34 22"
          stroke="#1a1a2e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function SpiderMagSticker({
  className = "",
  size = 88,
}: {
  className?: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.5)] ${className}`}
      style={{ width: size, height: size }}
    >
      {failed ? (
        <SpiderMagFallback />
      ) : (
        <Image
          src="/about/spidermag.png"
          alt="spidermag"
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
