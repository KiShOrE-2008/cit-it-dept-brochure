import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Calendar, CheckCircle, Flame, MapPin, Radio, Users } from 'lucide-react';

export const Scene06EventsTimeline = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-8 space-y-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-4 h-4" />
          ACADEMIC CALENDAR & ACTIVITY
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          DEPARTMENT <span className="text-gradient-cyan">EVENTS & TIMELINE</span>
        </h2>
      </motion.div>

      {/* Horizontal / Vertical Timeline Flow */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Timeline connector line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/10 via-cyan-500/50 to-blue-500/10 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {presentationData.eventsTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: idx % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: idx % 2 === 0 ? -30 : 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              <GlassCard className="h-full flex flex-col justify-between p-5 hover:border-cyan-500/50 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                      {item.quarter}
                    </span>
                    <span className="text-xs font-extrabold text-amber-400 font-heading">{item.year}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-semibold text-cyan-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Successfully Organized
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
