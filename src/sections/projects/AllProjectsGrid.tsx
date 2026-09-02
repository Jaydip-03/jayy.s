"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/constants/projects";
import ProjectCard from "@/sections/projects/ProjectCard";

const CATEGORIES = [
  { id: "all", label: "All Works", count: 4 },
  { id: "full-stack", label: "Full-Stack", filter: "Full Stack" },
  { id: "backend", label: "Backend", filter: "Backend" },
  { id: "frontend", label: "Frontend", filter: "Frontend" },
  { id: "iot", label: "IoT & Research", filter: "IoT" },
];

export default function AllProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    const cat = CATEGORIES.find((c) => c.id === activeCategory);
    if (!cat || !cat.filter) return projects;
    return projects.filter((p) =>
      p.category.toLowerCase().includes(cat.filter.toLowerCase())
    );
  }, [activeCategory]);

  return (
    <div className="space-y-10">
      {/* ── Interactive Category Filter Tabs ── */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200/80 pb-4">
        {CATEGORIES.map((tab) => {
          const isActive = activeCategory === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 ${
                isActive
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "bg-white/80 text-zinc-600 hover:bg-white hover:text-zinc-950 border border-zinc-200/80"
              }`}
            >
              <span>{tab.label}</span>
              {tab.id === "all" && (
                <span className="ml-1.5 opacity-60">({tab.count})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── 2-Column Responsive Grid ── */}
      <motion.div
        layout
        className="mx-auto max-w-5xl grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:gap-x-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard
                project={project}
                priority={index < 2}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}