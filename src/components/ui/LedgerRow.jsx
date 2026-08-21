import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

// A single entry in a ledger: label set left in tracked mono caps,
// figure set right in tabular numerals. Used instead of icon-card
// grids for anything that is fundamentally a record, not a feature.
export const LedgerRow = ({ label, value, note, tone = 'parchment' }) => {
  const valueColor = {
    parchment: 'text-parchment',
    brass: 'text-brass-soft',
    oxblood: 'text-oxblood-soft',
    verdigris: 'text-verdigris-soft',
    sapphire: 'text-sapphire-soft',
  }[tone];

  return (
    <motion.div variants={fadeUp} className="ledger-row">
      <span className="font-mono text-sm md:text-base tracking-[0.12em] uppercase text-parchment-dim max-w-[60%]">
        {label}
      </span>
      <span className={`font-display text-2xl md:text-3xl tabular-lining ${valueColor}`}>
        {value}
        {note && <span className="ml-2 font-mono text-sm tracking-wider text-parchment-faint align-middle">{note}</span>}
      </span>
    </motion.div>
  );
};
