import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';

// Chapter ink: sapphire.
// Set as a programme, not a card grid: five events cannot be five fat cards on
// one screen, and a programme is what this content actually is. Date leads each
// entry because the calendar is the organising fact; winners and speakers ride
// on one line so a row stays a row.
const ROW_INK = ['oxblood', 'sapphire', 'verdigris', 'brass', 'oxblood'];

const INK = {
  brass: { text: 'text-brass-bright', rule: 'bg-brass' },
  oxblood: { text: 'text-oxblood-bright', rule: 'bg-oxblood' },
  verdigris: { text: 'text-verdigris-bright', rule: 'bg-verdigris' },
  sapphire: { text: 'text-sapphire-bright', rule: 'bg-sapphire' }
};

export const Scene06Events = ({ isActive }) => {
  const events = presentationData.events;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <span className="folio-ghost absolute -top-[0.06em] right-3 md:right-10 text-[34vw] md:text-[20vw] text-sapphire/[0.07]">
        06
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 h-full flex flex-col justify-center px-7 md:px-16 py-8 gap-6 max-w-7xl"
      >
        <SceneHeader
          folio="06"
          kicker="Department Programme"
          title="Events & Initiatives"
          tone="sapphire"
        />

        <div className="flex flex-col border-t border-line">
          {events.map((ev, idx) => {
            const ink = INK[ROW_INK[idx % ROW_INK.length]];
            const people = ev.people?.map((p) => p.name).join(' · ');
            const winners = ev.winners
              ?.map((w) => `${w.medal} ${w.team}`)
              .join('   ');

            return (
              <motion.div
                key={ev.id}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[96px_1fr_auto] gap-x-5 gap-y-1 items-baseline py-3 border-b border-line"
              >
                {/* Date */}
                <div className="flex items-baseline gap-2.5">
                  <span className={`h-[3px] w-4 shrink-0 translate-y-[-4px] ${ink.rule}`} />
                  <span className={`font-mono text-[11px] font-semibold tracking-[0.08em] tabular-lining whitespace-nowrap ${ink.text}`}>
                    {ev.dateShort}
                  </span>
                </div>

                {/* Event */}
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-parchment text-base md:text-lg leading-tight">
                    {ev.name}
                  </h3>
                  <p className="font-body text-parchment-dim text-xs md:text-sm leading-snug">
                    {ev.subtitle}
                  </p>

                  {(winners || people) && (
                    <p className="font-body text-parchment text-xs md:text-sm mt-1 truncate">
                      {winners ? (
                        <span>{winners}</span>
                      ) : (
                        <>
                          <span className="text-parchment-faint">Speaker&nbsp;</span>
                          {people}
                        </>
                      )}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div className="col-span-2 md:col-span-1 md:text-right">
                  <div className={`font-mono text-[10px] font-semibold tracking-[0.18em] uppercase ${ink.text}`}>
                    {ev.category}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-parchment-faint">
                    {ev.highlight}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
