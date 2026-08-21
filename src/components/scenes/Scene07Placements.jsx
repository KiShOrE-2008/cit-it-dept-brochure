import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { computePlacementMetrics, recruiterList } from '../../data/placements';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { GlassCard } from '../ui/GlassCard';
import { Marquee } from '../ui/Marquee';
import { HighestPackageSpotlight } from '../ui/HighestPackageSpotlight';
import { PlacementDirectoryModal } from '../ui/PlacementDirectoryModal';
import { Briefcase, Award, ExternalLink, Sparkles, UserCheck } from 'lucide-react';

export const Scene07Placements = ({ isActive }) => {
  const [showDirectoryModal, setShowDirectoryModal] = useState(false);

  const topPackageSpotlights = [
    { pkg: "₹48 LPA", company: "ServiceNow", name: "Harikrishna K", regNo: "23IT059", role: "Product Developer", badge: "Super Dream", color: "border-cyan-500/40 text-cyan-300" },
    { pkg: "₹20 LPA", company: "MF", name: "Sharan Yeswanth", regNo: "23IT154", role: "Systems Engineer", badge: "Dream Product", color: "border-purple-500/40 text-purple-300" },
    { pkg: "₹20 LPA", company: "Cisco", name: "Tania R", regNo: "23IT169", role: "Software Engineer", badge: "Dream Product", color: "border-purple-500/40 text-purple-300" },
    { pkg: "₹13 LPA", company: "Philips", name: "Shradha S", regNo: "23IT158", role: "Tech Lead", badge: "High CTC", color: "border-emerald-500/40 text-emerald-300" },
    { pkg: "₹12 LPA", company: "SMBC", name: "A Thrisyanth", regNo: "23IT001", role: "FinTech Engineer", badge: "Banking MNC", color: "border-blue-500/40 text-blue-300" },
    { pkg: "₹12 LPA", company: "SMBC", name: "Dinesh R", regNo: "23IT045", role: "FinTech Engineer", badge: "Banking MNC", color: "border-blue-500/40 text-blue-300" },
    { pkg: "₹12 LPA", company: "SMBC", name: "Mohammad Salaudeen I", regNo: "23IT096", role: "FinTech Engineer", badge: "Banking MNC", color: "border-blue-500/40 text-blue-300" },
    { pkg: "₹12 LPA", company: "Namma Yatrai", name: "Bharath A V", regNo: "23IT033", role: "Full Stack Engineer", badge: "Tech Leader", color: "border-blue-500/40 text-blue-300" },
    { pkg: "₹12 LPA", company: "Philips", name: "Raghul S", regNo: "23IT127", role: "Software Engineer", badge: "High CTC", color: "border-blue-500/40 text-blue-300" }
  ];

  const distributionList = [
    { company: "Prodapt", count: 11 },
    { company: "Hexaware", count: 4 },
    { company: "Microsoft", count: 3 },
    { company: "SMBC", count: 3 },
    { company: "DTCC", count: 3 },
    { company: "Rocket India", count: 3 },
    { company: "Sapphire", count: 3 },
    { company: "Orion", count: 3 },
    { company: "Hyland", count: 2 },
    { company: "Raptee", count: 2 },
    { company: "HLB Global", count: 2 },
    { company: "Philips", count: 2 },
    { company: "Others (Cisco, ServiceNow, MF, Namma Yatrai, etc.)", count: 6 }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-8 pb-40 overflow-y-auto overflow-x-hidden scroll-smooth">
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

      {/* 2. MAIN PLACEMENT STATISTICS */}
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
        </GlassCard>
      </div>

      {/* 2.5 CORPORATE RECRUITERS BRAND LOGO MARQUEE (TOP FEATURED) */}
      <div className="max-w-6xl mx-auto w-full mb-6 space-y-2">
        <div className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          18+ RECRUITING CORPORATE ORGANIZATIONS
        </div>
        <Marquee items={recruiterList} speed={24} />
      </div>

      {/* 3. DEDICATED HIGHEST PACKAGE SPOTLIGHT (MICROSOFT ₹58 LPA) */}
      <HighestPackageSpotlight isActive={isActive} />

      {/* 5. INFOGRAPHICS & DISTRIBUTION */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Salary Progression Infographic */}
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

      {/* 7. COMPLETE PLACEMENT DIRECTORY BUTTON CTA */}
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
