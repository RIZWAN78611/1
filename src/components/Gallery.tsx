"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";

const galleryItems = [
  {
    title: "Precision Measurement (±0.010)",
    category: "Quality Control",
    image: "/gallery/precision-measurement.jpg",
  },
  {
    title: "Custom Amaron Battery Mold",
    category: "Molds",
    image: "/gallery/amaron-mold.jpg",
  },
  {
    title: "CNC Machined Aluminum Fins",
    category: "Components",
    image: "/gallery/aluminum-fins.jpg",
  },
  {
    title: "Makino Slim 3 CNC Machine",
    category: "Machinery",
    image: "/gallery/makino-slim3.jpg",
  },
  {
    title: "Injection Mold Component",
    category: "Molds",
    image: "/gallery/mold-part-1.jpg",
  },
  {
    title: "CNC Milling Operation",
    category: "Services",
    image: "/gallery/cnc-milling.jpg",
  },
  {
    title: "CNC Machine Setup",
    category: "Machinery",
    image: "/gallery/machine-setup-1.jpg",
  },
  {
    title: "VMC Component Setup",
    category: "Machinery",
    image: "/gallery/machine-setup-2.jpg",
  },
  {
    title: "Precision Tooling Station",
    category: "Machinery",
    image: "/gallery/machine-setup-3.jpg",
  },
  {
    title: "Detailed Component Finishing",
    category: "Components",
    image: "/gallery/component-detail.jpg",
  },
  {
    title: "Complex Mold Cavity",
    category: "Molds",
    image: "/gallery/mold-part-2.jpg",
  },
  {
    title: "Custom Machined Base",
    category: "Components",
    image: "/gallery/precision-component-3.jpg",
  },
  {
    title: "Hyderabad Workshop Floor",
    category: "Facilities",
    image: "/gallery/workshop-floor.jpg",
  },
];

const categories = ["All", "Molds", "Components", "Machinery", "Quality Control"];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-950">
      <div className="container px-6 mx-auto">

        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Gallery</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
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
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 aspect-[4/3] cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 transition-colors rounded-2xl pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-px bg-blue-500" />
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">{item.category}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <Lightbox
              images={filteredItems}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm italic">
            Visualizing precision and engineering excellence at our Hyderabad facility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
