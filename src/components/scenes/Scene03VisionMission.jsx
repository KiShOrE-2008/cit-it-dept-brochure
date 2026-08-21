import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Compass, Target, Lightbulb, Shield, Users, Cpu, Rocket, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 pb-40 overflow-y-auto overflow-x-hidden scroll-smooth">
      
      {/* Z-10 Main Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        
        {/* ============================================================ */}
        {/* PART 1 — OUR VISION */}
        {/* ============================================================ */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-widest">
              <Compass className="w-4 h-4 text-cyan-400" />
              DEPARTMENT PHILOSOPHY
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tight leading-none">
              OUR <span className="text-gradient-cyan">VISION</span>
            </h1>
          </div>

          {/* Vision Key Ideas Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {visionKeyIdeas.map((idea, idx) => (
              <motion.div
                key={idea.title}
                initial={{ y: 25, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              >
                <GlassCard className="p-4 text-center space-y-1 hover:border-cyan-500/50 group h-full flex flex-col justify-center">
                  <div className="text-lg font-black font-heading text-cyan-300 group-hover:scale-105 transition-transform uppercase">
                    {idea.title}
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    {idea.desc}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Complete Official Vision Statement Card */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <GlassCard variant="cyan" className="p-8 text-center relative overflow-hidden border-cyan-500/40">
              <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
                <Target className="w-4 h-4" />
                OFFICIAL DEPARTMENT VISION STATEMENT
              </div>
              <p className="text-xl md:text-2xl font-bold text-slate-100 italic leading-relaxed font-heading max-w-5xl mx-auto">
                "{presentationData.vision.quote}"
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* PART 2 — OUR MISSION (FIVE COMMITMENTS. ONE DIRECTION.) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8 pt-4"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight leading-none">
              OUR <span className="text-gradient-gold">MISSION</span>
            </h2>
            <p className="text-sm font-bold text-amber-300 font-heading tracking-widest uppercase">
              FIVE COMMITMENTS. ONE DIRECTION.
            </p>
          </div>

          {/* Mission Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {missions.map((m, idx) => (
              <button
                key={m.num}
                onClick={() => setActiveMissionIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold font-heading transition-all ${
                  activeMissionIdx === idx
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard variant="gold" className="p-8 space-y-4 max-w-4xl mx-auto border-amber-500/50">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-amber-400 bg-amber-950 px-3 py-1 rounded-xl border border-amber-800">
                    MISSION {missions[activeMissionIdx].num}
                  </span>
                  <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300">
                    {React.createElement(missions[activeMissionIdx].icon, { className: "w-6 h-6" })}
                  </div>
                </div>

                <h3 className="text-2xl font-black font-heading text-white tracking-wide">
                  {missions[activeMissionIdx].title}
                </h3>

                <p className="text-base md:text-lg font-semibold text-amber-100/90 leading-relaxed font-heading">
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
          initial={{ scale: 0.96, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl text-center space-y-6"
        >
          {/* Summary Node Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-black font-heading text-cyan-300 uppercase tracking-widest">
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

          <div className="space-y-2">
            <h3 className="text-2xl md:text-4xl font-black font-heading text-white uppercase tracking-tight">
              OUR DIRECTION
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-semibold max-w-3xl mx-auto leading-relaxed">
              "Preparing students to develop innovative, technology-driven solutions for real-world challenges."
            </p>
          </div>

          {/* Transition Badge to Achievements */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-3 text-xs font-extrabold font-heading text-amber-400 tracking-widest uppercase">
            <span>VISION</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            <span>MISSION</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            <span>STUDENT ACHIEVEMENTS</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
