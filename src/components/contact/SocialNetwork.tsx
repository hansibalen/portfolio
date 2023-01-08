import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '@src/utils/Content';
import { opacity, viewport } from '@src/components/anim/Values';

const SocialNetwork = () => {
  return (
    <>
      <motion.ul
        variants={opacity}
        initial='hidden'
        whileInView='show'
        viewport={viewport}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
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
    </>
  );
};

export default SocialNetwork;
