import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { getAssetImageUrl } from '../../services/dataService';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from '../ui/MaskReveal';
import { Figure } from '../ui/Figure';

// Chapter ink: brass. The cover leaf of the record, so the department's
// name is the one thing struck in gold.
export const Scene01Welcome = ({ isActive, onStartClick }) => {
  const logoImage = getAssetImageUrl('cit_logo.png', presentationData.heroImages.logo);

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      {/* Oversized folio numeral bleeding off the top edge */}
      <span className="folio-ghost absolute -top-[0.1em] right-2 md:right-10 text-[44vw] md:text-[27vw] text-brass/[0.10]">
        01
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 lg:px-24 py-12 gap-9 max-w-6xl"
      >
        {/* Masthead */}
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <img
            src={logoImage}
            onError={(e) => {
              e.currentTarget.src = presentationData.heroImages.logo;
            }}
            alt="CIT Department of Information Technology"
            className="w-14 h-14 object-contain"
          />
          <div className="h-10 w-px bg-line-bright" />
          <span className="font-mono text-sm md:text-base font-bold tracking-[0.26em] uppercase text-brass-bright">
            Parents&apos; Meeting · 2026
          </span>
        </motion.div>

        {/* The proclamation */}
        <h1 className="font-display font-extrabold text-parchment leading-[0.88] text-[3.25rem] md:text-8xl lg:text-9xl">
          <MaskReveal as="span" className="block">Department of</MaskReveal>
          <MaskReveal as="span" className="block">
            <span className="gilt">Information Technology</span>
          </MaskReveal>
        </h1>

        <motion.div variants={fadeUp} className="flex flex-col gap-2 max-w-2xl">
          <p className="font-body font-medium text-xl md:text-2xl text-parchment leading-relaxed">
            {presentationData.collegeName}
          </p>
          <p className="font-mono text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-oxblood-bright">
            {presentationData.collegeAccreditation}
          </p>
        </motion.div>

        {/* What the record shows — the hook for a parent reading from a seat */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-end gap-x-14 gap-y-8 border-t-2 border-line-bright pt-8"
        >
          <Figure
            value={95.4}
            decimals={1}
            suffix="%"
            label="Placement Success"
            tone="verdigris"
            size="md"
            isActive={isActive}
          />
          <Figure
            value={58}
            prefix="₹"
            suffix=" LPA"
            label="Highest Package"
            gilt
            size="md"
            isActive={isActive}
          />
          <Figure
            value={40}
            suffix="+"
            label="Hackathon Wins"
            tone="oxblood"
            size="md"
            isActive={isActive}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <button
            onClick={onStartClick}
            className="group flex items-center gap-3 font-mono text-sm md:text-base font-bold tracking-[0.2em] uppercase text-parchment hover:text-brass-bright transition-colors"
          >
            <span>Begin the Record</span>
            <motion.span
              variants={drawRule}
              className="h-[3px] w-12 origin-left bg-current transition-[width] duration-300 group-hover:w-20"
            />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
