"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiPython,
  SiCplusplus,
  SiC,
  SiPhp,
  SiLinux,
  SiOpensuse,
  SiGitlab,
} from "react-icons/si";
import { FaTools, FaNetworkWired, FaTerminal } from "react-icons/fa";

const skills = [
  {
    category: "Driver Development",
    icon: <FaNetworkWired className="text-pink-500" />,
    items: [
      { name: "UEFI DXE Driver", level: "Intermediate" },
      { name: "UEFI App Driver", level: "Intermediate" },
      { name: "Linux Network Driver", level: "Intermediate" },
      { name: "iPXE Driver", level: "Intermediate" },
      { name: "Forwarding Driver", level: "Beginner" },
      { name: "DPDK Driver", level: "Beginner" },
    ],
  },
  {
    category: "Languages",
    icon: <FaTerminal className="text-green-400" />,
    items: [
      { name: "C", level: "Intermediate", icon: <SiC /> },
      { name: "Python", level: "Intermediate", icon: <SiPython /> },
      { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      { name: "PHP", level: "Intermediate", icon: <SiPhp /> },
    ],
  },
  {
    category: "DevOps",
    icon: <FaTools className="text-yellow-400" />,
    items: [
      { name: "Docker/Swarm", level: "Intermediate", icon: <SiDocker /> },
      { name: "CI/CD", level: "Intermediate", icon: <SiJenkins /> },
      { name: "Terraform", level: "Intermediate", icon: <SiTerraform /> },
      { name: "Ansible", level: "Intermediate", icon: <SiAnsible /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <FaTools className="text-purple-400" />,
    items: [
      { name: "Proxmox", level: "Advanced", icon: <SiLinux /> },
      { name: "OpenVPN", level: "Intermediate", icon: <SiOpensuse /> },
      { name: "EDKII", level: "Intermediate", icon: <SiGitlab /> },
    ],
  },
];
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <motion.div
      className="bg-black text-white py-20 px-6 md:px-16 lg:px-24 font-mono"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h2
        className="text-4xl text-green-400 mb-12 font-bold text-center tracking-wide"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
         Skills Configuration
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((section, idx) => (
          <motion.div
            key={idx}
            className="border border-green-500/30 p-6 rounded-xl bg-zinc-900/50 shadow-md backdrop-blur-sm"
            variants={cardVariant}
          >
            <div className="flex items-center gap-2 mb-4 text-green-300 text-xl font-semibold">
              {section.icon}
              <span>{section.category}</span>
            </div>
            <motion.ul className="space-y-3">
              {section.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariant}
                  className="flex justify-between items-center text-sm md:text-base"
                >
                  <div className="flex items-center gap-2">
                    {item.icon && (
                      <motion.span
                        className="text-lg"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {item.icon}
                      </motion.span>
                    )}
                    <span>{item.name}</span>
                  </div>
                  <span className="text-green-400">{item.level}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
