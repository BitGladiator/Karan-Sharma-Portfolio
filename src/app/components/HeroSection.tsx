"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiKubernetes,
  SiJenkins,
  SiDjango,
  SiPostman,
  SiC,
} from "react-icons/si";

const techIcons = [
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiJenkins />, name: "Jenkins" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiC />, name: "C" },
];

function Herosection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="p-4 relative text-center w-full z-10 mt-24">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi, I&apos;m <span className="text-indigo-500">Karan Sharma</span><br />
          I Build Scalable Web Experiences
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          MERN Stack Developer &amp; Cloud Enthusiast — I love building full-stack
          applications and deploying them with modern DevOps tools.
        </p>

        {/* Bubble Tech Icons with Tooltips */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 relative">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-xl md:text-2xl text-white shadow-md"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {tech.icon}
              </motion.div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    key="tooltip"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-[-2rem] bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-20"
                  >
                    {tech.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
