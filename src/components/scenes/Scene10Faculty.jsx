import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { SceneHeader } from '../ui/SceneHeader';
import { stage, fadeUp } from '../../lib/motion';

export const Scene10Faculty = ({ isActive }) => {
  const fac = presentationData.faculty;

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="10 / 14" kicker="Academic Leadership" title="Faculty Excellence & Research" tone="oxblood" />

        <motion.div variants={fadeUp} className="flex flex-wrap gap-x-10 gap-y-5 border-y border-line py-6">
          {fac.stats.map((stat, idx) => {
            const tone = ['text-brass-soft', 'text-oxblood-soft', 'text-verdigris-soft', 'text-sapphire-soft'][idx % 4];
            return (
              <div key={stat.label}>
                <div className={`font-display text-2xl md:text-3xl ${tone}`}>{stat.value}</div>
                <div className="font-mono text-sm uppercase tracking-wider text-parchment-dim mt-1">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* A who's who register, not a card grid */}
        <div>
          {fac.highlights.map((item, idx) => (
            <motion.div key={item.title} variants={fadeUp} className="flex gap-6 md:gap-10 py-5 border-b border-line first:border-t">
              <span className="font-mono text-base text-oxblood-soft tabular-lining pt-1 shrink-0 w-8">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-display text-xl text-parchment">{item.title}</h4>
                <p className="font-body text-base text-parchment-dim leading-relaxed mt-1 max-w-2xl">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
