"use client";

import { motion } from "framer-motion";
import { CheckCircle2, History, Award, Users } from "lucide-react";
import WireframeGear from "./WireframeGear";

export default function About() {
  const values = [
    {
      icon: <History className="w-6 h-6" />,
      title: "Decades of Expertise",
      description: "Founded on the principles of engineering excellence and technical innovation."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Precision Standards",
      description: "Maintaining industry-leading tolerances of ±0.010 across all production lines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Customized solutions for complex manufacturing challenges worldwide."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
               <WireframeGear />
            </div>

            <div className="absolute inset-0 p-12 flex flex-col justify-end">
               <div className="bg-blue-600 w-16 h-1 w-16 mb-6" />
               <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
                  Engineering <br /> The Future
               </h3>
               <p className="text-slate-600 dark:text-slate-400 font-medium">
                  At UAU JIGBO TECHNICS, we combine traditional craftsmanship with state-of-the-art CNC technology.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter leading-none">
              Precision is not <br />
              <span className="text-blue-600">just a measurement</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              We specialize in high-precision job works, mold making, and complex CNC operations.
              Our facility in Hyderabad, India, is equipped with advanced EDM sparking,
              wirecut, and jig boring capabilities to ensure every component meets the highest global standards.
            </p>

            <div className="space-y-8">
              {values.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800" />
                  ))}
               </div>
               <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Trusted by 100+ Engineering Firms
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
