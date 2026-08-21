import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

// A single entry in a ledger: label set left in tracked mono caps,
// figure set right in tabular numerals. Used instead of icon-card
// grids for anything that is fundamentally a record, not a feature.
export const LedgerRow = ({ label, value, note, tone = 'parchment' }) => {
  const valueColor = {
    parchment: 'text-parchment',
    brass: 'text-brass-bright',
    oxblood: 'text-oxblood-bright',
    verdigris: 'text-verdigris-bright',
    sapphire: 'text-sapphire-bright',
    gilt: 'gilt',
  }[tone];

  return (
    <motion.div variants={fadeUp} className="ledger-row">
      <span className="font-mono text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-parchment-dim max-w-[55%]">
        {label}
      </span>
      <span className={`font-display font-semibold text-xl md:text-2xl tabular-lining ${valueColor}`}>
        {value}
        {note && <span className="ml-2 font-mono text-sm font-semibold tracking-wider text-parchment-faint align-middle">{note}</span>}
      </span>
    </motion.div>
  );
};
