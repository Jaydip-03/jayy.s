"use client";

import { useCallback, useEffect, useState } from "react";

const EMAIL = "jaydesale003@gmail.com";

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  const tag = target.tagName;

  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

export default function HeroEmailCopy() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy my email:", EMAIL);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "c") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;

      event.preventDefault();
      void copyEmail();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [copyEmail]);

  return (
    <div className="flex flex-col gap-2.5">
      <button
        type="button"
        onClick={() => void copyEmail()}
        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        aria-label="Copy email address to clipboard"
      >
        {copied ? (
          <span className="font-mono text-accent">Copied!</span>
        ) : (
          <>
            <span>Press</span>
            <kbd className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded border border-zinc-700 bg-zinc-900/80 px-1.5 font-mono text-xs text-zinc-300 transition-colors group-hover:border-zinc-500">
              C
            </kbd>
            <span>to copy my email</span>
          </>
        )}
      </button>

      <div
        className="pointer-events-none relative w-fit pl-5"
        aria-hidden="true"
      >
        <svg
          width="36"
          height="24"
          viewBox="0 0 44 28"
          fill="none"
          className="absolute -left-1 -top-0.5 text-[#e8a849]"
        >
          <path
            d="M40 6C30 8 20 12 12 16C8 18 6 20 4 22"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M5 20L4 22L6 23"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="rotate-[-4deg] font-handwritten text-[19px] leading-none text-[#e8a849]">
          I actually reply
        </p>
      </div>
    </div>
  );
}
