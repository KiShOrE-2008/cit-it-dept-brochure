import React from 'react';
import { motion } from 'framer-motion';
import { academicToppers, computeTopperStats } from '../../data/academicToppers';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, Crown, Medal, Award } from 'lucide-react';

// Visual treatment for the podium places. Ranks 4-5 fall through to the compact row style.
const PODIUM = {
  1: {
    icon: Crown,
    ring: 'border-amber-500/50',
    glow: 'shadow-[0_0_35px_rgba(234,179,8,0.28)]',
    chip: 'bg-amber-500 text-slate-950',
    gpa: 'text-gradient-gold',
    badge: 'GOLD'
  },
  2: {
    icon: Medal,
    ring: 'border-slate-300/40',
    glow: 'shadow-[0_0_28px_rgba(203,213,225,0.18)]',
    chip: 'bg-slate-300 text-slate-950',
    gpa: 'text-slate-100',
    badge: 'SILVER'
  },
  3: {
    icon: Award,
    ring: 'border-orange-500/40',
    glow: 'shadow-[0_0_28px_rgba(249,115,22,0.18)]',
    chip: 'bg-orange-500 text-slate-950',
    gpa: 'text-orange-200',
    badge: 'BRONZE'
  }
};

const initialsOf = (name) => {
  const parts = name.trim().split(/\s+/);
  return parts.length > 1
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
};

const PodiumCard = ({ student, isActive, delay }) => {
  const style = PODIUM[student.rank];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={isActive ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ duration: 0.55, delay }}
    >
      <GlassCard
        variant={student.rank === 1 ? 'gold' : 'dark'}
        className={`p-4 border ${style.ring} ${style.glow}`}
      >
        <div className="flex items-center gap-3">
          {/* Rank chip + avatar */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center font-heading font-extrabold text-base text-white">
              {initialsOf(student.name)}
            </div>
            <span
              className={`absolute -top-2 -left-2 w-6 h-6 rounded-full ${style.chip} flex items-center justify-center text-[11px] font-black font-heading`}
            >
              {student.rank}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                {style.badge}
              </span>
            </div>
            <h4 className="text-sm md:text-base font-bold font-heading text-white leading-snug truncate">
              {student.name}
            </h4>
            <p className="text-[10px] font-mono text-slate-500">{student.regNo}</p>
          </div>

          <div className="text-right shrink-0">
            <div className={`text-xl md:text-2xl font-extrabold font-heading ${style.gpa}`}>
              {student.gpa.toFixed(2)}
            </div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">GPA</div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const CompactRow = ({ student, isActive, delay }) => (
  <motion.div
    initial={{ x: 16, opacity: 0 }}
    animate={isActive ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
    transition={{ duration: 0.45, delay }}
    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
  >
    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-[11px] font-bold font-mono shrink-0">
      {student.rank}
    </span>
    <div className="min-w-0 flex-1">
      <div className="text-xs font-semibold text-slate-200 truncate">{student.name}</div>
      <div className="text-[9px] font-mono text-slate-600">{student.regNo}</div>
    </div>
    <span className="text-sm font-extrabold font-heading text-cyan-300 shrink-0">
      {student.gpa.toFixed(2)}
    </span>
  </motion.div>
);

export const Scene04AcademicToppers = ({ isActive }) => {
  const stats = computeTopperStats();

  return (
    <div className="relative w-full h-full flex flex-col items-center p-4 md:p-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-5 space-y-2 z-10 shrink-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          SEMESTER RESULT ANALYSIS
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          ACADEMIC <span className="text-gradient-gold">TOPPERS</span>
        </h2>
        <p className="text-xs md:text-sm text-slate-400 font-medium">
          Top 5 performers per year &bull; Highest GPA{' '}
          <span className="text-amber-300 font-bold">{stats.highestGpa.toFixed(2)}</span> by{' '}
          <span className="text-white font-semibold">{stats.highestGpaName}</span>
        </p>
      </motion.div>

      {/* Three year panels */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-5">
        {academicToppers.map((yearGroup, yIdx) => (
          <motion.div
            key={yearGroup.year}
            initial={{ y: 30, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: yIdx * 0.15 }}
            className="flex flex-col gap-3"
          >
            {/* Year header */}
            <div className="flex items-baseline justify-between px-1 pb-1 border-b border-slate-800">
              <div>
                <h3 className="text-lg md:text-xl font-extrabold font-heading text-gradient-cyan">
                  {yearGroup.label}
                </h3>
                <p className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">
                  {yearGroup.tagline}
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-600">SEM {yearGroup.semester}</span>
            </div>

            {/* Podium: ranks 1-3 */}
            <div className="flex flex-col gap-2.5">
              {yearGroup.toppers
                .filter((s) => s.rank <= 3)
                .map((s) => (
                  <PodiumCard
                    key={s.regNo}
                    student={s}
                    isActive={isActive}
                    delay={yIdx * 0.15 + s.rank * 0.1}
                  />
                ))}
            </div>

            {/* Honour roll: ranks 4-5 */}
            <div className="flex flex-col gap-1.5">
              {yearGroup.toppers
                .filter((s) => s.rank > 3)
                .map((s) => (
                  <CompactRow
                    key={s.regNo}
                    student={s}
                    isActive={isActive}
                    delay={yIdx * 0.15 + s.rank * 0.08}
                  />
                ))}
            </div>

            {/* Honest denominator */}
            <p className="text-[9px] text-slate-600 text-center pt-0.5">
              Top 5 of {yearGroup.eligibleCount} students with complete results
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
