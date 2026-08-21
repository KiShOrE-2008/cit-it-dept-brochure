import React, { useEffect, useRef } from 'react';

// The score under the deck. Mounted once by the shell, outside the scene
// switcher, so it plays straight through every scene change instead of
// restarting with each frame.
export const BackgroundAudio = ({ src = '/assets/background_audio.mp3', volume = 0.3 }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = volume;

    const start = () => el.play().catch(() => {});

    // Browsers refuse autoplay until the page has been interacted with, so the
    // first attempt usually fails silently. The presenter's first click or
    // keypress — the Begin button, Space, an arrow key — is the gesture that
    // unblocks it, and these listeners catch whichever comes first.
    start();
    window.addEventListener('pointerdown', start);
    window.addEventListener('keydown', start);

    return () => {
      window.removeEventListener('pointerdown', start);
      window.removeEventListener('keydown', start);
    };
  }, [volume]);

  return <audio ref={audioRef} src={src} loop preload="auto" />;
};
