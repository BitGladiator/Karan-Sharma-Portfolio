"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { Spotlight } from "../components/ui/Spotlight";

// Load globe client-side only (WebGL / no SSR)
const GlobeComponent = dynamic(() => import("../components/GlobeComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full min-h-[350px]">
      <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  ),
});

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_j2gbrgg",
        "template_vki9hhs",
        formRef.current!,
        "I_-7yXb3DFYaEd6Fq"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent!");
          formRef.current?.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen lg:h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] px-4 py-8 pt-24 md:pt-28 flex flex-col justify-center overflow-y-auto lg:overflow-hidden relative">
      
      
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(0, 230, 255, 0.15)" />


      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.01)_0,transparent_60%)] pointer-events-none" />

    
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative px-2">

      
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent leading-tight">
              Let&apos;s Connect
            </h1>
            <p className="text-white/50 mt-2 text-sm md:text-base max-w-md">
              Based on Earth — open to opportunities across the globe.
            </p>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
          
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-indigo-500/10 blur-3xl pointer-events-none" />

           
            <div
              className="relative z-10"
              style={{ width: "min(460px, 58vh)", height: "min(460px, 58vh)" }}
            >
              <GlobeComponent />
            </div>

           
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-white/60 text-[10px] md:text-xs whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available worldwide · Remote friendly
            </motion.div>
          </motion.div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-4 justify-center"
        >
        
          <div className="relative border border-white/10 rounded-2xl p-4 md:p-5 bg-white/[0.02] backdrop-blur-md space-y-3 shadow-[0_0_40px_#00FFFF02]">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/2 to-indigo-500/5 blur-md opacity-20 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
              <div className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <MdEmail className="text-base" />
                </span>
                <a href="mailto:ks10204080@gmail.com" className="hover:text-cyan-400 transition-colors duration-300 text-xs md:text-sm text-white/80">
                  ks10204080@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <MdPhone className="text-base" />
                </span>
                <a href="tel:+916005925938" className="hover:text-cyan-400 transition-colors duration-300 text-xs md:text-sm text-white/80">
                  +91 6005925938
                </a>
              </div>
            </div>


            <div className="flex items-center gap-4 pt-3 border-t border-white/10 relative z-10">
              <span className="text-xs text-white/40">Connect on social:</span>
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/bitgladiator", icon: <FaGithub />, color: "hover:text-white" },
                  { href: "https://twitter.com/KaranSharma1020", icon: <FaTwitter />, color: "hover:text-blue-400" },
                  { href: "https://linkedin.com/in/KaranCodeMind", icon: <FaLinkedin />, color: "hover:text-blue-500" },
                ].map(({ href, icon, color }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className={`text-white/50 ${color} transition-all duration-300 hover:scale-125 text-lg`}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        
          <div className="relative border border-white/10 rounded-2xl p-5 md:p-6 bg-white/[0.03] backdrop-blur-md shadow-[0_0_50px_#00FFFF06]">
         
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-indigo-500/10 blur-lg opacity-40 pointer-events-none" />

            <h3 className="text-lg font-bold text-white mb-4 relative z-10">
              Send Me a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300 text-xs md:text-sm"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300 text-xs md:text-sm"
                />
              </div>
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Your message..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300 text-xs md:text-sm resize-none"
              />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-[0_0_20px_#00FFFF44] disabled:opacity-60 disabled:cursor-not-allowed text-xs md:text-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : "Send Message →"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
