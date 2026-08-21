import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { CalendarDays, Trophy, Mic, Sparkles } from 'lucide-react';

const CATEGORY_STYLE = {
  Hackathon: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
  Workshop: 'bg-purple-500/15 border-purple-500/40 text-purple-300',
  'Full-Stack Challenge': 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300',
  'Industry Interaction': 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
  'Coding Competition': 'bg-blue-500/15 border-blue-500/40 text-blue-300'
};

export const Scene06Events = ({ isActive }) => {
  const events = presentationData.events;

  return (
    <div className="relative w-full h-full flex flex-col items-center p-4 md:p-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-5 space-y-2 z-10 shrink-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <CalendarDays className="w-4 h-4" />
          DEPARTMENT ACTIVITY CALENDAR
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
          EVENTS &amp; <span className="text-gradient-cyan">INITIATIVES</span>
        </h2>
        <p className="text-xs md:text-sm text-slate-400 font-medium">
          {events.length} flagship events hosted by the Department of Information Technology
        </p>
      </motion.div>

      {/* Event cards */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((ev, idx) => (
          <motion.div
            key={ev.id}
            initial={{ y: 28, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            className={idx === events.length - 1 && events.length % 2 === 1 ? 'md:col-span-2' : ''}
          >
            <GlassCard className="h-full p-5 space-y-3 hover:border-cyan-500/50 group">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-extrabold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {ev.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-snug">
                    {ev.subtitle}
                  </p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono font-bold text-cyan-400">
                  {ev.dateShort}
                </span>
              </div>

              {/* Category + highlight */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-wider ${
                    CATEGORY_STYLE[ev.category] || 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  {ev.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  {ev.highlight}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{ev.desc}</p>

              {ev.meta && (
                <p className="text-[10px] font-semibold text-amber-300/80 italic">{ev.meta}</p>
              )}

              {/* Winners */}
              {ev.winners && (
                <div className="space-y-1.5 pt-1 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 pt-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                      Winners
                    </span>
                  </div>
                  {ev.winners.map((w) => (
                    <div
                      key={w.team}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800"
                    >
                      <span className="text-sm shrink-0">{w.medal}</span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-bold text-slate-100 truncate">
                          {w.team}
                        </div>
                        <div className="text-[9px] text-slate-500 truncate">{w.project}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Resource persons */}
              {ev.people && (
                <div className="space-y-1.5 pt-1 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 pt-1.5">
                    <Mic className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                      Resource {ev.people.length > 1 ? 'Persons' : 'Person'}
                    </span>
                  </div>
                  {ev.people.map((p) => (
                    <div
                      key={p.name}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800"
                    >
                      <div className="text-[11px] font-bold text-slate-100">{p.name}</div>
                      <div className="text-[9px] text-slate-500 leading-snug">{p.role}</div>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
