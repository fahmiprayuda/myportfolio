"use client";

import { motion } from "framer-motion";
import SpotlightImage from "@/components/providers/SpotlightImage";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-neutral-900 dark:to-black"
    >
      {/* glow bg */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 items-center gap-12">
        {/* TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-6 max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            A selection of projects I&apos;ve built while exploring modern web
            technologies, performance optimization, and intuitive user
            interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              more about me...
            </Link>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* glow frame */}
            <div className="absolute inset-0 rounded-[40%] bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 blur-2xl opacity-40" />

            {/* image */}
            <SpotlightImage src="/projects/1.jpg" alt="projects" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
