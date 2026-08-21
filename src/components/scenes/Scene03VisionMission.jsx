import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Compass, Target, Quote } from 'lucide-react';

export const Scene03VisionMission = ({ isActive }) => {
  const { quote, mission } = presentationData.vision;

  return (
    <div className="relative w-full h-full flex flex-col items-center p-4 md:p-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-5 space-y-2 z-10 shrink-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          WHAT WE STAND FOR
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          VISION &amp; <span className="text-gradient-cyan">MISSION</span>
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Vision */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <GlassCard variant="cyan" className="h-full p-6 flex flex-col justify-center relative">
            <Quote className="absolute top-4 right-4 w-10 h-10 text-cyan-500/15" />

            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Compass className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold font-heading text-gradient-cyan">
                OUR VISION
              </h3>
            </div>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-medium">
              {quote}
            </p>

            <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </GlassCard>
        </motion.div>

        {/* Mission */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: -12, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 px-1"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Target className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold font-heading text-gradient-gold">
              OUR MISSION
            </h3>
          </motion.div>

          {mission.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ x: 24, opacity: 0 }}
              animate={isActive ? { x: 0, opacity: 1 } : { x: 24, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="group flex gap-3 items-start p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <span className="shrink-0 w-8 h-8 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-400 font-heading font-black text-xs flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                {item.id}
              </span>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium pt-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
