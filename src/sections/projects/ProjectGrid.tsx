"use client";

import { motion } from "framer-motion";

import { getFeaturedProjects } from "@/lib/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-10 lg:gap-y-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}