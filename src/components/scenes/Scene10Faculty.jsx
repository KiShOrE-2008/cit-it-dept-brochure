import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, Award, BookOpen, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Scene10Faculty = ({ isActive }) => {
  const fac = presentationData.faculty;

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
          <GraduationCap className="w-4 h-4" />
          ACADEMIC LEADERSHIP
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          FACULTY <span className="text-gradient-cyan">EXCELLENCE & RESEARCH</span>
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-6xl w-full space-y-6">
        {/* Top 4 Stat Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fac.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-4 text-center space-y-1 border-cyan-500/30">
                <div className="text-2xl md:text-3xl font-black text-cyan-300 font-heading">{stat.value}</div>
                <div className="text-[11px] font-bold text-slate-300 uppercase">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Faculty Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fac.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            >
              <GlassCard className="p-5 flex items-start gap-4 hover:border-cyan-500/50 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
