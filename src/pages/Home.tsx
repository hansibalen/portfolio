import React from 'react';
import Hero from '@src/components/home/Hero';
import CTA from '@src/components/home/CTA';
import { Box } from '@src/components/home/Box';

const Home = (): React.ReactElement => {
  return (
    <>
      <section className='home-container col disable-selection' id='home'>
        <Box className='column'>
          <Hero />
        </Box>

        <div className='white-space' />

        <Box className='secondary col cta'>
          <CTA />
        </Box>
      </section>
    </>
  );
};

export default Home;
