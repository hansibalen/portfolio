import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Section
export const IntroAnimation = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <motion.section
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 0.1,
      ease: 'easeOut',
    }}
  >
    {children}
  </motion.section>
);

// Preloader
export const LoaderAnimation = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <motion.section
    className={className}
    initial={{ opacity: 1 }}
    animate={{ y: '0%' }}
    exit={{ opacity: 1, y: '-100%' }}
    transition={{ ease: [0.77, 0.0, 0.175, 1.0], duration: 1.4 }}
  >
    {children}
  </motion.section>
);
