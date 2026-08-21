import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { getAssetImageUrl } from '../../services/dataService';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const Scene01Welcome = ({ isActive, onStartClick }) => {
  const logoImage = getAssetImageUrl('cit_logo.png', presentationData.heroImages.logo);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] animate-pulse-glow" />

      {/* College Logo with glowing pulse ring */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-6 group cursor-pointer"
      >
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-amber-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />
        <div className="relative w-36 h-36 md:w-44 md:h-44 p-3 rounded-3xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] flex items-center justify-center">
          <img
            src={logoImage}
            onError={(e) => { e.currentTarget.src = presentationData.heroImages.logo; }}
            alt="CIT IT Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
        </div>
      </motion.div>

      {/* Main Titles */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl space-y-4 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-lg">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
          WELCOME TO THE PARENTS' MEETING 2026
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight">
          DEPARTMENT OF <br />
          <span className="text-gradient-cyan">INFORMATION TECHNOLOGY</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
          {presentationData.collegeName}
        </p>

        <p className="text-sm md:text-base text-cyan-400 font-semibold tracking-wide">
          {presentationData.collegeAccreditation}
        </p>
      </motion.div>

      {/* Interactive Start Presentation Call to Action */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 z-10 flex items-center gap-4"
      >
        <button
          onClick={onStartClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-base tracking-wide transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] hover:scale-105 active:scale-95"
        >
          <span>BEGIN CINEMATIC JOURNEY</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};
