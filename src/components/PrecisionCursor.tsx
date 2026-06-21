"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PrecisionCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block"
      style={{ left: 0, top: 0 }}
    >
      <motion.div
        className="absolute"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
      >
        {/* Horizontal line */}
        <div className="absolute top-0 left-[-20px] w-[40px] h-[1px] bg-blue-500/50" />
        {/* Vertical line */}
        <div className="absolute top-[-20px] left-0 w-[1px] h-[40px] bg-blue-500/50" />

        {/* Circle */}
        <div className="absolute top-[-10px] left-[-10px] w-[20px] h-[20px] border border-blue-400 rounded-full opacity-50" />

        {/* Coordinates label */}
        <div className="absolute top-4 left-4 text-[8px] font-mono text-blue-400/80 uppercase">
          X: {mousePos.x.toFixed(0)} Y: {mousePos.y.toFixed(0)}
        </div>
      </motion.div>
    </div>
  );
};

export default PrecisionCursor;
