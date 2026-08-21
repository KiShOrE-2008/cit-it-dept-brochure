import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getHighestPackageData } from '../../data/placements';
import { AnimatedCounter } from './AnimatedCounter';
import { GlassCard } from './GlassCard';
import { Award, Sparkles, Crown, Building2 } from 'lucide-react';

export const HighestPackageSpotlight = ({ isActive = true }) => {
  const data = useMemo(() => getHighestPackageData(), []);

  return (
    <motion.div
      initial={{ scale: 0.96 }}
      animate={isActive ? { scale: 1.02 } : { scale: 0.96 }}
      transition={{ duration: 12, ease: "linear" }}
      className="relative max-w-5xl mx-auto w-full my-6 p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-amber-500/50 shadow-[0_0_80px_rgba(234,179,8,0.2)] overflow-hidden text-center group"
    >
      {/* Background ambient gold aura spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[160px] pointer-events-none animate-pulse-glow" />

      {/* Background large decorative text watermark */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none font-black text-[140px] font-heading text-amber-300 tracking-widest uppercase">
        {data.company}
      </div>

      <div className="relative z-10 space-y-6">
        {/* Step 1: HIGHEST PACKAGE Tag */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-widest border border-amber-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
        >
          <Crown className="w-4 h-4 text-amber-400 animate-bounce" />
          HIGHEST PLACEMENT SPOTLIGHT
        </motion.div>

        {/* Step 2: Hero Number ₹58 LPA */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1"
        >
          <div className="text-6xl md:text-8xl font-black font-heading text-amber-300 tracking-tight drop-shadow-[0_0_35px_rgba(234,179,8,0.5)]">
            ₹<AnimatedCounter end={data.numericVal} suffix=" LPA" duration={2200} isActive={isActive} />
          </div>
        </motion.div>

        {/* Step 3: MICROSOFT */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-1"
        >
          <h2 className="text-3xl md:text-5xl font-black font-heading tracking-wider text-white">
            {data.company}
          </h2>
          <p className="text-xs md:text-sm font-extrabold text-amber-400/90 tracking-widest uppercase font-heading">
            SUPER DREAM SOFTWARE ENGINEERING OFFERS
          </p>
        </motion.div>

        {/* Step 4: 3 STUDENTS PLACED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block px-4 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-cyan-400 text-xs font-bold font-heading uppercase tracking-widest"
        >
          {data.studentCount} STUDENTS PLACED AT {data.packageValue}
        </motion.div>

        {/* Step 5: Reveal Student Cards Sequentially */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 max-w-4xl mx-auto">
          {data.students.map((student, idx) => (
            <motion.div
              key={student.regNo}
              initial={{ y: 35, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: 35, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + idx * 0.2 }}
            >
              <GlassCard variant="gold" className="p-6 text-center space-y-3 hover:border-amber-400 transition-all group/card">
                {/* Avatar Initial Circle Placeholder */}
                <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400/30 to-cyan-500/30 border-2 border-amber-400/60 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.3)] group-hover/card:scale-110 transition-transform">
                  <span className="text-2xl font-black font-heading text-amber-300">
                    {student.initials}
                  </span>
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-950 border border-amber-400 text-amber-400">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Student Name */}
                <div className="space-y-0.5">
                  <h4 className="text-base font-extrabold font-heading text-white group-hover/card:text-amber-300 transition-colors">
                    {student.name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-slate-400">{student.regNo}</p>
                </div>

                {/* Company & Package */}
                <div className="pt-2 border-t border-amber-500/20 text-xs font-bold text-amber-300 flex items-center justify-center gap-1">
                  <span>{student.company}</span>
                  <span>•</span>
                  <span>{student.package}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
