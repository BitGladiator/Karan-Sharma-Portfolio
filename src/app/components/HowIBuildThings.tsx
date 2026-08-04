"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiC,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
  SiApachekafka,
  SiRabbitmq,
  SiMinio,
  SiMeta,
} from "react-icons/si";
import { FaServer, FaKey, FaNetworkWired, FaBrain } from "react-icons/fa6";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface CategoryGroup {
  category: string;
  skills: SkillItem[];
}

const techCategories: CategoryGroup[] = [
  {
    category: "LANGUAGES & FRAMEWORKS",
    skills: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    category: "BACKEND & DB",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "REST API", icon: <FaServer /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    category: "DEVOPS & CLOUD",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    category: "AI & ARCHITECTURE",
    skills: [
      { name: "Groq", icon: <FaBrain /> },
      { name: "Llama 3", icon: <SiMeta /> },
      { name: "Microservices", icon: <FaNetworkWired /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "MinIO", icon: <SiMinio /> },
    ],
  },
];

export default function HowIBuildThings() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-neutral-800/90 bg-[#0c0d13]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden"
      >

        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight">
          How I build things
        </h3>

        <div className="space-y-8 sm:space-y-10">
          {techCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              <div className="w-full md:w-56 shrink-0 pt-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                  {group.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 flex-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-[#181923] border border-neutral-700/60 hover:border-neutral-400 text-slate-200 hover:text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition duration-200 shadow-sm cursor-default inline-flex items-center gap-2.5 group"
                  >
                    <span className="text-white/90 group-hover:text-white text-sm sm:text-base transition-colors duration-200">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
