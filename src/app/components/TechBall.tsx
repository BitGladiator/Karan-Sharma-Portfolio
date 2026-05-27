"use client";

import React from "react";

interface TechBallProps {
  icon: React.ReactNode;
}

export default function TechBall({ icon }: TechBallProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        overflow: "hidden",
        perspective: "180px",         
        perspectiveOrigin: "50% 50%",
       
        background:
          "radial-gradient(circle at 34% 28%, #2e2e2e 0%, #151515 42%, #050505 100%)",
        boxShadow: [
          "0 0 0 1.5px rgba(255,255,255,0.16)",          
          "inset 3px 4px 9px rgba(255,255,255,0.10)",   
          "inset -4px -5px 14px rgba(0,0,0,0.95)",       
          "0 10px 36px rgba(0,0,0,0.9)",            
        ].join(", "),
      }}
    >
    
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
      
          animation: "techBallSpin 2.8s linear infinite",
          transformOrigin: "center center",
        }}
      >
        {icon}
      </div>


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
