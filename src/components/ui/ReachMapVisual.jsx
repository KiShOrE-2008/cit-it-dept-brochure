import React from 'react';
import { motion } from 'framer-motion';
import { locationsList } from '../../data/achievements';
import { MapPin, Globe, Compass } from 'lucide-react';

export const ReachMapVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 overflow-hidden shadow-2xl">
      {/* Background SVG Grid & Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Subtle grid lines */}
        <line x1="0" y1="25" x2="100" y2="25" stroke="#38bdf8" strokeWidth="0.2" strokeDasharray="1 1" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#38bdf8" strokeWidth="0.2" strokeDasharray="1 1" />
        <line x1="0" y1="75" x2="100" y2="75" stroke="#38bdf8" strokeWidth="0.2" strokeDasharray="1 1" />
        <line x1="33" y1="0" x2="33" y2="100" stroke="#38bdf8" strokeWidth="0.2" strokeDasharray="1 1" />
        <line x1="66" y1="0" x2="66" y2="100" stroke="#38bdf8" strokeWidth="0.2" strokeDasharray="1 1" />

        {/* Animated connection lines between campus hub (Chennai) and outer locations */}
        {locationsList.map((loc, idx) => (
          <line
            key={idx}
            x1="58"
            y1="75"
            x2={loc.coords.x}
            y2={loc.coords.y}
            stroke="#06b6d4"
            strokeWidth="0.4"
            strokeDasharray="2 2"
            className="animate-pulse"
          />
        ))}
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-heading text-white">NATIONAL & INTERNATIONAL REACH</h4>
            <p className="text-[11px] text-cyan-400 font-semibold">From Campus to Delhi, Hyderabad, Bangalore & Remote</p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
          GLOBAL FOOTPRINT
        </span>
      </div>

      {/* Map Interactive Nodes Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
        {locationsList.map((loc, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.08 }}
            className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors space-y-1 group"
          >
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold font-heading group-hover:text-amber-300 transition-colors">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{loc.name}</span>
            </div>
            <p className="text-[11px] text-slate-400 truncate">{loc.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Tagline */}
      <div className="relative z-10 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span>HQ: Chennai Institute of Technology</span>
        <span className="text-amber-400 font-bold font-heading">FROM CAMPUS TO THE WORLD</span>
      </div>
    </div>
  );
};
