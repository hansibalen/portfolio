import React from 'react';
import { motion } from 'framer-motion';
import { projects, opacity, viewport } from '../anim/Values';
import Arrow from '@assets/svg/Arrow';
import { workArr } from '@src/utils/Content';

const ProjectList = () => {
  return (
    <>
      <motion.ul
        variants={opacity}
        viewport={viewport}
        transition={projects}
        initial='hidden'
        whileInView='show'
        className='project-list col'
      >
        {workArr.map((work) => (
          <motion.li
            variants={opacity}
            transition={{ duration: 0.3 }}
            key={work.name}
          >
            <a
              href={work.link}
              aria-label={work.name + 'project redirect link'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>{work.name}</h2>
              <h3>Role: {work.role}</h3>
              <h3>Tech: {work.tech}</h3>
              <Arrow
                width={'3vh'}
                height={'3vh'}
                fill={'#b2b2a8'}
                className='arrow'
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default ProjectList;
