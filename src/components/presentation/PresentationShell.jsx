import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { BackgroundCanvas } from './BackgroundCanvas';
import { ProgressHeader } from './ProgressHeader';
import { ControlDeck } from './ControlDeck';

import { Scene01Welcome } from '../scenes/Scene01Welcome';
import { Scene02CollegeDept } from '../scenes/Scene02CollegeDept';
import { Scene03VisionMission } from '../scenes/Scene03VisionMission';
import { Scene04Achievements } from '../scenes/Scene04Achievements';
import { Scene05Hackathons } from '../scenes/Scene05Hackathons';
import { Scene06EventsTimeline } from '../scenes/Scene06EventsTimeline';
import { Scene07Placements } from '../scenes/Scene07Placements';
import { Scene08Internships } from '../scenes/Scene08Internships';
import { Scene09Conference } from '../scenes/Scene09Conference';
import { Scene10Faculty } from '../scenes/Scene10Faculty';
import { Scene11Infrastructure } from '../scenes/Scene11Infrastructure';
import { Scene12DepartmentGlance } from '../scenes/Scene12DepartmentGlance';
import { Scene13StudentCare } from '../scenes/Scene13StudentCare';
import { Scene14ThankYou } from '../scenes/Scene14ThankYou';

export const PresentationShell = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(22); // Increased default time to 22s for comfortable viewing
  const [elapsed, setElapsed] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sceneContainerRef = useRef(null);

  const sceneTitles = [
    "Welcome & Opening",
    "College & Department",
    "Vision & Mission",
    "Student Achievements",
    "Hackathons & Competitions",
    "Events & Timeline",
    "Placements & Recruiters",
    "Internships & Exposure",
    "International Conference",
    "Faculty Excellence",
    "Infrastructure & CoE",
    "Department at a Glance",
    "Student Care & Partnership",
    "Thank You & Closing"
  ];

  const totalScenes = sceneTitles.length;

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

  // Timer loop for auto-playing presentation scenes with automated slow scroll down
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // update progress every 100ms
    const timer = setInterval(() => {
      setElapsed((prev) => {
        const nextTime = prev + intervalTime / 1000;
        
        // Automated slow auto-scroll down inside active scene container
        const container = sceneContainerRef.current;
        if (container) {
          const maxScroll = container.scrollHeight - container.clientHeight;
          if (maxScroll > 10) {
            // Smoothly scroll down as elapsed time progresses
            const scrollRatio = Math.min(nextTime / (speed * 0.85), 1);
            container.scrollTop = maxScroll * scrollRatio;
          }
        }

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

  // Intelligent Wheel Scroll: ONLY flip scenes when user reaches the top or bottom of the scroll container
  const lastScrollTime = useRef(0);
  const handleWheel = (e) => {
    const container = sceneContainerRef.current;
    
    if (container) {
      const isScrollable = container.scrollHeight > container.clientHeight + 10;

      if (isScrollable) {
        const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 25;
        const isAtTop = container.scrollTop <= 15;

        // If user is scrolling down and NOT at bottom, let container scroll naturally
        if (e.deltaY > 0 && !isAtBottom) {
          return; // Allow native scroll down
        }

        // If user is scrolling up and NOT at top, let container scroll naturally
        if (e.deltaY < 0 && !isAtTop) {
          return; // Allow native scroll up
        }
      }
    }

    // Otherwise, trigger slide navigation with 700ms throttle
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

  // Scene Component Switcher
  const renderSceneContent = (index) => {
    switch (index) {
      case 0: return <Scene01Welcome isActive={true} onStartClick={() => { selectScene(1); setIsPlaying(true); }} />;
      case 1: return <Scene02CollegeDept isActive={true} />;
      case 2: return <Scene03VisionMission isActive={true} />;
      case 3: return <Scene04Achievements isActive={true} />;
      case 4: return <Scene05Hackathons isActive={true} />;
      case 5: return <Scene06EventsTimeline isActive={true} />;
      case 6: return <Scene07Placements isActive={true} />;
      case 7: return <Scene08Internships isActive={true} />;
      case 8: return <Scene09Conference isActive={true} />;
      case 9: return <Scene10Faculty isActive={true} />;
      case 10: return <Scene11Infrastructure isActive={true} />;
      case 11: return <Scene12DepartmentGlance isActive={true} />;
      case 12: return <Scene13StudentCare isActive={true} />;
      case 13: return <Scene14ThankYou isActive={true} />;
      default: return null;
    }
  };

  return (
    <div
      onWheel={handleWheel}
      className="relative w-screen h-screen overflow-hidden bg-slate-950 select-none"
    >
      {/* Dynamic Floating Particles Canvas */}
      <BackgroundCanvas />

      {/* Top Header Bar */}
      <ProgressHeader
        currentScene={currentScene}
        totalScenes={totalScenes}
        sceneTitle={sceneTitles[currentScene]}
        progressPct={progressPct}
      />

      {/* Main Fullscreen Scene viewport with cinematic slide transition */}
      <main className="relative w-full h-full z-10 pt-16 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            ref={sceneContainerRef}
            initial={{ opacity: 0, scale: 1.03, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
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
