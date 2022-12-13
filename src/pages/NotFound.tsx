import React from 'react';
import { IntroAnimation } from '@src/components/anim/Animation';
import { TabTitle } from '../../utils/GeneralFunctions';

const NotFound = (): React.ReactElement => {
  TabTitle('Hansi Brahimasi | 404');

  return (
    <IntroAnimation className='not-found'>
      <h1>404</h1>
      <p>
        You have reached the site&apos;s edge, none but devils browse past here.
      </p>
    </IntroAnimation>
  );
};

export default NotFound;
