import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp, drawRuleV } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';

// Chapter ink: verdigris. The vision is the department's own words, so it
// gets the largest passage on the page. The five mission statements are a
// genuine numbered set — the numerals carry the count, not decoration.
const MISSION_INKS = [
  'text-brass-bright',
  'text-oxblood-bright',
  'text-verdigris-bright',
  'text-sapphire-bright',
  'text-brass-bright'
];

const MISSION_RULES = ['bg-brass', 'bg-oxblood', 'bg-verdigris', 'bg-sapphire', 'bg-brass'];

export const Scene03VisionMission = ({ isActive }) => {
  const { quote, mission } = presentationData.vision;

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      <span className="folio-ghost absolute -top-[0.08em] right-2 md:right-10 text-[40vw] md:text-[24vw] text-verdigris/[0.08]">
        03
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 py-8 gap-6 max-w-6xl"
      >
        <SceneHeader folio="03" kicker="What We Stand For" title="Vision & Mission" tone="verdigris" />

        {/* The vision, set as the largest passage on the page */}
        <motion.blockquote variants={fadeUp} className="relative pl-6 md:pl-8 max-w-4xl">
          <motion.span
            variants={drawRuleV}
            className="absolute left-0 top-0 bottom-0 w-[5px] origin-top gilt-bar"
          />
          <p className="font-display font-bold text-parchment text-base md:text-xl lg:text-2xl leading-[1.35]">
            {quote}
          </p>
        </motion.blockquote>

        {/* The five mission statements */}
        <motion.div variants={fadeUp} className="flex flex-col max-w-5xl">
          <div className="font-mono text-sm font-bold tracking-[0.22em] uppercase text-verdigris-bright pb-2">
            Our Mission
          </div>

          {mission.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="flex gap-4 md:gap-5 items-start py-2.5 border-t border-line last:border-b"
            >
              <span
                className={`shrink-0 font-display font-extrabold text-xl md:text-2xl tabular-lining leading-none ${MISSION_INKS[idx]}`}
              >
                {item.id}
              </span>
              <span className={`shrink-0 mt-2 hidden md:block h-[2px] w-8 ${MISSION_RULES[idx]}`} />
              <p className="font-body font-medium text-parchment text-xs md:text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
