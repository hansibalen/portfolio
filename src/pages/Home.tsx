import React from 'react';
import { TabTitle } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import { IntroAnimation } from '@src/components/anim/Animation';
import {
  slide,
  textSlideUp,
  subtext,
} from '@src/components/anim/AnimationValues';

const Home = (): React.ReactElement => {
  TabTitle('Hansi Brahimasi | Home');

  const heroString = [
    { text: 'Software developer.' },
    { text: 'Generative artist.' },
  ];

  return (
    <>
      <IntroAnimation className='hero-section'>
        <motion.div variants={slide} initial='hidden' animate='show'>
          {heroString.map((string, id) => (
            <motion.div key={id} className='hero-text'>
              <motion.h1 variants={textSlideUp}>{string.text}</motion.h1>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className='hero-subtext'
          variants={slide}
          initial='hidden'
          animate='show'
        >
          <motion.p variants={subtext}>
            I help clients build engaging, interactive web products with
            distinctive UI/UX, by utilizing the best practices and the latest
            technology trends.
          </motion.p>
        </motion.div>
      </IntroAnimation>
    </>
  );
};

export default Home;
