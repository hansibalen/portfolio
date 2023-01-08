import React from 'react';
import Container from '@src/components/base/Container';
import Header from '@src/components/base/Header';
import ProjectList from '@src/components/projects/ProjectList';

const Work = (): React.ReactElement => {
  return (
    <>
      <Container className='work-container' id='work'>
        <Header headTitle='Recent work.' headSub="Products I've worked on." />
        <ProjectList />
      </Container>
    </>
  );
};

export default Work;
