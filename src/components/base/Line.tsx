import React from 'react';
import { motion } from 'framer-motion';
import {
  lineGrow,
  lineTransition,
  viewport,
} from '@src/components/anim/Values';

const Line = () => {
  return (
    <>
      <motion.div
        className='hr'
        variants={lineGrow}
        viewport={viewport}
        initial='initial'
        whileInView='animate'
        transition={{ ...lineTransition, duration: 0.9, delay: 0.6 }}
      />
    </>
  );
};

export default Line;
