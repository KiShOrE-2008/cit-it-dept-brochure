import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { MaskReveal } from '../ui/MaskReveal';

export const Scene14ThankYou = ({ isActive }) => {
  const c = presentationData.contact;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <span className="pointer-events-none absolute -bottom-[0.1em] left-4 md:left-16 font-display text-[38vw] md:text-[22vw] leading-none text-oxblood/[0.08] select-none">
        14
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 lg:px-28 max-w-4xl gap-8"
      >
        <img src={presentationData.heroImages.logo} alt="CIT IT Logo" className="w-11 h-11 object-contain" />

        <h1 className="font-display font-medium leading-[0.92] text-6xl md:text-8xl text-parchment">
          <MaskReveal className="block">Thank You</MaskReveal>
        </h1>

        <motion.p variants={fadeUp} className="font-display italic text-2xl md:text-3xl text-brass-soft">
          Together, we inspire. Together, we achieve.
        </motion.p>

        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 border-t border-line pt-6 max-w-2xl">
          <div className="ledger-row sm:col-span-2">
            <span className="font-mono text-sm uppercase tracking-wider text-parchment-dim">Head of Department</span>
            <span className="font-display text-xl text-parchment text-right">{c.hodName}</span>
          </div>
          <div className="ledger-row">
            <span className="font-mono text-sm uppercase tracking-wider text-parchment-dim">Email</span>
            <span className="font-mono text-base text-oxblood-soft">{c.email}</span>
          </div>
          <div className="ledger-row">
            <span className="font-mono text-sm uppercase tracking-wider text-parchment-dim">Phone</span>
            <span className="font-mono text-base text-oxblood-soft">{c.phone}</span>
          </div>
          <div className="ledger-row sm:col-span-2">
            <span className="font-mono text-sm uppercase tracking-wider text-parchment-dim">Address</span>
            <span className="font-body text-base text-parchment-dim text-right max-w-xs">{c.address}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
