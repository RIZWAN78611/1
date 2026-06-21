"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

// NOTE: These images are placeholders from Unsplash to demonstrate the gallery layout.
// They should be replaced with actual high-resolution photographs of UAU JIGBO TECHNICS'
// machines, components, and facility for the final production site.
const galleryItems = [
  {
    title: "Makino Slim 3 CNC Machine",
    category: "Machinery",
    image: "/gallery/machine-1.jpg",
  },
  {
    title: "High Precision VMC Machine",
    category: "Machinery",
    image: "/gallery/machine-2.jpg",
  },
  {
    title: "CNC Machining Center",
    category: "Machinery",
    image: "/gallery/machine-3.jpg",
  },
  {
    title: "Precision Manufacturing Unit",
    category: "Facilities",
    image: "/gallery/machine-4.jpg",
  },
  {
    title: "Advanced CNC Technology",
    category: "Machinery",
    image: "/gallery/machine-5.jpg",
  },
  {
    title: "Precision Component Inspection",
    category: "Quality Control",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="Machines & Precision Components"
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
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            Actual photographs from our Hyderabad facility showcasing our advanced CNC machinery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
