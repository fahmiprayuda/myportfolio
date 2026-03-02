"use client";

export default function ProjectFilter({ active, setActive }) {
  const filters = ["all", "web", "app"];

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition
          ${
            active === f
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
