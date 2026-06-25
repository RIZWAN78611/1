"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { useState } from "react";

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

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="Precision in Action at Our Hyderabad Workshop"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 aspect-video cursor-pointer shadow-lg shadow-slate-200/50 dark:shadow-none"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-blue-400 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <Lightbox
              images={galleryItems}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </AnimatePresence>

        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400 italic">
            Authentic equipment and components from UAU JIGBO TECHNICS, Hyderabad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
