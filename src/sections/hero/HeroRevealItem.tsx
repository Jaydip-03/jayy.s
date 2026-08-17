"use client";

import { motion } from "framer-motion";

import { useHeroRevealReady } from "@/lib/useHeroRevealReady";

type HeroRevealItemProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function HeroRevealItem({
  children,
  delay = 0,
  className,
}: HeroRevealItemProps) {
  const ready = useHeroRevealReady();

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={
        ready
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 22 }
      }
      transition={{
        duration: 0.62,
        delay: ready ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
