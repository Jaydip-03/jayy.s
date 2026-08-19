"use client";

import { motion } from "framer-motion";

import { getFeaturedProjects } from "@/lib/projects";

import ProjectEditorialRow from "./ProjectEditorialRow";

export default function ProjectGrid() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <div className="[&>div:first-child>article]:border-t-0">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.5,
            delay: Math.min(index * 0.045, 0.14),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProjectEditorialRow
            project={project}
            index={index}
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}
