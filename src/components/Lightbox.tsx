"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize } from "lucide-react";
import Image from "next/image";

interface LightboxProps {
  images: { title: string; image: string; category: string }[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleNext = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  const toggleZoom = () => {
    setZoom(zoom === 1 ? 2 : 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-white z-[110]">
        <div>
          <h3 className="text-xl font-bold">{images[currentIndex].title}</h3>
          <p className="text-sm text-blue-400 uppercase tracking-widest">{images[currentIndex].category}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleZoom} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            {zoom === 1 ? <ZoomIn className="h-6 w-6" /> : <ZoomOut className="h-6 w-6" />}
          </button>
          <button onClick={() => setIsMaximized(!isMaximized)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
             {isMaximized ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
          </button>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors bg-white/5">
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Image Container */}
      <motion.div
        className="relative w-full h-full max-w-5xl flex items-center justify-center overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ scale: zoom }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          style={{ cursor: zoom > 1 ? "grab" : "default" }}
        >
          <Image
            src={images[currentIndex].image}
            alt={images[currentIndex].title}
            fill
            className={isMaximized ? "object-contain" : "object-contain p-4 md:p-12"}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
};

export default Lightbox;
