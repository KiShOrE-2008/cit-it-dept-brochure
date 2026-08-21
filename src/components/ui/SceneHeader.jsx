import React from 'react';
import { motion } from 'framer-motion';
import { stage, fadeUp, drawRule } from '../../lib/motion';
import { MaskReveal } from './MaskReveal';

const tones = {
  brass: { rule: 'bg-brass', kicker: 'text-brass-bright', accent: 'text-brass-soft' },
  oxblood: { rule: 'bg-oxblood', kicker: 'text-oxblood-bright', accent: 'text-oxblood-soft' },
  verdigris: { rule: 'bg-verdigris', kicker: 'text-verdigris-bright', accent: 'text-verdigris-soft' },
  sapphire: { rule: 'bg-sapphire', kicker: 'text-sapphire-bright', accent: 'text-sapphire-soft' }
};

// The one recurring structural device: a drawn rule + mono kicker in this
// chapter's jewel ink, then a heavy display headline revealing line by line.
// `accentLine` gilds or inks a single line of the headline so the title
// itself carries the chapter colour rather than relying on a coloured chip.
export const SceneHeader = ({
  folio,
  kicker,
  title,
  lead,
  align = 'left',
  size = 'lg',
  tone = 'brass',
  accentLine = null
}) => {
  const lines = Array.isArray(title) ? title : [title];
  const isCenter = align === 'center';
  const t = tones[tone] || tones.brass;
  const titleSize =
    size === 'xl'
      ? 'text-5xl md:text-7xl lg:text-8xl'
      : 'text-4xl md:text-6xl lg:text-[4.25rem]';

  return (
    <motion.div
      variants={stage}
      className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        {folio && (
          <span className="font-mono text-sm font-semibold tracking-[0.25em] text-parchment-faint tabular-lining">
            {folio}
          </span>
        )}
        <motion.span variants={drawRule} className={`h-[4px] w-12 origin-left ${t.rule}`} />
        <span className={`font-mono text-sm md:text-base tracking-[0.24em] uppercase font-bold ${t.kicker}`}>
          {kicker}
        </span>
      </motion.div>

      <h2 className={`font-display font-extrabold text-parchment leading-[0.92] ${titleSize}`}>
        {lines.map((line, i) => (
          <MaskReveal key={i} as="span" className="block">
            <span className={i === accentLine ? t.accent : undefined}>{line}</span>
          </MaskReveal>
        ))}
      </h2>

      {lead && (
        <motion.p
          variants={fadeUp}
          className={`font-body font-medium text-parchment text-lg md:text-xl leading-relaxed ${
            isCenter ? 'max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
};
