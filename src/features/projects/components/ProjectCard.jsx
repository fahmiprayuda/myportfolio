"use client";

import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group perspective">
        <div
          className="
          relative p-6 rounded-3xl
          bg-white dark:bg-neutral-900
          border border-gray-200 dark:border-neutral-800
          transition-transform duration-500
          group-hover:rotate-x-6 group-hover:-rotate-y-6
        "
        >
          <h3 className="text-xl font-bold">{project.title}</h3>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
