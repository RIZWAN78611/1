"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 relative bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black tracking-tighter">UAU JIGBO</span>
                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Technics</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Leading the industry in precision engineering and mould manufacturing since 1998.
              Delivering high-quality components with ±0.010mm accuracy.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {["CNC Machining", "Injection Moulds", "PET & Blow Moulds", "Laser Technology", "Jig Boring"].map((item) => (
                <li key={item}>
                  <span className="text-slate-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>uaujigbo_technics@yahoo.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+91 9000399786</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Hyderabad, India</span>
              </div>
              <a
                href="https://maps.app.goo.gl/YShD7byiax9tAdgw5"
                target="_blank"
                className="inline-flex items-center mt-4 text-blue-500 font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Get Directions <Globe className="w-3 h-3 ml-2" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {currentYear} UAU JIGBO TECHNICS. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
