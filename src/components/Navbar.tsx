"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-800" : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white p-1">
             <Image src="/logo.png" alt="UAU JIGBO" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-white leading-none">UAU JIGBO</span>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] leading-none mt-1">Technics</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-slate-800">
            <ThemeToggle />
          </div>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
