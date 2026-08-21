import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { ChevronLeft, ChevronRight, Award, Zap, Code, Shield } from 'lucide-react';

export const Scene05Hackathons = ({ isActive }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const hackathons = presentationData.hackathonsList;

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % hackathons.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + hackathons.length) % hackathons.length);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-6 space-y-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Code className="w-4 h-4" />
          NATIONAL COMPETITIVE CODING
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          HACKATHONS & <span className="text-gradient-cyan">INNOVATION ARENA</span>
        </h2>
      </motion.div>

      {/* Main Interactive Slider */}
      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Visual Highlight */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.2)] group"
        >
          <img
            src={presentationData.heroImages.hackathon}
            alt="Hackathon Victory"
            className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase w-max mb-2">
              FEATURED NATIONAL CHAMPIONS
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">Smart India Hackathon 2025</h3>
            <p className="text-xs text-amber-300 font-semibold">1st Prize Winners • ₹1,00,000 Award</p>
          </div>
        </motion.div>

        {/* Right Slider Card */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard variant="cyan" className="p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                    EVENT 0{activeIdx + 1} / 0{hackathons.length}
                  </span>
                  <Award className="w-6 h-6 text-amber-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {hackathons[activeIdx].name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400">
                    Organized by: {hackathons[activeIdx].organizer}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 text-amber-300 text-sm font-bold flex items-center gap-3">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{hackathons[activeIdx].result}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {hackathons[activeIdx].highlight}
                </p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {hackathons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIdx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
