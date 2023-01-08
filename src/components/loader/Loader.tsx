import React from 'react';
import { motion } from 'framer-motion';
import { opacity, load } from '../anim/Values';

const Loader = (): React.ReactElement => {
  return (
    <>
      <div className='preloader disable-selection'>
        <div className='inner'>
          <motion.h1
            variants={opacity}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={load}
          >
            Patience
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
