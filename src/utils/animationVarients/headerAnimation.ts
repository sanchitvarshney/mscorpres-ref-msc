// Shared motion tokens for the site header + navigation.
// One easing curve, reused everywhere, so the whole header feels
// like it came from a single hand rather than a pile of defaults.

export const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Header shell settling in on first paint.
export const fadeSlideDown = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

// A horizontal row whose children arrive one after another.
export const staggerRow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

export const rowItem = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeSmooth },
  },
};

// Mobile drawer.
export const drawerBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

export const drawerPanel = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 30 },
  },
  exit: { x: "100%", transition: { duration: 0.25, ease: easeSmooth } },
};

export const drawerList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

export const drawerItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: easeSmooth },
  },
};

// Services mega-menu — columns settle in, then their tiles cascade.
export const megaColumn = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, when: "beforeChildren" as const },
  },
};

export const megaGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.028 },
  },
};

export const megaItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: easeSmooth },
  },
};
