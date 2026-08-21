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
  sm: 'text-4xl md:text-5xl',
  md: 'text-5xl md:text-6xl',
  lg: 'text-6xl md:text-7xl',
  xl: 'text-7xl md:text-8xl lg:text-9xl'
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
        className={`font-display font-extrabold leading-[0.85] tabular-lining ${sizes[size]} ${
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
        <div className="mt-3 font-mono text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-parchment-dim">
          {label}
        </div>
      )}
      {note && (
        <div className="mt-1 font-body text-sm text-parchment-faint">{note}</div>
      )}
    </motion.div>
  );
};
