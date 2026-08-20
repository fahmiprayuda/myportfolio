"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Linkedin,
    Download,
    Briefcase,
    GraduationCap,
    Code2,
} from "lucide-react";

const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Laravel",
    "MySQL",
    "Tailwind CSS",
    "REST API",
    "Git",
];

const experiences = [
    {
        role: "Fullstack & Frontend Developer",
        company: "Freelance",
        period: "Current",
        description:
            "Developing modern web applications with a focus on frontend interfaces, backend REST APIs, and real-world business solutions.",
        projects: [
            "Audit Monitoring System",
            "Rumah Warga",
            "Personal Portfolio Website",
        ],
    },
    {
        role: "Return Administrator",
        company: "blibli.com",
        period: "July 2019 — Current",
        description:
            "Maintained personnel records and updated internal databases to support document management. Handled sensitive information discreetly and collected, arranged, and input information into database systems.",
    },
];

const internships = [
    {
        company: "SMA Negeri 1 Ciamis",
        role: "Library Administration",
    },
    {
        company: "EKG Mart Ciamis",
        role: "Design & Development of Web-Based Inventory Information System",
    },
];

export default function ResumePage() {
    return (<main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-gray-800 dark:text-gray-200">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500" />

        <div className="max-w-6xl mx-auto px-6 py-28 space-y-24">

            {/* HERO */}
            <section className="text-center space-y-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                        <Code2 size={16} />
                        Resume
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="
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
                    Fahmi Prayuda
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-medium text-gray-700 dark:text-gray-300"
                >
                    Fullstack & Frontend Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                    I build modern web applications with a focus on clean interfaces,
                    scalable architecture, and practical solutions for real-world needs.
                </motion.p>

                {/* CONTACT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 text-sm"
                >
                    <a
                        href="mailto:prayuda.fahmi@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 backdrop-blur-xl hover:border-cyan-400 transition"
                    >
                        <Mail size={16} />
                        prayuda.fahmi@gmail.com
                    </a>

                    <a
                        href="tel:+682213232456"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 backdrop-blur-xl hover:border-cyan-400 transition"
                    >
                        <Phone size={16} />
                        +682213232456
                    </a>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 backdrop-blur-xl hover:border-cyan-400 transition"
                    >
                        <Linkedin size={16} />
                        LinkedIn
                    </a>
                </motion.div>

                {/* DOWNLOAD CV */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="/cv/CV Fahmi Prayuda.pdf"
                    download
                    className="
          inline-flex items-center gap-2
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-purple-500
          px-7 py-3
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-500/20
        "
                >
                    <Download size={18} />
                    Download CV
                </motion.a>

            </section>

            {/* PROFILE */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
        rounded-3xl
        border border-white/30 dark:border-white/10
        bg-white/50 dark:bg-white/5
        backdrop-blur-xl
        p-8 md:p-10
        shadow-xl
      "
            >
                <div className="flex items-center gap-3 mb-5">
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                        <Code2 size={22} />
                    </div>

                    <h2 className="text-2xl font-bold">
                        Profile
                    </h2>
                </div>

                <p className="leading-8 text-gray-600 dark:text-gray-400">
                    Fullstack & Frontend Developer focused on building modern web
                    applications and user interfaces. Experienced in frontend
                    development with React and Next.js, as well as backend development
                    and REST API integration.
                </p>
            </motion.section>

            {/* EXPERIENCE */}
            <section>

                <div className="flex items-center gap-3 mb-10">
                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                        <Briefcase size={22} />
                    </div>

                    <h2 className="text-3xl font-bold">
                        Experience
                    </h2>
                </div>

                <div className="space-y-8">

                    {experiences.map((experience, index) => (
                        <motion.article
                            key={`${experience.company}-${experience.role}`}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="
              relative
              rounded-3xl
              border border-gray-200/70 dark:border-white/10
              bg-white/60 dark:bg-white/5
              backdrop-blur-xl
              p-8
              shadow-lg
            "
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                                <div>
                                    <h3 className="text-xl font-bold">
                                        {experience.role}
                                    </h3>

                                    <p className="mt-1 font-medium text-cyan-600 dark:text-cyan-400">
                                        {experience.company}
                                    </p>
                                </div>

                                <span className="
                w-fit
                rounded-full
                bg-gray-100 dark:bg-white/10
                px-4 py-1
                text-sm
                text-gray-600 dark:text-gray-400
              ">
                                    {experience.period}
                                </span>

                            </div>

                            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
                                {experience.description}
                            </p>

                            {experience.projects && (
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {experience.projects.map((project) => (
                                        <span
                                            key={project}
                                            className="
                      rounded-full
                      bg-gradient-to-r from-blue-600 to-cyan-500
                      px-4 py-2
                      text-xs font-semibold
                      text-white
                    "
                                        >
                                            {project}
                                        </span>
                                    ))}
                                </div>
                            )}

                        </motion.article>
                    ))}

                </div>
            </section>

            {/* INTERNSHIP */}
            <section>

                <div className="flex items-center gap-3 mb-10">
                    <div className="rounded-xl bg-purple-500/10 p-3 text-purple-500">
                        <Briefcase size={22} />
                    </div>

                    <h2 className="text-3xl font-bold">
                        Internship Experience
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {internships.map((internship, index) => (
                        <motion.div
                            key={internship.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="
              rounded-3xl
              border border-gray-200/70 dark:border-white/10
              bg-white/60 dark:bg-white/5
              backdrop-blur-xl
              p-7
              shadow-lg
            "
                        >
                            <h3 className="font-bold text-lg">
                                {internship.company}
                            </h3>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {internship.role}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </section>

            {/* SKILLS */}
            <section>

                <div className="flex items-center gap-3 mb-10">
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-500">
                        <Code2 size={22} />
                    </div>

                    <h2 className="text-3xl font-bold">
                        Skills
                    </h2>
                </div>

                <div className="flex flex-wrap gap-3">

                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-5 py-2.5
              text-sm font-semibold
              text-white
              shadow-md
              transition
              hover:scale-105
            "
                        >
                            {skill}
                        </span>
                    ))}

                </div>
            </section>

            {/* EDUCATION */}
            <section>

                <div className="flex items-center gap-3 mb-10">
                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                        <GraduationCap size={22} />
                    </div>

                    <h2 className="text-3xl font-bold">
                        Education
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
          rounded-3xl
          border border-gray-200/70 dark:border-white/10
          bg-white/60 dark:bg-white/5
          backdrop-blur-xl
          p-8
          shadow-lg
        "
                >
                    <h3 className="text-xl font-bold">
                        Universitas Jenderal Soedirman
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Bachelor of Computer Professional — Web Programming
                    </p>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="text-center pt-6">

                <p className="mb-4 text-gray-600dark:text-gray-400">
                    Interested in working together? Feel free to get in touch.
                </p>

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
