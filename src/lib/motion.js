// Single shared choreography for the whole dossier. Every scene composes
// from these variants so the presentation reads as one orchestrated
// sequence rather than each scene inventing its own entrance timing.

export const EASE = [0.16, 1, 0.3, 1];

export const stage = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

// Headline text rising out of a mask, like a leaf being lifted into view.
export const riseMask = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 1, ease: EASE } },
};

export const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.75, ease: EASE } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

// Brass rule drawing left-to-right — pair with `origin-left`.
export const drawRule = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
};

export const drawRuleV = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.9, ease: EASE } },
};
