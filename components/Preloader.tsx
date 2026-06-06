"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Halo", "Hello", "Bonjour", "Ciao", "안녕하세요", "你好", "こんにちは", "Привет"];
const bgColors = ["bg-brand-yellow", "bg-[#BFDBFE]", "bg-[#FBCFE8]", "bg-[#A7F3D0]", "bg-[#DDD6FE]", "bg-brand-yellow", "bg-[#BFDBFE]", "bg-[#FBCFE8]"];
const textColors = ["text-brand-blue", "text-brand-purple", "text-brand-pink", "text-brand-mint", "text-brand-amber", "text-brand-blue", "text-brand-purple", "text-brand-pink"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timeout);
    }
    const interval = setInterval(() => setIndex((prev) => prev + 1), 200);
    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
          className={`fixed inset-0 ${bgColors[index]} z-[9999] flex flex-col items-center justify-center transition-colors duration-100`}
          style={{ borderBottom: '4px solid #0A0A0A' }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(10,10,10,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.3) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="overflow-hidden flex items-center justify-center relative z-10">
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white px-10 py-5 nb-card"
            >
              <p className={`font-display text-6xl md:text-8xl tracking-wide ${textColors[index]}`}>
                {words[index]}
                <span className="text-brand-text">.</span>
              </p>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-text/20">
            <motion.div
              className="h-full bg-brand-text"
              initial={{ width: "0%" }}
              animate={{ width: `${((index + 1) / words.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
