import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';

const pillarTones = ['text-brass', 'text-oxblood-soft', 'text-verdigris-soft', 'text-sapphire-soft', 'text-brass-soft'];

export const Scene03VisionMission = ({ isActive }) => {
  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 gap-12 max-w-6xl"
      >
        <SceneHeader folio="03 / 14" kicker="Core Philosophy" title="Vision & Mission" tone="sapphire" />

        {/* Vision as a pull-quote, not a card */}
        <motion.blockquote variants={fadeUp} className="relative max-w-3xl border-l-2 border-brass pl-6 md:pl-8">
          <span className="absolute -left-2 -top-6 font-display italic text-6xl text-brass/50 select-none">&ldquo;</span>
          <p className="font-display italic text-xl md:text-3xl leading-snug text-parchment">
            {presentationData.vision.quote}
          </p>
        </motion.blockquote>

        {/* Five pillars — a genuine ordered set, kept as a numbered ledger list */}
        <div className="max-w-3xl">
          {presentationData.vision.pillars.map((pillar, idx) => (
            <motion.div key={pillar.id} variants={fadeUp} className="flex gap-6 md:gap-10 py-5 border-t border-line last:border-b">
              <span className={`font-mono text-base tabular-lining pt-1 shrink-0 w-8 ${pillarTones[idx % pillarTones.length]}`}>{pillar.id}</span>
              <div>
                <h4 className="font-display text-xl text-parchment mb-1.5">{pillar.title}</h4>
                <p className="font-body text-base text-parchment-dim leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
