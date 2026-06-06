"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";

const getTechIcon = (tag: string) => {
  const icons: Record<string, string> = {
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    "ReactJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  };
  return icons[tag];
};

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: any | null;
  dict: any;
}

export default function ProjectDrawer({ isOpen, onClose, project, dict }: ProjectDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const data = project?.frontmatter || project?.meta || project || {};
  const title = data.title || "Proyek Tanpa Judul";
  const description = data.description || "Deskripsi proyek belum ditambahkan.";
  const image = data.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";
  const tags = data.tags || [];
  const link = data.link;
  const github = data.github;

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-text/70 z-[60] cursor-pointer backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-[100dvh] w-full md:w-[580px] bg-brand-bg z-[70] overflow-y-auto flex flex-col"
            style={{ borderLeft: '4px solid #0A0A0A', boxShadow: '-8px 0 0 #0A0A0A' }}
          >
            {/* Image header */}
            <div className="relative aspect-video w-full bg-brand-text/5 shrink-0" style={{ borderBottom: '3px solid #0A0A0A' }}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-yellow flex items-center justify-center nb-btn"
                title={dict?.close}
              >
                <X className="w-5 h-5" />
              </button>
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-7 md:p-10 flex-1 flex flex-col gap-6">
              <div>
                <span className="font-mono-bold text-xs text-brand-text/40 uppercase tracking-widest">Project</span>
                <h3 className="font-display text-4xl md:text-5xl text-brand-text mt-1 leading-none tracking-wide">
                  {title}<span className="text-brand-pink">.</span>
                </h3>
              </div>

              <div className="bg-white p-5 nb-card text-brand-text/75 font-semibold leading-relaxed whitespace-pre-line text-sm">
                {description}
              </div>

              {tags.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4 text-brand-text" />
                    <span className="text-xs font-black tracking-widest uppercase text-brand-text">
                      {dict?.techStack}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string, i: number) => (
                      <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-brand-yellow text-brand-text text-xs font-black nb-tag">
                        {getTechIcon(tag) && <img src={getTechIcon(tag)} alt={tag} className="w-4 h-4 object-contain" />}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-6 flex flex-wrap gap-3" style={{ borderTop: '3px solid #0A0A0A' }}>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 bg-brand-yellow text-brand-text font-black nb-btn">
                    <ExternalLink className="w-5 h-5" /> {dict?.viewLive}
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 px-6 py-4 bg-brand-text text-white font-black nb-btn">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    <span className="hidden sm:inline">{dict?.sourceCode}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
