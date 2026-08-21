import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, Sparkles } from 'lucide-react';

export const spotlightAchievements = [
  {
    id: "spotlight-1",
    title: "BUILDFEST 2026 HACKATHON",
    badge: "🥇 1st Prize",
    team: "Team CIT Chennai",
    prize: "₹30,000 + Goodies",
    organizer: "Omega Consortium × Hakelize",
    venue: "Grootan Technologies, Perungudi, Chennai",
    description: "A five-member CIT student team proudly presents their certificates after securing 1st Prize at the BuildFest 2026 Hackathon.",
    image: "https://wxnsxchekujedcnmfnin.supabase.co/storage/v1/object/public/Image/Buildfest.jpg"
  },
  {
    id: "spotlight-2",
    title: "SIPS 2026 — IIM BANGALORE",
    badge: "🏆 Theme Winner & Overall Runner",
    team: "S. Sreya (III Year IT)",
    prize: "₹20,000",
    organizer: "IIM Bangalore",
    venue: "IIM Bangalore, Bangalore",
    description: "III-year Information Technology student from CIT receives recognition at the Student Innovation & Product Summit (SIPS) 2026 organized by IIM Bangalore.",
    image: "https://wxnsxchekujedcnmfnin.supabase.co/storage/v1/object/public/Image/IIM.jpg"
  },
  {
    id: "spotlight-3",
    title: "MASTRA AI HACKATHON 2026",
    badge: "🥇 1st Place",
    team: "Team Codex",
    prize: "₹20,000",
    organizer: "HiDevs and AI House",
    venue: "Bangalore",
    description: "CIT student team celebrates winning 1st Place at the Mastra AI Hackathon 2026, holding the winner cheque for ₹20,000.",
    image: "https://wxnsxchekujedcnmfnin.supabase.co/storage/v1/object/public/Image/Mastra%20AI%202026.jpg"
  },
  {
    id: "spotlight-4",
    title: "MOONSHOT HACKATHON 2026",
    badge: "🏆 Outstanding Innovation Award",
    team: "Team Impact Minds (Top 100 Finalist)",
    prize: "$1,300 USD",
    organizer: "AETHRA (Civilization Impact Award)",
    venue: "Remote / International Global",
    description: "Recognized with the Outstanding Innovation Award and Civilization Impact Award while securing Top 100 finalist placement at the international Moonshot Hackathon.",
    image: "https://wxnsxchekujedcnmfnin.supabase.co/storage/v1/object/public/Image/Moonshot.jpg"
  }
];

export const CinematicAchievementSpotlight = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % spotlightAchievements.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % spotlightAchievements.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + spotlightAchievements.length) % spotlightAchievements.length);

  const activeItem = spotlightAchievements[currentIdx];

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] bg-slate-950 group my-6">
      {/* Background Cinematic Photograph Viewport */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[380px] md:h-[480px]"
        >
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] group-hover:scale-105 transition-transform duration-1000"
          />

          {/* Dark Glassmorphic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-6 md:p-8">
            <div className="max-w-3xl space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-black text-xs uppercase tracking-widest shadow-lg shadow-amber-500/30">
                  <Trophy className="w-3.5 h-3.5" />
                  {activeItem.badge}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 font-black text-xs uppercase">
                  {activeItem.prize}
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black font-heading text-white tracking-tight drop-shadow-md">
                {activeItem.title}
              </h3>

              <p className="text-sm md:text-base font-bold text-amber-300 font-heading">
                {activeItem.team} • <span className="text-slate-300 font-medium">{activeItem.organizer}</span>
              </p>

              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-semibold max-w-2xl pt-1">
                {activeItem.description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/50 backdrop-blur-xl text-amber-300 text-xs font-extrabold uppercase tracking-widest shadow-lg">
        <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
        FEATURED SPOTLIGHT LAURELS
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <div className="flex gap-1.5 mr-2">
          {spotlightAchievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIdx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-500 text-white transition-colors backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-500 text-white transition-colors backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
