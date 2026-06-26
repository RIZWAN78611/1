"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const specs = [
  "Precision CNC Milling & Turning",
  "Jig Boring & Job Works",
  "Precision Injection Molds",
  "PET & BLOW Molds",
  "Jigs, Fixtures & Mold Bases",
  "±0.010 Tolerance Standard"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Tech background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 fill-current">
          <pattern id="grid-about" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid-about)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Legacy</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-8">Committed to Engineering Excellence</h2>

            <p className="text-slate-600 dark:text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              At UAU JIGBO TECHNICS, we pride ourselves on delivering world-class engineering solutions.
              Our state-of-the-art facility in Hyderabad is equipped with advanced CNC machinery
              capable of achieving tolerances as tight as <span className="text-blue-400 font-mono font-bold">±0.010</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 group-hover:text-slate-900 dark:text-slate-900 dark:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-slate-900 dark:text-slate-900 dark:text-white transition-colors">{spec}</span>
                </motion.div>
              ))}
            </div>

            <button className="mt-12 flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group">
              Learn more about our journey
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{
                   backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000")'
                }}
              />
              <div className="absolute inset-0 bg-white dark:bg-slate-950/60 group-hover:bg-white dark:bg-slate-950/40 transition-colors duration-500" />

              <div className="relative p-12 flex flex-col justify-end h-full z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-slate-900 dark:text-slate-900 dark:text-white shadow-xl">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 inter-2 2 0 00-2.25 2.25c0 5.935 3.197 11.124 8.003 13.985a1.994 1.994 0 002.012 0c4.806-2.861 8.003-8.15 8.003-13.985a2 2 0 00-2.25-2.25z" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-4">Quality & Assurance</h4>
                <p className="text-blue-300 font-medium italic text-lg leading-relaxed">
                  &quot;In the world of precision engineering, there is no room for error. We live by the ±0.010 standard.&quot;
                </p>
              </div>

              {/* Decorative Tech Borders */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-blue-500/30 rounded-tl-xl" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-blue-500/30 rounded-br-xl" />
            </div>

            {/* Animated Glow */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
