"use client";

import React from "react";

interface TechBallProps {
  icon: React.ReactNode;
}

/**
 * How the rotation works:
 *  - The outer div is the visible ball (circle, gradient, shadow). It NEVER moves.
 *  - `perspective: 180px` on the outer div is the key: it makes child 3-D transforms
 *    look like they're on the surface of a sphere instead of a flat disk.
 *  - The inner div spins with `rotateY(0→360deg)` via the CSS keyframe.
 *  - Because of perspective, at 90° the icon compresses to a thin sliver and at 180°
 *    it has flipped. `overflow:hidden` keeps everything clipped to the circle.
 *  - A static dark-gradient overlay (bottom-right) sits on top at z-index 5,
 *    giving constant 3-D depth shading regardless of the rotation phase.
 */
export default function TechBall({ icon }: TechBallProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        overflow: "hidden",
        perspective: "180px",          /* ← gives depth to the Y-rotation */
        perspectiveOrigin: "50% 50%",
        /* Base 3-D ball gradient: bright top-left → dark bottom-right */
        background:
          "radial-gradient(circle at 34% 28%, #2e2e2e 0%, #151515 42%, #050505 100%)",
        boxShadow: [
          "0 0 0 1.5px rgba(255,255,255,0.16)",          /* thin rim */
          "inset 3px 4px 9px rgba(255,255,255,0.10)",    /* inner top-left highlight */
          "inset -4px -5px 14px rgba(0,0,0,0.95)",       /* inner shadow */
          "0 10px 36px rgba(0,0,0,0.9)",                 /* outer depth */
        ].join(", "),
      }}
    >
      {/* Spinning icon — rotates on Y axis with 3-D perspective */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.4rem",
          color: "#ffffff",
          filter: "drop-shadow(0 0 5px rgba(255,255,255,0.35))",
          /* The actual rotation — defined in globals.css */
          animation: "techBallSpin 2.8s linear infinite",
          transformOrigin: "center center",
        }}
      >
        {icon}
      </div>

      {/*
       * Static shading overlay — always on top (z-index 5).
       * Creates the permanent dark shadow-side of the sphere,
       * making it look round even at mid-rotation phases.
       */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 68% 72%, rgba(0,0,0,0.55) 0%, transparent 62%)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </div>
  );
}
