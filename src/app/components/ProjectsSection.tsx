"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import projectsData from "../data/projects.json";

export default function ProjectsSection() {
  const projects = projectsData.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projects[activeIndex];
  const scrollRef = useRef<HTMLDivElement>(null);


  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 30) {
      if (activeIndex < projects.length - 1) {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (e.deltaY < -30) {
      if (activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#070709] text-white flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden select-none"
    >

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline">
            <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-slate-300">
              PET PROJECTS
            </h2>
            <span className="text-xs sm:text-sm font-mono text-slate-500 ml-4 tracking-wider uppercase">
              / PORTFOLIO
            </span>
          </div>


          <div className="flex items-center space-x-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeIndex === idx
                    ? "bg-white text-black font-bold shadow-md"
                    : "bg-[#14151f] text-slate-400 hover:text-white border border-neutral-800"
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-neutral-800/80 mb-10" />


        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="rounded-3xl border border-neutral-800/80 bg-[#0c0d14]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[380px]">

            <div className="lg:col-span-6 flex flex-col justify-center min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-slate-400 font-semibold tracking-widest">
                    [ 0{activeIndex + 1} / 0{projects.length} ]
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
                    {currentProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {currentProject.description}
                  </p>


                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {currentProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-1.5 rounded-full border border-neutral-700/80 bg-[#141520] text-slate-300 text-xs font-mono tracking-wider uppercase font-medium shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>


                  <div className="pt-2">
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-[#181923] border border-neutral-700/80 text-white hover:border-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-white/5 active:scale-95 cursor-pointer"
                    >
                      <FiGithub className="text-base" />
                      <span>View Code</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>


            <div className="lg:col-span-6 flex items-center justify-center min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-neutral-800/90 bg-[#0d0e15] p-3 shadow-2xl relative overflow-hidden group">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-[#07070a] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">

                      <div className="flex items-center space-x-2 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="text-[11px] font-mono text-slate-500 ml-2">
                          {currentProject.slug}.app
                        </span>
                      </div>


                      <div className="my-auto z-10 flex flex-col items-center text-center p-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-2xl">
                          {currentProject.title.charAt(0)}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
                          {currentProject.title}
                        </h4>
                        <p className="text-xs text-slate-400 max-w-sm">
                          {currentProject.tech.slice(0, 3).join(" • ")}
                        </p>
                      </div>


                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 z-10 pt-2 border-t border-white/5">
                        <span>Status: Production</span>
                        <span>Year: {currentProject.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
