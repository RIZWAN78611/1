'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Lightbox from './Lightbox'

const categories = ['All', 'Molds', 'Components', 'Machinery', 'Quality Control']

const galleryItems = [
  { id: 1, category: 'Components', title: 'Precision CNC Component', image: '/gallery/cnc-milling.jpg' },
  { id: 2, category: 'Molds', title: 'Aluminum Injection Mold', image: '/gallery/aluminum-fins.jpg' },
  { id: 3, category: 'Machinery', title: 'MAKINO Slim3 High Speed', image: '/gallery/makino-slim3.jpg' },
  { id: 4, category: 'Molds', title: 'PET Preform Mold', image: '/gallery/mold-part-1.jpg' },
  { id: 5, category: 'Quality Control', title: 'Precision Measurement', image: '/gallery/precision-measurement.jpg' },
  { id: 6, category: 'Components', title: 'Titanium CNC Part', image: '/gallery/precision-component-3.jpg' },
  { id: 7, category: 'Machinery', title: 'Production Floor', image: '/gallery/workshop-floor.jpg' },
  { id: 8, category: 'Molds', title: 'Blow Mold PET', image: '/gallery/amaron-mold.jpg' },
  { id: 9, category: 'Components', title: 'Engine Component', image: '/gallery/component-detail.jpg' },
  { id: 10, category: 'Molds', title: 'Complex Core Pins', image: '/gallery/mold-part-2.jpg' },
  { id: 11, category: 'Machinery', title: 'CNC Setup 1', image: '/gallery/machine-setup-1.jpg' },
  { id: 12, category: 'Machinery', title: 'CNC Setup 2', image: '/gallery/machine-setup-2.jpg' },
  { id: 13, category: 'Machinery', title: 'CNC Setup 3', image: '/gallery/machine-setup-3.jpg' }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white uppercase mb-4">
              Engineering <br /> <span className="text-blue-600">Mastery</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              A visual showcase of our precision manufacturing capabilities and state-of-the-art facility.
            </p>
          </div>

          {/* Category Filters - User requested options */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedImage !== null && (
        <Lightbox
          images={galleryItems}
          initialIndex={galleryItems.findIndex(i => i.id === selectedImage)}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  )
}
