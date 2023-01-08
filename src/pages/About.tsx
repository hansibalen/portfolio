import React from 'react';
import Container from '@src/components/base/Container';
import Line from '@src/components/base/Line';
import Header from '@src/components/base/Header';
import { experienceArr } from '@src/utils/Content';

const About = (): React.ReactElement => {
  return (
    <>
      <Container className='about-container' id='about'>
        <Header headTitle='Who am I?' headSub='A short description.' />
        <p className='about-me description'>
          I&apos;m a software developer from Albania, experienced in front-end
          development, design and creative coding.
          <br /> I build lightweight, user-friendly & interactive web products
          with distinctive UI/UX. I&apos;m always learning new methodologies and
          researching robust solutions to apply to business and technology daily
          challenges.
        </p>
        <div className='exp-list col'>
          {experienceArr.map((exp) => (
            <div className='column' key={exp.position}>
              <div className='exp-row'>
                <h2>{exp.position}</h2>
                <h2>{exp.start}</h2>
                <h2>{exp.finish}</h2>
              </div>
              <Line />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default About;
