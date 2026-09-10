"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";

const cardAccents = ["bg-brand-yellow", "bg-[#BFDBFE]", "bg-[#FBCFE8]", "bg-[#A7F3D0]"];

interface ProjectCardProps {
  project: any;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const data = project?.frontmatter || project?.meta || project || {};
  const title = data.title || "Proyek Tanpa Judul";
  const description = data.description || "";
  const image = data.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
  const tags = data.tags || [];
  const accent = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className="relative overflow-hidden group hover:-translate-x-[3px] hover:-translate-y-[3px] transition-all duration-150 h-full flex flex-col bg-white"
        style={{ border: '3px solid #0A0A0A', boxShadow: '8px 8px 0 #0A0A0A', transition: 'all 0.15s ease' }}
      >
        {/* Accent top strip */}
        <div className={`h-2 w-full ${accent}`} style={{ borderBottom: '3px solid #0A0A0A' }} />

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden" style={{ borderBottom: '3px solid #0A0A0A' }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Arrow icon on hover */}
          <div className="absolute top-3 right-3 w-9 h-9 bg-brand-yellow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ border: '2px solid #0A0A0A', boxShadow: '2px 2px 0 #0A0A0A' }}>
            <ArrowUpRight className="w-5 h-5 text-brand-text" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Number */}
          <span className="font-mono-bold text-xs text-brand-text/30 mb-2">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h4 className="text-xl font-black text-brand-text mb-2 line-clamp-1 leading-tight">
            {title}
          </h4>

          <p className="text-brand-text/65 font-semibold leading-relaxed mb-5 line-clamp-2 flex-1 text-sm">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '2px solid #0A0A0A' }}>
              {tags.slice(0, 3).map((tag: string, i: number) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-yellow text-brand-text text-xs font-black nb-tag"
                >
                  {getTechIcon(tag) && (
                    <img src={getTechIcon(tag)} alt={tag} className="w-3.5 h-3.5 object-contain" />
                  )}
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="flex items-center px-2.5 py-1 bg-white text-brand-text text-xs font-black nb-tag">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
