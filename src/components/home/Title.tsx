import React, { ReactNode } from 'react';
import { motion, Transition } from 'framer-motion';
import { slideUp } from '../anim/Values';

const Title = ({
  transition,
  children,
}: {
  transition: Transition;
  children: ReactNode;
}) => {
  return (
    <>
      <motion.h1
        variants={slideUp}
        initial='hidden'
        animate='show'
        transition={transition}
      >
        {children}
      </motion.h1>
    </>
  );
};

export default Title;
