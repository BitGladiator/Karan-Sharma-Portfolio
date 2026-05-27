"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

const badgeClass = `
  px-4 py-2 
  rounded-full 
  border border-white/20 
  backdrop-blur-md 
  bg-white/10 
  text-white 
  text-xs 
  font-medium 
  hover:bg-white/20 
  hover:border-white/40 
  hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
  transition-all duration-300 
  transform hover:scale-105
`;

const projectContent = [
  {
    title: "Standup Tracker — AI-Powered GitHub Reporter",
    github: "https://github.com/BitGladiator",
    description: (
      <div className="mt-4 space-y-3 text-sm">
        <p>
          Full-stack platform that automates daily standups by extracting GitHub commits and PRs
          into structured reports. Architected a 5-agent AI scoring pipeline using Groq (Llama 3)
          for parallelized quality assessments in under 2 seconds. Secured API endpoints using
          three progressive layers of rate limiting via Nginx and Redis-backed request throttling.
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          <span className={badgeClass}>Groq · Llama 3</span>
          <span className={badgeClass}>Redis</span>
          <span className={badgeClass}>Nginx</span>
          <span className={badgeClass}>GitHub API</span>
        </div>
      </div>
    ),
  },
  {
    title: "Distributed Flash Sale System — 100k+ Peak Users",
    github: "https://github.com/BitGladiator",
    description: (
      <div className="mt-4 space-y-3 text-sm">
        <p>
          High-concurrency backend handling 100k+ peak users with sub-200ms latency. Prevents
          overselling using Redis Lua scripts for atomic inventory updates. Features an async
          processing pipeline via Kafka, PostgreSQL, and the Saga pattern for safe rollbacks.
          Resolves thundering herd bottlenecks with virtual waiting rooms, API rate limiting,
          and UUID-based idempotency.
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          <span className={badgeClass}>Kafka</span>
          <span className={badgeClass}>Redis Lua</span>
          <span className={badgeClass}>PostgreSQL</span>
          <span className={badgeClass}>Saga Pattern</span>
        </div>
      </div>
    ),
  },
  {
    title: "Vistagram — Microservices Social Media Platform",
    github: "https://github.com/BitGladiator",
    description: (
      <div className="mt-4 space-y-3 text-sm">
        <p>
          Microservices-based social media platform featuring a modular design for authentication,
          feeds, media, and notifications. Orchestrated container deployments using Docker and
          Kubernetes to ensure reliable and robust operations.
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          <span className={badgeClass}>Microservices</span>
          <span className={badgeClass}>Docker</span>
          <span className={badgeClass}>Kubernetes</span>
          <span className={badgeClass}>Node.js</span>
        </div>
      </div>
    ),
  },
  {
    title: "DriftBox — Distributed Cloud Storage Platform",
    github: "https://github.com/BitGladiator",
    description: (
      <div className="mt-4 space-y-3 text-sm">
        <p>
          5-service microservices cloud storage platform routed through an NGINX API gateway.
          Features a resumable, chunk-based upload pipeline with SHA-256 deduplication (MinIO)
          and versioned metadata (PostgreSQL). Implements real-time, cross-device file
          synchronization via RabbitMQ event processing and WebSockets. Deployed a production
          observability stack for monitoring.
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          <span className={badgeClass}>MinIO</span>
          <span className={badgeClass}>RabbitMQ</span>
          <span className={badgeClass}>WebSockets</span>
          <span className={badgeClass}>PostgreSQL</span>
          <span className={badgeClass}>NGINX</span>
        </div>
      </div>
    ),
  },
];

function Projects() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      <div className="absolute top-[-100px] left-[50%] w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 rounded-full blur-[120px] -translate-x-1/2 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold inline-block relative">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">Projects</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm opacity-80" />
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From full-stack web apps to distributed systems — here&apos;s a slice of what I&apos;ve built.
          </p>
        </motion.div>
        <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.08)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <div className="p-4 md:p-6">
            <StickyScroll content={projectContent} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
