"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
        <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            UAU JIGBO <span className="text-blue-500">TECHNICS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            High Precision Machining, Dies & Moulds with <span className="text-blue-400 font-semibold">±0.010 Tolerance</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
