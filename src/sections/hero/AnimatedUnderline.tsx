"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  hasIntroBeenSeen,
  INTRO_COMPLETE_EVENT,
  INTRO_COMPLETE_MS,
} from "@/lib/intro";

export default function AnimatedUnderline() {
  const [ready, setReady] = useState(() =>
    typeof window !== "undefined" ? hasIntroBeenSeen() : false
  );

  useEffect(() => {
    if (ready) return;

    const handleIntroComplete = () => setReady(true);

    window.addEventListener(INTRO_COMPLETE_EVENT, handleIntroComplete);

    const fallbackTimer = window.setTimeout(() => {
      setReady(true);
    }, INTRO_COMPLETE_MS + 100);

    return () => {
      window.removeEventListener(INTRO_COMPLETE_EVENT, handleIntroComplete);
      window.clearTimeout(fallbackTimer);
    };
  }, [ready]);

  return (
    <motion.div
      initial={{ width: 0, opacity: 0.4 }}
      animate={{
        width: ready ? "6rem" : 0,
        opacity: ready ? 1 : 0.4,
      }}
      transition={{
        duration: 0.9,
        delay: ready ? 0.15 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-8 h-[2px] rounded-full bg-accent/40"
    />
  );
}
