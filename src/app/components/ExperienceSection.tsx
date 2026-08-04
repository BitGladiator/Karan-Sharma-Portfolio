"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "roac",
    company: "The ROAC",
    role: "R&D Intern",
    period: "Dec 2025 – Jan 2026",
    location: "Remote",
    bullets: [
      "Researched and conceptualized 3+ technical bootcamps and workshops to expand the platform’s educational offerings.",
      "Pitched innovative event frameworks, including dual-track leaderboards and reverse bidding workflows, increasing projected engagement by 30%.",
      "Designed specialized curricula, such as a comprehensive 2-hour Green Software Engineering workshop.",
    ],
  },
  {
    id: "fullstack",
    company: "Full-Stack & Cloud Dev",
    role: "Full-Stack Software Engineer",
    period: "2024 – 2026",
    location: "Jammu, India",
    bullets: [
      "Architected microservices platforms and distributed flash-sale backend systems designed for high-concurrency peak users.",
      "Integrated Redis Lua atomic inventory scripts, Kafka async message pipelines, and Saga pattern transaction rollbacks.",
      "Built full-stack React and Next.js web applications with Docker containerization and Kubernetes deployment orchestration.",
    ],
  },
  {
    id: "btech",
    company: "B.Tech CS Engineering",
    role: "Software Engineering & Web Dev",
    period: "2023 – Present",
    location: "Jammu & Kashmir",
    bullets: [
      "Mastered core computer science fundamentals, data structures, algorithms, and scalable system architecture.",
      "Created production-ready web applications using MongoDB, Express, React, and Node.js with REST APIs and JWT authentication.",
      "Designed optimized Core Web Vitals and utility-first UI components with Tailwind CSS and Next.js.",
    ],
  },
];

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>("roac");
  const selectedExp = experiences.find((e) => e.id === selectedId) || experiences[0];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#070709] text-white flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden select-none"
    >
      <div className="absolute top-1/3 right-0 w-[450px] h-[300px] bg-purple-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-slate-300 mb-4">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="h-[1px] w-full bg-neutral-800/80 mb-12" />
        </motion.div>

        {/* Content Layout: Left Tabs + Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Vertical Tab List */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {experiences.map((exp) => {
              const isSelected = selectedId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-md ${
                    isSelected
                      ? "bg-[#eef0f6] text-black shadow-white/5"
                      : "bg-[#0d0e14]/70 border border-neutral-800/80 text-slate-300 hover:text-white hover:border-neutral-700 backdrop-blur-sm"
                  }`}
                >
                  {exp.company}
                </button>
              );
            })}
          </div>


          <div className="lg:col-span-8 bg-[#0c0d13]/60 border border-neutral-800/60 rounded-3xl p-8 sm:p-10 backdrop-blur-md min-h-[340px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {selectedExp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-400">
                    {selectedExp.period} • {selectedExp.location}
                  </p>
                </div>

                <ul className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                  {selectedExp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-white font-bold text-lg leading-none mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
