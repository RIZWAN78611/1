"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Abstract industrial detail */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Let's build something together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-500 uppercase font-bold">Email</p>
                    <a href="mailto:uaujigbo_technics@yahoo.in" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      uaujigbo_technics@yahoo.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-500 uppercase font-bold">Phone</p>
                    <p className="text-slate-900 dark:text-white">+91 90003 99786</p>
                    <p className="text-slate-900 dark:text-white">+91 81794 43785</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-500 uppercase font-bold">Location</p>
                    <p className="text-slate-900 dark:text-white">INDIA, HYDERABAD</p>
                    <a
                      href="https://maps.app.goo.gl/YShD7byiax9tAdgw5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-500 flex items-center mt-2 text-sm hover:underline"
                    >
                      View on Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send an Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
