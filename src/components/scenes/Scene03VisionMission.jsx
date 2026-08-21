import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Compass, Target, Lightbulb, Shield, Users, Cpu, Rocket, ArrowRight } from 'lucide-react';

export const Scene03VisionMission = ({ isActive }) => {
  const [activeMissionIdx, setActiveMissionIdx] = useState(0);

  const visionKeyIdeas = [
    { title: "LEAD", desc: "in Information Technology" },
    { title: "COLLABORATE", desc: "with Industry & Academia" },
    { title: "ADVANCE", desc: "Research & Development" },
    { title: "PROMOTE", desc: "Sustainable Practices" },
    { title: "PREPARE", desc: "Students for Real-World Challenges" }
  ];

  const missions = [
    {
      num: "01",
      title: "NURTURE FUTURE LEADERS",
      quote: "To nurture future leaders by adopting innovative teaching methodologies, inspiring a passion for emerging technologies, and equipping students to tackle global challenges effectively.",
      icon: Users
    },
    {
      num: "02",
      title: "CREATE SUSTAINABLE SOLUTIONS",
      quote: "To empower students to develop sustainable solutions that enhance quality of life, transforming communities through innovation and technology.",
      icon: Lightbulb
    },
    {
      num: "03",
      title: "BUILD ETHICAL PROFESSIONALS",
      quote: "To instill human values, ethical principles, and professionalism in students, preparing them to contribute meaningfully to society and uphold ethical standards in the industry.",
      icon: Shield
    },
    {
      num: "04",
      title: "ADVANCE RESEARCH",
      quote: "To strengthen the research ecosystem by promoting collaboration among academia, industry, and R&D establishments, enabling impactful research and technological progress.",
      icon: Cpu
    },
    {
      num: "05",
      title: "INSPIRE ENTREPRENEURSHIP",
      quote: "To inspire entrepreneurship by fostering creativity, leadership, and problem-solving skills, enabling students to develop impactful solutions and successful start-ups.",
      icon: Rocket
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-6 overflow-hidden">
      
      {/* Z-10 Main Content Wrapper (Single Viewport Fit) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col justify-around py-1 space-y-2">
        
        {/* ============================================================ */}
        {/* PART 1 — OUR VISION */}
        {/* ============================================================ */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-extrabold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              DEPARTMENT PHILOSOPHY
            </div>

            <h1 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight leading-none">
              OUR <span className="text-gradient-cyan">VISION</span>
            </h1>
          </div>

          {/* Vision Key Ideas Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {visionKeyIdeas.map((idea, idx) => (
              <motion.div
                key={idea.title}
                initial={{ y: 15, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
              >
                <GlassCard className="p-2.5 text-center space-y-0.5 hover:border-cyan-500/50 group h-full flex flex-col justify-center">
                  <div className="text-sm md:text-base font-black font-heading text-cyan-300 group-hover:scale-105 transition-transform uppercase">
                    {idea.title}
                  </div>
                  <div className="text-[10px] font-medium text-slate-300">
                    {idea.desc}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Complete Official Vision Statement Card */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard variant="cyan" className="p-4 text-center relative overflow-hidden border-cyan-500/40">
              <div className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                OFFICIAL DEPARTMENT VISION STATEMENT
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-100 italic leading-relaxed font-heading max-w-4xl mx-auto">
                "{presentationData.vision.quote}"
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* PART 2 — OUR MISSION (FIVE COMMITMENTS. ONE DIRECTION.) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3"
        >
          <div className="text-center space-y-0.5">
            <h2 className="text-2xl md:text-4xl font-black font-heading text-white tracking-tight leading-none">
              OUR <span className="text-gradient-gold">MISSION</span>
            </h2>
            <p className="text-[11px] font-bold text-amber-300 font-heading tracking-widest uppercase">
              FIVE COMMITMENTS. ONE DIRECTION.
            </p>
          </div>

          {/* Mission Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {missions.map((m, idx) => (
              <button
                key={m.num}
                onClick={() => setActiveMissionIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-extrabold font-heading transition-all ${
                  activeMissionIdx === idx
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {m.num} • {m.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active Mission Display Spotlight */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMissionIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard variant="gold" className="p-4 space-y-2 max-w-4xl mx-auto border-amber-500/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-lg border border-amber-800">
                    MISSION {missions[activeMissionIdx].num}
                  </span>
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                    {React.createElement(missions[activeMissionIdx].icon, { className: "w-4 h-4" })}
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-black font-heading text-white tracking-wide">
                  {missions[activeMissionIdx].title}
                </h3>

                <p className="text-xs md:text-sm font-semibold text-amber-100/90 leading-relaxed font-heading">
                  "{missions[activeMissionIdx].quote}"
                </p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ============================================================ */}
        {/* PART 3 — FINAL VISION & MISSION FRAME */}
        {/* ============================================================ */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl text-center space-y-1.5"
        >
          {/* Summary Node Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-xs font-black font-heading text-cyan-300 uppercase tracking-widest">
            <span>LEADERSHIP</span>
            <span>•</span>
            <span>RESEARCH</span>
            <span>•</span>
            <span>INNOVATION</span>
            <span>•</span>
            <span>ETHICS</span>
            <span>•</span>
            <span>SUSTAINABILITY</span>
            <span>•</span>
            <span>ENTREPRENEURSHIP</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-extrabold font-heading text-amber-400 tracking-widest uppercase">
            <span>VISION</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            <span>MISSION</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            <span>STUDENT ACHIEVEMENTS</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
