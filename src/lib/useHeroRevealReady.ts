"use client";

import { useEffect, useState } from "react";

import {
  hasIntroBeenSeen,
  INTRO_COMPLETE_EVENT,
  INTRO_COMPLETE_MS,
} from "@/lib/intro";

export function useHeroRevealReady() {
  const [ready, setReady] = useState(() =>
    typeof window !== "undefined" ? hasIntroBeenSeen() : false,
  );

  useEffect(() => {
    if (ready) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReady(true);
      return;
    }

    const handleIntroComplete = () => setReady(true);

    window.addEventListener(INTRO_COMPLETE_EVENT, handleIntroComplete);

    const fallbackTimer = window.setTimeout(
      () => setReady(true),
      INTRO_COMPLETE_MS + 100,
    );

    return () => {
      window.removeEventListener(INTRO_COMPLETE_EVENT, handleIntroComplete);
      window.clearTimeout(fallbackTimer);
    };
  }, [ready]);

  return ready;
}
