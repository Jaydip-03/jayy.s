"use client";

import { motion } from "framer-motion";

import type { Recognition } from "@/types/recognition";

import RecognitionCard from "./RecognitionCard";

type RecognitionListProps = {
  items: Recognition[];
};

export default function RecognitionList({ items }: RecognitionListProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-3.5">
      {items.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <RecognitionCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}
