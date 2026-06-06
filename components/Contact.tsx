"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

interface ContactProps {
  dict: {
    title: string;
    accent: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
}

export default function Contact({ dict }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xjgdgejk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-14 py-12 md:py-20 relative">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono-bold text-xs uppercase tracking-[0.3em] text-brand-text/50">05</span>
          <div className="h-[2px] w-16 bg-brand-text/20" />
          <span className="section-stamp bg-[#FBCFE8] text-brand-text text-sm uppercase tracking-widest font-black">
            {dict.title}{" "}
            <span className="bg-brand-pink text-white px-2 inline-block nb-btn">{dict.accent}</span>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-80 space-y-6"
          >
            <div>
              <h2 className="font-display text-5xl md:text-6xl text-brand-text leading-none tracking-wide mb-3">
                LET'S WORK<br/>TOGETHER
                <span className="text-brand-pink">.</span>
              </h2>
              <p className="text-brand-text/70 font-semibold leading-relaxed text-sm">
                {dict.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-[#BFDBFE] p-4 nb-card" style={{ boxShadow: '5px 5px 0 #0A0A0A' }}>
                <div className="w-11 h-11 bg-brand-blue flex items-center justify-center shrink-0 nb-card" style={{ boxShadow: '2px 2px 0 #0A0A0A' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-brand-text/60">Email</p>
                  <a href="mailto:imxillzy@gmail.com" className="text-sm font-black text-brand-text hover:underline">
                    imxillzy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#FBCFE8] p-4 nb-card" style={{ boxShadow: '5px 5px 0 #0A0A0A' }}>
                <div className="w-11 h-11 bg-brand-pink flex items-center justify-center shrink-0 nb-card" style={{ boxShadow: '2px 2px 0 #0A0A0A' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-brand-text/60">Location</p>
                  <p className="text-sm font-black text-brand-text">Bogor, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-brand-text/50 mb-3">Find me on</p>
              <div className="flex gap-2">
                <a href="https://github.com/xillzyproject" target="_blank" rel="noopener noreferrer"
                   className="w-11 h-11 bg-brand-text text-white flex items-center justify-center nb-btn hover:bg-brand-purple transition-colors">
                  <GithubIcon />
                </a>
                <a href="https://instagram.com/ell.ksyfa" target="_blank" rel="noopener noreferrer"
                   className="w-11 h-11 bg-[#FBCFE8] flex items-center justify-center nb-btn hover:bg-brand-pink transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/naufal-kasyfa-680932370" target="_blank" rel="noopener noreferrer"
                   className="w-11 h-11 bg-[#BFDBFE] flex items-center justify-center nb-btn hover:bg-brand-blue transition-colors">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-yellow translate-x-4 translate-y-4" style={{ border: '3px solid #0A0A0A' }} />
              <div className="relative bg-white nb-card p-7 md:p-10 overflow-hidden">

                {status === "success" && (
                  <div className="absolute inset-0 z-20 bg-[#A7F3D0] flex flex-col items-center justify-center text-center p-8 nb-card">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                      className="w-20 h-20 bg-brand-mint flex items-center justify-center mb-5 nb-card">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-black text-brand-text mb-2">Pesan Terkirim!</h4>
                    <p className="text-brand-text/70 font-semibold text-sm">Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-black text-brand-text uppercase tracking-widest">
                      {dict.name}
                    </label>
                    <input
                      type="text" id="name" name="name"
                      placeholder={dict.namePlaceholder}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 nb-input font-semibold text-brand-text placeholder:text-brand-text/30 disabled:opacity-50"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-black text-brand-text uppercase tracking-widest">
                      {dict.email}
                    </label>
                    <input
                      type="email" id="email" name="email"
                      placeholder={dict.emailPlaceholder}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 nb-input font-semibold text-brand-text placeholder:text-brand-text/30 disabled:opacity-50"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-black text-brand-text uppercase tracking-widest">
                      {dict.message}
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      placeholder={dict.messagePlaceholder}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 nb-input font-semibold text-brand-text placeholder:text-brand-text/30 resize-none disabled:opacity-50"
                      required
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm font-black text-center bg-red-50 p-3 nb-card" style={{ borderColor: '#dc2626' }}>
                      Gagal mengirim pesan. Silakan coba lagi.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-text text-white font-black nb-btn text-base disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Mengirim...</>
                    ) : (
                      <><Send className="w-5 h-5" /> {dict.send}</>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
