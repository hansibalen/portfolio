import React from 'react';
import { motion } from 'framer-motion';
import { navbar, opacity, heroTitle } from '@src/components/anim/Values';
import Title from './Title';
import Clock from '@src/components/home/Clock';
import Line from '@src/components/base/Line';

const Main = () => {
  return (
    <>
      <motion.div
        variants={opacity}
        initial='hidden'
        animate='show'
        className='row'
      >
        <Title transition={heroTitle}>Hansi</Title>
        <Title transition={heroTitle}>Brahimasi</Title>
      </motion.div>
      <Line />
      <motion.div
        variants={opacity}
        transition={navbar}
        initial='hidden'
        animate='show'
        className='row'
      >
        <div className='intro'>available 03.2023</div>
        <div className='intro'>
          <Clock />
        </div>
      </motion.div>
    </>
  );
};

export default Main;
