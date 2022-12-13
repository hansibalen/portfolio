import React from 'react';
import { motion } from 'framer-motion';
import { LoaderAnimation } from '../anim/Animation';
import { slide } from '../anim/AnimationValues';
import { TabTitle } from '../../../utils/GeneralFunctions';

const Loader = (): React.ReactElement => {
  TabTitle('Hansi Brahimasi | Loading');

  return (
    <>
      <LoaderAnimation className='preloader'>
        <motion.div
          variants={slide}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 0.3, delay: 0.1 }}
          className='inner'
        >
          Patience.
        </motion.div>
      </LoaderAnimation>
    </>
  );
};

export default Loader;
