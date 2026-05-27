"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string | React.ReactNode;
    github?: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[34rem] overflow-y-auto flex justify-center relative rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-32 transition-all duration-500 ease-in-out"
            >
             
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-slate-100 leading-tight"
              >
                {item.title}
              </motion.h2>

          
              {item.github && (
                <motion.a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.2,
                    y: activeCard === index ? 0 : 4,
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold text-violet-300 border border-violet-500/50 bg-violet-600/15 hover:bg-violet-600/35 hover:border-violet-400 hover:text-white hover:shadow-[0_0_16px_rgba(139,92,246,0.45)] transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </motion.a>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.6 }}
                className="text-md text-slate-300 max-w-sm mt-6"
              >
                {item.description}
              </motion.div>

            
              <motion.hr
                initial={{ width: 0 }}
                animate={{
                  width: activeCard === index ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-t border-slate-600 mt-10 opacity-50"
              />
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>


      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden shadow-2xl"
      />
    </motion.div>
  );
};