"use client";

import React from "react";
import { motion } from "framer-motion";
import HowIBuildThings from "./HowIBuildThings";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen text-white flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden select-none"
    >

      <div className="max-w-6xl mx-auto w-full z-10 space-y-16">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-slate-300 mb-4">
            ABOUT ME
          </h2>
          <div className="h-[1px] w-full bg-neutral-800/80 mb-12" />
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              I&apos;m <strong className="text-white font-semibold">Karan Sharma</strong>, a fullstack software engineer focused on building scalable web applications and cloud architecture. Building RESTful APIs, async pipelines, and full-stack backend systems.
            </p>

            <p>
              I hold a Bachelor degree in Computer Science & Engineering.
            </p>

            <p>
              My strongest skill is learning fast and adapting quickly. I work well in team environments, value clear communication, and enjoy improving ideas through collaboration and iteration. Looking for roles where engineering and cloud architecture intersect.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md aspect-[4/5] rounded-2xl border border-neutral-800 bg-[#0d0e14]/90 p-3 shadow-2xl relative overflow-hidden group">

              <div className="w-full h-full rounded-xl bg-[#0d0e14] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden p-6">


                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-3xl font-extrabold text-white shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  KS
                </div>

                <div className="text-center z-10">
                  <p className="text-sm font-semibold text-slate-200 tracking-wider">Karan Sharma</p>
                  <p className="text-xs text-slate-400 mt-1 tracking-widest uppercase">Full-Stack Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        <HowIBuildThings />
      </div>
    </section>
  );
}
