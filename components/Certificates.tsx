"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CertificatesProps {
  dict: {
    title: string;
    accent: string;
  };
}

const certificates = [
  { id: 1, alt: "Sertifikat Belajar Dasar Pemrograman Web - Dicoding Indonesia", img: "images/certificate/dicoding.webp", issuer: "Dicoding Indonesia" },
  { id: 2, alt: "Sertifikat Introduction to React JS - Edspert.id", img: "images/certificate/reactjs.webp", issuer: "Edspert.id" },
];

export default function Certificates({ dict }: CertificatesProps) {
  return (
    <section id="certificates" className="scroll-mt-14 py-12 md:py-20 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-bold text-xs uppercase tracking-[0.3em] text-brand-text/50">06</span>
          <div className="h-[2px] w-16 bg-brand-text/20" />
          <span className="section-stamp bg-[#DDD6FE] text-brand-text text-sm uppercase tracking-widest font-black">
            {dict.title} <span className="text-brand-mint">{dict.accent}</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full sm:max-w-[420px]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-brand-yellow translate-x-4 translate-y-4" style={{ border: '3px solid #0A0A0A' }} />
                <div className="relative overflow-hidden bg-white nb-card cursor-pointer hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150"
                  style={{ boxShadow: '6px 6px 0 #0A0A0A' }}>
                  <div className="aspect-[4/3] overflow-hidden" style={{ borderBottom: '3px solid #0A0A0A' }}>
                    <img
                      src={cert.img}
                      alt={cert.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-brand-amber shrink-0" />
                    <p className="font-black text-brand-text text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
