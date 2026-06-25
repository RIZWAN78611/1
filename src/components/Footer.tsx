import React from "react";
import { Settings, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-gray-400 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Settings className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-2" />
              <span className="text-slate-900 dark:text-white font-bold text-lg tracking-wider">
                UAU JIGBO <span className="text-blue-600 dark:text-blue-500">TECHNICS</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Leading provider of CNC precision machining and mould manufacturing solutions in Hyderabad. Specializing in high-accuracy components with ±0.010 tolerance.
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-500 mr-3" />
                <a href="mailto:uaujigbo_technics@yahoo.in" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  uaujigbo_technics@yahoo.in
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-500 mr-3" />
                <span className="text-slate-700 dark:text-slate-300">9000399786 / 8179443785</span>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-500 mr-3 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">INDIA, HYDERABAD</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Location</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500">&copy; {new Date().getFullYear()} UAU JIGBO TECHNICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
