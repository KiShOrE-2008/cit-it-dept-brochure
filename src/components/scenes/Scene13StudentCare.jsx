import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { HeartHandshake, UserCheck, Activity, Award, Lightbulb, ShieldCheck } from 'lucide-react';

export const Scene13StudentCare = ({ isActive }) => {
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
          <HeartHandshake className="w-4 h-4" />
          NURTURING YOUNG MINDS
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          PARENT-INSTITUTION <span className="text-gradient-cyan">PARTNERSHIP</span>
        </h2>
      </motion.div>

      {/* Grid of 4 Student Support Cards */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {presentationData.studentCare.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <GlassCard className="p-6 space-y-3 hover:border-cyan-500/50 group h-full">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-12">
                {item.desc}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
