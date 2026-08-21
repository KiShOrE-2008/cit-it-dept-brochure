import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievementsData } from '../../data/achievements';
import { presentationData } from '../../data/presentationData';
import { resolveHackathonFeatures } from '../../data/hackathonFeatures';
import { getAchievementsData, getAssetImageUrl } from '../../services/dataService';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Chapter ink: oxblood. Each win is a plate in the record — the photograph
// carries the moment, the facing column carries the citation.
const INKS = {
  brass: { text: 'text-brass-bright', bg: 'bg-brass', border: 'border-brass', chip: 'bg-brass text-ink' },
  oxblood: { text: 'text-oxblood-bright', bg: 'bg-oxblood', border: 'border-oxblood', chip: 'bg-oxblood text-parchment' },
  verdigris: { text: 'text-verdigris-bright', bg: 'bg-verdigris', border: 'border-verdigris', chip: 'bg-verdigris text-ink' },
  sapphire: { text: 'text-sapphire-bright', bg: 'bg-sapphire', border: 'border-sapphire', chip: 'bg-sapphire text-ink' }
};

export const Scene05Hackathons = ({ isActive }) => {
  const [achievements, setAchievements] = useState(achievementsData);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getAchievementsData()
      .then((rows) => {
        if (!cancelled && Array.isArray(rows) && rows.length) setAchievements(rows);
      })
      .catch(() => {
        /* dataService already falls back to the local dataset */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const features = resolveHackathonFeatures(achievements);

  useEffect(() => {
    if (!isActive || features.length < 2) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isActive, features.length]);

  if (!features.length) return null;

  const safeIdx = activeIdx % features.length;
  const feature = features[safeIdx];
  const { row } = feature;
  const ink = INKS[feature.accent] || INKS.oxblood;
  const imageUrl = getAssetImageUrl(feature.imageKey, presentationData.heroImages.hackathon);
  const go = (dir) => setActiveIdx((prev) => (prev + dir + features.length) % features.length);

  const citation = [
    [row.students.length > 1 ? 'Team' : 'Student', row.students.join(', ') + (row.teamName ? ` · ${row.teamName}` : '')],
    ['Organiser', row.organizer],
    ['Venue', row.location],
    ['Date', row.date]
  ].filter(([, v]) => v);

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="relative z-10 min-h-full flex flex-col justify-center px-7 md:px-16 py-12 gap-8 max-w-7xl"
      >
        <SceneHeader
          folio="05"
          kicker="National & International Arena"
          title={['Hackathon', 'Champions']}
          accentLine={1}
          tone="oxblood"
        />

        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Plate */}
          <div className={`lg:col-span-7 relative overflow-hidden border-2 ${ink.border}`}>
            <AnimatePresence mode="wait">
              <motion.img
                key={feature.imageKey}
                src={imageUrl}
                onError={(e) => {
                  e.currentTarget.src = presentationData.heroImages.hackathon;
                }}
                alt={row.competition}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />

            <div className="relative z-10 flex flex-col justify-end p-5 md:p-7 gap-2 min-h-[300px] md:min-h-[400px]">
              <span className={`w-max px-3 py-1 font-mono text-xs font-bold tracking-[0.16em] uppercase ${ink.chip}`}>
                {row.badge}
              </span>
              <h3 className="font-display font-extrabold text-parchment text-2xl md:text-4xl leading-[0.95]">
                {row.competition}
              </h3>
              <p className={`font-mono text-sm font-bold tracking-[0.14em] uppercase ${ink.text}`}>
                {row.level} · {row.prizeDisplay}
              </p>
            </div>

            <button
              onClick={() => go(-1)}
              aria-label="Previous win"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 border border-line-bright bg-ink/85 text-parchment hover:bg-ink transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next win"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 border border-line-bright bg-ink/85 text-parchment hover:bg-ink transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Citation */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={row.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-5 flex-1"
              >
                <div className={`font-display font-extrabold text-4xl md:text-5xl leading-none ${ink.text}`}>
                  {row.prizeDisplay}
                </div>

                <p className="font-body font-medium text-parchment text-base md:text-lg leading-relaxed">
                  {row.shortDesc}
                </p>

                <dl className="flex flex-col mt-auto">
                  {citation.map(([k, v]) => (
                    <div key={k} className="flex gap-4 justify-between items-baseline py-2 border-t border-line">
                      <dt className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-parchment-faint shrink-0">
                        {k}
                      </dt>
                      <dd className="font-body font-semibold text-parchment text-sm md:text-base text-right">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>

            {/* Plate selector */}
            <div className="flex gap-2 pt-5">
              {features.map((f, i) => (
                <button
                  key={f.imageKey}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Show ${f.competition}`}
                  className={`h-[5px] flex-1 transition-colors ${
                    i === safeIdx ? (INKS[f.accent] || INKS.oxblood).bg : 'bg-line hover:bg-line-bright'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
