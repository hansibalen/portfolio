// Base
export const opacity = {
  hidden: {
    opacity: 0,
    zIndex: -10,
  },
  show: {
    opacity: 1,
    zIndex: 1,
  },
};

export const lineGrow = {
  initial: { width: 0 },
  animate: { width: '100%' },
};

export const lineTransition = { ease: [0.6, -0.05, 0.01, 0.9] };

export const viewport = { once: true, amount: 0.3 };

export const hoverProperty = { duration: 0.4 };

// Loader
export const load = {
  duration: 0.6,
  ease: [0.165, 0.84, 0.44, 1.0],
};

// Home
export const slideUp = {
  hidden: { y: '100%' },
  show: {
    y: 0,
  },
};

export const navbar = {
  duration: 0.6,
  delay: 1.8,
  ease: [0.42, 0.0, 1.0, 1.0],
};

export const heroTitle = {
  duration: 0.8,
  delay: 0.8,
  ease: [0.6, -0.05, 0.01, 0.9],
};

export const ctaTitle = {
  duration: 1,
  delay: 1.2,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const navItemHover = {
  backgroundColor: '#3e3b36',
  color: '#f1ede8',
};

// Work
export const projects = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
  duration: 0.3,
};
