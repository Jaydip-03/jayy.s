"use client";

import { motion } from "framer-motion";

export default function AnimatedUnderline() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "6rem" }}
      transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-8 h-[3px] rounded-full bg-white/20"
    />
  );
}