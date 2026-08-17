"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Engineer",
  "MERN Stack Developer",
  "React & Next.js Builder",
];

const ROTATE_INTERVAL_MS = 4200;

export default function TypewriterRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-6 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 whitespace-nowrap font-mono text-accent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
