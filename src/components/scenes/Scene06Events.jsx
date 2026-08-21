import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { Panel } from '../ui/Panel';

// Chapter ink: sapphire. Five events, each given its own ink so the page
// reads as a programme of distinct occasions rather than a uniform grid.
// Dates are real and ordered by the department's calendar, so they lead.
const EVENT_INK = ['oxblood', 'sapphire', 'verdigris', 'brass', 'oxblood'];

const INK_TEXT = {
  brass: 'text-brass-bright',
  oxblood: 'text-oxblood-bright',
  verdigris: 'text-verdigris-bright',
  sapphire: 'text-sapphire-bright'
};

export const Scene06Events = ({ isActive }) => {
  const events = presentationData.events;

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      <span className="folio-ghost absolute -top-[0.08em] right-2 md:right-10 text-[40vw] md:text-[24vw] text-sapphire/[0.08]">
        06
      </span>

      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 py-12 gap-8 max-w-7xl"
      >
        <SceneHeader
          folio="06"
          kicker="Department Programme"
          title={['Events &', 'Initiatives']}
          accentLine={1}
          tone="sapphire"
          lead={`${events.length} flagship events hosted this academic year.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((ev, idx) => {
            const accent = EVENT_INK[idx % EVENT_INK.length];
            const inkText = INK_TEXT[accent];
            const isLast = idx === events.length - 1 && events.length % 2 === 1;

            return (
              <motion.div
                key={ev.id}
                variants={fadeUp}
                className={isLast ? 'md:col-span-2' : ''}
              >
                <Panel accent={accent} variant="wash" padding="p-5 md:p-6" className="h-full flex flex-col gap-4">
                  {/* Date leads — this is a calendar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display font-extrabold text-parchment text-xl md:text-2xl leading-[1.05]">
                        {ev.name}
                      </h3>
                      <p className="font-body text-parchment-dim text-sm md:text-base mt-1 leading-snug">
                        {ev.subtitle}
                      </p>
                    </div>
                    <span className={`shrink-0 font-mono text-sm md:text-base font-bold tracking-[0.1em] tabular-lining ${inkText}`}>
                      {ev.dateShort}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className={`font-mono text-[11px] font-bold tracking-[0.18em] uppercase ${inkText}`}>
                      {ev.category}
                    </span>
                    <span className="text-parchment-faint select-none">·</span>
                    <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-parchment-dim">
                      {ev.highlight}
                    </span>
                  </div>

                  <p className="font-body font-medium text-parchment text-sm md:text-base leading-relaxed">
                    {ev.desc}
                  </p>

                  {ev.meta && (
                    <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-parchment-faint">
                      {ev.meta}
                    </p>
                  )}

                  {ev.winners && (
                    <div className="mt-auto pt-1">
                      <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-parchment-faint pb-1">
                        Winners
                      </div>
                      {ev.winners.map((w) => (
                        <div
                          key={w.team}
                          className="flex items-baseline gap-3 py-1.5 border-t border-line"
                        >
                          <span className="text-base shrink-0 leading-none">{w.medal}</span>
                          <span className="font-body font-bold text-parchment text-sm md:text-base shrink-0">
                            {w.team}
                          </span>
                          <span className="font-body text-parchment-dim text-xs md:text-sm truncate">
                            {w.project}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {ev.people && (
                    <div className="mt-auto pt-1">
                      <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-parchment-faint pb-1">
                        Resource {ev.people.length > 1 ? 'Persons' : 'Person'}
                      </div>
                      {ev.people.map((p) => (
                        <div key={p.name} className="py-1.5 border-t border-line">
                          <div className="font-body font-bold text-parchment text-sm md:text-base">
                            {p.name}
                          </div>
                          <div className="font-body text-parchment-dim text-xs leading-snug">
                            {p.role}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Panel>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
