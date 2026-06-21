"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

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
    title: "Complex CNC Component",
    category: "Machining",
    image: "/gallery/component-complex.jpg",
  },
  {
    title: "Makino Slim 3 CNC Machine",
    category: "Machinery",
    image: "/gallery/makino-slim3.jpg",
  },
  {
    title: "Injection Mold Detail",
    category: "Molds",
    image: "/gallery/mold-part-1.jpg",
  },
  {
    title: "Vertical Machining Center",
    category: "Machinery",
    image: "/gallery/vmc-machine.jpg",
  },
  {
    title: "CNC Milling Operation",
    category: "Services",
    image: "/gallery/cnc-milling.jpg",
  },
  {
    title: "Precision Mold Assembly",
    category: "Molds",
    image: "/gallery/mold-assembly.jpg",
  },
  {
    title: "High Precision Components",
    category: "Components",
    image: "/gallery/precision-component-1.jpg",
  },
  {
    title: "PET Preform Molds",
    category: "Products",
    image: "/gallery/pet-molds.jpg",
  },
  {
    title: "Our Hyderabad Facility",
    category: "Facilities",
    image: "/gallery/workshop-floor.jpg",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-900">
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
              className="relative group overflow-hidden rounded-xl border border-slate-700 bg-slate-800 aspect-video"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            Authentic equipment and components from UAU JIGBO TECHNICS, Hyderabad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
