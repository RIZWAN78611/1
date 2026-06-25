"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const specs = [
    "Precision CNC Milling & Turning",
    "Jig Boring & Job Works",
    "Precision Injection Molds",
    "PET & BLOW Molds",
    "Jigs, Fixtures & Mold Bases",
    "±0.010 Tolerance Standard"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Tech background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 dark:opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 fill-current">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeading
              title="Committed to Precision"
              subtitle="The UAU JIGBO standard"
              centered={false}
            />
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              At UAU JIGBO TECHNICS, we pride ourselves on delivering engineering excellence.
              Our state-of-the-art facility in Hyderabad is equipped with advanced CNC machinery
              capable of achieving tolerances as tight as <span className="text-blue-600 dark:text-blue-500 font-bold">±0.010</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <div className="aspect-video lg:aspect-square bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative group">
              {/* Background Image of Micrometer */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                   backgroundImage: 'url("https://images.unsplash.com/photo-1517420812314-8b1e39b0ad0e?q=80&w=1000")'
                }}
              />
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />

              <div className="relative p-12 flex flex-col justify-center h-full z-10">
                <h4 className="text-4xl font-bold text-white mb-4">Quality First</h4>
                <p className="text-blue-300 font-medium italic text-lg leading-relaxed">
                  &quot;Precision is not just a requirement, it&apos;s our promise.&quot;
                </p>
              </div>

              {/* Decorative Tech Borders */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-blue-500/50" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-blue-500/50" />
            </div>
            {/* Glow Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
