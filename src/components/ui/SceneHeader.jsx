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
      ? 'text-4xl md:text-5xl lg:text-6xl'
      : 'text-3xl md:text-4xl lg:text-5xl';

  return (
    <motion.div
      variants={stage}
      className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        {folio && (
          <span className="font-mono text-[11px] font-medium tracking-[0.25em] text-parchment-faint tabular-lining">
            {folio}
          </span>
        )}
        <motion.span variants={drawRule} className={`h-[3px] w-10 origin-left ${t.rule}`} />
        <span className={`font-mono text-[11px] md:text-xs tracking-[0.24em] uppercase font-semibold ${t.kicker}`}>
          {kicker}
        </span>
      </motion.div>

      <h2 className={`font-display font-semibold text-parchment leading-[1.02] tracking-[-0.01em] ${titleSize}`}>
        {lines.map((line, i) => (
          <MaskReveal key={i} as="span" className="block">
            <span className={i === accentLine ? t.accent : undefined}>{line}</span>
          </MaskReveal>
        ))}
      </h2>

      {lead && (
        <motion.p
          variants={fadeUp}
          className={`font-body text-parchment-dim text-sm md:text-base leading-relaxed ${
            isCenter ? 'max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
};
