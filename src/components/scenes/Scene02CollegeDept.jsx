import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { LedgerRow } from '../ui/LedgerRow';

export const Scene02CollegeDept = ({ isActive }) => {
  return (
    <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12">
      {/* Left: the record, set on ink */}
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="lg:col-span-7 flex flex-col justify-center px-8 md:px-16 py-16 gap-10"
      >
        <SceneHeader folio="02 / 14" kicker="Academic Prestige" title="Chennai Institute of Technology" tone="oxblood" />

        <motion.p variants={fadeUp} className="font-body text-parchment-dim text-lg md:text-xl leading-relaxed max-w-lg">
          A premier autonomous engineering institution dedicated to nurturing industry-ready
          global engineers through rigorous pedagogy and world-class infrastructure.
        </motion.p>

        <motion.div variants={fadeUp} className="max-w-lg">
          <LedgerRow label="Institutional Standing" value="NAAC 'A+'" note="Highest Grade" tone="oxblood" />
          <LedgerRow label="Programme Accreditation" value="NBA" note="IT — Tier 1" tone="sapphire" />
          <LedgerRow label="Batch Placement Record" value="95.4%" tone="brass" />
        </motion.div>
      </motion.div>

      {/* Right: department profile on a photographic plate */}
      <div className="lg:col-span-5 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-line min-h-[40vh] lg:min-h-0">
        <img
          src={presentationData.heroImages.campus}
          alt="CIT Campus"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'grayscale(0.5) brightness(0.42) contrast(1.05) sepia(0.15)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        <motion.div
          variants={stage}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
          className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 gap-4"
        >
          <motion.span variants={fadeUp} className="font-mono text-sm tracking-[0.2em] uppercase font-medium text-brass-soft">
            Department Profile
          </motion.span>
          <motion.ul variants={fadeUp} className="font-body text-parchment text-base md:text-lg leading-relaxed space-y-3 max-w-sm">
            <li className="border-l-2 border-brass pl-4">Industry 4.0 curriculum spanning AI, Cloud, Cyber &amp; DevOps.</li>
            <li className="border-l-2 border-oxblood pl-4">Four specialised Centres of Excellence, industry-partnered.</li>
            <li className="border-l-2 border-verdigris pl-4">A dedicated Hackathon &amp; Incubation cell driving national wins.</li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};
