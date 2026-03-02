import { projects } from "@/features/projects/data";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project?.title || "Project" };
}

export default function Page({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-28">
      <h1 className="text-5xl font-bold">{project.title}</h1>

      <p className="mt-6 text-gray-600 dark:text-gray-400">{project.content}</p>

      <div className="flex gap-3 mt-6 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </main>
  );
}
