"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
