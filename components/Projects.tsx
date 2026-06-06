"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDrawer from "@/components/ProjectDrawer";

interface ProjectsProps {
  dict: any;
  projects: any[];
}

export default function Projects({ dict, projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="scroll-mt-28 py-12 md:py-20 relative">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-bold text-xs uppercase tracking-[0.3em] text-brand-text/50">04</span>
          <div className="h-[2px] w-16 bg-brand-text/20" />
          <span className="section-stamp bg-[#A7F3D0] text-brand-text text-sm uppercase tracking-widest font-black">
            {dict.title}{" "}
            <span className="underline decoration-brand-pink decoration-4">{dict.accent}</span>
          </span>
        </div>

        {/* Subtitle */}
        {dict.subtitle && (
          <p className="text-brand-text/60 font-semibold max-w-sm mb-10 text-sm leading-relaxed">
            {dict.subtitle}
          </p>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      <ProjectDrawer
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        dict={dict.drawer}
      />
    </section>
  );
}
