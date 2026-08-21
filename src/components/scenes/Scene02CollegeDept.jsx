import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlassCard } from '../ui/GlassCard';
import { Award, Building2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const Scene02CollegeDept = ({ isActive }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Background Campus Photo with Slow Parallax Zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={isActive ? { scale: 1.08 } : { scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={presentationData.heroImages.campus}
          alt="CIT Campus"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - College Intro */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            ACADEMIC PRESTIGE
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight">
            CHENNAI INSTITUTE <br />
            <span className="text-gradient-cyan">OF TECHNOLOGY</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Chennai Institute of Technology is a premier Autonomous Engineering Institution dedicated to nurturing industry-ready global engineers through world-class infrastructure and innovative pedagogy.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-lg font-bold text-amber-300 font-heading">NAAC 'A+'</div>
                <div className="text-xs text-slate-400">Highest Accreditation</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-3">
              <Award className="w-8 h-8 text-cyan-400 shrink-0" />
              <div>
                <div className="text-lg font-bold text-cyan-300 font-heading">NBA Accredited</div>
                <div className="text-xs text-slate-400">IT Tier-1 Status</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Department Profile */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <GlassCard className="space-y-5 border-cyan-500/30">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Department of IT</h3>
                <p className="text-xs text-cyan-400 font-medium">Centre of Academic & Technological Excellence</p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Industry 4.0 aligned curriculum updating rapidly with AI, Cloud, Cyber & DevOps.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Specialized Industry Centers of Excellence (CoE) supported by tech leaders.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dedicated Hackathon & Incubation cell driving top national prize wins.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>95%+ Placement Track Record with high package offers from global tech giants.</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
