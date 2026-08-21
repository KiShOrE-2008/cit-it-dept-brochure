import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { presentationData } from '../../data/presentationData';
import { Heart, Mail, Phone, Globe, MapPin, Sparkles } from 'lucide-react';

export const Scene14ThankYou = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      // Fire confetti burst on thank you scene entrance
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if confetti canvas context unavailable
      }
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px] animate-pulse-glow" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl space-y-6"
      >
        <div className="w-24 h-24 mx-auto p-2 rounded-2xl bg-slate-900 border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
          <img src={presentationData.heroImages.logo} alt="CIT IT Logo" className="w-full h-full object-contain" />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-white tracking-tight">
            THANK YOU
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gradient-cyan">
            FOR BEING AN INTEGRAL PART OF OUR JOURNEY
          </p>
        </div>

        <div className="py-4 border-y border-slate-800/80 max-w-xl mx-auto space-y-1">
          <p className="text-sm font-bold text-amber-300 tracking-widest uppercase">
            "TOGETHER, WE INSPIRE. TOGETHER, WE ACHIEVE."
          </p>
          <p className="text-xs text-slate-400">
            Department of Information Technology • Chennai Institute of Technology
          </p>
        </div>

        {/* HOD & Contact details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-2 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <p className="font-bold text-cyan-300 font-heading text-sm">{presentationData.contact.hodName}</p>
            <p className="text-slate-400">{presentationData.contact.hodDesignation}</p>
            <p className="text-slate-400 pt-1">{presentationData.contact.address}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{presentationData.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{presentationData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>{presentationData.contact.website}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
