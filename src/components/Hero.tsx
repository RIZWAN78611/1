"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ThreeScene from "./ThreeScene";
import Image from "next/image";

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

      {/* Top Left Logo */}
      <div className="absolute top-8 left-8 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="relative h-16 md:h-20 w-48 md:w-60"
        >
          <Image
            src="/logo-new.png"
            alt="UAU JIGBO Logo"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">TOL ±0.010 Precision Engineering</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-tight">
              UAU JIGBO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">TECHNICS</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-300 mb-8 uppercase tracking-[0.15em] border-l-4 border-blue-600 pl-4">
              Precision Machining, Dies & Moulds
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
              Specializing in <span className="text-white font-medium">CNC Milling</span>, <span className="text-white font-medium">Turning</span>, and <span className="text-white font-medium">Jig Boring</span>.
              Delivering high-quality components with rapid turnaround.
            </p>

            <div className="flex flex-wrap items-center gap-6">
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
                Get a Quote
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
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
