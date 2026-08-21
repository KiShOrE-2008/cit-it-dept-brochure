import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Cpu, Shield, Globe, Terminal, Database, Cloud, Code, Layers, Zap } from 'lucide-react';

export const Scene02CollegeDept = ({ isActive }) => {
  const domains = [
    "PROGRAMMING",
    "ALGORITHMS",
    "SOFTWARE ENGINEERING",
    "COMPUTER NETWORKS",
    "DATABASES",
    "ARTIFICIAL INTELLIGENCE",
    "CYBER SECURITY",
    "CLOUD COMPUTING",
    "WEB TECHNOLOGY",
    "COMPUTER GRAPHICS",
    "ROBOTICS"
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-y-auto overflow-x-hidden scroll-smooth">
      {/* Background Campus Photo with Slow Parallax Zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={isActive ? { scale: 1.08 } : { scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={presentationData.heroImages.campus}
          alt="CIT Campus"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/90" />
      </motion.div>

      {/* Z-10 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-10">
        
        {/* 1. OPENING HEADER */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-widest">
            <Zap className="w-4 h-4 text-cyan-400" />
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </div>

          <h1 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tight leading-none">
            INFORMATION <br />
            <span className="text-gradient-cyan">TECHNOLOGY</span>
          </h1>

          <p className="text-lg md:text-xl font-bold text-slate-300 font-heading tracking-wide">
            B.Tech – Information Technology
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-300">
              4-Year Undergraduate Programme
            </span>
            <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-extrabold text-amber-300">
              180 Intake
            </span>
          </div>
        </motion.div>

        {/* 2. MAIN DEPARTMENT DESCRIPTION (BALANCED 2-COLUMN LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT SIDE — LARGE TYPOGRAPHY */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-1"
          >
            <div className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight leading-none uppercase">
              ENGINEERING
            </div>
            <div className="text-3xl md:text-5xl font-black font-heading text-gradient-cyan tracking-tight leading-none uppercase">
              TECHNOLOGY.
            </div>
            <div className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight leading-none uppercase">
              SOLVING
            </div>
            <div className="text-3xl md:text-5xl font-black font-heading text-amber-300 tracking-tight leading-none uppercase">
              REAL-WORLD
            </div>
            <div className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight leading-none uppercase">
              PROBLEMS.
            </div>
          </motion.div>

          {/* RIGHT SIDE — CONCISE OFFICIAL BROCHURE TEXT */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <GlassCard variant="cyan" className="p-8 space-y-4">
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium">
                Information Technology focuses on computation, algorithms, programming languages, software engineering, computer hardware, computer networks and problem-solving skills.
              </p>
              <div className="h-[1px] bg-cyan-500/30 w-full" />
              <p className="text-sm md:text-base text-cyan-300 font-semibold leading-relaxed">
                The program prepares students to design and develop technology-driven solutions for real-world business, scientific and societal challenges.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* 3. IT TECHNOLOGY DOMAINS DYNAMIC VISUALIZATION */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 pt-4"
        >
          <div className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest">
            CORE IT TECHNOLOGY DOMAINS TAUGHT
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
            {/* Center IT Core Hub */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)] border-2 border-cyan-300 mb-6 animate-pulse-glow">
              <span className="text-3xl font-black font-heading text-slate-950">IT</span>
            </div>

            {/* Orbiting / Surrounding Domain Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl relative z-10">
              {domains.map((domain, idx) => (
                <motion.span
                  key={domain}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.05 }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-extrabold font-heading text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 transition-all shadow-md"
                >
                  {domain}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
