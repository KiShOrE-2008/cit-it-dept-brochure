import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Compass, Target, Lightbulb, Shield, Users, Cpu, Rocket } from 'lucide-react';

export const Scene03VisionMission = ({ isActive }) => {
  const pillarIcons = [Lightbulb, Cpu, Users, Rocket, Shield];

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
          <Compass className="w-4 h-4" />
          CORE PHILOSOPHY
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          VISION & <span className="text-gradient-cyan">MISSION</span>
        </h2>
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Vision Banner */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard variant="cyan" className="p-8 text-center relative">
            <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <Target className="w-4 h-4" />
              DEPARTMENT VISION STATEMENT
            </div>
            <p className="text-xl md:text-2xl font-semibold text-slate-100 italic leading-relaxed font-heading max-w-4xl mx-auto">
              "{presentationData.vision.quote}"
            </p>
          </GlassCard>
        </motion.div>

        {/* Mission Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {presentationData.vision.pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx % pillarIcons.length];
            return (
              <motion.div
                key={pillar.id}
                initial={{ y: 30, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col justify-between hover:border-cyan-500/50 p-5 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                        {pillar.id}
                      </span>
                      <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h4 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors leading-snug">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
