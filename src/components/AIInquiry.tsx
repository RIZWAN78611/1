"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const KNOWLEDGE_BASE = [
  { keywords: ["mould", "mold"], response: "We specialize in Precision Injection Molds, PET Molds, and BLOW Molds (PET & HDPE). We also manufacture Mold Bases." },
  { keywords: ["cnc", "machining", "milling", "turning"], response: "Our CNC capabilities include Precision CNC Milling Components and CNC Turning Components with tolerances of ±0.010." },
  { keywords: ["edm", "sparking", "wirecut"], response: "Yes, we offer CNC EDM Sparking and Wirecut services for high-precision tool and die work." },
  { keywords: ["laser", "welding", "engraving"], response: "We provide professional Laser Engraving and Laser Welding services." },
  { keywords: ["contact", "phone", "mobile", "email"], response: "You can reach us at uaujigbo_technics@yahoo.in or call +91 9000399786 / 8179443785." },
  { keywords: ["location", "where", "hyderabad", "address"], response: "We are located in Hyderabad, India. You can find our exact location on Google Maps through the link in the contact section." },
  { keywords: ["tolerance", "precision"], response: "Our standard precision tolerance is ±0.010, ensuring high-quality components for all our clients." },
  { keywords: ["jig", "fixture", "boring"], response: "We manufacture Jigs and Fixtures, and we specialize in Jig Boring components." },
];

const AIInquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm the UAU JIGBO AI assistant. How can I help you today with our precision machining or mould services?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate AI thinking
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 600);
  };

  const getAIResponse = (query: string) => {
    const lowercaseQuery = query.toLowerCase();

    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(keyword => lowercaseQuery.includes(keyword))) {
        return item.response;
      }
    }

    return "I'm not quite sure about that specific request. Could you please ask about our CNC services, moulds, laser welding, or contact info? Alternatively, you can email us directly at uaujigbo_technics@yahoo.in";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-slate-900 border border-slate-700 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col mb-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white/20 p-1.5 rounded-lg mr-2">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-white font-bold block leading-none">UAU AI Robot</span>
                  <span className="text-blue-200 text-[10px] uppercase font-bold tracking-tighter">Online & Responsive</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white bg-white/10 p-1 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-xl text-sm",
                    m.role === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-slate-800 text-gray-200 rounded-bl-none"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
        className="relative bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg shadow-blue-500/20 group overflow-hidden"
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Bot className="h-8 w-8" />
        </motion.div>

        {/* Radar Ping Effect */}
        <span className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-0 group-hover:animate-ping" />
      </motion.button>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold mb-2 shadow-xl relative"
        >
          Need help? Ask me!
          <div className="absolute top-full right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
        </motion.div>
      )}
    </div>
  );
};

export default AIInquiry;
