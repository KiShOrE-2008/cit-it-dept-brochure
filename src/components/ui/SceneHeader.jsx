import React from 'react';
import { motion } from 'framer-motion';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from './MaskReveal';

const tones = {
  brass: 'bg-brass text-brass',
  oxblood: 'bg-oxblood text-oxblood-soft',
  verdigris: 'bg-verdigris text-verdigris-soft',
  sapphire: 'bg-sapphire text-sapphire-soft',
};

// Shared masthead used across the content scenes: a drawn rule + mono
// kicker in a jewel ink, then a display-serif headline that reveals
// line by line. This is the one recurring structural device —
// everything else in a scene composes around it, so the choreography
// never has to be reinvented per scene. `tone` varies the ink per
// scene, like chapters lit by different stained glass.
export const SceneHeader = ({ folio, kicker, title, lead, align = 'left', size = 'lg', tone = 'brass' }) => {
  const lines = Array.isArray(title) ? title : [title];
  const isCenter = align === 'center';
  const [ruleColor, kickerColor] = tones[tone].split(' ');
  const titleSize = size === 'xl'
    ? 'text-5xl md:text-7xl lg:text-8xl'
    : 'text-4xl md:text-6xl lg:text-7xl';

  return (
    <motion.div
      variants={stage}
      className={`flex flex-col gap-5 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        {folio && (
          <span className="font-mono text-sm tracking-[0.25em] text-parchment-dim tabular-lining">
            {folio}
          </span>
        )}
        <motion.span variants={drawRule} className={`h-[3px] w-9 origin-left ${ruleColor}`} />
        <span className={`font-mono text-sm tracking-[0.25em] uppercase font-medium ${kickerColor}`}>
          {kicker}
        </span>
      </motion.div>

      <h2 className={`font-display font-medium text-parchment leading-[0.96] ${titleSize}`}>
        {lines.map((line, i) => (
          <MaskReveal key={i} as="span" className={isCenter ? 'block' : 'block'}>
            {line}
          </MaskReveal>
        ))}
      </h2>

      {lead && (
        <motion.p
          variants={fadeUp}
          className={`font-body text-parchment-dim text-lg md:text-xl leading-relaxed ${isCenter ? 'max-w-2xl' : 'max-w-xl'}`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
};
