"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  Cpu,
  Layers,
  Zap,
  Wind,
  Scissors,
  Maximize2
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "CNC Precision Machining",
    description: "High-accuracy CNC milling and turning components with exceptional surface finish.",
    icon: <Cpu className="h-8 w-8" />,
    items: ["CNC Milling", "CNC Turning", "Precision Components"]
  },
  {
    title: "Dies & Moulds",
    description: "Expert manufacturing of high-quality industrial dies and precision injection moulds.",
    icon: <Layers className="h-8 w-8" />,
    items: ["Injection Molds", "Mold Bases", "Jigs & Fixtures"]
  },
  {
    title: "Blow Moulds",
    description: "Specialized in PET & HDPE blow moulds for various packaging and industrial applications.",
    icon: <Wind className="h-8 w-8" />,
    items: ["PET Moulds", "HDPE Moulds", "Custom Designs"]
  },
  {
    title: "CNC EDM Sparking",
    description: "Precision electrical discharge machining for complex shapes and hard materials.",
    icon: <Zap className="h-8 w-8" />,
    items: ["Sparking", "Wirecut EDM", "Intricate Details"]
  },
  {
    title: "Laser Technology",
    description: "Advanced laser services including precision engraving and specialized welding.",
    icon: <Scissors className="h-8 w-8" />,
    items: ["Laser Engraving", "Laser Welding", "Marking"]
  },
  {
    title: "Jig Boring",
    description: "Specialized boring services for high-precision holes and alignments.",
    icon: <Maximize2 className="h-8 w-8" />,
    items: ["High Precision Boring", "Alignment Works", "Large Components"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Expertise" subtitle="Precision Engineering Solutions" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/5 group"
            >
              <div className="bg-blue-600/5 dark:bg-blue-600/10 p-4 rounded-lg inline-block mb-6 text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-xs text-slate-500 dark:text-slate-500">
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
