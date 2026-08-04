"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#070709] text-white flex flex-col justify-between px-6 lg:px-24 py-16 overflow-hidden select-none"
    >

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-slate-300 mb-4">
            CONTACT ME
          </h2>
          <div className="h-[1px] w-full bg-neutral-800/80 mb-12" />
        </motion.div>
      </div>


      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full z-10 py-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
        >
          HAVE A PROJECT IN MIND?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight text-white mb-10 leading-none"
        >
          LET&apos;S TALK
        </motion.h2>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="mailto:ks10204080@gmail.com"
            className="px-8 py-3.5 rounded-2xl border border-neutral-700/80 hover:border-white bg-[#0d0e15]/80 hover:bg-[#181923] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-white/5 active:scale-95 inline-flex items-center space-x-3 cursor-pointer"
          >
            <FiMail className="text-lg" />
            <span>Email Me</span>
          </a>

          <a
            href="https://linkedin.com/in/KaranCodeMind"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-2xl border border-neutral-700/80 hover:border-white bg-[#0d0e15]/80 hover:bg-[#181923] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-white/5 active:scale-95 inline-flex items-center space-x-3 cursor-pointer"
          >
            <FiLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center z-10 pt-8 border-t border-neutral-900/60"
      >
        <p className="text-[11px] sm:text-xs font-mono text-slate-500 tracking-[0.25em] uppercase">
          © KARAN SHARMA
        </p>
      </motion.div>
    </section>
  );
}
