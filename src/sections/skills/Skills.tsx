"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { skillCategories } from "@/data/skills";

import SkillCategory from "./SkillCategory";

import SkillsSpidey from "./SkillsSpidey";



export default function Skills() {
  return (
    <Section
  id="skills"
  className="relative overflow-hidden bg-[#f5f5f0] py-24 text-neutral-900 md:py-32"
>
  <SkillsSpidey />

  <div className="relative z-10">
    <Container>
      
        <div className="grid gap-14 lg:grid-cols-[minmax(280px,0.9fr)_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              Stack
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
              I don&apos;t collect frameworks.
              <br />
              <span className="font-display italic font-normal text-neutral-500">
                I learn what earns its place.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-neutral-600">
              Java is the foundation — everything else serves building real
              products with clean architecture and code that holds up in
              production.
            </p>

            <div className="mt-8 border-t border-neutral-200/80 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Primary focus
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Java Full Stack Development",
                  "Spring Ecosystem",
                  "Backend Architecture",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[15px] font-medium text-neutral-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="pointer-events-none mt-10 rotate-[-5deg] font-handwritten text-[26px] text-[#c17a12]"
              aria-hidden="true"
            >
              always adding more ↗
            </p>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.6,
    delay: 0.08,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="min-w-0"
>
  <div className="divide-y divide-neutral-200/80">
    {skillCategories.map((category) => (
      <SkillCategory
        key={category.title}
        category={category}
      />
    ))}
  </div>

  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-neutral-200/80 pt-6 text-xs text-neutral-500">
    <span className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-neutral-900" />
      Expert
    </span>

    <span className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-neutral-500" />
      Advanced
    </span>

    <span className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-neutral-300" />
      Intermediate
    </span>

    <span className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#e8a849]" />
      Exploring
    </span>
  </div>
</motion.div>
        </div>
        </Container>
  </div>
</Section>
  );
}
