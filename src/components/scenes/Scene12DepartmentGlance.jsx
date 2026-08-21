import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { SceneHeader } from '../ui/SceneHeader';
import { LedgerRow } from '../ui/LedgerRow';
import { stage, fadeUp } from '../../lib/motion';

export const Scene12DepartmentGlance = ({ isActive }) => {
  const items = presentationData.departmentGlance;
  const left = items.slice(0, 4);
  const right = items.slice(4);

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="12 / 14" kicker="30-Second Summary" title="Department at a Glance" tone="brass" />

        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
          <div>{left.map((item) => <LedgerRow key={item.label} label={item.label} value={item.value} tone="oxblood" />)}</div>
          <div>{right.map((item) => <LedgerRow key={item.label} label={item.label} value={item.value} tone="brass" />)}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};
