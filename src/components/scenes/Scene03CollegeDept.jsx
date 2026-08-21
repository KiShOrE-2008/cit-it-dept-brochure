import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { LedgerRow } from '../ui/LedgerRow';

// Chapter ink: sapphire. Institution on the left as a record, the campus
// on the right as a plate — the two halves of a dossier spread.
export const Scene03CollegeDept = ({ isActive }) => {
  const campusImage = presentationData.heroImages.campus;

  return (
    <div className="relative w-full min-h-full grid grid-cols-1 lg:grid-cols-12">
      {/* Left: the record */}
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="lg:col-span-7 flex flex-col justify-center px-7 md:px-16 py-12 md:py-16 gap-8"
      >
        <SceneHeader
          folio="03"
          kicker="The Institution"
          title={['Chennai Institute', 'of Technology']}
          accentLine={1}
          tone="sapphire"
        />

        <motion.p
          variants={fadeUp}
          className="font-body font-medium text-parchment text-lg md:text-xl leading-relaxed max-w-xl"
        >
          An autonomous institution training industry-ready engineers, with the Department of
          Information Technology carrying a curriculum built around AI, cloud, security and
          full-stack engineering.
        </motion.p>

        <motion.div variants={fadeUp} className="max-w-xl">
          <LedgerRow label="Institutional Grade" value="NAAC A+" note="Highest" tone="sapphire" />
          <LedgerRow label="Programme Accreditation" value="NBA" note="IT" tone="verdigris" />
          <LedgerRow label="Batch Placement Record" value="95.4%" tone="gilt" />
        </motion.div>
      </motion.div>

      {/* Right: photographic plate */}
      <div className="lg:col-span-5 relative overflow-hidden border-t-2 lg:border-t-0 lg:border-l-2 border-line-bright min-h-[38vh] lg:min-h-0">
        <img
          src={campusImage}
          alt="Chennai Institute of Technology Campus Aerial View"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.82) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

        <motion.div
          variants={stage}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
          className="relative z-10 h-full flex flex-col justify-end p-7 md:p-10 gap-5"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-sm font-bold tracking-[0.22em] uppercase text-brass-bright"
          >
            Department Profile
          </motion.span>

          <motion.ul variants={fadeUp} className="font-body text-parchment text-base md:text-lg font-medium leading-relaxed space-y-4 max-w-sm">
            <li className="border-l-4 border-brass pl-4">
              Industry 4.0 curriculum spanning AI, cloud, cyber security and DevOps.
            </li>
            <li className="border-l-4 border-oxblood pl-4">
              Four specialised Centres of Excellence, each industry-partnered.
            </li>
            <li className="border-l-4 border-verdigris pl-4">
              A dedicated hackathon and incubation cell behind the national wins.
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};
