import React from 'react';
import { motion } from 'framer-motion';
import { academicToppers, positionsFor, computeTopperStats } from '../../data/academicToppers';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { Figure } from '../ui/Figure';

// Chapter ink: brass. Positions carry real meaning here — they are a rank —
// so the numeral is the structural device, and a position holding several
// students prints all of them against that one numeral rather than
// inventing a tie-break the results don't support.
const POSITION_INK = {
  1: { gpa: 'gilt', num: 'text-brass-bright', rule: 'bg-brass' },
  2: { gpa: 'text-sapphire-bright', num: 'text-sapphire-bright', rule: 'bg-sapphire' },
  3: { gpa: 'text-oxblood-bright', num: 'text-oxblood-bright', rule: 'bg-oxblood' }
};
const POSITION_REST = { gpa: 'text-parchment', num: 'text-parchment-faint', rule: 'bg-line-bright' };

const YearColumn = ({ group }) => {
  const positions = positionsFor(group, 10);
  const shown = positions.reduce((sum, p) => sum + p.students.length, 0);

  return (
    <motion.div variants={fadeUp} className="flex flex-col">
      {/* Year masthead */}
      <div className="flex items-baseline justify-between border-b-2 border-line-bright pb-2 mb-1">
        <div>
          <h3 className="font-display font-extrabold text-lg md:text-xl text-parchment leading-none">
            {group.label}
          </h3>
          <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-brass-bright mt-1.5">
            {group.tagline}
          </p>
        </div>
        <span className="font-mono text-xs font-semibold text-parchment-faint tabular-lining shrink-0">
          SEM {group.semester}
        </span>
      </div>

      {positions.map((pos) => {
        const ink = POSITION_INK[pos.position] || POSITION_REST;
        const isPodium = pos.position <= 3;

        return (
          <motion.div
            key={pos.position}
            variants={fadeUp}
            className={`flex gap-4 items-start border-b border-line ${isPodium ? 'py-2' : 'py-1.5'}`}
          >
            {/* Position numeral */}
            <div className="shrink-0 w-9 flex flex-col items-center gap-1.5 pt-0.5">
              <span
                className={`font-display font-extrabold tabular-lining leading-none ${
                  isPodium ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                } ${ink.num}`}
              >
                {pos.position}
              </span>
              <span className={`h-[3px] w-5 ${ink.rule}`} />
            </div>

            {/* Names at this position */}
            <div className="min-w-0 flex-1">
              {pos.students.map((s) => (
                <div key={s.regNo} className="flex items-baseline gap-2 leading-snug">
                  <span
                    className={`font-body font-semibold text-parchment ${
                      isPodium ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                    }`}
                  >
                    {s.name}
                  </span>
                  <span className="font-mono text-[10px] text-parchment-faint tabular-lining shrink-0">
                    {s.regNo}
                  </span>
                </div>
              ))}
                          </div>

            {/* GPA */}
            <span
              className={`shrink-0 font-display font-extrabold tabular-lining leading-none ${
                isPodium ? 'text-lg md:text-xl' : 'text-sm md:text-base'
              } ${ink.gpa}`}
            >
              {pos.gpa.toFixed(2)}
            </span>
          </motion.div>
        );
      })}

      <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-parchment-faint pt-2.5">
        {shown} students · top {positions.length} positions of {group.eligibleCount} with complete results
      </p>
    </motion.div>
  );
};

export const Scene04AcademicToppers = ({ isActive }) => {
  const stats = computeTopperStats();

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      <span className="folio-ghost absolute -top-[0.08em] right-2 md:right-10 text-[40vw] md:text-[24vw] text-brass/[0.09]">
        04
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 py-8 gap-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SceneHeader
            folio="04"
            kicker="Semester Result Analysis"
            title={['Academic', 'Toppers']}
            accentLine={1}
            tone="brass"
          />

          <Figure
            value={stats.highestGpa}
            decimals={2}
            label="Highest GPA"
            note={`${stats.highestGpaName} · ${stats.highestGpaYear} Year`}
            gilt
            size="lg"
            isActive={isActive}
            className="shrink-0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-7xl">
          {academicToppers.map((group) => (
            <YearColumn key={group.year} group={group} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
