"use client";

import React from "react";

interface SkillsProps {
  dict: {
    title: string;
    accent: string;
  };
}

const topRowSkills = [
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
];

const bottomRowSkills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
];

export default function Skills({ dict }: SkillsProps) {
  const multipliedTop = [...topRowSkills, ...topRowSkills, ...topRowSkills, ...topRowSkills];
  const multipliedBottom = [...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills];

  return (
    <section id="skills" className="py-16 overflow-hidden relative">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-12 px-0">
        <span className="font-mono-bold text-xs uppercase tracking-[0.3em] text-brand-text/50">02</span>
        <div className="h-[2px] w-16 bg-brand-text/20" />
        <span className="section-stamp bg-[#A7F3D0] text-brand-text text-sm uppercase tracking-widest font-black">
          {dict.title} <span className="text-brand-pink">{dict.accent}</span>
        </span>
      </div>

      <div className="flex flex-col gap-5 relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-36 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-36 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-max animate-scroll pause-on-hover py-2">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-4 pr-4">
              {multipliedTop.map((skill, i) => (
                <SkillCard key={`t${r}-${i}`} skill={skill} color="bg-brand-yellow" />
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-scroll-reverse pause-on-hover py-2">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-4 pr-4">
              {multipliedBottom.map((skill, i) => (
                <SkillCard key={`b${r}-${i}`} skill={skill} color="bg-[#BFDBFE]" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, color }: { skill: { name: string; img: string }; color: string }) {
  return (
    <div
      className={`group flex items-center gap-3 px-6 py-4 bg-white nb-card hover:${color} hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150 cursor-pointer`}
    >
      <img src={skill.img} alt={skill.name} className="w-7 h-7 object-contain" />
      <span className="font-black text-brand-text text-base whitespace-nowrap">{skill.name}</span>
    </div>
  );
}
