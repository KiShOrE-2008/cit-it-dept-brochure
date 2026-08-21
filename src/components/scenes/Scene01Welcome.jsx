import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from '../ui/MaskReveal';

// Chapter ink: brass. The cover leaf, and the only page in the deck that is
// addressed to the room rather than about the department. It carries no
// statistics on purpose — the numbers start on the next page, and a greeting
// that opens with a placement figure is not a greeting.
//
// Centred, where every other scene is left-aligned: the change of axis is what
// marks this as the cover rather than a content page.
export const Scene01Welcome = ({ isActive, onStartClick }) => (
  <div className="relative w-full h-full overflow-hidden">
    <motion.div
      variants={stage}
      initial="hidden"
      animate={isActive ? 'show' : 'hidden'}
      className="relative z-10 h-full flex flex-col items-center justify-center text-center px-7 md:px-16 py-10 gap-6"
    >
      {/* The institution, in its own mark */}
      <motion.img
        variants={fadeUp}
        src={presentationData.heroImages.logo}
        alt="Chennai Institute of Technology"
        className="h-16 md:h-20 w-auto rounded-[7px]"
      />

      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <motion.span variants={drawRule} className="h-[3px] w-8 origin-left bg-brass" />
        <span className="font-mono text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-brass-bright">
          Parents&apos; &amp; Teachers&apos; Meeting · 2026
        </span>
        <motion.span variants={drawRule} className="h-[3px] w-8 origin-right bg-brass" />
      </motion.div>

      {/* The greeting */}
      <h1 className="font-display font-semibold text-parchment leading-[1.05] tracking-[-0.015em] text-[2.4rem] md:text-6xl lg:text-7xl">
        <MaskReveal as="span" className="block">
          <span className="gilt">Welcome</span>
        </MaskReveal>
        <MaskReveal as="span" className="block">to our parents and guardians</MaskReveal>
      </h1>

      <motion.p
        variants={fadeUp}
        className="font-body text-parchment text-base md:text-lg leading-relaxed max-w-2xl"
      >
        Thank you for making the time to be with us today. The Department of
        Information Technology is glad to have you here, and glad of the part you
        have played in getting your child this far.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="font-body text-parchment-dim text-sm md:text-base leading-relaxed max-w-xl"
      >
        What follows is an account of their year — the results they earned, the
        competitions they won, and the offers those have led to.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 pt-2">
        <span className="font-institution font-bold uppercase tracking-[0.02em] text-parchment-dim text-sm md:text-base">
          Department of Information Technology
        </span>
        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-parchment-faint">
          {presentationData.collegeName}
        </span>
      </motion.div>

      <motion.div variants={fadeUp} className="pt-2">
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
