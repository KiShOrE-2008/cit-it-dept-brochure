import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { Figure } from '../ui/Figure';

// Chapter ink: brass — the closing summary, so the page returns to gold.
// Every tile takes a different ink so the last thing a parent sees is the
// whole palette at once: the record's index page.
const TILE_INK = [
  'sapphire',
  'verdigris',
  'oxblood',
  'brass',
  'brass',
  'oxblood',
  'sapphire',
  'verdigris',
  'brass'
];

export const Scene08DepartmentGlance = ({ isActive }) => {
  const tiles = presentationData.departmentGlance;

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      <span className="folio-ghost absolute -top-[0.08em] right-2 md:right-10 text-[40vw] md:text-[24vw] text-brass/[0.09]">
        08
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 py-12 gap-9 max-w-7xl"
      >
        <SceneHeader
          folio="08"
          kicker="The Record in Summary"
          title={['Department', 'at a Glance']}
          accentLine={1}
          tone="brass"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-9 border-t-2 border-line-bright pt-9">
          {tiles.map((tile, idx) => {
            const ink = TILE_INK[idx % TILE_INK.length];
            const isHeadline = tile.label === 'Highest Placement Package';

            return (
              <Figure
                key={tile.label}
                value={tile.text ? tile.value : tile.numeric}
                prefix={tile.prefix || ''}
                suffix={tile.suffix || ''}
                decimals={tile.decimals || 0}
                label={tile.label}
                tone={ink}
                gilt={isHeadline}
                animate={!tile.text}
                size="sm"
                isActive={isActive}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
