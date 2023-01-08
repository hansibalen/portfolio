import React from 'react';
import { Link } from 'react-scroll';
import Container from '@src/components/base/Container';
import Header from '@src/components/base/Header';
import Form from '@src/components/contact/Form';
import SocialNetwork from '@src/components/contact/SocialNetwork';

const Contact = (): React.ReactElement => {
  return (
    <>
      <Container className='contact-container' id='contact'>
        <Header
          headTitle='Get in touch.'
          headSub='Regarding projects, or just to say hi.'
        />
        <Form />
        <SocialNetwork />
        <Link
          to={'home'}
          // keeping href for SEO purposes
          href={'home'}
          offset={-10}
          spy={true}
          smooth={true}
          duration={700}
          className='scroll-top intro'
        >
          <span>Scroll Top</span>
        </Link>
      </Container>
    </>
  );
};

export default Contact;
