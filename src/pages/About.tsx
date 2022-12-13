import React from 'react';
import { TabTitle } from '../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import { IntroAnimation } from '@src/components/anim/Animation';
import {
  slide,
  textSlideUp,
  lineGrow,
  lineTransition,
  descriptionTitle,
  descriptionContent,
} from '@src/components/anim/AnimationValues';

const socials = [
  { title: 'Email', path: 'mailto:hansibrahimasi@gmail.com' },
  { title: 'LinkedIn', path: 'https://linkedin.com/in/hansibrahimasi' },
  { title: 'GitHub', path: 'https://github.com/hansibalen' },
];

const About = (): React.ReactElement => {
  TabTitle('Hansi Brahimasi | About');

  return (
    <>
      <IntroAnimation className='about-section'>
        <motion.div variants={slide} initial='hidden' animate='show'>
          <motion.div className='about-text'>
            <motion.h1 className='section-title' variants={textSlideUp}>
              About Me
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div
          variants={lineGrow}
          className='line'
          initial='initial'
          animate='animate'
          transition={{ ...lineTransition, duration: 1, delay: 0.5 }}
        />
        <motion.div
          className='about-text'
          variants={slide}
          initial='hidden'
          animate='show'
        >
          <motion.h2 variants={descriptionTitle}>Who am I?</motion.h2>
          <motion.p variants={descriptionContent}>
            I&apos;m a software developer from Albania, whose expertise lies in
            front-end development and generative coding. Building user-friendly,
            scalable & interactive web products with distinctive UI/UX. Always
            researching for robust solutions to apply in this dynamic industry.
          </motion.p>
        </motion.div>
        <motion.div
          className='about-text last'
          variants={slide}
          initial='hidden'
          animate='show'
        >
          <motion.h2 variants={descriptionTitle}>Get in touch.</motion.h2>
          <motion.p className='contact' variants={descriptionContent}>
            Want to reach out regarding a project, to collaborate, or just say
            hello?
          </motion.p>
          <motion.ul variants={descriptionContent}>
            {socials.map((link) => (
              <li key={link.title}>
                <a
                  href={link.path}
                  aria-label={link.title + 'redirect link'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-link'
                >
                  {link.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </IntroAnimation>
    </>
  );
};

export default About;
