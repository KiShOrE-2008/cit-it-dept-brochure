import React from 'react';
import { MotionConfig } from 'framer-motion';
import { PresentationShell } from './components/presentation/PresentationShell';

// `reducedMotion="user"` makes framer-motion skip transform and layout
// animations for anyone who has asked their OS to reduce motion, snapping
// content straight to its final state. The CSS in index.css already honours
// the same preference; this covers the scene choreography, which CSS cannot.
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full h-screen overflow-hidden bg-ink text-parchment">
        <PresentationShell />
      </div>
    </MotionConfig>
  );
}

export default App;
