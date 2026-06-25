"use client";

import { motion } from "framer-motion";
import { FileSearch, Layers, PenTool, Activity } from "lucide-react";

const steps = [
  {
    title: "Design & Analysis",
    description: "CAD/CAM modeling and feasibility study for complex geometries.",
    icon: FileSearch,
  },
  {
    title: "Precision Machining",
    description: "Advanced CNC milling, turning, and EDM sparking operations.",
    icon: PenTool,
  },
  {
    title: "Quality Control",
    description: "Rigorous inspection ensuring ±0.010mm tolerance adherence.",
    icon: Activity,
  },
  {
    title: "Delivery & Support",
    description: "Final finishing, assembly, and on-time global shipping.",
    icon: Layers,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Engineering Process</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-slate-950 border-2 border-blue-600/50 shadow-[0_0_20px_rgba(37,99,235,0.2)] group hover:border-blue-500 transition-colors">
                  <step.icon className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-blue-400">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
