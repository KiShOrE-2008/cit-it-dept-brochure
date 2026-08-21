import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';

export const Scene08Internships = ({ isActive }) => {
  const data = presentationData.internships;

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="08 / 14" kicker="Real World Experience" title="Internships & Industry Exposure" tone="brass" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-mono text-sm tracking-[0.15em] uppercase text-parchment-dim">Highest Stipend</span>
              <div className="font-display text-4xl md:text-5xl text-brass-soft mt-1">{data.stipendHighest}</div>
            </div>
            <div>
              <span className="font-mono text-sm tracking-[0.15em] uppercase text-parchment-dim">Average Stipend</span>
              <div className="font-display text-2xl md:text-3xl text-parchment mt-1">{data.stipendAvg}</div>
            </div>

            <div className="pt-4 border-t border-line">
              <span className="font-mono text-sm tracking-[0.15em] uppercase font-medium text-brass block mb-3">Placement Partners</span>
              <p className="font-body text-base text-parchment-dim leading-loose">
                {data.partners.join(' · ')}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 lg:pl-10 lg:border-l border-line">
            <h3 className="font-display text-xl text-parchment mb-4">Key Industry Exposure Initiatives</h3>
            <div>
              {data.features.map((feat) => (
                <div key={feat} className="flex items-start gap-4 py-3.5 border-t border-line last:border-b">
                  <span className="w-4 h-[3px] bg-brass mt-3 shrink-0" />
                  <p className="font-body text-base md:text-lg text-parchment-dim leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
