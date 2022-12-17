import React from 'react';
import { workArr } from '../../../utils/GeneralFunctions';
import { motion } from 'framer-motion';
import Arrow from '../../../assets/svg/Arrow';
import {
  slide,
  textSlideUp,
  lineGrow,
  lineTransition,
  descriptionTitle,
  projectsTable,
} from '@src/components/anim/AnimationValues';

const Projects = (): React.ReactElement => {
  return (
    <>
      <motion.div variants={slide} initial='hidden' animate='show'>
        <motion.div className='work-text'>
          <motion.h1 className='section-title' variants={textSlideUp}>
            Recent Work
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
        className='work-text'
        variants={slide}
        initial='hidden'
        animate='show'
      >
        <motion.h2 variants={descriptionTitle}>
          A collection of projects I&apos;ve worked on.
        </motion.h2>
      </motion.div>
      <ul>
        {workArr.map((work) => (
          <motion.li
            key={work.name}
            variants={projectsTable}
            initial='hidden'
            animate='show'
          >
            <a
              href={work.link}
              aria-label={work.name + 'project redirect link'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3>{work.name}</h3>
              <h4>Role: {work.role}</h4>
              <h4>Tech: {work.tech}</h4>
              <Arrow width={'3vh'} height={'3vh'} className='arrow' />
            </a>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
