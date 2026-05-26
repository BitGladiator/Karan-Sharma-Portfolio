"use client";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
  "[BOOT] Initializing Dev OS v2.5...",
  "[✔] Loading environment variables",
  "[✔] Authenticating GitHub profile",
  "[✔] Fetching tech stack: MERN, Docker, Jenkins...",
  "[✔] Spinning up microservices...",
  "[✔] Connecting cloud integrations...",
  "[SUCCESS] System online — Welcome, Karan Sharma",
];

const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalDelay = bootLogs.length * 400 + 1000;
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, totalDelay);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#0d1117] text-green-400 font-mono text-sm md:text-base w-[90%] max-w-2xl rounded-md border border-green-700 shadow-lg overflow-hidden">
            <div className="flex items-center space-x-2 px-4 py-2 bg-[#161b22] border-b border-green-700">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <div className="p-4 leading-relaxed">
              <div className="text-green-300 mb-2">
                karan@portfolio:~$ <span className="text-green-400">boot-dev --env=fullstack</span>
              </div>
              <div>
                <Typewriter
                  words={bootLogs}
                  loop={1}
                  cursor
                  cursorStyle="█"
                  typeSpeed={25}
                  deleteSpeed={10}
                  delaySpeed={500}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalLoader;
