import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Building2,
  Trophy,
  FileText,
  Award,
  Laptop
} from 'lucide-react';

const ICONS = {
  Users,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Building2,
  Trophy,
  FileText,
  Award,
  Laptop
};

export const Scene08DepartmentGlance = ({ isActive }) => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-10 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

    {/* Title */}
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mb-6 space-y-2 z-10"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
        <LayoutDashboard className="w-4 h-4" />
        30-SECOND DEPARTMENT SUMMARY
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
        DEPARTMENT AT A <span className="text-gradient-cyan">GLANCE</span>
      </h2>
    </motion.div>

    {/* Metric tiles */}
    <div className="relative z-10 max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {presentationData.departmentGlance.map((item, idx) => {
        const IconComp = ICONS[item.icon] || LayoutDashboard;
        return (
          <motion.div
            key={item.label}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
          >
            <GlassCard className="h-full p-4 text-center space-y-2 hover:border-cyan-500/50 group">
              <div className="w-9 h-9 mx-auto rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                <IconComp className="w-4.5 h-4.5" />
              </div>

              <div className="text-xl md:text-2xl font-extrabold text-white font-heading group-hover:text-cyan-300 transition-colors">
                {item.text ? (
                  item.value
                ) : (
                  <AnimatedCounter
                    end={item.numeric}
                    prefix={item.prefix || ''}
                    suffix={item.suffix || ''}
                    decimals={item.decimals || 0}
                    isActive={isActive}
                  />
                )}
              </div>

              <div className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-snug">
                {item.label}
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  </div>
);
