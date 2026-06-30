"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Target, Zap } from "lucide-react";
import TwoDGear from "./TwoDGear";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000"
          alt="Precision Machining Background"
          fill
          className="object-cover opacity-10 dark:opacity-20 grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950" />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border border-blue-500/30 rounded-full bg-blue-500/10">
              <span className="relative flex w-2 h-2 mr-3">
                <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
              </span>
              Innovation & Precision
            </div>

            <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white md:text-8xl uppercase leading-[0.9]">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Machining <br /> & Moulds
              </span>
            </h1>

            <p className="max-w-xl mb-12 text-lg font-semibold leading-relaxed text-slate-700 dark:text-slate-400">
              UAU JIGBO TECHNICS delivers high-quality engineering with tight tolerances
              of <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">±0.010</span>.
              Specializing in Injection, PET & Blow Molds, and precision CNC components.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="flex items-center px-10 py-5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-2xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#gallery" className="flex items-center px-10 py-5 font-bold transition-all duration-300 border-2 text-slate-700 border-slate-200 dark:text-white dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5">
                View Gallery
              </a>
            </div>

            {/* Micro Stats in Hero */}
            <div className="grid grid-cols-3 gap-8 mt-20 border-t-2 border-slate-100 dark:border-slate-900 pt-10">
              <div>
                <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400">
                  <Target className="w-5 h-5 mr-3" />
                  <span className="text-lg font-black tracking-tighter italic">±0.010</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Tolerance</div>
              </div>
              <div>
                <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400">
                  <Cpu className="w-5 h-5 mr-3" />
                  <span className="text-lg font-black tracking-tighter italic">CNC 5-Axis</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Milling</div>
              </div>
              <div>
                <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400">
                  <Zap className="w-5 h-5 mr-3" />
                  <span className="text-lg font-black tracking-tighter italic">Rapid Mfg</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Delivery</div>
              </div>
            </div>
          </motion.div>

          {/* 2D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
             <TwoDGear />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
