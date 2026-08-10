"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function StatCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <motion.h2 ref={ref} className="text-5xl font-bold text-white">
      {count}
      {suffix}
    </motion.h2>
  );
}

const stats = [
  { value: 2, suffix: "", label: "Experiences" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "", label: "Internship" },
  { value: 1, suffix: "", label: "Training" },
];

export default function ExperienceStats() {
  return (
    <div className="mb-14">
      <div className="border-t border-zinc-500" />
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`px-8 py-10 ${index !== 3 ? "border-r border-zinc-800" : ""}`}
          >
            <StatCounter target={item.value} suffix={item.suffix} />
            <p className="mt-3 text-sm tracking-wide text-zinc-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="border-b border-zinc-800" />
    </div>
  );
}