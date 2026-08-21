import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';

const dotTones = ['bg-brass', 'bg-oxblood', 'bg-verdigris', 'bg-sapphire', 'bg-brass'];
const textTones = ['text-brass', 'text-oxblood-soft', 'text-verdigris-soft', 'text-sapphire-soft', 'text-brass'];

export const Scene06EventsTimeline = ({ isActive }) => {
  const events = presentationData.eventsTimeline;

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-14 max-w-6xl"
      >
        <SceneHeader folio="06 / 14" kicker="Academic Calendar" title="Events & the Timeline of Activity" tone="oxblood" />

        {/* A real timeline: one rule, five markers, alternating above/below */}
        <div className="hidden md:grid grid-cols-5 gap-4 relative pt-2">
          <motion.div variants={drawRule} className="absolute top-1/2 left-0 right-0 h-px bg-line origin-left" />
          {events.map((item, idx) => {
            const above = idx % 2 === 0;
            return (
              <motion.div key={item.quarter} variants={fadeUp} className="relative flex flex-col items-start">
                <div className={`flex flex-col gap-2 ${above ? 'order-1 pb-8' : 'order-3 pt-8'}`}>
                  <h4 className="font-display text-lg leading-snug text-parchment">{item.title}</h4>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{item.desc}</p>
                </div>
                <div className="order-2 relative w-full flex items-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${dotTones[idx % dotTones.length]}`} />
                </div>
                <div className={`${above ? 'order-3 pt-3' : 'order-1 pb-3'} font-mono text-sm tracking-[0.12em] uppercase font-medium ${textTones[idx % textTones.length]}`}>
                  {item.quarter}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: a plain chronological ledger */}
        <div className="md:hidden">
          {events.map((item, idx) => (
            <motion.div key={item.quarter} variants={fadeUp} className="py-4 border-t border-line last:border-b flex gap-4">
              <span className={`font-mono text-sm tracking-[0.12em] uppercase shrink-0 pt-0.5 w-16 ${textTones[idx % textTones.length]}`}>{item.quarter}</span>
              <div>
                <h4 className="font-display text-lg text-parchment">{item.title}</h4>
                <p className="font-body text-sm text-parchment-dim leading-relaxed mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
