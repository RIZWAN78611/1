"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let&apos;s Build the Future Together</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
              Ready to start your next high-precision project? Our team is here to provide
              technical expertise and manufacturing excellence.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-slate-900 dark:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest mb-1">Email Us</div>
                  <a href="mailto:uaujigbo_technics@yahoo.in" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-400 transition-colors">
                    uaujigbo_technics@yahoo.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-slate-900 dark:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    +91 9000399786 <br />
                    <span className="text-slate-500 text-lg font-medium">+91 8179443785</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-slate-900 dark:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest mb-1">Visit Us</div>
                  <address className="text-xl font-bold text-slate-900 dark:text-white not-italic">
                    Hyderabad, Telangana, India
                  </address>
                  <a
                    href="https://maps.app.goo.gl/YShD7byiax9tAdgw5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-blue-500 hover:underline font-medium"
                  >
                    View on Google Maps
                    <Globe className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white dark:bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-white dark:bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-white dark:bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  placeholder="Inquiry about CNC Machining"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 bg-white dark:bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-slate-900 dark:text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center group">
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
