import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { presentationData } from '../../data/presentationData';
import { stage, fadeUp } from '../../lib/motion';
import { SceneHeader } from '../ui/SceneHeader';
import { Panel } from '../ui/Panel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Scene05Hackathons = ({ isActive }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const hackathons = presentationData.hackathonsList;
  const current = hackathons[activeIdx];

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % hackathons.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + hackathons.length) % hackathons.length);

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <motion.div
        variants={stage}
        initial="hidden"
        animate={isActive ? 'show' : 'hidden'}
        className="min-h-full flex flex-col justify-center px-8 md:px-16 py-14 gap-10 max-w-6xl"
      >
        <SceneHeader folio="05 / 14" kicker="National Competitive Coding" title="Hackathons & the Innovation Arena" tone="verdigris" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div variants={fadeUp} className="lg:col-span-6 relative overflow-hidden border border-line">
            <img
              src={presentationData.heroImages.hackathon}
              alt="Hackathon Victory"
              className="w-full h-64 md:h-full object-cover"
              style={{ filter: 'grayscale(0.3) brightness(0.75)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent flex flex-col justify-end p-6">
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-verdigris-soft mb-2">Featured National Champions</span>
              <h3 className="font-display text-2xl md:text-3xl text-parchment">Smart India Hackathon 2025</h3>
              <p className="font-body text-base text-parchment-dim mt-1">1st Prize · ₹1,00,000 Award</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-6 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <Panel accent="verdigris" padding="p-7" className="space-y-5">
                  <span className="font-mono text-sm tracking-[0.15em] uppercase text-verdigris-soft">
                    Entry {String(activeIdx + 1).padStart(2, '0')} / {String(hackathons.length).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl text-parchment">{current.name}</h3>
                    <p className="font-mono text-sm text-parchment-dim mt-1">{current.organizer}</p>
                  </div>

                  <div className="border-l-2 border-brass pl-4 font-body text-base text-brass-soft">
                    {current.result}
                  </div>

                  <p className="font-body text-base text-parchment-dim leading-relaxed border-t border-line pt-4">
                    {current.highlight}
                  </p>
                </Panel>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between px-1">
              <div className="flex gap-2">
                {hackathons.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-[3px] transition-all ${i === activeIdx ? 'w-8 bg-verdigris' : 'w-3 bg-line'}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button onClick={prevSlide} className="p-2 text-parchment-dim hover:text-verdigris-soft transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextSlide} className="p-2 text-parchment-dim hover:text-verdigris-soft transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
