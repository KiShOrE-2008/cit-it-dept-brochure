import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { placementsData, computePlacementMetrics, recruiterList } from '../../data/placements';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { Marquee } from '../ui/Marquee';
import { PlacementDirectoryModal } from '../ui/PlacementDirectoryModal';
import { Briefcase, TrendingUp, Building2, Award, CheckCircle2, ChevronRight, ExternalLink, Sparkles, DollarSign, Users, Layers } from 'lucide-react';

export const Scene07Placements = ({ isActive }) => {
  const [showDirectoryModal, setShowDirectoryModal] = useState(false);
  const [metrics, setMetrics] = useState({ totalStudentsPlaced: 47, totalRecruiters: 18, highestPackageVal: "₹58 LPA", companyCounts: {} });
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);

  useEffect(() => {
    setMetrics(computePlacementMetrics());
  }, []);

  const topPackageHighlights = [
    { pkg: "₹58 LPA", company: "Microsoft", role: "Super Dream Software Engineer", count: 3, students: ["Akshaya C L", "Bala Ganesh K", "Balaraman M"], badge: "HIGHEST PACKAGE" },
    { pkg: "₹48 LPA", company: "ServiceNow", role: "Product Developer", count: 1, students: ["Harikrishna K"], badge: "SUPER DREAM" },
    { pkg: "₹20 LPA", company: "MF", role: "Systems Engineer", count: 1, students: ["Sharan Yeswanth"], badge: "DREAM PRODUCT" },
    { pkg: "₹20 LPA", company: "Cisco", role: "Software Engineer", count: 1, students: ["Tania R"], badge: "DREAM PRODUCT" },
    { pkg: "₹13 LPA", company: "Philips", role: "Healthcare Tech Lead", count: 1, students: ["Shradha S"], badge: "HIGH CTC" },
    { pkg: "₹12 LPA", company: "SMBC", role: "FinTech Engineer", count: 3, students: ["A Thrisyanth", "Dinesh R", "Mohammad Salaudeen I"], badge: "BANKING MNC" }
  ];

  const distributionList = [
    { company: "Prodapt", count: 11, pct: 23 },
    { company: "Hexaware", count: 4, pct: 9 },
    { company: "Microsoft", count: 3, pct: 6 },
    { company: "SMBC", count: 3, pct: 6 },
    { company: "DTCC", count: 3, pct: 6 },
    { company: "Rocket India", count: 3, pct: 6 },
    { company: "Sapphire", count: 3, pct: 6 },
    { company: "Orion", count: 3, pct: 6 },
    { company: "Hyland", count: 2, pct: 4 },
    { company: "Raptee", count: 2, pct: 4 },
    { company: "HLB Global", count: 2, pct: 4 },
    { company: "Philips", count: 2, pct: 4 },
    { company: "Others (Cisco, ServiceNow, MF, Namma Yatrai, etc.)", count: 6, pct: 13 }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-8 overflow-y-auto overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      {/* 1. OPENING SCENE & HEADER */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto space-y-2 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
          <Briefcase className="w-4 h-4 text-emerald-400" />
          CAREER & CAMPUS RECRUITMENT SHOWCASE
        </div>

        <h1 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tight leading-none">
          PLACEMENTS — <span className="text-gradient-emerald">FROM CLASSROOM TO CAREER</span>
        </h1>

        <p className="text-sm md:text-base font-semibold text-slate-300 max-w-2xl mx-auto">
          Empowering Department of IT students with high-impact corporate placement offers from global tech leaders.
        </p>
      </motion.div>

      {/* 2. MAIN PLACEMENT STATISTICS (₹58 LPA, 47 STUDENTS PLACED, 18+ RECRUITERS) */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GlassCard variant="gold" className="p-6 text-center space-y-2">
          <div className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">HIGHEST PACKAGE OFFERED</div>
          <div className="text-5xl font-black text-amber-300 font-heading">
            ₹<AnimatedCounter end={58} suffix=" LPA" duration={2500} isActive={isActive} />
          </div>
          <div className="text-xs text-amber-200/80 font-bold">Microsoft Super Dream Offer</div>
        </GlassCard>

        <GlassCard variant="cyan" className="p-6 text-center space-y-2">
          <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest font-heading">STUDENTS PLACED</div>
          <div className="text-5xl font-black text-cyan-300 font-heading">
            <AnimatedCounter end={47} suffix=" STUDENTS" duration={2000} isActive={isActive} />
          </div>
          <div className="text-xs text-cyan-200/80 font-bold">Verified Individual Student Offers</div>
        </GlassCard>

        <GlassCard className="p-6 text-center space-y-2 border-emerald-500/30">
          <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">RECRUITING ORGANIZATIONS</div>
          <div className="text-5xl font-black text-emerald-300 font-heading">
            <AnimatedCounter end={18} suffix="+" duration={2000} isActive={isActive} />
          </div>
          <div className="text-xs text-emerald-200/80 font-bold font-heading">Global Corporate Hiring Partners</div>
        </GlassCard>
      </div>

      {/* 3. HIGHEST PACKAGE HERO HIGHLIGHT (MICROSOFT ₹58 LPA) */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <GlassCard variant="gold" className="p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-amber-400 font-black text-9xl font-heading">
            ₹58L
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                FEATURED HIGHEST PACKAGE
              </span>
              <div className="text-5xl font-black text-white font-heading">₹58.0 LPA</div>
              <h3 className="text-2xl font-bold font-heading text-amber-300">MICROSOFT</h3>
              <p className="text-xs text-amber-200/80 font-semibold">
                3 IT Department Scholars secured Super Dream software engineering offers at Microsoft.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-3">
              {["Akshaya C L", "Bala Ganesh K", "Balaraman M"].map((name, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/40 text-center space-y-1">
                  <Award className="w-6 h-6 text-amber-400 mx-auto" />
                  <div className="text-sm font-bold text-white font-heading">{name}</div>
                  <div className="text-[11px] text-amber-300 font-semibold">Microsoft • ₹58 LPA</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 3.5 HIGH SALARY PLACED STUDENTS SPOTLIGHT GRID */}
      <div className="max-w-6xl mx-auto w-full mb-8">
        <div className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          HIGH SALARY PLACEMENT SPOTLIGHTS
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Harikrishna K", company: "ServiceNow", pkg: "₹48 LPA", badge: "Super Dream", color: "border-cyan-500/40 text-cyan-300" },
            { name: "Sharan Yeswanth", company: "MF", pkg: "₹20 LPA", badge: "Dream Product", color: "border-purple-500/40 text-purple-300" },
            { name: "Tania R", company: "Cisco", pkg: "₹20 LPA", badge: "Dream Product", color: "border-purple-500/40 text-purple-300" },
            { name: "Shradha S", company: "Philips", pkg: "₹13 LPA", badge: "High CTC", color: "border-emerald-500/40 text-emerald-300" },
            { name: "A Thrisyanth", company: "SMBC", pkg: "₹12 LPA", badge: "Banking MNC", color: "border-blue-500/40 text-blue-300" },
            { name: "Dinesh R", company: "SMBC", pkg: "₹12 LPA", badge: "Banking MNC", color: "border-blue-500/40 text-blue-300" },
            { name: "Mohammad Salaudeen I", company: "SMBC", pkg: "₹12 LPA", badge: "Banking MNC", color: "border-blue-500/40 text-blue-300" },
            { name: "Bharath A V", company: "Namma Yatrai", pkg: "₹12 LPA", badge: "Tech Leader", color: "border-blue-500/40 text-blue-300" }
          ].map((item, idx) => (
            <div key={idx} className={`p-3.5 rounded-xl bg-slate-900/90 border ${item.color.split(' ')[0]} space-y-1 hover:scale-105 transition-transform`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                  {item.badge}
                </span>
                <span className={`text-xs font-black font-heading ${item.color.split(' ')[1]}`}>{item.pkg}</span>
              </div>
              <div className="text-xs font-bold text-white font-heading truncate">{item.name}</div>
              <div className="text-[11px] text-slate-400 font-semibold">{item.company}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. OTHER TOP PACKAGE HIGHLIGHTS CAROUSEL & INFOGRAPHIC */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Salary Progression Bar Infographic */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              SALARY PROGRESSION INFOGRAPHIC
            </h4>
            <span className="text-xs text-cyan-400 font-bold">Top Tiers</span>
          </div>

          <div className="space-y-3">
            {[
              { company: "Microsoft", pkg: "₹58 LPA", pct: 100, color: "bg-amber-400" },
              { company: "ServiceNow", pkg: "₹48 LPA", pct: 83, color: "bg-cyan-400" },
              { company: "Cisco & MF", pkg: "₹20 LPA", pct: 35, color: "bg-purple-400" },
              { company: "Philips", pkg: "₹13 LPA", pct: 23, color: "bg-emerald-400" },
              { company: "SMBC & Namma Yatrai", pkg: "₹12 LPA", pct: 21, color: "bg-blue-400" },
              { company: "Prodapt & DTCC", pkg: "₹8–9 LPA", pct: 15, color: "bg-indigo-400" },
              { company: "Hexaware & Sapphire", pkg: "₹4–6 LPA", pct: 10, color: "bg-slate-500" }
            ].map((bar, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-200">{bar.company}</span>
                  <span className="text-amber-300 font-heading">{bar.pkg}</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div className={`h-full ${bar.color} transition-all duration-1000 rounded-full`} style={{ width: `${bar.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company-wise Placement Distribution */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              COMPANY-WISE PLACEMENT DISTRIBUTION (47 STUDENTS)
            </h4>
            <span className="text-xs text-emerald-400 font-bold">18 Companies</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {distributionList.map((d, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <span className="font-semibold text-slate-300 truncate pr-2">{d.company}</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-bold border border-cyan-800">
                  {d.count} Placed
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. CORPORATE RECRUITERS MARQUEE */}
      <div className="max-w-6xl mx-auto w-full mb-8 space-y-2">
        <div className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest">
          18+ RECRUITING CORPORATE ORGANIZATIONS
        </div>
        <Marquee items={recruiterList} speed={26} />
      </div>

      {/* 6. COMPLETE PLACEMENT DIRECTORY BUTTON CTA */}
      <div className="max-w-4xl mx-auto w-full text-center py-6 border-t border-slate-800 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-black font-heading text-white">
            CAREERS BUILT ON EXCELLENCE
          </h3>
          <p className="text-xs md:text-sm text-slate-400">
            From learning to innovation. From innovation to opportunity. From opportunity to success.
          </p>
        </div>

        <button
          onClick={() => setShowDirectoryModal(true)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] hover:scale-105"
        >
          <span>VIEW ALL 47 PLACEMENTS DIRECTORY</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Placement Directory Modal */}
      <PlacementDirectoryModal
        isOpen={showDirectoryModal}
        onClose={() => setShowDirectoryModal(false)}
      />
    </div>
  );
};
