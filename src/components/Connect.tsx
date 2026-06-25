"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";

export default function Connect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500"
    >
      {/* Particle Background Simulation */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
              Innovation & Precision
            </span>
          </motion.div>

          <motion.h2
            style={{ y }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter"
          >
            CONNECTING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              IDEAS TO REALITY
            </span>
          </motion.h2>

          <p className="max-w-2xl text-lg text-slate-600 dark:text-gray-400 mb-12 font-light leading-relaxed">
            From complex mould designs to precision CNC components, we utilize cutting-edge technology to bring your engineering concepts to life with a standard tolerance of ±0.010.
          </p>

          <div className="w-full max-w-4xl bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-1 border border-slate-200 dark:border-slate-800 backdrop-blur-xl">
             <Highlighter />
          </div>
        </div>
      </div>
    </section>
  );
}
