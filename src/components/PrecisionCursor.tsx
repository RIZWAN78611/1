"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PrecisionCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastKey, setLastKey] = useState<string>("NONE");

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

    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key.toUpperCase());
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("keydown", handleKeyDown);
    };
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
        <div className="absolute top-6 left-6 px-3 py-1.5 bg-slate-950/90 border border-blue-500/40 rounded-lg font-mono text-[10px] text-blue-400 whitespace-nowrap shadow-2xl backdrop-blur-md flex flex-col gap-0.5">
          <div className="flex justify-between gap-4">
            <span>POS_X: {mousePosition.x.toString().padStart(4, "0")}</span>
            <span className="text-blue-500/50">|</span>
            <span>POS_Y: {mousePosition.y.toString().padStart(4, "0")}</span>
          </div>
          <div className="flex justify-between gap-4 border-t border-blue-500/20 pt-0.5 mt-0.5">
            <span>INPUT: {lastKey}</span>
            <span className="text-blue-500/50">|</span>
            <span className="text-emerald-400">TOL: ±0.010</span>
          </div>
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
