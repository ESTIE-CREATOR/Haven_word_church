// Kept in memory only: a refresh or a new visit plays the intro again, while moving between
// pages and coming back to Home does not.
let introSeen = false;

// The intro never plays for visitors who prefer reduced motion
export const shouldPlayIntro = () => {
  if (typeof window === "undefined" || introSeen) return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const markIntroSeen = () => {
  introSeen = true;
};
