// Section animation values
export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const children = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    ease: 'ease-in-out',
    transition: {
      duration: 0.5,
    },
  },
};

// Navbar
export const menuContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
    },
  },
};

export const navbar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, delay: 0.5 } },
};

export const burgerMenu = {
  open: {
    x: '0%',
    transition: {
      duration: 0.4,
      ease: [0.55, 0.055, 0.675, 0.19],
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  },
  closed: {
    x: '100%',
    transition: { duration: 0.4, ease: [0.55, 0.055, 0.675, 0.19] },
  },
};

// Hero
export const slide = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const textSlideUp = {
  hidden: { opacity: 1, y: 150 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.165, 0.84, 0.44, 1.0],
    },
  },
};

export const subtext = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.4,
    },
  },
};

// About
export const descriptionTitle = {
  hidden: { opacity: 1, y: '-20vh' },
  show: {
    opacity: 1,
    y: '0vh',
    transition: {
      delay: 0.9,
      duration: 1,
      ease: [0.165, 0.84, 0.44, 1.0],
    },
  },
};

export const descriptionContent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.8,
    },
  },
};

export const lineGrow = {
  initial: { width: 0 },
  animate: { width: '100%' },
};

export const lineTransition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

// Work
export const workTitle = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.165, 0.84, 0.44, 1.0],
    },
  },
};

export const projectsTable = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
};
