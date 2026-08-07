"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiLinkedin, FiTwitter, FiGithub, FiMail, FiChevronDown } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/KaranCodeMind",
    icon: FiLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/KaranSharma1020",
    icon: FiTwitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/bitgladiator",
    icon: FiGithub,
  },
  {
    name: "Mail",
    url: "mailto:ks10204080@gmail.com",
    icon: FiMail,
  },
];

const techBadges = ["React", "Next.js", "Node.js", "Express", "MongoDB", "DevOps"];

export default function RefinedHero() {
  const [activeSection, setActiveSection] = useState("home");
  const [techIndex, setTechIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techBadges.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen text-white flex flex-col justify-between items-center overflow-hidden px-6 lg:px-16 py-8 select-none"
    >


      <nav aria-label="Sidebar navigation" className="hidden lg:flex flex-col justify-center fixed left-10 top-0 bottom-0 z-50 space-y-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex flex-col items-start relative text-left py-1"
            >
              <span
                className={`text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive ? "text-white font-semibold" : "text-slate-400 group-hover:text-slate-200"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeUnderline"
                  className="h-[2px] w-full bg-white rounded-full mt-1"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>


      <div className="hidden lg:flex flex-col justify-center fixed right-10 top-0 bottom-0 z-50 space-y-6">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-1"
            >
              <Icon className="text-xl" />
            </a>
          );
        })}
      </div>


      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl z-10 mt-16 lg:mt-0 py-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5"
        >
          HELLO, THIS IS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold tracking-tight text-white mb-6 leading-none"
        >
          Karan Sharma
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl md:text-2xl text-slate-300 font-normal mb-10 max-w-3xl leading-relaxed"
        >
          <span>Full-Stack Software Engineer Crafting with</span>
          <div className="inline-block relative min-w-[110px] h-[38px] align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={techBadges[techIndex]}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0 bg-[#161720] border border-neutral-700/80 text-white font-medium px-4 py-1.5 rounded-lg shadow-inner inline-flex items-center justify-center text-sm sm:text-base border-white/10"
              >
                {techBadges[techIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 rounded-full border border-neutral-700/80 hover:border-white bg-[#111218]/80 hover:bg-[#1c1d27] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-white/10 active:scale-95 cursor-pointer"
          >
            View Work
          </button>
          <a
            href="/resume/Karan-Sharma-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-neutral-700/80 hover:border-white bg-[#111218]/80 hover:bg-[#1c1d27] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-white/10 active:scale-95 cursor-pointer"
          >
            Download CV
          </a>
        </motion.div>
      </div>


      <div className="flex lg:hidden flex-col items-center gap-4 z-10 mb-6">
        <div className="flex items-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon className="text-xl" />
              </a>
            );
          })}
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={() => scrollToSection("about")}
        className="cursor-pointer flex flex-col items-center justify-center z-10 pb-2 text-slate-400 hover:text-white transition-colors duration-300 group"
      >
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 group-hover:text-white">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FiChevronDown className="text-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
