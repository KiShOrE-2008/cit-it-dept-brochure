import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Globe, DollarSign, Briefcase, CheckCircle2, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

export const Scene08Internships = ({ isActive }) => {
  const data = presentationData.internships;

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
          <Globe className="w-4 h-4" />
          REAL WORLD EXPERIENCE
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          INTERNSHIPS & <span className="text-gradient-cyan">INDUSTRY EXPOSURE</span>
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Stipend & PPO Highlights */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-4"
        >
          <GlassCard variant="gold" className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-200 font-heading uppercase">HIGHEST INTERNSHIP STIPEND</h4>
                <p className="text-3xl font-black text-amber-300 font-heading">{data.stipendHighest}</p>
              </div>
            </div>
            <p className="text-xs text-amber-200/80">Paid full-semester internships at premier technology R&D centers.</p>
          </GlassCard>

          <GlassCard className="p-6 space-y-3 border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-cyan-200 font-heading uppercase">AVERAGE INTERNSHIP STIPEND</h4>
                <p className="text-2xl font-bold text-cyan-300 font-heading">{data.stipendAvg}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {data.partners.map((partner, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-semibold text-slate-300 border border-slate-800">
                  {partner}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Feature Checklist */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <GlassCard className="p-8 space-y-5">
            <h3 className="text-xl font-bold font-heading text-white border-b border-slate-800 pb-3">
              Key Industry Exposure Initiatives
            </h3>

            <div className="space-y-4">
              {data.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
