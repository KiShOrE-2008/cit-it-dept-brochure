import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';
import { AnimatedCounter } from './AnimatedCounter';

// A struck figure: the number set large in display serif over a tracked mono
// label. `gilt` applies real gold leaf and is reserved for the single most
// important figure in a scene — the rest of the row takes a jewel ink so the
// hierarchy is visible from the back of a hall.
const tones = {
  parchment: 'text-parchment',
  brass: 'text-brass-bright',
  oxblood: 'text-oxblood-bright',
  verdigris: 'text-verdigris-bright',
  sapphire: 'text-sapphire-bright'
};

const sizes = {
  sm: 'text-2xl md:text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
  xl: 'text-5xl md:text-6xl lg:text-7xl'
};

export const Figure = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  note,
  tone = 'parchment',
  size = 'md',
  gilt = false,
  animate = true,
  isActive = true,
  className = ''
}) => {
  const numeric = typeof value === 'number';

  return (
    <motion.div variants={fadeUp} className={className}>
      <div
        className={`font-display font-semibold leading-[0.9] tabular-lining ${sizes[size]} ${
          gilt ? 'gilt' : tones[tone] || tones.parchment
        }`}
      >
        {numeric && animate ? (
          <AnimatedCounter
            end={value}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            isActive={isActive}
          />
        ) : (
          `${prefix}${value}${suffix}`
        )}
      </div>

      {label && (
        <div className="mt-2 font-mono text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase text-parchment-dim">
          {label}
        </div>
      )}
      {note && (
        <div className="mt-1 font-body text-xs text-parchment-faint">{note}</div>
      )}
    </motion.div>
  );
};
