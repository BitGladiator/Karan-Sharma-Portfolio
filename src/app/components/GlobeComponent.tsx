"use client";

import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";


const arcsData = [
  
  {
    startLat: 32.7266,
    startLng: 74.857,
    endLat: 40.7128,
    endLng: -74.006, 
    color: ["#00ffff", "#ec4899"],
    altitude: 0.28,
  },
  {
    startLat: 32.7266,
    startLng: 74.857,
    endLat: 51.5074,
    endLng: -0.1278, 
    color: ["#00ffff", "#3b82f6"],
    altitude: 0.22,
  },
  {
    startLat: 32.7266,
    startLng: 74.857,
    endLat: 35.6762,
    endLng: 139.6503,
    color: ["#00ffff", "#10b981"],
    altitude: 0.18,
  },
  {
    startLat: 32.7266,
    startLng: 74.857,
    endLat: -33.8688,
    endLng: 151.2093, 
    color: ["#00ffff", "#f59e0b"],
    altitude: 0.32,
  },
  {
    startLat: 32.7266,
    startLng: 74.857,
    endLat: 37.7749,
    endLng: -122.4194,
    color: ["#00ffff", "#a855f7"],
    altitude: 0.3,
  },
];


const ringsData = [
  { lat: 32.7266, lng: 74.857, maxR: 6, color: "#00ffff", speed: 2 }, 
  { lat: 40.7128, lng: -74.006, maxR: 4, color: "#ec4899", speed: 1 },
  { lat: 51.5074, lng: -0.1278, maxR: 4, color: "#3b82f6", speed: 1 },
  { lat: 35.6762, lng: 139.6503, maxR: 4, color: "#10b981", speed: 1 }, 
  { lat: -33.8688, lng: 151.2093, maxR: 4, color: "#f59e0b", speed: 1 }, 
  { lat: 37.7749, lng: -122.4194, maxR: 4, color: "#a855f7", speed: 1 }, 
];


const pointsData = [
  { lat: 32.7266, lng: 74.857, color: "#00ffff", altitude: 0.45, radius: 0.8 }, 
  { lat: 40.7128, lng: -74.006, color: "#ec4899", altitude: 0.35, radius: 0.5 }, 
  { lat: 51.5074, lng: -0.1278, color: "#3b82f6", altitude: 0.38, radius: 0.5 }, 
  { lat: 35.6762, lng: 139.6503, color: "#10b981", altitude: 0.4, radius: 0.5 }, 
  { lat: -33.8688, lng: 151.2093, color: "#f59e0b", altitude: 0.42, radius: 0.5 }, 
  { lat: 37.7749, lng: -122.4194, color: "#a855f7", altitude: 0.38, radius: 0.5 }, 
  { lat: 1.3521, lng: 103.8198, color: "#10b981", altitude: 0.32, radius: 0.4 }, 
  { lat: -23.5505, lng: -46.6333, color: "#f59e0b", altitude: 0.3, radius: 0.4 }, 
  { lat: 30.0444, lng: 31.2357, color: "#ec4899", altitude: 0.28, radius: 0.4 }, 
  { lat: -26.2041, lng: 28.0473, color: "#3b82f6", altitude: 0.34, radius: 0.4 }, 
];

export default function GlobeComponent() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

 
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.enableZoom = false;
        controls.enablePan = false;
      }
    }
  }, []);

 
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        setDimensions({
          width: width || 500,
          height: height || 500,
        });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px] flex items-center justify-center relative"
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        
    
        showAtmosphere={true}
        atmosphereColor="#00d2ff"
        atmosphereAltitude={0.20}

      
        arcsData={arcsData}
        arcColor={(d: any) => d.color}
        arcAltitude={(d: any) => d.altitude}
        arcStroke={0.6}
        arcDashLength={0.4}
        arcDashGap={0.15}
        arcDashAnimateTime={2000}

      
        ringsData={ringsData}
        ringColor={(d: any) => d.color}
        ringMaxRadius={(d: any) => d.maxR}
        ringPropagationSpeed={(d: any) => d.speed}
    

      
        pointsData={pointsData}
        pointColor={(d: any) => d.color}
        pointAltitude={(d: any) => d.altitude}
        pointRadius={(d: any) => d.radius}
        pointsMerge={false}
      />
    </div>
  );
}
