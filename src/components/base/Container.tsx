import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { opacity, viewport } from '../anim/Values';

const Container = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className: string;
  id: string;
}) => {
  return (
    <>
      <div className='white-space' />
      <motion.section
        variants={opacity}
        initial='hidden'
        whileInView='show'
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={viewport}
        className={className + ' col mobile'}
        id={id}
      >
        {children}
      </motion.section>
    </>
  );
};

export default Container;
