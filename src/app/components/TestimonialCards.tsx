"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import type { IconType } from "react-icons";
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
import {
  HiCpuChip,
  HiOutlineCodeBracket,
  HiOutlineCloud,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";


/* Explicit types so Icon is optional on items */
interface SkillItem {
  name: string;
  level: string;
  Icon?: IconType;
}

interface SkillSection {
  category: string;
  Icon: IconType;
  accentColor: string;
  gradient: string;
  border: string;
  glow: string;
  items: SkillItem[];
}

const levelMeta: Record<string, { label: string; width: string; color: string; pill: string }> = {
  Advanced:     { label: "Advanced",     width: "85%",  color: "#22d3ee", pill: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
  Intermediate: { label: "Intermediate", width: "60%",  color: "#818cf8", pill: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20" },
  Beginner:     { label: "Beginner",     width: "35%",  color: "#94a3b8", pill: "text-slate-400 bg-slate-400/10 border-slate-400/20" },
};

const skills: SkillSection[] = [
  {
    category: "Driver Development",
    Icon: HiCpuChip,
    accentColor: "#f472b6",
    gradient: "from-pink-500/[0.08] to-fuchsia-500/[0.04]",
    border: "border-pink-500/20",
    glow: "rgba(244,114,182,0.25)",
    items: [
      { name: "UEFI DXE Driver",      level: "Intermediate" },
      { name: "UEFI App Driver",       level: "Intermediate" },
      { name: "Linux Network Driver",  level: "Intermediate" },
      { name: "iPXE Driver",           level: "Intermediate" },
      { name: "Forwarding Driver",     level: "Beginner" },
      { name: "DPDK Driver",           level: "Beginner" },
    ],
  },
  {
    category: "Languages",
    Icon: HiOutlineCodeBracket,
    accentColor: "#22d3ee",
    gradient: "from-cyan-500/[0.08] to-indigo-500/[0.04]",
    border: "border-cyan-500/20",
    glow: "rgba(34,211,238,0.25)",
    items: [
      { name: "C",      level: "Intermediate", Icon: SiC },
      { name: "Python", level: "Intermediate", Icon: SiPython },
      { name: "C++",    level: "Intermediate", Icon: SiCplusplus },
      { name: "PHP",    level: "Intermediate", Icon: SiPhp },
    ],
  },
  {
    category: "DevOps",
    Icon: HiOutlineCloud,
    accentColor: "#facc15",
    gradient: "from-yellow-500/[0.08] to-orange-500/[0.04]",
    border: "border-yellow-500/20",
    glow: "rgba(250,204,21,0.25)",
    items: [
      { name: "Docker / Swarm", level: "Intermediate", Icon: SiDocker },
      { name: "CI/CD",          level: "Intermediate", Icon: SiJenkins },
      { name: "Terraform",      level: "Intermediate", Icon: SiTerraform },
      { name: "Ansible",        level: "Intermediate", Icon: SiAnsible },
    ],
  },
  {
    category: "Tools & Platforms",
    Icon: HiOutlineWrenchScrewdriver,
    accentColor: "#a78bfa",
    gradient: "from-purple-500/[0.08] to-indigo-500/[0.04]",
    border: "border-purple-500/20",
    glow: "rgba(167,139,250,0.25)",
    items: [
      { name: "Proxmox", level: "Advanced",     Icon: SiLinux },
      { name: "OpenVPN", level: "Intermediate", Icon: SiOpensuse },
      { name: "EDKII",   level: "Intermediate", Icon: SiGitlab },
    ],
  },
];


function SkillBar({
  level,
  accentColor,
  inView,
  delay,
}: {
  level: string;
  accentColor: string;
  inView: boolean;
  delay: number;
}) {
  const meta = levelMeta[level] ?? levelMeta.Beginner;
  return (
    <div className="w-28 flex flex-col items-end gap-1">
      <span
        className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border ${meta.pill}`}
      >
        {meta.label}
      </span>

      <div className="w-full h-[3px] rounded-full bg-white/[0.07] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}99, ${accentColor})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: meta.width } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}


function SkillCard({
  section,
  index,
}: {
  section: SkillSection;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [hovered, setHovered] = useState(false);
  const { Icon } = section;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`relative rounded-2xl border ${section.border} bg-gradient-to-br ${section.gradient} backdrop-blur-xl overflow-hidden cursor-default`}
      style={{
        boxShadow: hovered ? `0 20px 50px -10px ${section.glow}` : "none",
        transition: "box-shadow 0.35s ease",
      }}
    >
  
      <motion.div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none"
        style={{ background: section.accentColor }}
        animate={{ opacity: hovered ? 0.12 : 0 }}
        transition={{ duration: 0.4 }}
      />


      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${section.accentColor}80, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.35s ease",
        }}
      />

      <div className="relative z-10 p-6">
       
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 bg-white/[0.06]"
            animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.05 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Icon style={{ color: section.accentColor }} className="w-5 h-5" />
          </motion.div>
          <div>
            <h3 className="text-white font-bold text-base md:text-lg leading-none">
              {section.category}
            </h3>
            <p className="text-white/30 text-xs mt-0.5">
              {section.items.length} skills
            </p>
          </div>
        </div>

       
        <div
          className="mb-5 h-px"
          style={{
            background: `linear-gradient(90deg, ${section.accentColor}40, transparent)`,
          }}
        />

      
        <ul className="space-y-4">
          {section.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -14 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.12 + i * 0.07 + 0.2,
                ease: "easeOut",
              }}
              className="flex items-center justify-between gap-3"
            >
            
              <div className="flex items-center gap-2 min-w-0">
                {item.Icon && (
                  <motion.span
                    className="text-base flex-shrink-0"
                    style={{ color: section.accentColor + "bb" }}
                    whileHover={{ scale: 1.25, color: section.accentColor }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <item.Icon />
                  </motion.span>
                )}
                <span className="text-slate-300 text-sm font-medium truncate group-hover:text-white transition-colors duration-200">
                  {item.name}
                </span>
              </div>

          
              <SkillBar
                level={item.level}
                accentColor={section.accentColor}
                inView={isInView}
                delay={index * 0.12 + i * 0.08 + 0.3}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Orb({ top, left, size, color, speed }: {
  top: string; left: string; size: string; color: string; speed: number;
}) {
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, speed]);
  const y = useSpring(rawY, { stiffness: 30, damping: 25, restDelta: 0.001 });
  return (
    <motion.div
      style={{ top, left, width: size, height: size, y }}
      className={`absolute rounded-full blur-[120px] opacity-[0.13] pointer-events-none ${color}`}
    />
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 0.4], [55, 0]);
  const headingY = useSpring(rawY, { stiffness: 50, damping: 24 });
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 px-6 md:px-16 lg:px-20 overflow-hidden"
    >
     
      <Orb top="-5%"  left="65%"  size="480px" color="bg-fuchsia-600" speed={-80} />
      <Orb top="50%"  left="-5%"  size="360px" color="bg-indigo-600"  speed={-110} />
      <Orb top="80%"  left="60%"  size="280px" color="bg-cyan-600"    speed={-60} />

      
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-400 mb-4"
          >
            Technical Arsenal
          </motion.p>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Skills &{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
                Expertise
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-400 rounded-full origin-left"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm md:text-base"
          >
            From systems-level driver development to modern cloud infrastructure — a
            curated breakdown of my technical toolkit.
          </motion.p>
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((section, idx) => (
            <SkillCard key={idx} section={section} index={idx} />
          ))}
        </div>

      
      </div>
    </section>
  );
}
