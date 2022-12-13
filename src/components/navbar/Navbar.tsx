import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spiral as Hamburger } from 'hamburger-react';
import { menuContainer, burgerMenu, navbar } from '../anim/AnimationValues';
import NavbarLinks from './NavbarLinks';

const Navbar = (): React.ReactElement => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.nav variants={navbar} initial='hidden' animate='show'>
      <div className='header-content'>
        <div className='logo'>
          <a
            href='/'
            className={'nav-logo' + (isOpen ? '-open' : '')}
            aria-label='website logo & refresh page button'
          >
            hb
          </a>
        </div>
        <div className='hamburger-icon'>
          <Hamburger
            size={25}
            easing='ease-in'
            duration={0.3}
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? '#f1ede8' : '#24242a'}
            aria-label='navigation menu button'
          />
        </div>
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.section
              key={'box'}
              variants={burgerMenu}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              className={'menu-' + (isOpen ? 'show' : 'hide')}
            >
              <motion.ul
                variants={menuContainer}
                initial={'hidden'}
                animate={'show'}
                exit={'hidden'}
                onClick={() => setOpen(!isOpen)}
              >
                <NavbarLinks />
              </motion.ul>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
