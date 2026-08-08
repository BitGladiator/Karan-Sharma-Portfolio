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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Base — near-black */}
      <div className="absolute inset-0 bg-[#06070b]" />

      {/* Top-right silver glow */}
      <div
        className="absolute"
        style={{
          top: "-20%",
          right: "-15%",
          width: "65vw",
          height: "65vw",
          background:
            "radial-gradient(ellipse at top right, rgba(180,190,210,0.18) 0%, rgba(150,165,190,0.07) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />


      <div
        className="absolute"
        style={{
          bottom: "-20%",
          left: "-15%",
          width: "75vw",
          height: "75vw",
          background:
            "radial-gradient(ellipse at bottom left, rgba(180,190,215,0.20) 0%, rgba(150,165,195,0.07) 45%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />


      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(200,210,230,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: -300,
          left: -300,
        }}
        initial={{ x: -9999, y: -9999 }}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 100, damping: 28, mass: 0.6 }}
      />
    </div>
  );
}
