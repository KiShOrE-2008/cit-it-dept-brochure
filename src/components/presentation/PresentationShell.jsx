import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Atmosphere } from './Atmosphere';
import { FolioSpine } from './FolioSpine';
import { ControlDeck } from './ControlDeck';
import { BackgroundAudio } from './BackgroundAudio';

import { Scene01Welcome } from '../scenes/Scene01Welcome';
import { Scene02Department } from '../scenes/Scene02Department';
import { Scene03CollegeDept } from '../scenes/Scene03CollegeDept';
import { Scene04VisionMission } from '../scenes/Scene04VisionMission';
import { Scene05AcademicToppers } from '../scenes/Scene05AcademicToppers';
import { Scene06Hackathons } from '../scenes/Scene06Hackathons';
import { Scene07Events } from '../scenes/Scene07Events';
import { Scene08Placements } from '../scenes/Scene08Placements';
import { Scene09DepartmentGlance } from '../scenes/Scene09DepartmentGlance';

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

  // The authoritative scene clock. `elapsed` state exists only to drive the
  // progress bar and the frame cycle; the ref is what the timer reads, so a
  // re-render can never lose or double-count a tick.
  const elapsedRef = useRef(0);

  const sceneTitles = [
    "Welcome",
    "Department of IT",
    "College & Department",
    "Vision & Mission",
    "Academic Toppers",
    "Hackathons & Competitions",
    "Events & Initiatives",
    "Placements & Recruiters",
    "Department at a Glance"
  ];

  const totalScenes = sceneTitles.length;

  const nextScene = useCallback(() => {
    setCurrentScene((prev) => (prev < totalScenes - 1 ? prev + 1 : 0));
    elapsedRef.current = 0;
    setElapsed(0);
  }, [totalScenes]);

  const prevScene = useCallback(() => {
    setCurrentScene((prev) => (prev > 0 ? prev - 1 : prev));
    elapsedRef.current = 0;
    setElapsed(0);
  }, []);

  const selectScene = (index) => {
    setCurrentScene(index);
    elapsedRef.current = 0;
    setElapsed(0);
  };

  // Each scene holds a single screenful — nothing scrolls. The timer advances
  // the clock and hands off at the end; the frame cycle below turns that clock
  // into an in / hold / out choreography.
  //
  // nextScene() is called from the interval callback, never from inside a state
  // updater: StrictMode double-invokes updaters, which advanced the deck twice
  // and skipped a scene.
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // update progress every 100ms
    const timer = setInterval(() => {
      elapsedRef.current += intervalTime / 1000;
      if (elapsedRef.current >= speed) {
        elapsedRef.current = 0;
        nextScene();
      }
      setElapsed(elapsedRef.current);
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
      case 1: return <Scene02Department isActive={isFrameOpen} />;
      case 2: return <Scene03CollegeDept isActive={isFrameOpen} />;
      case 3: return <Scene04VisionMission isActive={isFrameOpen} />;
      case 4: return <Scene05AcademicToppers isActive={isFrameOpen} />;
      case 5: return <Scene06Hackathons isActive={isFrameOpen} duration={speed} />;
      case 6: return <Scene07Events isActive={isFrameOpen} />;
      case 7: return <Scene08Placements isActive={isFrameOpen} />;
      case 8: return <Scene09DepartmentGlance isActive={isFrameOpen} />;
      default: return null;
    }
  };

  return (
    <div
      onWheel={handleWheel}
      className="relative w-screen h-screen overflow-hidden bg-ink select-none"
    >
      <Atmosphere />
      <BackgroundAudio />

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
