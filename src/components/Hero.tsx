"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Target, Zap } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium tracking-wider text-blue-400 uppercase border border-blue-500/30 rounded-full bg-blue-500/10">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
              </span>
              Innovation & Precision
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-7xl uppercase">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Machining & Moulds
              </span>
            </h1>

            <p className="max-w-xl mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-600 dark:text-slate-400">
              UAU JIGBO TECHNICS delivers high-quality engineering with tight tolerances
              of <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">±0.010</span>.
              Specializing in Injection, PET & Blow Molds, and precision CNC components.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center px-8 py-4 font-bold text-slate-900 dark:text-slate-900 dark:text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex items-center px-8 py-4 font-bold transition-all duration-300 border text-slate-300 border-slate-700 rounded-xl hover:bg-white/5 hover:text-slate-900 dark:text-slate-900 dark:text-white">
                View Gallery
              </button>
            </div>

            {/* Micro Stats in Hero */}
            <div className="grid grid-cols-3 gap-6 mt-16 border-t border-slate-800/50 pt-8">
              <div>
                <div className="flex items-center mb-1 text-blue-400">
                  <Target className="w-4 h-4 mr-2" />
                  <span className="text-sm font-bold">±0.010</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Precision</div>
              </div>
              <div>
                <div className="flex items-center mb-1 text-blue-400">
                  <Cpu className="w-4 h-4 mr-2" />
                  <span className="text-sm font-bold">CNC 5-Axis</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Technology</div>
              </div>
              <div>
                <div className="flex items-center mb-1 text-blue-400">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm font-bold">Fast Turnaround</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Efficiency</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent rounded-3xl" />
             <ThreeScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-[30px] h-[50px] border-2 border-slate-700 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-full h-3 bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
