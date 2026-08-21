import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { GlobeVisual } from '../ui/GlobeVisual';
import { Globe2, FileText, Users, Award, BookOpen } from 'lucide-react';

export const Scene09Conference = ({ isActive }) => {
  const conf = presentationData.conference;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mb-6 space-y-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Globe2 className="w-4 h-4" />
          GLOBAL RESEARCH & SCHOLARSHIP
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-white">
          INTERNATIONAL CONFERENCE <br />
          <span className="text-gradient-cyan">ON COMPUTING & IT (ICCIIT '25)</span>
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column - Globe Canvas Visual */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 h-[340px] relative rounded-2xl bg-slate-950/80 border border-cyan-500/30 overflow-hidden"
        >
          <GlobeVisual />
        </motion.div>

        {/* Right Column - Stats & Highlights */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 space-y-4"
        >
          {/* 4 Stat Badges */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl font-black text-cyan-400 font-heading">{conf.stats.papersSubmitted}</div>
              <div className="text-[11px] text-slate-400 font-semibold">Research Papers Submitted</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl font-black text-amber-400 font-heading">{conf.stats.papersAccepted}</div>
              <div className="text-[11px] text-slate-400 font-semibold">Scopus Indexed Accepted</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl font-black text-emerald-400 font-heading">{conf.stats.countries}</div>
              <div className="text-[11px] text-slate-400 font-semibold">Participating Nations</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl font-black text-purple-400 font-heading">{conf.stats.keynotes}</div>
              <div className="text-[11px] text-slate-400 font-semibold">International Keynotes</div>
            </div>
          </div>

          {/* Conference Bullet List */}
          <GlassCard className="p-5 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading border-b border-slate-800 pb-2">
              Conference Highlights & Student Participation
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              {conf.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
