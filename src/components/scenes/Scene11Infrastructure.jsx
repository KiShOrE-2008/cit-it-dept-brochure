import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { SceneHeader } from '../ui/SceneHeader';
import { stage, fadeUp } from '../../lib/motion';

export const Scene11Infrastructure = ({ isActive }) => {
  return (
    <div className="relative w-full h-full overflow-y-auto">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <img src={presentationData.heroImages.lab} alt="" className="w-full h-full object-cover grayscale" />
      </div>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="11 / 14" kicker="State of the Art Facilities" title="Centres of Excellence" tone="verdigris" />

        <div>
          {presentationData.infrastructure.map((coe, idx) => {
            const tone = ['text-brass/60', 'text-oxblood/60', 'text-verdigris/60', 'text-sapphire/60'][idx % 4];
            return (
              <motion.div
                key={coe.name}
                variants={fadeUp}
                className={`flex flex-col md:flex-row gap-3 md:gap-10 py-6 border-t border-line last:border-b ${
                  idx % 2 === 1 ? 'md:pl-16' : ''
                }`}
              >
                <span className={`font-display text-4xl tabular-lining shrink-0 w-16 ${tone}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="max-w-xl">
                  <h3 className="font-display text-xl md:text-2xl text-parchment">{coe.name}</h3>
                  <p className="font-body text-base text-parchment-dim leading-relaxed mt-2">{coe.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
