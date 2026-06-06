"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Code, Coffee } from "lucide-react";

interface AboutProps {
  dict: {
    sectionTitle: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    downloadCv: string;
  };
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-14 py-12 md:py-20">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono-bold text-xs uppercase tracking-[0.3em] text-brand-text/50">01</span>
        <div className="h-[2px] w-16 bg-brand-text/20" />
        <span className="section-stamp bg-[#FBCFE8] text-brand-text text-sm uppercase tracking-widest font-black">
          {dict.sectionTitle}
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 max-w-5xl mx-auto">

        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-xs md:max-w-[300px] shrink-0 mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-brand-yellow translate-x-5 translate-y-5" style={{ border: '3px solid #0A0A0A' }} />
          <div className="absolute inset-0 bg-[#FBCFE8] translate-x-2.5 translate-y-2.5" style={{ border: '3px solid #0A0A0A' }} />
          <div className="relative aspect-[4/5] overflow-hidden z-10" style={{ border: '4px solid #0A0A0A' }}>
            <img
              src="/images/about.jpg"
              alt="Profil"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Stats badges */}
          <div className="absolute -bottom-5 -right-5 z-20 bg-brand-yellow p-3 sticker">
            <p className="font-display text-3xl leading-none text-brand-text">2+</p>
            <p className="text-xs font-black uppercase tracking-wide">Years Exp</p>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex-1 space-y-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-6xl text-brand-text leading-none tracking-wide">
              {dict.greeting}
              <br />
              <span className="inline-block bg-brand-blue text-white px-3 -rotate-1 mt-2"
                style={{ border: '3px solid #0A0A0A', boxShadow: '5px 5px 0 #0A0A0A' }}>
                {dict.name}
              </span>
            </h2>
            <div className="mt-3">
              <span className="inline-block bg-brand-yellow px-3 py-1.5 rotate-1 nb-btn font-black text-brand-text">
                {dict.role}
              </span>
            </div>
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white font-bold text-sm nb-tag">
              <MapPin className="w-3.5 h-3.5" /> Bogor, Indonesia
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white font-bold text-sm nb-tag">
              <Code className="w-3.5 h-3.5" /> Full Stack Dev
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white font-bold text-sm nb-tag">
              <Coffee className="w-3.5 h-3.5" /> Coffee Driven
            </span>
          </div>

          {/* Bio card */}
          <div className="bg-white p-6 nb-card relative">
            <div className="absolute top-3 right-3 text-brand-yellow font-display text-4xl leading-none opacity-50">"</div>
            <p className="text-base whitespace-pre-line text-brand-text/80 font-semibold leading-relaxed">
              {dict.bio}
            </p>
          </div>

          {/* Download CV */}
          <div>
            <a
              href="/CV-MNaufalKasfyaJamal.pdf"
              download="CV-MNaufalKasfyaJamal.pdf"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-yellow text-brand-text font-black nb-btn"
            >
              <Download className="w-5 h-5" /> {dict.downloadCv}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
