import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { placementsData, getTopCompanies, formatPackage } from '../../data/placements';
import { getPlacementsData } from '../../services/dataService';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { Figure } from '../ui/Figure';
import { CompanyLogo } from '../ui/CompanyLogo';

// Chapter ink: verdigris.
// This scene reports company-level outcomes only. Individual student names and
// register numbers are intentionally never rendered here.
const CARD_INK = ['brass', 'oxblood', 'verdigris', 'sapphire', 'brass'];

const INK = {
  brass: { text: 'text-brass-bright', rule: 'bg-brass', border: 'border-brass/50' },
  oxblood: { text: 'text-oxblood-bright', rule: 'bg-oxblood', border: 'border-oxblood/50' },
  verdigris: { text: 'text-verdigris-bright', rule: 'bg-verdigris', border: 'border-verdigris/50' },
  sapphire: { text: 'text-sapphire-bright', rule: 'bg-sapphire', border: 'border-sapphire/50' }
};

export const Scene08Placements = ({ isActive }) => {
  const [records, setRecords] = useState(placementsData);

  useEffect(() => {
    let cancelled = false;
    getPlacementsData()
      .then((rows) => {
        if (!cancelled && Array.isArray(rows) && rows.length) setRecords(rows);
      })
      .catch(() => {
        /* dataService already falls back to the local dataset */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const topCompanies = getTopCompanies(5, records);

  const toNum = (pkg) =>
    typeof pkg === 'number' ? pkg : parseInt(String(pkg || '').replace(/[^0-9]/g, ''), 10) || 0;

  const totalPlaced = records.length;
  const totalRecruiters = new Set(records.map((r) => r.company).filter(Boolean)).size;
  const highest = records.reduce((max, r) => Math.max(max, toNum(r.package)), 0);

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 py-12 gap-9 max-w-7xl"
      >
        <SceneHeader
          folio="08"
          kicker="Career Outcomes"
          title={['Placements &', 'Recruiters']}
          accentLine={1}
          tone="verdigris"
        />

        {/* The figures that answer a parent's first question */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-end gap-x-14 gap-y-8 border-y-2 border-line-bright py-8"
        >
          <Figure
            value={95.4}
            decimals={1}
            suffix="%"
            label="Placement Success"
            tone="verdigris"
            size="lg"
            isActive={isActive}
          />
          <Figure
            value={highest}
            prefix="₹"
            suffix=" LPA"
            label="Highest Package"
            gilt
            size="lg"
            isActive={isActive}
          />
          <Figure
            value={totalPlaced}
            label="Students Placed"
            tone="parchment"
            size="md"
            isActive={isActive}
          />
          <Figure
            value={totalRecruiters}
            label="Recruiting Partners"
            tone="sapphire"
            size="md"
            isActive={isActive}
          />
        </motion.div>

        {/* Leading recruiters */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <div className="font-mono text-sm font-bold tracking-[0.22em] uppercase text-verdigris-bright">
            Leading Recruiters
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topCompanies.map((c, idx) => {
              const ink = INK[CARD_INK[idx % CARD_INK.length]];
              return (
                <motion.div
                  key={c.company}
                  variants={fadeUp}
                  className={`relative border-2 ${ink.border} bg-ink-raised p-5 flex flex-col gap-4`}
                >
                  <span className={`absolute inset-x-0 top-0 h-[4px] ${ink.rule}`} />

                  <div className="flex items-center gap-3">
                    <CompanyLogo
                      companyName={c.company}
                      tone={CARD_INK[idx % CARD_INK.length]}
                      className="w-10 h-10 shrink-0"
                    />
                    <h4 className="font-display font-extrabold text-parchment text-lg md:text-xl leading-tight">
                      {c.company}
                    </h4>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <div>
                      <div className="font-display font-extrabold text-parchment text-4xl leading-none tabular-lining">
                        {c.count}
                      </div>
                      <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-parchment-dim mt-1.5">
                        {c.count === 1 ? 'Student Placed' : 'Students Placed'}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-line">
                      <div className={`font-display font-extrabold text-2xl leading-none tabular-lining ${ink.text}`}>
                        {c.highestLabel || formatPackage(c.highest)}
                      </div>
                      <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-parchment-dim mt-1.5">
                        Highest Offer
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
