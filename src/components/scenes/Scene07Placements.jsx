import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { RecruiterList } from '../ui/RecruiterList';
import { SceneHeader } from '../ui/SceneHeader';
import { stage, fadeUp } from '../../lib/motion';

export const Scene07Placements = ({ isActive }) => {
  const p = presentationData.placements;

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-12 max-w-6xl"
      >
        <SceneHeader folio="07 / 14" kicker="Career & Recruitment" title="Placement Excellence" tone="verdigris" />

        {/* A scoreboard line: three figures of deliberately unequal weight */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-baseline gap-x-12 gap-y-6 border-y border-line py-8">
          <div>
            <div className="font-display text-6xl md:text-7xl text-verdigris-soft tabular-lining">
              <AnimatedCounter end={95.4} decimals={1} suffix="%" isActive={isActive} />
            </div>
            <div className="font-mono text-sm tracking-[0.15em] uppercase text-parchment-dim mt-2">Placement Success</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-brass-soft tabular-lining">
              ₹<AnimatedCounter end={52} suffix=" LPA" isActive={isActive} />
            </div>
            <div className="font-mono text-sm tracking-[0.15em] uppercase text-parchment-dim mt-2">Highest CTC</div>
          </div>
          <div>
            <div className="font-display text-4xl md:text-5xl text-oxblood-soft tabular-lining">
              ₹<AnimatedCounter end={8.5} decimals={1} suffix=" LPA" isActive={isActive} />
            </div>
            <div className="font-mono text-sm tracking-[0.15em] uppercase text-parchment-dim mt-2">Average CTC</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Sector breakdown as a ledger, not a bar chart widget */}
          <motion.div variants={fadeUp} className="md:col-span-5">
            <span className="font-mono text-sm tracking-[0.15em] uppercase font-medium text-verdigris-soft block mb-2">By Sector</span>
            {p.sectors.map((s) => (
              <div key={s.name} className="ledger-row">
                <span className="font-body text-base text-parchment-dim">{s.name}</span>
                <span className="font-mono text-base text-parchment tabular-lining">{s.pct}%</span>
              </div>
            ))}
          </motion.div>

          {/* Recruiting partners as a masthead */}
          <motion.div variants={fadeUp} className="md:col-span-7">
            <span className="font-mono text-sm tracking-[0.15em] uppercase font-medium text-verdigris-soft block mb-3">Recruiting Partners</span>
            <RecruiterList items={p.recruiters} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
