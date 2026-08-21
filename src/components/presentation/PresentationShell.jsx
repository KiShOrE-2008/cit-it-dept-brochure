import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Atmosphere } from './Atmosphere';
import { FolioSpine } from './FolioSpine';
import { ControlDeck } from './ControlDeck';

import { Scene01Welcome } from '../scenes/Scene01Welcome';
import { Scene02CollegeDept } from '../scenes/Scene02CollegeDept';
import { Scene03VisionMission } from '../scenes/Scene03VisionMission';
import { Scene04AcademicToppers } from '../scenes/Scene04AcademicToppers';
import { Scene05Hackathons } from '../scenes/Scene05Hackathons';
import { Scene06Events } from '../scenes/Scene06Events';
import { Scene07Placements } from '../scenes/Scene07Placements';
import { Scene08DepartmentGlance } from '../scenes/Scene08DepartmentGlance';

// Open the deck on a specific scene with `?scene=4`, and hold it there with
// `?scene=4&paused=1`. Useful for rehearsing one slide without sitting through
// the deck, and for capturing a scene in a screenshot.
const readSceneParam = () => {
  if (typeof window === 'undefined') return { scene: 0, paused: false };
  const params = new URLSearchParams(window.location.search);
  const raw = parseInt(params.get('scene'), 10);
  return {
    scene: Number.isFinite(raw) && raw > 0 ? raw - 1 : 0,
    paused: params.get('paused') === '1'
  };
};

export const PresentationShell = () => {
  const initial = readSceneParam();
  const [currentScene, setCurrentScene] = useState(initial.scene);
  const [isPlaying, setIsPlaying] = useState(!initial.paused);
  const [speed, setSpeed] = useState(22); // Increased default time to 22s for comfortable viewing
  const [elapsed, setElapsed] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sceneContainerRef = useRef(null);

  const sceneTitles = [
    "Welcome & Opening",
    "College & Department",
    "Vision & Mission",
    "Academic Toppers",
    "Hackathons & Competitions",
    "Events & Initiatives",
    "Placements & Recruiters",
    "Department at a Glance"
  ];

  const totalScenes = sceneTitles.length;

  // Clamp a hand-typed ?scene= that points past the end of the deck.
  useEffect(() => {
    if (currentScene > totalScenes - 1) setCurrentScene(0);
  }, [currentScene, totalScenes]);

  const nextScene = useCallback(() => {
    setCurrentScene((prev) => (prev < totalScenes - 1 ? prev + 1 : 0));
    setElapsed(0);
  }, [totalScenes]);

  const prevScene = useCallback(() => {
    setCurrentScene((prev) => (prev > 0 ? prev - 1 : prev));
    setElapsed(0);
  }, []);

  const selectScene = (index) => {
    setCurrentScene(index);
    setElapsed(0);
  };

  // Each scene holds a single screenful — nothing scrolls. The timer only
  // advances the clock; the frame cycle below turns that clock into an
  // in / hold / out choreography.
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // update progress every 100ms
    const timer = setInterval(() => {
      setElapsed((prev) => {
        const nextTime = prev + intervalTime / 1000;
        if (nextTime >= speed) {
          nextScene();
          return 0;
        }
        return nextTime;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, speed, nextScene]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextScene();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevScene();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, prevScene]);

  // Scenes no longer scroll, so the wheel is purely a navigation gesture.
  const lastScrollTime = useRef(0);
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 700) return;

    if (e.deltaY > 40) {
      lastScrollTime.current = now;
      nextScene();
    } else if (e.deltaY < -40) {
      lastScrollTime.current = now;
      prevScene();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  const progressPct = Math.min((elapsed / speed) * 100, 100);

  // The frame cycle. Content staggers in, holds for most of the scene, then
  // staggers back out shortly before the deck advances — so a switch reads as
  // one frame closing and the next opening, rather than a hard cut. Scenes
  // receive this as `isActive`, the same flag that already gates their motion.
  const EXIT_LEAD_SECONDS = 1.3;
  const isFrameOpen = !isPlaying || elapsed < speed - EXIT_LEAD_SECONDS;

  // Scene Component Switcher
  const renderSceneContent = (index) => {
    switch (index) {
      case 0: return <Scene01Welcome isActive={isFrameOpen} onStartClick={() => { selectScene(1); setIsPlaying(true); }} />;
      case 1: return <Scene02CollegeDept isActive={isFrameOpen} />;
      case 2: return <Scene03VisionMission isActive={isFrameOpen} />;
      case 3: return <Scene04AcademicToppers isActive={isFrameOpen} />;
      case 4: return <Scene05Hackathons isActive={isFrameOpen} />;
      case 5: return <Scene06Events isActive={isFrameOpen} />;
      case 6: return <Scene07Placements isActive={isFrameOpen} />;
      case 7: return <Scene08DepartmentGlance isActive={isFrameOpen} />;
      default: return null;
    }
  };

  return (
    <div
      onWheel={handleWheel}
      className="relative w-screen h-screen overflow-hidden bg-ink select-none"
    >
      <Atmosphere />

      <FolioSpine
        currentScene={currentScene}
        totalScenes={totalScenes}
        sceneTitle={sceneTitles[currentScene]}
        progressPct={progressPct}
      />

      {/* Main scene viewport — one screenful per scene, no scrolling.
          The frame itself lifts away as the deck advances; the staggered
          in/out of the content inside is driven by `isFrameOpen`. */}
      <main className="relative w-full h-full z-10 pl-0 md:pl-24 pt-12 md:pt-0 pb-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            ref={sceneContainerRef}
            initial={{ opacity: 0, y: 14, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.995 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full overflow-hidden"
          >
            {renderSceneContent(currentScene)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Presenter Control Deck */}
      <ControlDeck
        currentScene={currentScene}
        totalScenes={totalScenes}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((prev) => !prev)}
        onPrev={prevScene}
        onNext={nextScene}
        onSelectScene={selectScene}
        sceneTitles={sceneTitles}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        speed={speed}
        onChangeSpeed={(newSpeed) => { setSpeed(newSpeed); setElapsed(0); }}
      />
    </div>
  );
};
