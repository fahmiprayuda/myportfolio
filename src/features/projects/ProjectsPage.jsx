"use client";

import { useState } from "react";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="max-w-6xl mx-auto px-6 py-28 space-y-16">
      {/* TITLE */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p className="text-gray-500">A collection of my recent work.</p>
      </section>

      {/* FILTER */}
      <ProjectFilter active={filter} setActive={setFilter} />

      {/* GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </main>
  );
}
