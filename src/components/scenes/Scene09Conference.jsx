import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { GlobeVisual } from '../ui/GlobeVisual';
import { SceneHeader } from '../ui/SceneHeader';
import { stage, fadeUp } from '../../lib/motion';

export const Scene09Conference = ({ isActive }) => {
  const conf = presentationData.conference;

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader
          folio="09 / 14"
          kicker="Global Research & Scholarship"
          title={['International Conference', 'on Computing & IT']}
          tone="sapphire"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div variants={fadeUp} className="lg:col-span-5 h-[300px] border border-line bg-ink-deep/40">
            <GlobeVisual />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
              <div>
                <div className="font-display text-3xl text-brass-soft tabular-lining">{conf.stats.papersSubmitted}</div>
                <div className="font-mono text-sm uppercase tracking-wider text-parchment-dim mt-1">Papers Submitted</div>
              </div>
              <div>
                <div className="font-display text-3xl text-sapphire-soft tabular-lining">{conf.stats.papersAccepted}</div>
                <div className="font-mono text-sm uppercase tracking-wider text-parchment-dim mt-1">Scopus Accepted</div>
              </div>
              <div>
                <div className="font-display text-3xl text-verdigris-soft tabular-lining">{conf.stats.countries}</div>
                <div className="font-mono text-sm uppercase tracking-wider text-parchment-dim mt-1">Nations</div>
              </div>
              <div>
                <div className="font-display text-3xl text-oxblood-soft tabular-lining">{conf.stats.keynotes}</div>
                <div className="font-mono text-sm uppercase tracking-wider text-parchment-dim mt-1">Keynotes</div>
              </div>
            </div>

            <div className="border-t border-line pt-5">
              {conf.highlights.map((h) => (
                <p key={h} className="font-body text-base text-parchment-dim leading-relaxed py-2 flex gap-3">
                  <span className="text-sapphire shrink-0">—</span>{h}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
