"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, CheckCircle, Clock } from "lucide-react";

const stats = [
  { label: "Precision", value: "±0.010", sub: "mm Tolerance", icon: Award },
  { label: "Experience", value: "25+", sub: "Years in Industry", icon: Clock },
  { label: "Happy Clients", value: "500+", sub: "Global Partners", icon: Users },
  { label: "Projects Done", value: "2k+", sub: "Successful Delivery", icon: CheckCircle },
];

export default function Stats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden bg-white dark:bg-slate-950">
       {/* Background Decoration */}
       <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
       </div>

      <motion.div
        style={{ opacity, scale }}
        className="container px-6 mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="p-3 mb-4 rounded-full bg-blue-500/10 text-blue-400">
                <stat.icon className="w-6 h-6" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 font-mono"
              >
                {stat.value}
              </motion.div>
              <div className="text-blue-500 font-bold uppercase tracking-tighter text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
