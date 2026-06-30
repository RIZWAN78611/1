"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PrecisionCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Precision Crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="absolute top-1/2 left-0 w-full h-px bg-blue-500/50" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-blue-500/50" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 border border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Coordinates Display */}
        <div className="absolute top-6 left-6 px-2 py-1 bg-slate-900/80 border border-blue-500/30 rounded font-mono text-[10px] text-blue-400 whitespace-nowrap shadow-xl backdrop-blur-sm">
          X:{mousePosition.x.toString().padStart(4, "0")} Y:{mousePosition.y.toString().padStart(4, "0")}
        </div>

        {/* Leading Arrow */}
        <div className="absolute -top-1 -left-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M11 11V4M11 11H4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>

      {/* Horizontal Guideline */}
      <motion.div
        className="fixed left-0 w-full h-px bg-blue-500/10 pointer-events-none z-[9998]"
        style={{ y: springY }}
      />

      {/* Vertical Guideline */}
      <motion.div
        className="fixed top-0 h-full w-px bg-blue-500/10 pointer-events-none z-[9998]"
        style={{ x: springX }}
      />
    </>
  );
}
