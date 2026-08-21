import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from '../ui/MaskReveal';
import { Figure } from '../ui/Figure';

// Chapter ink: brass. The cover leaf.
//
// The institution is presented with its own mark, not a re-drawn one: the
// official yellow badge sits beside the college name set in the condensed
// grotesque of that badge (`font-institution`). Only the department name —
// the subject of this record — is set in the dossier's display serif, so
// the two identities stay visibly distinct instead of competing.
export const Scene01Welcome = ({ isActive, onStartClick }) => {
  // The badge is cropped from the official `cit_logo.jpeg` in Supabase storage
  // and committed locally, because that source file also carries the navy
  // wordmark beside the badge — which would be unreadable on ink and is set
  // in live type here instead. Regenerate with:
  //   ffmpeg -i cit_logo.jpeg -vf "crop=334:226:21:18,scale=668:452" cit_badge.png
  const badge = presentationData.heroImages.logo;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <span className="folio-ghost absolute -top-[0.06em] right-3 md:right-10 text-[34vw] md:text-[20vw] text-brass/[0.07]">
        01
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 h-full flex flex-col justify-center px-7 md:px-16 lg:px-24 py-10 gap-7 max-w-5xl"
      >
        {/* Institutional lockup — official badge + official wordmark */}
        <motion.div variants={fadeUp} className="flex items-center gap-5">
          <img
            src={badge}
            onError={(e) => {
              e.currentTarget.src = '/assets/cit_badge.png';
            }}
            alt="Chennai Institute of Technology"
            className="h-16 md:h-20 w-auto rounded-[7px] shrink-0"
          />
          <div className="font-institution font-bold uppercase text-parchment leading-[0.92] tracking-[0.01em] text-lg md:text-2xl">
            <div>Chennai</div>
            <div>Institute of Technology</div>
          </div>
        </motion.div>

        {/* Department — the subject of the record */}
        <div className="flex flex-col gap-3">
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] md:text-xs font-semibold tracking-[0.26em] uppercase text-brass-bright"
          >
            Parents&apos; Meeting · 2026
          </motion.span>

          <h1 className="font-display font-semibold text-parchment leading-[1.0] tracking-[-0.015em] text-[2.1rem] md:text-5xl lg:text-6xl">
            <MaskReveal as="span" className="block">Department of</MaskReveal>
            <MaskReveal as="span" className="block">
              <span className="gilt">Information Technology</span>
            </MaskReveal>
          </h1>

          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-parchment-dim"
          >
            {presentationData.collegeAccreditation}
          </motion.p>
        </div>

        {/* The address to the room. Spoken to the parents directly, and it
            says what the next eight minutes contain rather than thanking
            them in the abstract. */}
        <motion.div variants={fadeUp} className="flex gap-4 max-w-2xl">
          <span className="w-[3px] shrink-0 gilt-bar" />
          <p className="font-body text-parchment text-sm md:text-base leading-relaxed">
            <span className="font-display font-semibold text-brass-soft text-base md:text-lg">
              Welcome, and thank you for being here.
            </span>{' '}
            What follows is your child&apos;s year in this department, set down as a
            record — the results they earned, the competitions they won, and the
            offers those have led to.
          </p>
        </motion.div>

        {/* What the record shows */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-line pt-6"
        >
          <Figure value={95.4} decimals={1} suffix="%" label="Placement Success" tone="verdigris" size="sm" isActive={isActive} />
          <Figure value={58} prefix="₹" suffix=" LPA" label="Highest Package" gilt size="sm" isActive={isActive} />
          <Figure value={40} suffix="+" label="Hackathon Wins" tone="oxblood" size="sm" isActive={isActive} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <button
            onClick={onStartClick}
            className="group flex items-center gap-3 font-mono text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-parchment hover:text-brass-bright transition-colors"
          >
            <span>Begin the Record</span>
            <motion.span
              variants={drawRule}
              className="h-px w-10 origin-left bg-current transition-[width] duration-300 group-hover:w-16"
            />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
