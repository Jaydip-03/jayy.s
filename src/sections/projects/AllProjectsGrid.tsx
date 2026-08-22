"use client";

import { motion } from "framer-motion";

import { projects } from "@/constants/projects";
import ProjectCard from "@/sections/projects/ProjectCard";

export default function AllProjectsGrid() {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:gap-x-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.45,
            delay: Math.min(index * 0.05, 0.15),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProjectCard
            project={project}
            priority={index < 2}
          />
        </motion.div>
      ))}
    </div>
  );
}