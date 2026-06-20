"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c] py-20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504328332780-bc2d039f9a42?q=80&w=2000&auto=format&fit=crop")',
          }}
        />
        {/* Premium Dark Overlay Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/10 via-transparent to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-[#0a0a0c]/40 backdrop-blur-[1px]" />

        {/* Subtle tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex justify-start mb-6">
               <img src="/logo.png" alt="UAU JIGBO Logo" className="h-20 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
              UAU JIGBO <span className="text-blue-500">TECHNICS</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-slate-300 mb-6 uppercase tracking-widest">
              Precision Machining, Dies & moulds
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
              High-quality engineering delivered with <span className="text-blue-400 font-semibold">tight tolerances (±0.010)</span> and <span className="text-blue-400 font-semibold">rapid turnaround</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all flex items-center group shadow-lg shadow-blue-900/20"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-white rounded-lg font-bold text-lg transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <ThreeScene />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
