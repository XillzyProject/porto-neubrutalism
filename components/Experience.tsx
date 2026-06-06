"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Code2, Building2, ChevronRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface ExperienceProps {
  dict: {
    title: string;
    accent: string;
    technologiesLabel: string;
    list: ExperienceItem[];
  };
}

const cardColors = ["bg-[#BFDBFE]", "bg-[#A7F3D0]", "bg-[#FBCFE8]", "bg-brand-yellow"];

export default function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-14 py-12 md:py-20 relative">
      <div className="max-w-5xl mx-auto md:px-0 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-bold text-xs uppercase tracking-[0.3em] text-brand-text/50">03</span>
          <div className="h-[2px] w-16 bg-brand-text/20" />
          <span className="section-stamp bg-[#DDD6FE] text-brand-text text-sm uppercase tracking-widest font-black">
            {dict.title}{" "}
            <span className="bg-brand-purple text-white px-2 py-0.5 inline-block -rotate-1 nb-btn text-xs">
              {dict.accent}
            </span>
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[3px] bg-brand-text hidden md:block" />

          <div className="flex flex-col gap-10">
            {dict.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="md:pl-20 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-8 w-14 h-14 ${cardColors[index % cardColors.length]} hidden md:flex items-center justify-center z-10 nb-card`}
                  style={{ boxShadow: '3px 3px 0 #0A0A0A' }}
                >
                  <Building2 className="w-6 h-6 text-brand-text" />
                </div>

                <div className={`${cardColors[index % cardColors.length]} nb-card p-6 md:p-8 relative overflow-hidden`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-brand-text leading-tight">
                        {item.role}
                      </h4>
                      <p className="text-base font-black text-brand-purple mt-1">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5 text-sm font-bold text-brand-text bg-white p-3 nb-card shrink-0 min-w-[180px]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {item.description.map((desc, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-white/80 p-3 nb-card" style={{ boxShadow: '2px 2px 0 #0A0A0A' }}>
                        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-brand-text" />
                        <p className="text-brand-text/80 font-semibold text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ borderTop: '2px solid #0A0A0A' }} className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-4 h-4 text-brand-text" />
                      <span className="text-xs font-black tracking-widest uppercase text-brand-text">
                        {dict.technologiesLabel}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white text-brand-text text-xs font-black nb-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
