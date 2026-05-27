"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { Spotlight } from "../components/ui/Spotlight";

/* ─────────────────────────────────────────────
   Animated SVG Globe Loader
───────────────────────────────────────────── */
function GlobeLoader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 select-none">
      <div className="relative" style={{ width: "min(380px, 45vw)", height: "min(380px, 45vw)", minWidth: 240, minHeight: 240 }}>
        {/* Glow pulse */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,210,255,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* SVG wireframe globe */}
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gg2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
            </radialGradient>
            <style>{`
              @keyframes da  { to { stroke-dashoffset: -60; } }
              @keyframes dar { to { stroke-dashoffset:  60; } }
              @keyframes fp  { 0%,100%{opacity:0.2} 50%{opacity:0.9} }
              .a1{animation:da  3s linear infinite}
              .a2{animation:dar 4s linear infinite}
              .a3{animation:da  5.5s linear infinite}
              .pd{animation:fp  2s ease-in-out infinite}
            `}</style>
          </defs>

          <circle cx="100" cy="100" r="82" fill="url(#gg2)" />
          <circle cx="100" cy="100" r="82" stroke="#00d2ff" strokeOpacity="0.2" strokeWidth="1" />

          {[30, 55, 80, 105, 130, 155].map((cy, i) => {
            const dy = cy - 100;
            const rx = Math.sqrt(Math.max(0, 82 * 82 - dy * dy));
            return <ellipse key={i} cx="100" cy={cy} rx={rx} ry={rx * 0.28}
              stroke="#00d2ff" strokeOpacity={i === 2 || i === 3 ? "0.25" : "0.09"} strokeWidth="0.8" fill="none" />;
          })}
          {[0, 40, 80, 120].map((angle, i) => (
            <ellipse key={i} cx="100" cy="100" rx="82"
              ry={82 * Math.abs(Math.cos((angle * Math.PI) / 180)) || 5}
              stroke="#00d2ff" strokeOpacity="0.09" strokeWidth="0.8"
              fill="none" transform={`rotate(${angle} 100 100)`} />
          ))}

          <path d="M 100 18 A 82 82 0 0 1 165 145" stroke="#00d2ff" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="20 10" className="a1" />
          <path d="M 100 182 A 82 82 0 0 1 35 55"  stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="15 8" className="a2" />
          <path d="M 18 100 A 82 82 0 0 1 145 35"  stroke="#38bdf8" strokeOpacity="0.3"  strokeWidth="1"   strokeDasharray="10 6" className="a3" />

          {[
            { cx:100,cy:100,r:3.5,c:"#00d2ff",d:"0s" },
            { cx:148,cy:72, r:2.5,c:"#22d3ee",d:"0.4s" },
            { cx:58, cy:62, r:2.5,c:"#38bdf8",d:"0.8s" },
            { cx:138,cy:134,r:2,  c:"#7dd3fc",d:"1.2s" },
            { cx:54, cy:128,r:2,  c:"#22d3ee",d:"0.6s" },
          ].map((d,i)=>(
            <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.c} className="pd" style={{animationDelay:d.d}} />
          ))}

          <line x1="93" y1="100" x2="107" y2="100" stroke="#00d2ff" strokeOpacity="0.5" strokeWidth="0.8" />
          <line x1="100" y1="93"  x2="100" y2="107" stroke="#00d2ff" strokeOpacity="0.5" strokeWidth="0.8" />
        </svg>

        {/* Counter-rotating dashed rings */}
        <motion.div className="absolute inset-[-12px] rounded-full border border-dashed border-cyan-500/20"
          animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute inset-[-24px] rounded-full border border-dashed border-cyan-400/10"
          animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
      </div>

      {/* Loading indicator */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1.5">
          {[0,1,2].map(i=>(
            <motion.div key={i} className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{opacity:[0.2,1,0.2],scale:[0.8,1.1,0.8]}}
              transition={{duration:1.2,repeat:Infinity,delay:i*0.2,ease:"easeInOut"}} />
          ))}
        </div>
        <p className="text-cyan-400/40 text-xs tracking-[0.2em] uppercase">Rendering Globe</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Dynamic Globe
───────────────────────────────────────────── */
const GlobeComponent = dynamic(() => import("../components/GlobeComponent"), {
  ssr: false,
  loading: () => <GlobeLoader />,
});

