import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { Marquee } from '../ui/Marquee';
import { Briefcase, TrendingUp, Building, Award, CheckCircle } from 'lucide-react';

export const Scene07Placements = ({ isActive }) => {
  const p = presentationData.placements;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-6 space-y-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          CAREER & CAMPUS RECRUITMENT
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          PLACEMENT <span className="text-gradient-emerald">EXCELLENCE</span>
        </h2>
      </motion.div>

      {/* Main Placement Metrics & Sector breakdown */}
      <div className="relative z-10 max-w-6xl w-full space-y-6">
        {/* Top 3 High-Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard variant="cyan" className="p-6 text-center space-y-2">
              <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">PLACEMENT SUCCESS</div>
              <div className="text-5xl font-black text-cyan-300 font-heading">
                <AnimatedCounter end={95.4} decimals={1} suffix="%" isActive={isActive} />
              </div>
              <p className="text-xs text-slate-300 font-semibold">Consistent 95%+ Placed Batch Record</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard variant="gold" className="p-6 text-center space-y-2">
              <div className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">HIGHEST CTC OFFERED</div>
              <div className="text-5xl font-black text-amber-300 font-heading">
                ₹<AnimatedCounter end={52} suffix=" LPA" isActive={isActive} />
              </div>
              <p className="text-xs text-amber-200/80 font-semibold">Super Dream Product Companies</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-6 text-center space-y-2 border-emerald-500/30">
              <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">AVERAGE CTC BATCH</div>
              <div className="text-5xl font-black text-emerald-300 font-heading">
                ₹<AnimatedCounter end={8.5} decimals={1} suffix=" LPA" isActive={isActive} />
              </div>
              <p className="text-xs text-slate-300 font-semibold">High Starting Salary Benchmarks</p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Corporate Recruiter Marquee Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2"
        >
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-widest text-center">
            TOP RECRUITING CORPORATE PARTNERS
          </div>
          <Marquee items={p.recruiters} speed={28} />
        </motion.div>
      </div>
    </div>
  );
};
