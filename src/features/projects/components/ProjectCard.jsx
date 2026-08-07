"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
group relative h-full overflow-hidden
rounded-3xl
border border-gray-200/70 dark:border-white/10
bg-white/70 dark:bg-white/5
backdrop-blur-xl
shadow-lg shadow-gray-200/30 dark:shadow-black/20
transition-shadow duration-300
hover:shadow-2xl hover:shadow-cyan-500/10
"
    >
      {/* GLOW */} <div
        className="
       pointer-events-none absolute -top-24 -right-24
       h-48 w-48 rounded-full
       bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-purple-500/20
       blur-3xl
       opacity-0
       transition-opacity duration-500
       group-hover:opacity-100
     "
      />

      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="
          h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
          />
        ) : (
          <div
            className="
          flex h-full w-full items-center justify-center
          bg-gradient-to-br
          from-blue-100 via-cyan-50 to-purple-100
          dark:from-blue-950 dark:via-cyan-950 dark:to-purple-950
        "
          >
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Project Preview
            </span>
          </div>
        )}

        {/* IMAGE OVERLAY */}
        <div
          className="
        absolute inset-0
        bg-gradient-to-t from-black/50 via-transparent to-transparent
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
      "
        />

        {/* CATEGORY */}
        {project.category && (
          <span
            className="
          absolute left-4 top-4
          rounded-full
          border border-white/30
          bg-white/80 dark:bg-black/50
          px-3 py-1
          text-xs font-semibold
          text-gray-700 dark:text-gray-200
          backdrop-blur-md
        "
          >
            {project.category}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative flex h-full flex-col p-6">
        <div>
          <h2
            className="
          text-xl font-bold tracking-tight
          text-gray-900 dark:text-white
          transition-colors duration-300
          group-hover:text-cyan-600 dark:group-hover:text-cyan-400
        "
          >
            {project.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        {/* TECH STACK */}
        {project.tech && project.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="
              rounded-full
              bg-gray-100 dark:bg-white/10
              px-3 py-1
              text-xs font-medium
              text-gray-600 dark:text-gray-300
            "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* ACTIONS */}
        <div className="mt-6 flex items-center gap-4 border-t border-gray-200/70 dark:border-white/10 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="
          inline-flex items-center gap-2
          text-sm font-semibold
          text-gray-900 dark:text-white
          transition-colors
          hover:text-cyan-600 dark:hover:text-cyan-400
        "
          >
            View Case Study
            <ArrowUpRight
              size={16}
              className="
            transition-transform duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
            />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="
            ml-auto
            rounded-full
            border border-gray-200 dark:border-white/10
            p-2
            text-gray-500 dark:text-gray-400
            transition-all duration-300
            hover:border-gray-300
            hover:bg-gray-100
            hover:text-gray-900
            dark:hover:bg-white/10
            dark:hover:text-white
          "
            >
              <Github size={17} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
