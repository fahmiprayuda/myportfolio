"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500" />

      <div className="max-w-6xl mx-auto px-6 py-28 space-y-20">

        {/* HERO */}
        <section className="text-center space-y-8">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              tracking-tight
              bg-gradient-to-r
              from-blue-600
              via-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            A collection of selected projects focused on modern UI,
            scalable architecture, and real-world business solutions.
          </motion.p>

        </section>

        {/* FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >

          <ProjectFilter
            active={filter}
            setActive={setFilter}

          />

        </motion.div>

        {/* PROJECTS */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </section>


      </div>
    </main>
  );
}