/* ─────────────────────────────────────────────
   Socials
───────────────────────────────────────────── */
const socials = [
  { href: "https://github.com/bitgladiator",       Icon: FaGithub,   label: "GitHub",   hover: "hover:text-white hover:border-white/40" },
  { href: "https://twitter.com/KaranSharma1020",   Icon: FaTwitter,  label: "Twitter",  hover: "hover:text-sky-400 hover:border-sky-400/40" },
  { href: "https://linkedin.com/in/KaranCodeMind", Icon: FaLinkedin, label: "LinkedIn", hover: "hover:text-blue-400 hover:border-blue-400/40" },
];

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_j2gbrgg", "template_vki9hhs", formRef.current!, "I_-7yXb3DFYaEd6Fq")
      .then(
        () => { setLoading(false); setSent(true); formRef.current?.reset(); setTimeout(() => setSent(false), 4000); },
        (err) => { setLoading(false); alert("Failed to send. Please try again."); console.error(err); }
      );
  };

  return (
    /* Outer wrapper: exactly one screen, no scroll */
    <div className="h-screen overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(0,210,255,0.13)" />

      {/* Ambient glows — cyan + blue, zero purple */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-cyan-500 opacity-[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-blue-600 opacity-[0.06] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400 opacity-[0.03] rounded-full blur-[80px]" />
      </div>

      {/*
        Two-column layout.
        - Navbar is ~64px tall (fixed), so we offset with pt-16.
        - The remaining height is split between left (globe side) and right (form side).
        - On mobile: stacks vertically with overflow-y-auto inside, but on lg: strict two columns.
      */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row pt-16">

        {/* ─── LEFT COLUMN ─── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-8 md:px-12 lg:px-14 gap-6 flex-shrink-0 py-6 lg:py-0"
        >
          {/* Label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                Let&apos;s
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
                Connect
              </span>
            </h1>
            <p className="text-white/40 mt-3 text-sm leading-relaxed max-w-sm">
              Based in Jammu, India — open to remote roles, freelance projects, and global collaborations.
            </p>
          </div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.12, ease: "easeOut" }}
            className="relative w-full flex justify-center lg:justify-start"
          >
            {/* Glow behind globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-400/8 blur-[90px] pointer-events-none" />
            <div
              className="relative z-10"
              style={{ width: "min(380px, 44vw)", height: "min(380px, 44vw)", minWidth: 240, minHeight: 240 }}
            >
              <GlobeComponent />
            </div>
          </motion.div>

          {/* Contact info chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-3 w-full"
          >
            {[
              { Icon: HiLocationMarker, value: "Jammu, J&K" },
              { Icon: MdEmail,          value: "ks10204080@gmail.com", href: "mailto:ks10204080@gmail.com" },
              { Icon: MdPhone,          value: "+91 6005925938",        href: "tel:+916005925938" },
            ].map(({ Icon, value, href }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
              >
                <Icon className="text-cyan-400 text-sm flex-shrink-0" />
                {href ? (
                  <a href={href} className="text-white/60 text-sm hover:text-cyan-300 transition-colors">{value}</a>
                ) : (
                  <span className="text-white/60 text-sm">{value}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── RIGHT COLUMN ─── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-14 gap-5 py-6 lg:py-0"
        >
          {/* Form card */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden">
            {/* Shimmer top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            {/* Shimmer bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="p-7 md:p-8">
              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                <p className="text-white/35 text-sm mt-1">I&apos;ll get back to you within 24 hours.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { type: "text",  name: "user_name",  placeholder: "Your Name" },
                    { type: "email", name: "user_email", placeholder: "your@email.com" },
                  ].map((f) => (
                    <input
                      key={f.name}
                      type={f.type}
                      name={f.name}
                      required
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(0,210,255,0.1)] transition-all duration-300"
                    />
                  ))}
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project, idea, or just say hi…"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(0,210,255,0.1)] transition-all duration-300 resize-none"
                />

                {/* Send button */}
                <motion.button
                  type="submit"
                  disabled={loading || sent}
                  whileHover={{ scale: 1.01, boxShadow: "0 0 32px rgba(6,182,212,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: sent ? "linear-gradient(135deg,#0891b2,#0e7490)" : "linear-gradient(135deg,#06b6d4,#0284c7)" }}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span key="s" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
                        className="flex items-center justify-center gap-2 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </motion.span>
                    ) : loading ? (
                      <motion.span key="l" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
                        className="flex items-center justify-center gap-2 text-white">
                        <motion.span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{rotate:360}} transition={{duration:0.8,repeat:Infinity,ease:"linear"}} />
                        Sending…
                      </motion.span>
                    ) : (
                      <motion.span key="i" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
                        className="flex items-center justify-center gap-2 text-white">
                        Send Message
                        <HiPaperAirplane className="w-4 h-4 rotate-90" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </div>

          {/* Socials row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex items-center justify-between"
          >
            <span className="text-white/25 text-xs uppercase tracking-[0.2em]">Find me on</span>
            <div className="flex gap-3">
              {socials.map(({ href, Icon, label, hover }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.18 }}
                  className={`w-10 h-10 rounded-xl border border-white/[0.09] bg-white/[0.04] flex items-center justify-center text-white/40 text-lg ${hover} transition-all duration-300`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
