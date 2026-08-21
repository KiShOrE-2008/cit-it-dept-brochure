import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from '../ui/MaskReveal';

// Formal Cover Scene for the Parents & Teachers' Meeting 2026.
export const Scene01Welcome = ({ isActive, onStartClick }) => (
  <div className="relative w-full h-full overflow-hidden">
    <motion.div
      variants={stage}
      initial="hidden"
      animate={isActive ? 'show' : 'hidden'}
      className="relative z-10 h-full flex flex-col items-center justify-center text-center px-7 md:px-16 py-8 gap-4 md:gap-5 max-w-4xl mx-auto"
    >
      {/* The institution logo */}
      <motion.img
        variants={fadeUp}
        src={presentationData.heroImages.logo}
        alt="Chennai Institute of Technology"
        className="h-14 md:h-18 w-auto rounded-[7px]"
      />

      {/* Top Label / Kicker */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <motion.span variants={drawRule} className="h-[3px] w-8 origin-left bg-brass" />
        <span className="font-mono text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-brass-bright">
          PARENTS&apos; &amp; TEACHERS&apos; MEETING · 2026
        </span>
        <motion.span variants={drawRule} className="h-[3px] w-8 origin-right bg-brass" />
      </motion.div>

      {/* Main Heading */}
      <h1 className="font-display font-semibold text-parchment leading-[1.05] tracking-[-0.015em] text-[2.4rem] md:text-6xl lg:text-7xl">
        <MaskReveal as="span" className="block">
          <span className="gilt">Welcome</span>
        </MaskReveal>
        <MaskReveal as="span" className="block">Parents &amp; Guardians</MaskReveal>
      </h1>

      {/* Main Paragraph */}
      <motion.p
        variants={fadeUp}
        className="font-body font-medium text-parchment text-base md:text-lg leading-relaxed max-w-3xl"
      >
        The Department of Information Technology, Chennai Institute of Technology, cordially welcomes all parents and guardians to the Parents’ &amp; Teachers’ Meeting 2026.
      </motion.p>

      {/* Supporting Paragraph */}
      <motion.p
        variants={fadeUp}
        className="font-body text-parchment-dim text-sm md:text-base leading-relaxed max-w-2xl"
      >
        This gathering provides an opportunity to reflect upon our students’ academic progress, achievements, learning experiences, and overall development, while strengthening the partnership between the institution and families.
      </motion.p>

      {/* Closing Line */}
      <motion.p
        variants={fadeUp}
        className="font-body font-semibold text-brass text-sm md:text-base tracking-wide max-w-xl"
      >
        We sincerely appreciate your presence and continued support.
      </motion.p>

      {/* Footer */}
      <motion.div variants={fadeUp} className="flex flex-col items-center gap-1 pt-1">
        <span className="font-institution font-bold uppercase tracking-[0.1em] text-parchment-dim text-xs md:text-sm">
          DEPARTMENT OF INFORMATION TECHNOLOGY
        </span>
        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-parchment-faint">
          CHENNAI INSTITUTE OF TECHNOLOGY
        </span>
      </motion.div>

      {/* Begin CTA */}
      <motion.div variants={fadeUp} className="pt-1">
        <button
          onClick={onStartClick}
          className="group flex items-center gap-3 font-mono text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-parchment hover:text-brass-bright transition-colors"
        >
          <span>Begin</span>
          <motion.span
            variants={drawRule}
            className="h-px w-10 origin-left bg-current transition-[width] duration-300 group-hover:w-16"
          />
        </button>
      </motion.div>
    </motion.div>
  </div>
);
