"use client";

import { motion } from "framer-motion";
import SpotlightImage from "@/components/providers/SpotlightImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-6 max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            I&apos;m always open to discussing new opportunities,
            collaborations, or interesting projects. Feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-10 flex gap-4"
          >
            {/* icons */}
            <div className="flex justify-center items-center space-x-4">
              <motion.a
                href="mailto:prayuda.fahmi@gmail.com?subject=Hello&body=Hello Fahmi,"
                aria-label="Send email"
                className="flex justify-center items-center bg-blue-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  y: { delay: 0.1 },
                  opacity: { delay: 0.2 },
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/fahmiprayuda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex justify-center items-center bg-blue-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.2 },
                  opacity: { delay: 0.3 },
                }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/fahmiprayuda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="flex justify-center items-center bg-blue-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.3 },
                  opacity: { delay: 0.4 },
                }}
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fahmi-prayuda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex justify-center items-center bg-blue-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.4 },
                  opacity: { delay: 0.5 },
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </motion.a>
            </div>
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
            <SpotlightImage src="/contact/1.jpg" alt="contact" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
