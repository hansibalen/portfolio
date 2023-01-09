import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Title from './Title';
import Line from '@src/components/base/Line';
import { navArray, heroArray } from '@src/utils/Content';
import {
  opacity,
  navbar,
  navItemHover,
  ctaTitle,
  hoverProperty,
} from '@src/components/anim/Values';

const CTA = () => {
  return (
    <>
      <motion.div
        variants={opacity}
        transition={navbar}
        initial='hidden'
        animate='show'
        className='row navigation'
      >
        {navArray.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            // keeping href for SEO purposes
            href={link.path}
            offset={10}
            spy={true}
            smooth={true}
            duration={700}
          >
            <motion.div
              whileHover={navItemHover}
              transition={hoverProperty}
              className={'nav-item'}
              style={{
                backgroundColor: `${link.bgColor}`,
                color: `${link.color}`,
              }}
            >
              <div>{link.title}</div>
              <div className='id'>{link.id}</div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <div className='hide'>
        <Line />
      </div>

      {heroArray.map((link) => (
        <div key={link.titlePartOne}>
          <motion.div
            variants={opacity}
            initial='hidden'
            animate='show'
            className='row subtitle'
            id={link.id}
          >
            <Title transition={ctaTitle}>{link.titlePartOne}</Title>
            <Title transition={ctaTitle}>{link.titlePartTwo}</Title>
          </motion.div>
          <Line />
        </div>
      ))}
    </>
  );
};

export default CTA;
