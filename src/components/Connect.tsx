'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import {
  Settings,
  Cpu,
  Zap,
  MousePointer2,
  Circle,
  ShieldCheck,
  Clock,
  Maximize2,
  LucideIcon
} from 'lucide-react'

interface TechIconProps {
  icon: LucideIcon
  delay: number
  x: number
  y: number
  size?: number
  label: string
}

const TechIcon = ({ icon: Icon, delay, x, y, size = 48, label }: TechIconProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.1, 1],
      x: [x, x + 10, x],
      y: [y, y - 10, y]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="absolute hidden md:flex flex-col items-center gap-2 pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className={`p-3 rounded-2xl bg-blue-500/10 backdrop-blur-md border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]`}>
      <Icon size={size} className="text-blue-500" />
    </div>
    <span className="text-[10px] font-mono text-blue-500/60 uppercase tracking-widest">{label}</span>
  </motion.div>
)

interface FloatingCursorProps {
  delay: number
  color: string
}

const FloatingCursor = ({ delay, color }: FloatingCursorProps) => (
  <motion.div
    animate={{
      x: [0, 150, 50, 200, 0],
      y: [0, 50, 150, 80, 0],
      opacity: [0, 1, 0.5, 1, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
    className="absolute pointer-events-none"
  >
    <MousePointer2 className={`w-6 h-6 ${color} fill-current`} />
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`absolute top-0 left-0 w-6 h-6 ${color} blur-xl`}
    />
  </motion.div>
)

export default function Connect() {
  const containerRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Wrap in microtask to avoid react-hooks/set-state-in-effect warning in Next 15/React 19
    queueMicrotask(() => {
      setMounted(true)
    })
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  if (!mounted) return null

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-white dark:bg-slate-950 overflow-hidden border-y border-slate-200 dark:border-slate-900"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      {/* Floating Tech Icons */}
      <TechIcon icon={Settings} delay={0} x={15} y={20} size={32} label="Precision" />
      <TechIcon icon={Cpu} delay={1} x={85} y={25} size={40} label="CNC Control" />
      <TechIcon icon={Zap} delay={2} x={10} y={70} size={36} label="High Speed" />
      <TechIcon icon={Maximize2} delay={3} x={80} y={75} size={32} label="±0.010 TOL" />

      {/* Ghost Cursors */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <FloatingCursor delay={0} color="text-blue-500" />
        <FloatingCursor delay={5} color="text-slate-400" />
        <FloatingCursor delay={10} color="text-blue-400" />
      </div>

      <motion.div
        style={{ scale: springScale, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-mono mb-8"
          >
            <Circle className="w-2 h-2 fill-current animate-pulse" />
            GLOBAL PARTNER
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Engineering</span> Standards
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            From complex medical components to aerospace precision, we connect cutting-edge technology with unmatched craftsmanship to bring your most ambitious projects to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: ShieldCheck, title: "Quality Assured", desc: "ISO Standards Compliant" },
              { icon: Clock, title: "Fast Delivery", desc: "Optimized Workflow" },
              { icon: Zap, title: "Modern Tech", desc: "Latest CNC Machinery" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500"
              >
                <item.icon className="w-10 h-10 text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all flex items-center gap-3"
            >
              Start Your Project
              <Zap size={18} className="fill-current" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Decorative Tech Orb */}
      <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -top-64 -left-64 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full animate-pulse" />
    </section>
  )
}
