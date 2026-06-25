"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const KNOWLEDGE_BASE = {
  company: "UAU JIGBO TECHNICS",
  location: "Hyderabad, India (Google Maps: https://maps.app.goo.gl/YShD7byiax9tAdgw5)",
  contacts: "9000399786 or 8179443785. Email: uaujigbo_technics@yahoo.in",
  specialization: "CNC Precision Machining, Dies & Moulds, Blow Moulds (PET & HDPE), CNC EDM Sparking, Wirecut, Jig Boring, Laser Engraving, and Laser Welding.",
  tolerance: "Standard tolerance of ±0.010 mm.",
  products: "Precision Injection Molds, PET Molds, BLOW Molds, Jigs, Fixtures & Mold Bases.",
  services: "Precision CNC Milling, CNC Turning, Jig Boring, and Job Works."
};

const AIInquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm the UAU JIGBO Assistant. How can I help you with your precision engineering needs today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // AI Simulation logic based on knowledge base
    setTimeout(() => {
      let response = "I'm sorry, I don't have specific details on that. Please contact our team at 9000399786 for more information.";
      const lowInput = input.toLowerCase();

      if (lowInput.includes("hello") || lowInput.includes("hi")) {
        response = "Hello! Welcome to UAU JIGBO TECHNICS. We specialize in precision CNC machining and mould manufacturing.";
      } else if (lowInput.includes("location") || lowInput.includes("where") || lowInput.includes("address")) {
        response = `We are located in Hyderabad, India. You can find us on Google Maps here: ${KNOWLEDGE_BASE.location}`;
      } else if (lowInput.includes("contact") || lowInput.includes("phone") || lowInput.includes("email") || lowInput.includes("call")) {
        response = `You can reach us at ${KNOWLEDGE_BASE.contacts}.`;
      } else if (lowInput.includes("tolerance") || lowInput.includes("accuracy") || lowInput.includes("precision")) {
        response = `We maintain a high precision standard with a tolerance of ${KNOWLEDGE_BASE.tolerance}.`;
      } else if (lowInput.includes("service") || lowInput.includes("do you") || lowInput.includes("expert")) {
        response = `Our expertise includes: ${KNOWLEDGE_BASE.specialization}. We specialize in ${KNOWLEDGE_BASE.services}`;
      } else if (lowInput.includes("mold") || lowInput.includes("mould") || lowInput.includes("die")) {
        response = `We manufacture ${KNOWLEDGE_BASE.products}.`;
      } else if (lowInput.includes("cnc") || lowInput.includes("milling") || lowInput.includes("turning")) {
        response = "We offer advanced CNC Milling and Turning services with exceptional surface finish and accuracy.";
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
          AI Assistant
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6" />
                <div>
                  <h3 className="font-bold text-sm">UAU JIGBO AI</h3>
                  <p className="text-[10px] opacity-80">Online | Precision Specialist</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700"
                  )}>
                    <div className="flex items-center gap-1 mb-1 opacity-60 text-[10px] uppercase font-bold">
                      {m.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                      {m.role}
                    </div>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700">
                    <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about our CNC services..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-[10px] text-center mt-2 text-slate-400 dark:text-slate-500">
                UAU JIGBO AI can make mistakes. Check key info.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIInquiry;
