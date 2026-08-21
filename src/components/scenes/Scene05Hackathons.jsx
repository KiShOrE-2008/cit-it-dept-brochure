import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievementsData } from '../../data/achievements';
import { presentationData } from '../../data/presentationData';
import { resolveHackathonFeatures } from '../../data/hackathonFeatures';
import { getAchievementsData, getAssetImageUrl } from '../../services/dataService';
import { GlassCard } from '../ui/GlassCard';
import { ChevronLeft, ChevronRight, Code, Trophy, MapPin, Users, Calendar } from 'lucide-react';

const ACCENT = {
  amber: { text: 'text-amber-300', border: 'border-amber-500/40', chip: 'bg-amber-500 text-slate-950' },
  cyan: { text: 'text-cyan-300', border: 'border-cyan-500/40', chip: 'bg-cyan-500 text-slate-950' },
  emerald: { text: 'text-emerald-300', border: 'border-emerald-500/40', chip: 'bg-emerald-500 text-slate-950' },
  purple: { text: 'text-purple-300', border: 'border-purple-500/40', chip: 'bg-purple-500 text-slate-950' }
};

export const Scene05Hackathons = ({ isActive }) => {
  const [achievements, setAchievements] = useState(achievementsData);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getAchievementsData()
      .then((rows) => {
        if (!cancelled && Array.isArray(rows) && rows.length) setAchievements(rows);
      })
      .catch(() => {
        /* dataService already falls back to the local dataset */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const features = resolveHackathonFeatures(achievements);

  // Rotate through the featured photos while the scene is on screen.
  useEffect(() => {
    if (!isActive || features.length < 2) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isActive, features.length]);

  if (!features.length) return null;

  const safeIdx = activeIdx % features.length;
  const feature = features[safeIdx];
  const { row } = feature;
  const accent = ACCENT[feature.accent] || ACCENT.cyan;

  const imageUrl = getAssetImageUrl(feature.imageKey, presentationData.heroImages.hackathon);

  const go = (dir) =>
    setActiveIdx((prev) => (prev + dir + features.length) % features.length);

  return (
    <div className="relative w-full h-full flex flex-col items-center p-4 md:p-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-5 space-y-2 z-10 shrink-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Code className="w-4 h-4" />
          NATIONAL &amp; INTERNATIONAL ARENA
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          HACKATHON <span className="text-gradient-gold">CHAMPIONS</span>
        </h2>
      </motion.div>

      {/* Featured spotlight */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Photo */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`lg:col-span-7 relative rounded-2xl overflow-hidden border ${accent.border} shadow-[0_0_40px_rgba(6,182,212,0.15)]`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={feature.imageKey}
              src={imageUrl}
              onError={(e) => {
                e.currentTarget.src = presentationData.heroImages.hackathon;
              }}
              alt={row.competition}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[300px] md:h-[360px] object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-5">
            <span className={`inline-block px-3 py-1 rounded-full ${accent.chip} text-[10px] font-black uppercase w-max mb-2`}>
              {row.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold font-heading text-white leading-tight">
              {row.competition}
            </h3>
            <p className={`text-xs font-semibold ${accent.text}`}>
              {row.prizeDisplay} &bull; {row.level} Level
            </p>
          </div>

          {/* Carousel controls */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous hackathon"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next hackathon"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {features.map((f, i) => (
              <button
                key={f.imageKey}
                onClick={() => setActiveIdx(i)}
                aria-label={`Show ${f.competition}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === safeIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <GlassCard variant="cyan" className="h-full p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Trophy className={`w-4 h-4 ${accent.text}`} />
                  <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                    {row.category || 'Innovation'}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {row.shortDesc}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        {row.students.length > 1 ? 'Team' : 'Student'}
                      </div>
                      <div className="text-xs font-semibold text-slate-100">
                        {row.students.join(', ')}
                        {row.teamName ? ` — ${row.teamName}` : ''}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        Organiser &amp; Venue
                      </div>
                      <div className="text-xs font-semibold text-slate-100">{row.organizer}</div>
                      <div className="text-[10px] text-slate-400">{row.location}</div>
                    </div>
                  </div>

                  {row.date && (
                    <div className="flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                          Date
                        </div>
                        <div className="text-xs font-semibold text-slate-100">{row.date}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-2">
                  <div className={`text-2xl font-extrabold font-heading ${accent.text}`}>
                    {row.prizeDisplay}
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    Prize Won
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
