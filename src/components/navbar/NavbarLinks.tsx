import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { children } from '../anim/AnimationValues';
import Chevron from '../../../assets/svg/Chevron';

const NavbarLinks = (): React.ReactElement => {
  const navArray = [
    { path: '/', title: 'home' },
    { path: '/work', title: 'work' },
    { path: '/about', title: 'about' },
  ];

  return (
    <>
      {navArray.map((link) => (
        <motion.li variants={children} key={link.title}>
          <NavLink to={link.path} aria-label={link.title + 'section button'}>
            <motion.span
              whileInView={{ opacity: 0 }}
              transition={{
                ease: 'linear',
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Chevron className='chevron' />
            </motion.span>
            {link.title}
          </NavLink>
        </motion.li>
      ))}
    </>
  );
};

export default NavbarLinks;
