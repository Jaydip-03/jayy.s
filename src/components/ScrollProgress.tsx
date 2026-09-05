"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ScrollProgress() {
  const { isSpideyMode } = useTheme();
  const { scrollYProgress } = useScroll();

  // Smooth physics spring for silky, natural scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className={`fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none transition-colors duration-300 ${
        isSpideyMode
          ? "bg-gradient-to-r from-[#e23636] via-[#a855f7] to-[#006fb9] shadow-[0_0_10px_rgba(226,54,54,0.6)]"
          : "bg-gradient-to-r from-emerald-500/70 via-teal-400 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.35)]"
      }`}
      aria-hidden="true"
    />
  );
}
