"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2, Zap } from "lucide-react";
import Container from "@/components/ui/Container";

const stats = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Pune, India",
    color: "#e23636",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech IT, 2025",
    color: "#006fb9",
  },
  {
    icon: Briefcase,
    label: "Currently",
    value: "Intern @ Robowaves",
    color: "#a78bfa",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Java & Spring Boot",
    color: "#34d399",
  },
  {
    icon: Zap,
    label: "Status",
    value: "Open to work",
    color: "#fbbf24",
  },
];

export default function AboutSnapshot() {
  return (
    <section className="relative bg-black pb-14 pt-14 text-white md:pb-16 md:pt-16">
      {/* Top separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </span>
      </div>

      <Container>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500"
        >
          Quick Snapshot
        </motion.p>

        {/* Stat Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
        >
          {stats.map(({ icon: Icon, label, value, color }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur-sm md:p-5"
              style={{ boxShadow: `0 0 0 0 ${color}00` }}
            >
              {/* Subtle colored glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${color}18 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon
                  className="h-4 w-4"
                  style={{ color }}
                />
              </div>

              {/* Label */}
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                {label}
              </p>

              {/* Value */}
              <p className="text-[13px] font-medium leading-snug text-zinc-200 sm:text-[14px]">
                {value}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
