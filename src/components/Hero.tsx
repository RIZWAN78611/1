"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c] py-20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop")',
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
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="mb-8"
          >
             <img src="/logo.png" alt="UAU JIGBO Logo" className="h-24 w-auto drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              UAU JIGBO <span className="text-blue-500">TECHNICS</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-slate-300 mb-8 uppercase tracking-[0.2em]">
              Precision Machining, Dies & Moulds
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed mx-auto">
              Engineering Excellence with <span className="text-blue-400 font-semibold">TOL ±0.010</span>.
              Specializing in CNC Milling, Turning & Job Works.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#services"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all flex items-center group shadow-lg shadow-blue-900/40"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg transition-all"
              >
                Get in Touch
              </a>
            </div>
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
