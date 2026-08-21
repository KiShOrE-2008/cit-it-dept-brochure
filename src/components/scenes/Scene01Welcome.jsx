import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from '../ui/MaskReveal';

export const Scene01Welcome = ({ isActive, onStartClick }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Oversized folio numeral bleeding off the top edge — the dossier's cover leaf */}
      <span className="pointer-events-none absolute -top-[0.14em] right-4 md:right-16 font-display text-[42vw] md:text-[26vw] leading-none text-brass/[0.09] select-none">
        01
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 lg:px-28 max-w-5xl"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <img
            src={presentationData.heroImages.logo}
            alt="CIT IT Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="h-8 w-px bg-line" />
          <span className="font-mono text-sm tracking-[0.25em] uppercase font-medium text-brass">
            Parents&apos; Meeting · 2026
          </span>
        </motion.div>

        <h1 className="font-display font-medium text-parchment leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
          <MaskReveal className="block">Department of</MaskReveal>
          <MaskReveal className="block italic text-brass-soft">Information Technology</MaskReveal>
        </h1>

        <motion.p variants={fadeUp} className="mt-8 font-body text-lg md:text-xl text-parchment-dim max-w-2xl leading-relaxed">
          {presentationData.collegeName} — {presentationData.collegeTagline.toLowerCase()}.
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 font-mono text-sm tracking-[0.12em] uppercase text-oxblood-soft">
          {presentationData.collegeAccreditation}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-14 flex items-center gap-4">
          <button
            onClick={onStartClick}
            className="group flex items-center gap-3 font-mono text-sm tracking-[0.18em] uppercase text-parchment hover:text-brass transition-colors"
          >
            <span>Begin the Record</span>
            <motion.span variants={drawRule} className="h-px w-10 origin-left bg-current group-hover:w-14 transition-[width] duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
