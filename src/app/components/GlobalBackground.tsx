"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseLeave = () => {
      setMousePos({ x: -9999, y: -9999 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#070709]" />

      {/* Fixed ambient corner glows */}
      <div className="absolute top-0 left-0 w-[450px] h-[320px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06)_0%,transparent_65%)]" />
      <div className="absolute top-0 right-0 w-[450px] h-[320px] bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,transparent_65%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      {/* Cursor-following white glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.045) 40%, transparent 70%)",
          filter: "blur(80px)",
          top: -300,
          left: -300,
        }}
        initial={{ x: -9999, y: -9999 }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 25, mass: 0.5 }}
      />
    </div>
  );
}
