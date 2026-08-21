import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { SceneHeader } from '../ui/SceneHeader';
import { stage, fadeUp } from '../../lib/motion';

export const Scene13StudentCare = ({ isActive }) => {
  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="13 / 14" kicker="Nurturing Young Minds" title={['Parent-Institution', 'Partnership']} tone="sapphire" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.p variants={fadeUp} className="lg:col-span-4 font-body text-parchment-dim text-lg md:text-xl leading-relaxed">
            Every student's academic and personal growth is tracked as closely as their
            grades — through structured mentorship, honest progress reporting, and a
            direct line back to you.
          </motion.p>

          <div className="lg:col-span-8">
            {presentationData.studentCare.map((item, idx) => (
              <motion.div key={item.title} variants={fadeUp} className="flex gap-6 py-5 border-t border-line last:border-b">
                <span className="font-mono text-base text-sapphire-soft tabular-lining pt-1 shrink-0 w-8">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-display text-xl text-parchment">{item.title}</h4>
                  <p className="font-body text-base text-parchment-dim leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
