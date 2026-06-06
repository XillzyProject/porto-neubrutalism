"use client";

import { motion } from "framer-motion";
import { Briefcase, Mail, ArrowRight } from "lucide-react";

interface HeroProps {
  dict: {
    greeting: string;
    role: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section id="home" className="py-12 md:py-20 scroll-mt-28 relative">
      {/* Decorative corner stamp */}
      <div className="absolute top-6 right-0 hidden lg:block">
        <div className="bg-brand-pink text-white px-4 py-2 rotate-2 sticker text-sm uppercase tracking-widest">
          Open to Work ✦
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-7 text-left"
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-brand-mint rounded-full" style={{border:'2px solid #0A0A0A'}} />
            <span className="inline-block bg-brand-yellow px-4 py-1.5 font-black text-xs uppercase tracking-widest nb-btn">
              {dict.greeting}
            </span>
          </motion.div>

          {/* Main heading */}
          <div>
            <h1 className="font-display text-[72px] md:text-[96px] leading-[0.9] tracking-wide text-brand-text">
              M. NAUFAL
              <br />
              <span 
                className="inline-block bg-brand-blue text-white px-3 -rotate-1"
                style={{border:'4px solid #0A0A0A', boxShadow:'6px 6px 0px #0A0A0A'}}
              >
                KASYFA
              </span>
              <br />
              JAMAL
              <span className="text-brand-pink">.</span>
            </h1>
          </div>

          {/* Role badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-block bg-brand-pink text-white px-4 py-2 font-black text-lg nb-btn rotate-0">
              {dict.role}
            </span>
            <span className="font-mono-bold text-brand-text/40 text-sm uppercase tracking-widest">
              // Bogor, Indonesia
            </span>
          </div>

          {/* Tagline */}
          <p className="text-base text-brand-text/75 max-w-md font-semibold leading-relaxed border-l-4 border-brand-text pl-4">
            {dict.tagline}
          </p>

          {/* Social links */}
          <div className="flex gap-3 items-center">
            <a href="https://github.com/xillzyproject" target="_blank" rel="noopener noreferrer"
               className="w-11 h-11 bg-brand-text text-white flex items-center justify-center nb-btn hover:bg-brand-purple transition-colors"
               title="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://instagram.com/ell.ksyfa" target="_blank" rel="noopener noreferrer"
               className="w-11 h-11 bg-[#FBCFE8] flex items-center justify-center nb-btn hover:bg-brand-pink transition-colors"
               title="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/naufal-kasyfa-680932370" target="_blank" rel="noopener noreferrer"
               className="w-11 h-11 bg-[#BFDBFE] flex items-center justify-center nb-btn hover:bg-brand-blue transition-colors"
               title="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-black nb-btn text-base group">
              <Briefcase className="w-5 h-5" /> {dict.ctaProjects}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-text font-black nb-btn text-base">
              <Mail className="w-5 h-5" /> {dict.ctaContact}
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm">
            {/* Layered shadow blocks */}
            <div className="absolute inset-0 bg-brand-pink translate-x-6 translate-y-6" style={{border:'3px solid #0A0A0A'}} />
            <div className="absolute inset-0 bg-brand-yellow translate-x-3 translate-y-3" style={{border:'3px solid #0A0A0A'}} />

            <div
              className="relative aspect-[3/4] w-full overflow-hidden"
              style={{border:'4px solid #0A0A0A'}}
            >
              <img
                src="images/hero.webp"
                alt="M. Naufal Kasyfa Jamal"
                className="w-full h-full object-cover"
              />

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-yellow p-4" style={{borderTop:'3px solid #0A0A0A'}}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/hero2.webp"
                      alt="Profil"
                      className="w-10 h-10 object-cover"
                      style={{border:'2px solid #0A0A0A'}}
                    />
                    <div>
                      <p className="font-black text-brand-text leading-tight">@imxillzy</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-brand-mint rounded-full" style={{border:'1px solid #0A0A0A'}} />
                        <p className="text-xs font-black">Available</p>
                      </div>
                    </div>
                  </div>
                  <a href="#contact" className="px-4 py-1.5 bg-brand-text text-white text-xs font-black nb-btn">
                    Hire Me →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div className="ticker-wrap mt-16 -mx-6 md:-mx-10 lg:-mx-16">
        <div className="ticker-inner py-3">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center">
              {["Full Stack Dev", "Laravel", "React JS", "Next.js", "MySQL", "UI/UX", "Bogor", "Open to Work"].map((w, j) => (
                <span key={j} className="inline-flex items-center gap-4 px-6 text-sm font-black text-white uppercase tracking-widest">
                  <span className="text-brand-yellow">✦</span> {w}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
