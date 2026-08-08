"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function ContactSection() {
  const [headingHovered, setHeadingHovered] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen text-white flex flex-col justify-between px-6 lg:px-24 py-16 overflow-hidden select-none"
    >

      {/* ── Top: CONTACT ME header ── */}
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

      {/* ── Middle: centred content ── */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 py-12">

        {/* "HAVE A PROJECT IN MIND?" */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6"
        >
          HAVE A PROJECT IN MIND?
        </motion.p>

        {/*
          Inline-block wrapper = shrinks to the exact width of the text.
          The underline line inside will then be w-full = text width only.
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block relative mb-10"
          onMouseEnter={() => setHeadingHovered(true)}
          onMouseLeave={() => setHeadingHovered(false)}
        >
          {/* Clickable LET'S TALK heading */}
          <a
            href="mailto:ks10204080@gmail.com"
            className="block cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight text-white leading-none flex gap-[0.22em]">
              {["LET\u2019S", "TALK"].map((word, wi) => (
                <div key={wi} style={{ overflow: "hidden", display: "inline-block" }}>
                  <motion.span
                    custom={wi}
                    variants={{
                      hidden: { opacity: 0, y: "100%" },
                      visible: (i: number) => ({
                        opacity: 1,
                        y: "0%",
                        transition: {
                          duration: 0.75,
                          delay: 0.25 + i * 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }),
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h2>
          </a>

          {/*
            Underline — two-layer approach to match the reference:
            1. A wide blurred div for the soft diffuse foggy glow
            2. A thin sharp 1px core line on top
            Both hidden by default, animate in on hover.
          */}
          <motion.div
            className="absolute left-0 w-full origin-left"
            style={{ bottom: "-4px" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              headingHovered
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Wide blurred glow layer — the foggy halo */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                height: "18px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(180,180,200,0.18) 15%, rgba(200,200,220,0.32) 50%, rgba(180,180,200,0.18) 85%, transparent 100%)",
                filter: "blur(6px)",
              }}
            />
            {/* Thin sharp core line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 15%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.45) 85%, transparent 100%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Buttons */}
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

      {/* ── Bottom: copyright ── */}
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
