"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500" />

      <div className="max-w-6xl mx-auto px-6 py-28 space-y-32">
        {/* HERO */}
        <section className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            I design and build modern web experiences focused on performance,
            aesthetics, and seamless interaction.
          </motion.p>
        </section>

        {/* GLASS CARD BIO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I’m a frontend developer passionate about crafting elegant
              interfaces and scalable architectures. I specialize in React,
              Next.js, and modern UI systems that deliver fast, intuitive
              experiences.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              I love turning complex ideas into clean, minimal solutions while
              keeping performance and user experience at the center.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              ["Performance", "Fast loading, optimized rendering"],
              ["Architecture", "Clean & scalable structure"],
              ["UI/UX", "Smooth interactions"],
              ["Learning", "Always evolving skills"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 shadow-lg hover:scale-[1.03] transition"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {desc}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="text-center space-y-10">
          <h2 className="text-3xl font-bold">Tech Stack</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "Tailwind",
              "TypeScript",
              "Framer Motion",
              "Node.js",
              "Git",
              "REST API",
            ].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Philosophy</h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Great interfaces should feel effortless. Users shouldn’t notice the
            technology — they should feel the experience. That’s why I focus on
            performance, clarity, motion, and clean architecture.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center pt-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/#contact"
            className="inline-block px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 text-white shadow-xl"
          >
            Let’s Work Together
          </motion.a>
        </section>
      </div>
    </main>
  );
}
