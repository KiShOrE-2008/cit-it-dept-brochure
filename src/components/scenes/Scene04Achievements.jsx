import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievementsData, computeAchievementStats } from '../../data/achievements';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { ReachMapVisual } from '../ui/ReachMapVisual';
import { Trophy, Award, Flame, ExternalLink, Sparkles, MapPin, Calendar, CheckCircle2, ChevronRight, X, DollarSign, Layers } from 'lucide-react';

export const Scene04Achievements = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL', 'II', 'III', 'IV'
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [stats, setStats] = useState({ totalWinningTeams: 0, totalINR: 0, totalUSD: 0, goldCount: 0, silverCount: 0, bronzeCount: 0, totalMedals: 0 });

  useEffect(() => {
    setStats(computeAchievementStats());
  }, []);

  const filteredAchievements = activeTab === 'ALL'
    ? achievementsData
    : achievementsData.filter(item => item.year === activeTab);

  const getYearTitle = (tab) => {
    switch (tab) {
      case 'II': return "II YEAR — RISING INNOVATORS";
      case 'III': return "III YEAR — INNOVATION MEETS EXCELLENCE";
      case 'IV': return "IV YEAR — NATIONAL CHAMPIONS";
      default: return "ALL YEARS — ACADEMIC EXCELLENCE & LAURELS";
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-8 overflow-y-auto overflow-x-hidden">
      {/* Background Subtle Spotlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[160px] pointer-events-none" />

      {/* 1. OPENING ANIMATION & HEADER */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto space-y-2 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-widest">
          <Trophy className="w-4 h-4 text-amber-400" />
          STUDENT ACHIEVEMENTS SHOWCASE
        </div>

        <h1 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tight leading-none">
          STUDENT <span className="text-gradient-gold">ACHIEVEMENTS</span>
        </h1>

        <p className="text-lg md:text-xl font-bold text-cyan-300 font-heading tracking-wide">
          FROM IDEAS TO IMPACT — OUR STUDENTS DON'T JUST PARTICIPATE. THEY INNOVATE, COMPETE, AND ACHIEVE.
        </p>
      </motion.div>

      {/* 2. DYNAMIC ACHIEVEMENT STATISTICS BAR */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <GlassCard variant="gold" className="p-4 text-center space-y-1">
          <div className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">WINNING TEAMS</div>
          <div className="text-3xl md:text-4xl font-black text-amber-300 font-heading">
            <AnimatedCounter end={stats.totalWinningTeams} suffix="+" isActive={isActive} />
          </div>
          <div className="text-[11px] text-amber-200/80 font-semibold">Unique Competition Laurels</div>
        </GlassCard>

        <GlassCard variant="cyan" className="p-4 text-center space-y-1">
          <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">TOTAL CASH PRIZES (INR)</div>
          <div className="text-3xl md:text-4xl font-black text-cyan-300 font-heading">
            ₹<AnimatedCounter end={5.2} decimals={1} suffix=" Lakhs+" isActive={isActive} />
          </div>
          <div className="text-[11px] text-cyan-200/80 font-semibold">Combined Team Cash Awards</div>
        </GlassCard>

        <GlassCard className="p-4 text-center space-y-1 border-purple-500/30">
          <div className="text-xs font-extrabold text-purple-400 uppercase tracking-widest">FOREIGN REWARDS (USD)</div>
          <div className="text-3xl md:text-4xl font-black text-purple-300 font-heading">
            $<AnimatedCounter end={3900} prefix="" suffix="" isActive={isActive} />
          </div>
          <div className="text-[11px] text-purple-200/80 font-semibold">International Grants & Credits</div>
        </GlassCard>

        <GlassCard className="p-4 text-center space-y-1 border-emerald-500/30">
          <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">MEDALS & TROPHIES</div>
          <div className="text-3xl md:text-4xl font-black text-emerald-300 font-heading">
            <AnimatedCounter end={stats.totalMedals} suffix=" Medals" isActive={isActive} />
          </div>
          <div className="text-[11px] text-emerald-200/80 font-semibold">Gold, Silver & Bronze Wins</div>
        </GlassCard>
      </div>

      {/* 3. MAIN TRANSITION STATEMENT LINE */}
      <div className="max-w-6xl mx-auto w-full my-4 relative flex items-center justify-between">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent flex-1" />
        <span className="px-4 py-1 text-xs font-extrabold font-heading text-cyan-300 bg-slate-900 rounded-full border border-cyan-500/40 uppercase tracking-widest shrink-0">
          FROM CAMPUS TO THE NATIONAL STAGE
        </span>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent flex-1" />
      </div>

      {/* 4. YEAR FILTER TABS (II Year, III Year, IV Year, All) */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between mb-4">
        <h3 className="text-base font-bold font-heading text-white">{getYearTitle(activeTab)}</h3>

        <div className="flex gap-2 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          {[
            { id: 'ALL', label: 'All Years' },
            { id: 'II', label: 'II Year (Rising)' },
            { id: 'III', label: 'III Year (Excellence)' },
            { id: 'IV', label: 'IV Year (National)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5. ACHIEVEMENTS CARDS GRID */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredAchievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <GlassCard
              variant={item.badge.includes('1st') || item.badge.includes('GOLD') ? 'gold' : 'default'}
              className="h-full flex flex-col justify-between p-5 hover:border-amber-500/50 group"
            >
              <div className="space-y-3">
                {/* Header Badge & Level */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs border border-amber-500/40">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    {item.level} Level
                  </span>
                </div>

                {/* Competition Name */}
                <h4 className="text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.competition}
                </h4>

                {/* Student / Team Name */}
                <div className="space-y-0.5">
                  <p className="text-xs font-extrabold text-cyan-300 font-heading">
                    {item.teamName ? `${item.teamName}: ` : ''}{item.students.join(', ')}
                  </p>
                  {item.registerNumbers && item.registerNumbers.length > 0 && (
                    <p className="text-[10px] text-slate-400 font-mono">Reg: {item.registerNumbers.join(', ')}</p>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {item.shortDesc}
                </p>
              </div>

              {/* Footer info: Organizer, Location, Date, Prize */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="truncate max-w-[180px]">{item.organizer}</span>
                  <span className="font-semibold text-amber-400">{item.prizeDisplay}</span>
                </div>

                <button
                  onClick={() => setSelectedDetail(item)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-all border border-slate-800 hover:border-cyan-500/40"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* 6. RAPID MONTAGE TICKER & REACH MAP */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
        {/* Rapid Montage Wall */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-amber-400" />
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              RAPID ACHIEVEMENT MONTAGE
            </h4>
          </div>
          
          <div className="space-y-2">
            {[
              "🥇 IndiaSkills National Gold Medal (₹1,00,000)",
              "🥇 OPS-FUSION Winner (₹85,000 / $1,000)",
              "🥇 FOSS Hack 1st Place (₹1,00,000)",
              "🥇 QIE Blockchain Hackathon Winner ($2,500)",
              "🥇 Agent.AI Challenge Winner (₹10,000 + $100)",
              "🥇 BuildFest '26 Winner (₹30,000 + Goodies)",
              "🥈 Handloom Hackathon Silver Medalists",
              "🥈 DSCI 1.0 MeitY Runner Up (₹50,000)",
              "🥈 IIMB SIPS Summit Overall Runner",
              "🥉 MathXplore 2.0 3rd Prize"
            ].map((title, i) => (
              <div key={i} className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-bold text-slate-200 flex items-center justify-between">
                <span>{title}</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* National Reach Map */}
        <div className="lg:col-span-6">
          <ReachMapVisual />
        </div>
      </div>

      {/* 7. FINAL TRANSITION STATEMENT */}
      <div className="max-w-4xl mx-auto w-full text-center py-6 border-t border-slate-800 space-y-2">
        <h3 className="text-xl md:text-3xl font-black font-heading text-white tracking-tight uppercase">
          MORE THAN PARTICIPATION. MORE THAN COMPETITION.
        </h3>
        <p className="text-2xl md:text-4xl font-black text-gradient-gold font-heading uppercase">
          A CULTURE OF INNOVATION.
        </p>
        <p className="text-sm text-cyan-300 font-semibold tracking-widest uppercase pt-2">
          "Our students are building the future."
        </p>
      </div>

      {/* 8. PROBLEM STATEMENT DETAIL LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <button
                onClick={() => setSelectedDetail(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs border border-amber-500/40">
                  {selectedDetail.badge}
                </span>
                <span className="text-xs font-bold text-cyan-400 font-mono">{selectedDetail.category}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-white">{selectedDetail.competition}</h3>
                <p className="text-sm font-extrabold text-amber-300 font-heading">
                  Students: {selectedDetail.students.join(', ')} {selectedDetail.teamName ? `(${selectedDetail.teamName})` : ''}
                </p>
              </div>

              <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
                <div className="font-bold text-cyan-300 uppercase tracking-wider">FULL PROBLEM STATEMENT & PROTOTYPE:</div>
                <p className="leading-relaxed">{selectedDetail.problemStatement}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 font-bold">Organizer:</span>
                  <p className="font-semibold text-slate-200">{selectedDetail.organizer}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-bold">Location & Date:</span>
                  <p className="font-semibold text-slate-200">{selectedDetail.location} ({selectedDetail.date})</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-extrabold text-amber-400">Team Prize: {selectedDetail.prizeDisplay}</span>
                <button
                  onClick={() => setSelectedDetail(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
