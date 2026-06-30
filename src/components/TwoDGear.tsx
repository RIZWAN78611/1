'use client'

import { motion } from 'framer-motion'

export default function TwoDGear() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="relative w-64 h-64 md:w-[450px] md:h-[450px]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600/20 dark:fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400 stroke-[0.5]">
          <path d="M50 20c-16.57 0-30 13.43-30 30s13.43 30 30 30 30-13.43 30-30-13.43-30-30-30zm0 50c-11.05 0-20-8.95-20-20s8.95-20 20-20 20 8.95 20 20-8.95 20-20 20z" />
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="45"
              y="5"
              width="10"
              height="15"
              rx="2"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-40 h-40 md:w-64 md:h-64"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-400/20 dark:fill-slate-700/20 stroke-slate-400 dark:stroke-slate-600 stroke-[0.5]">
          <path d="M50 30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="46"
              y="15"
              width="8"
              height="12"
              rx="1"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />
      </div>
    </div>
  )
}
