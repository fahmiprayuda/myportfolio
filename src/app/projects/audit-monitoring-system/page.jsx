"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Github,
    ExternalLink,
} from "lucide-react";

const screenshots = [
    {
        image: "/projects/audit-monitoring/dashboard.png",
        title: "Executive Dashboard",
        description:
            "A centralized dashboard providing an overview of audit findings, action plans, risks, and overdue items.",
    },
    {
        image: "/projects/audit-monitoring/projects.png",
        title: "Audit Projects",
        description:
            "Manage audit projects, timelines, and overall audit progress in one place.",
    },
    {
        image: "/projects/audit-monitoring/findings.png",
        title: "Audit Findings",
        description:
            "Track findings by risk, department, status, and related corrective actions.",
    },
    {
        image: "/projects/audit-monitoring/action-plans.png",
        title: "Action Plans",
        description:
            "Monitor corrective actions, due dates, statuses, and overdue action plans.",
    },
    {
        image: "/projects/audit-monitoring/executive-summary.png",
        title: "Executive Summary",
        description:
            "Visual insights that help management quickly understand audit performance and outstanding issues.",
    },
];

export default function AuditMonitoringSystemPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const current = screenshots[activeIndex];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prev) => (prev - 1 + screenshots.length) % screenshots.length
        );
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-gray-800 dark:text-gray-200">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500" />

            <div className="max-w-6xl mx-auto px-6 py-28">

                {/* BACK */}
                <Link
                    href="/projects"
                    className="
                    inline-flex items-center gap-2
                    text-gray-500
                    hover:text-cyan-500
                    transition-colors
                "
                >
                    <ArrowLeft size={18} />
                    Back to Projects
                </Link>

                {/* HERO */}
                <section className="mt-12 text-center">

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="
                        inline-block
                        rounded-full
                        border border-cyan-500/30
                        bg-cyan-500/10
                        px-4 py-1
                        text-sm font-medium
                        text-cyan-600 dark:text-cyan-400
                    "
                    >
                        Featured Case Study
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="
                        mt-6
                        text-5xl md:text-7xl
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
                        Audit Monitoring System
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="
                        max-w-2xl mx-auto
                        mt-6
                        text-lg
                        leading-relaxed
                        text-gray-600
                        dark:text-gray-400
                    "
                    >
                        A modern internal audit platform for managing audit
                        projects, findings, action plans, and executive reporting.
                    </motion.p>

                    {/* ACTIONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="mt-8 flex justify-center gap-4"
                    >
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            inline-flex items-center gap-2
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600
                            via-cyan-500
                            to-purple-500
                            px-6 py-3
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-cyan-500/20
                            transition
                            hover:scale-105
                        "
                        >
                            <ExternalLink size={17} />
                            Live Demo
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            inline-flex items-center gap-2
                            rounded-full
                            border border-gray-200
                            bg-white/60
                            px-6 py-3
                            font-semibold
                            text-gray-700
                            backdrop-blur-xl
                            transition
                            hover:scale-105
                            hover:border-cyan-400
                            dark:border-white/10
                            dark:bg-white/5
                            dark:text-gray-200
                        "
                        >
                            <Github size={17} />
                            GitHub
                        </a>
                    </motion.div>

                </section>

                {/* SCREENSHOT SHOWCASE */}
                <section className="mt-20">

                    {/* MAIN PREVIEW */}
                    <div
                        className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border border-white/30
                        bg-white/40
                        p-3
                        shadow-2xl
                        backdrop-blur-xl
                        dark:border-white/10
                        dark:bg-white/5
                    "
                    >
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-900">

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={current.image}
                                    src={current.image}
                                    alt={current.title}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.35 }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </AnimatePresence>

                            {/* PREV */}
                            <button
                                onClick={prevSlide}
                                aria-label="Previous screenshot"
                                className="
                                absolute left-4 top-1/2
                                -translate-y-1/2
                                flex h-11 w-11
                                items-center justify-center
                                rounded-full
                                bg-black/40
                                text-white
                                backdrop-blur-md
                                transition
                                hover:bg-black/60
                            "
                            >
                                <ArrowLeft size={20} />
                            </button>

                            {/* NEXT */}
                            <button
                                onClick={nextSlide}
                                aria-label="Next screenshot"
                                className="
                                absolute right-4 top-1/2
                                -translate-y-1/2
                                flex h-11 w-11
                                items-center justify-center
                                rounded-full
                                bg-black/40
                                text-white
                                backdrop-blur-md
                                transition
                                hover:bg-black/60
                            "
                            >
                                <ArrowRight size={20} />
                            </button>

                            {/* COUNTER */}
                            <div
                                className="
                                absolute bottom-4 right-4
                                rounded-full
                                bg-black/50
                                px-4 py-2
                                text-xs font-medium
                                text-white
                                backdrop-blur-md
                            "
                            >
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(screenshots.length).padStart(2, "0")}
                            </div>

                        </div>
                    </div>

                    {/* INFO */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="mt-8 text-center"
                        >
                            <h2 className="text-2xl font-bold">
                                {current.title}
                            </h2>

                            <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
                                {current.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* THUMBNAILS */}
                    <div className="mt-8 grid grid-cols-5 gap-3">

                        {screenshots.map((screenshot, index) => (
                            <button
                                key={screenshot.image}
                                onClick={() => setActiveIndex(index)}
                                className={`
    group
    overflow - hidden
    rounded - xl
    border
    transition - all
                                ${activeIndex === index
                                        ? "border-cyan-500 ring-2 ring-cyan-500/20"
                                        : "border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100"
                                    }
    `}
                            >
                                <img
                                    src={screenshot.image}
                                    alt={screenshot.title}
                                    className="
                                    aspect-video
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                "
                                />
                            </button>
                        ))}

                    </div>

                </section>

                {/* TECH STACK */}
                <section className="mt-28 text-center">

                    <h2 className="text-3xl font-bold">
                        Built With
                    </h2>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">

                        {[
                            "Next.js",
                            "React",
                            "Tailwind CSS",
                            "Laravel 12",
                            "MySQL",
                            "REST API",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="
                                rounded-full
                                bg-gradient-to-r
                                from-blue-600
                                to-cyan-500
                                px-5 py-2
                                text-sm
                                font-semibold
                                text-white
                                shadow-md
                            "
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </section>

            </div>
        </main>
    );


}
