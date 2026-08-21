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

// Must match EXIT_LEAD_SECONDS in PresentationShell: the plates share the
// scene's visible time, not its full duration.
const EXIT_LEAD = 1.3;

const INKS = {
  brass: { text: 'text-brass-bright', bg: 'bg-brass', border: 'border-brass', chip: 'bg-brass text-ink' },
  oxblood: { text: 'text-oxblood-bright', bg: 'bg-oxblood', border: 'border-oxblood', chip: 'bg-oxblood text-parchment' },
  verdigris: { text: 'text-verdigris-bright', bg: 'bg-verdigris', border: 'border-verdigris', chip: 'bg-verdigris text-ink' },
  sapphire: { text: 'text-sapphire-bright', bg: 'bg-sapphire', border: 'border-sapphire', chip: 'bg-sapphire text-ink' }
};

export const Scene05Hackathons = ({ isActive, duration = 22 }) => {
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

  // Divide the scene's own runtime between the plates instead of using a fixed
  // 5s. At 22s a fixed interval left the last plate mid-view when the frame
  // closed, which read as the fourth win being skipped. Advance stops on the
  // last plate rather than wrapping back to the first.
  const plateCount = features.length;
  useEffect(() => {
    if (!isActive || plateCount < 2) return;
    const holdMs = Math.max(2000, ((duration - EXIT_LEAD) * 1000) / plateCount);
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1 < plateCount ? prev + 1 : prev));
    }, holdMs);
    return () => clearInterval(timer);
  }, [isActive, plateCount, duration]);

  // Restart at the first plate each time the scene opens.
  useEffect(() => {
    if (isActive) setActiveIdx(0);
  }, [isActive]);

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
            <AnimatePresence initial={false}>
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
                {/* Fixed blocks. Prize strings and descriptions vary in length
                    across the four wins; without reserved height the citation
                    shifted vertically every time the plate changed. */}
                <div
                  className={`font-display font-semibold text-3xl md:text-4xl leading-none min-h-[2.5rem] md:min-h-[3rem] flex items-end ${ink.text}`}
                >
                  {row.prizeDisplay}
                </div>

                <p className="font-body text-parchment text-sm md:text-base leading-relaxed min-h-[4.5rem] md:min-h-[5rem]">
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
