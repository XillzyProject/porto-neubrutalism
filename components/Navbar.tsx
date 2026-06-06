"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Folder, Mail, Globe } from "lucide-react";
import { Locale } from "@/lib/dictionary";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const isClickScrolling = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    const sections = ["home", "about", "experience", "projects", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleLanguageToggle = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    window.location.href = `/${nextLocale}${window.location.hash}`;
  };

  const handleNavLinkClick = (id: string) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => { isClickScrolling.current = false; }, 1000);
  };

  const menuItems = [
    { id: "home",       name: locale === "id" ? "Beranda"    : "Home",       path: "#home",       icon: Home,     bg: "bg-brand-yellow" },
    { id: "about",      name: locale === "id" ? "Tentang"    : "About",      path: "#about",      icon: User,     bg: "bg-[#FBCFE8]" },
    { id: "experience", name: locale === "id" ? "Pengalaman" : "Experience", path: "#experience", icon: Briefcase, bg: "bg-[#BFDBFE]" },
    { id: "projects",   name: locale === "id" ? "Proyek"     : "Projects",   path: "#projects",   icon: Folder,   bg: "bg-[#A7F3D0]" },
    { id: "contact",    name: locale === "id" ? "Kontak"     : "Contact",    path: "#contact",    icon: Mail,     bg: "bg-[#DDD6FE]" },
  ];

  return (
    <header className="fixed bottom-5 md:top-5 md:bottom-auto inset-x-0 z-50 flex justify-center px-4">
      <nav
        className="flex items-center gap-1 bg-white px-2 md:px-3 py-2"
        style={{ border: '3px solid #0A0A0A', boxShadow: '6px 6px 0px #0A0A0A' }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavLinkClick("home")}
          className="font-display text-2xl px-2 text-brand-text hover:text-brand-pink transition-colors tracking-wider"
        >
          NK<span className="text-brand-pink">.</span>
        </a>

        <div className="h-6 w-[2px] bg-brand-text mx-1 opacity-30" />

        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.path}
              onClick={() => handleNavLinkClick(item.id)}
              className={`relative px-3 md:px-4 py-2 text-sm font-black flex items-center gap-2 transition-all text-brand-text ${
                isActive
                  ? `${item.bg}`
                  : "hover:bg-brand-yellow/40"
              }`}
              style={isActive ? { border: '2px solid #0A0A0A', boxShadow: '2px 2px 0px #0A0A0A' } : {}}
              title={item.name}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden lg:block">{item.name}</span>
            </a>
          );
        })}

        <div className="h-6 w-[2px] bg-brand-text mx-1 opacity-30" />

        <button
          onClick={handleLanguageToggle}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-black text-brand-text nb-btn bg-brand-yellow"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{locale.toUpperCase()}</span>
        </button>
      </nav>
    </header>
  );
}
