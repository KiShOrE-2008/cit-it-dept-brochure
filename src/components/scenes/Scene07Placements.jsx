import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { placementsData, getTopCompanies, formatPackage } from '../../data/placements';
import { getPlacementsData } from '../../services/dataService';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { CompanyLogo } from '../ui/CompanyLogo';
import { GlassCard } from '../ui/GlassCard';
import { Briefcase, Users, TrendingUp, Building2 } from 'lucide-react';

// This scene reports company-level outcomes only. Individual student names and
// register numbers are intentionally never rendered here.
export const Scene07Placements = ({ isActive }) => {
  const [records, setRecords] = useState(placementsData);

  useEffect(() => {
    let cancelled = false;
    getPlacementsData()
      .then((rows) => {
        if (!cancelled && Array.isArray(rows) && rows.length) setRecords(rows);
      })
      .catch(() => {
        /* dataService already falls back to the local dataset */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const topCompanies = getTopCompanies(5, records);

  const toNum = (pkg) =>
    typeof pkg === 'number' ? pkg : parseInt(String(pkg || '').replace(/[^0-9]/g, ''), 10) || 0;

  const totalPlaced = records.length;
  const totalRecruiters = new Set(records.map((r) => r.company).filter(Boolean)).size;
  const highest = records.reduce((max, r) => Math.max(max, toNum(r.package)), 0);

  const headlineStats = [
    { icon: Users, label: 'Students Placed', value: totalPlaced, suffix: '' },
    { icon: Building2, label: 'Recruiting Partners', value: totalRecruiters, suffix: '' },
    { icon: TrendingUp, label: 'Highest Package', value: highest, prefix: '₹', suffix: ' LPA' }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center p-4 md:p-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-5 space-y-2 z-10 shrink-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          CAREER OUTCOMES
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          PLACEMENTS &amp; <span className="text-gradient-emerald">RECRUITERS</span>
        </h2>
      </motion.div>

      {/* Headline stats */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-3 gap-3 md:gap-4 mb-5">
        {headlineStats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard variant="dark" className="p-4 text-center space-y-1">
              <s.icon className="w-4 h-4 mx-auto text-emerald-400" />
              <div className="text-2xl md:text-3xl text-white">
                <AnimatedCounter
                  end={s.value}
                  prefix={s.prefix || ''}
                  suffix={s.suffix}
                  isActive={isActive}
                />
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {s.label}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Top recruiters */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-3 z-10"
      >
        Top Recruiting Companies
      </motion.p>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {topCompanies.map((c, idx) => (
          <motion.div
            key={c.company}
            initial={{ y: 26, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 26, opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.4 + idx * 0.1 }}
          >
            <GlassCard
              variant={idx === 0 ? 'gold' : 'dark'}
              className={`h-full p-4 text-center space-y-2.5 ${
                idx === 0 ? 'border-amber-500/40' : 'hover:border-emerald-500/50'
              } group`}
            >
              <div className="flex justify-center">
                <CompanyLogo companyName={c.company} className="w-10 h-10" />
              </div>

              <h4 className="text-sm font-extrabold font-heading text-white truncate group-hover:text-emerald-300 transition-colors">
                {c.company}
              </h4>

              <div className="space-y-1 pt-1 border-t border-white/10">
                <div>
                  <div className="text-xl font-extrabold font-heading text-white">
                    <AnimatedCounter end={c.count} isActive={isActive} />
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    {c.count === 1 ? 'Student Placed' : 'Students Placed'}
                  </div>
                </div>

                <div className="pt-1">
                  <div
                    className={`text-base font-extrabold font-heading ${
                      idx === 0 ? 'text-gradient-gold' : 'text-emerald-300'
                    }`}
                  >
                    {c.highestLabel || formatPackage(c.highest)}
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    Highest Offer
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
