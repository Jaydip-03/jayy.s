"use client";

import { motion } from "framer-motion";

import { projects } from "@/constants/projects";

import ProjectCard from "@/sections/projects/ProjectCard";

export default function AllProjectsGrid() {
  return (
    <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 md:mt-16">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
