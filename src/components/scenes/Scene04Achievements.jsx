import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { PhotoModal } from '../ui/PhotoModal';
import { SceneHeader } from '../ui/SceneHeader';
import { stage, fadeUp } from '../../lib/motion';

export const Scene04Achievements = ({ isActive }) => {
  const [selected, setSelected] = useState(null);
  const [featured, ...rest] = presentationData.achievements;

  const stats = [
    { ...presentationData.stats.hackathons, tone: 'text-brass-soft' },
    { ...presentationData.stats.competitions, tone: 'text-oxblood-soft' },
    { ...presentationData.stats.awards, tone: 'text-verdigris-soft' },
    { ...presentationData.stats.students, tone: 'text-sapphire-soft' },
  ];

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="04 / 14" kicker="Student Excellence" title="Achievements & Laurels" tone="brass" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Featured win, given room to breathe */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <button
              onClick={() => setSelected(featured)}
              className="group block text-left w-full border border-line hover:border-brass/50 transition-colors"
            >
              <div className="relative h-56 md:h-72 overflow-hidden border-b border-line">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" style={{ filter: 'grayscale(0.35) brightness(0.75)' }} />
                <span className="absolute bottom-3 left-4 font-mono text-sm uppercase tracking-[0.15em] font-medium text-ink bg-brass-soft px-2.5 py-1">
                  {featured.badge}
                </span>
              </div>
              <div className="p-6">
                <span className="font-mono text-sm uppercase tracking-[0.15em] text-oxblood-soft">{featured.category}</span>
                <h3 className="font-display text-2xl md:text-3xl text-parchment mt-2 group-hover:text-brass-soft transition-colors">{featured.title}</h3>
                <p className="font-body text-base text-parchment-dim mt-2">{featured.prize} — {featured.team}</p>
              </div>
            </button>
          </motion.div>

          {/* Stat ledger */}
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col justify-center">
            {stats.map((s) => (
              <div key={s.label} className="ledger-row">
                <span className="font-mono text-sm tracking-[0.12em] uppercase text-parchment-dim">{s.label}</span>
                <span className={`font-display text-3xl tabular-lining ${s.tone}`}>
                  <AnimatedCounter end={s.count} suffix={s.suffix} isActive={isActive} />
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Remaining honours as a plain record, not a card grid */}
        <motion.div variants={fadeUp} className="border-t border-line">
          {rest.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="w-full flex items-center gap-5 py-4 border-b border-line text-left group hover:bg-ink-raised/40 transition-colors px-2 -mx-2"
            >
              <span className="w-16 h-16 shrink-0 overflow-hidden border border-line">
                <img src={item.image} alt="" className="w-full h-full object-cover" style={{ filter: 'grayscale(0.4) brightness(0.7)' }} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-display text-lg md:text-xl text-parchment group-hover:text-brass-soft transition-colors truncate">{item.title}</span>
                <span className="block font-mono text-sm uppercase tracking-wider text-parchment-faint mt-1">{item.team}</span>
              </span>
              <span className="font-mono text-sm uppercase tracking-wider text-brass shrink-0">{item.badge}</span>
            </button>
          ))}
        </motion.div>
      </motion.div>

      {selected && (
        <PhotoModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          image={selected.image}
          title={selected.title}
          subtitle={`${selected.badge} · ${selected.prize}`}
          details={`${selected.desc} — Achieved by ${selected.team}.`}
        />
      )}
    </div>
  );
};
