"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Layers,
  Wind,
  Zap,
  Scissors,
  Maximize,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "CNC Precision Machining",
    description: "High-accuracy CNC milling and turning components with exceptional surface finish.",
    icon: Settings,
    features: ["CNC Milling", "CNC Turning", "Precision Components"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Dies & Moulds",
    description: "Expert manufacturing of high-quality industrial dies and precision injection moulds.",
    icon: Layers,
    features: ["Injection Molds", "Mold Bases", "Jigs & Fixtures"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Blow Moulds",
    description: "Specialized in PET & HDPE blow moulds for various packaging and industrial applications.",
    icon: Wind,
    features: ["PET Moulds", "HDPE Moulds", "Custom Designs"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "CNC EDM Sparking",
    description: "Precision electrical discharge machining for complex shapes and hard materials.",
    icon: Zap,
    features: ["Sparking", "Wirecut EDM", "Jig Boring"],
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Laser Technology",
    description: "Advanced laser services including precision engraving and specialized welding.",
    icon: Scissors,
    features: ["Laser Engraving", "Laser Welding", "Part Marking"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Jig Boring",
    description: "Specialized boring services for high-precision holes and alignments.",
    icon: Maximize,
    features: ["High Precision Boring", "Alignment Works", "Job Works"],
    color: "from-pink-500 to-rose-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl"
          >
            Our Core Specialization
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 rounded-full"
          />
          <p className="max-w-2xl mt-6 text-slate-600 dark:text-slate-400">
            We provide end-to-end manufacturing solutions using state-of-the-art technology
            and decades of engineering expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-slate-100 dark:bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />

              <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.color} text-slate-900 dark:text-white shadow-lg`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="mb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-slate-500">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <button className="text-sm font-bold text-blue-500 hover:text-blue-400 flex items-center transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
