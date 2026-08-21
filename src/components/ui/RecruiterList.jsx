import React from 'react';
import { motion } from 'framer-motion';
import { stage, fadeUp } from '../../lib/motion';

const cycle = ['text-brass', 'text-oxblood-soft', 'text-verdigris-soft', 'text-sapphire-soft'];

// Recruiting partners set as a running masthead line, the way a
// convocation program lists patrons — not a logo-cloud of cards. Each
// category ink cycles through the jewel palette for a colorful, but
// still typographic, roll call.
export const RecruiterList = ({ items = [] }) => (
  <motion.p variants={stage} className="flex flex-wrap items-baseline gap-x-1 gap-y-4 font-display text-xl md:text-2xl leading-relaxed text-parchment">
    {items.map((item, idx) => (
      <React.Fragment key={item.name}>
        <motion.span variants={fadeUp} className="inline-flex items-baseline gap-2 whitespace-nowrap">
          <span>{item.name}</span>
          <span className={`font-mono text-sm uppercase tracking-[0.12em] align-middle ${cycle[idx % cycle.length]}`}>
            {item.category}
          </span>
        </motion.span>
        {idx < items.length - 1 && (
          <span className="text-parchment-faint px-2 select-none">·</span>
        )}
      </React.Fragment>
    ))}
  </motion.p>
);
