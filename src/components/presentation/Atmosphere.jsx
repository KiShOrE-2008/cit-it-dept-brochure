import React from 'react';

// Static paper grain + vignette. No floating blobs, no pulsing dots —
// the room's atmosphere should feel like it's always been there, not
// like it's performing for the viewer.
export const Atmosphere = () => (
  <div className="fixed inset-0 pointer-events-none z-0 bg-ink">
    <div className="absolute inset-0 vignette" />
    <div className="absolute inset-0 paper-grain" />
  </div>
);
