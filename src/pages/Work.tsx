import React from 'react';
import { TabTitle } from '../../utils/GeneralFunctions';
import { IntroAnimation } from '@src/components/anim/Animation';
import Projects from '@src/components/projects/Projects';

const Work = (): React.ReactElement => {
  TabTitle('Hansi Brahimasi | Work');

  return (
    <>
      <IntroAnimation className='work-section'>
        <Projects />
      </IntroAnimation>
    </>
  );
};

export default Work;
