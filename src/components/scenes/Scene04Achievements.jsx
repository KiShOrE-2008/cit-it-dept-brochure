import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { PhotoModal } from '../ui/PhotoModal';
import { Trophy, Award, Sparkles, ExternalLink, Flame } from 'lucide-react';

export const Scene04Achievements = ({ isActive }) => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const statsList = [
    { key: 'hackathons', ...presentationData.stats.hackathons, icon: Trophy, color: 'text-amber-400', border: 'border-amber-500/30' },
    { key: 'competitions', ...presentationData.stats.competitions, icon: Flame, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { key: 'awards', ...presentationData.stats.awards, icon: Award, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { key: 'students', ...presentationData.stats.students, icon: Sparkles, color: 'text-purple-400', border: 'border-purple-500/30' }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-8 space-y-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Trophy className="w-4 h-4" />
          STUDENT EXCELLENCE & LAURELS
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          DYNAMIC <span className="text-gradient-gold">ACHIEVEMENTS</span>
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full space-y-8">
        {/* Animated Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsList.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <GlassCard className={`text-center space-y-2 ${stat.border}`}>
                  <IconComp className={`w-8 h-8 mx-auto ${stat.color}`} />
                  <div className={`text-4xl md:text-5xl font-black font-heading ${stat.color}`}>
                    <AnimatedCounter
                      end={stat.count}
                      suffix={stat.suffix}
                      isActive={isActive}
                    />
                  </div>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Spotlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {presentationData.achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
            >
              <GlassCard
                className="flex items-center gap-4 cursor-pointer hover:border-amber-500/40 p-4 group"
              >
                <div 
                  onClick={() => setSelectedAchievement(item)}
                  className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-800"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                    {item.badge}
                  </span>
                </div>

                <div className="flex-1 space-y-1" onClick={() => setSelectedAchievement(item)}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-cyan-400">{item.category}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading group-hover:text-amber-300 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-amber-400">{item.prize}</p>
                  <p className="text-xs text-slate-400 line-clamp-1">{item.team}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedAchievement && (
        <PhotoModal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          image={selectedAchievement.image}
          title={selectedAchievement.title}
          subtitle={`${selectedAchievement.badge} • ${selectedAchievement.prize}`}
          details={`${selectedAchievement.desc} — Achieved by ${selectedAchievement.team}.`}
        />
      )}
    </div>
  );
};
