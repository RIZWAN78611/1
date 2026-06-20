import React from "react";
import { Settings, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-blue-500 mr-2" />
              <span className="text-white font-bold text-lg tracking-wider">
                UAU JIGBO <span className="text-blue-500">TECHNICS</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Leading provider of CNC precision machining and mould manufacturing solutions since [Year]. Specializing in ±0.010 tolerance works.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-blue-500 mr-2" />
                <a href="mailto:uaujigbo_technics@yahoo.in" className="hover:text-blue-400 transition-colors">
                  uaujigbo_technics@yahoo.in
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-blue-500 mr-2" />
                <span>9000399786 / 8179443785</span>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <span>INDIA, HYDERABAD</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Location</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} UAU JIGBO TECHNICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
