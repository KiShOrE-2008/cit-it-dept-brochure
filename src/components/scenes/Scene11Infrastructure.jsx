import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Laptop, Cpu, Cloud, ShieldCheck, Apple, Server } from 'lucide-react';

export const Scene11Infrastructure = ({ isActive }) => {
  const infraIcons = {
    Apple: Apple,
    Cpu: Cpu,
    Cloud: Cloud,
    ShieldCheck: ShieldCheck
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Background Lab Photo blur */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src={presentationData.heroImages.lab} alt="IT Lab" className="w-full h-full object-cover filter blur-sm" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-8 space-y-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Server className="w-4 h-4" />
          STATE OF THE ART FACILITIES
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          CENTERS OF <span className="text-gradient-cyan">EXCELLENCE (CoE)</span>
        </h2>
      </motion.div>

      {/* Grid of 4 CoE Hubs */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {presentationData.infrastructure.map((coe, idx) => {
          const IconComp = infraIcons[coe.icon] || Laptop;
          return (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="p-6 flex gap-5 hover:border-cyan-500/50 group h-full">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all shrink-0 h-max">
                  <IconComp className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                    {coe.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {coe.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Operational 24/7 for Student Projects
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
