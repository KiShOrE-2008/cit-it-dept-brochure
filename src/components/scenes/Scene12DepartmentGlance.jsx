import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { LayoutDashboard, Users, GraduationCap, Briefcase, TrendingUp, Trophy, FileText, Award, Laptop } from 'lucide-react';

export const Scene12DepartmentGlance = ({ isActive }) => {
  const iconMap = {
    Users,
    GraduationCap,
    Briefcase,
    TrendingUp,
    Trophy,
    FileText,
    Award,
    Laptop
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
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

      {/* 8 Metric Tile Dashboard Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {presentationData.departmentGlance.map((item, idx) => {
          const IconComp = iconMap[item.icon] || LayoutDashboard;
          return (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard className="p-5 text-center space-y-2 hover:border-cyan-500/50 group">
                <div className="w-10 h-10 mx-auto rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {item.label}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
