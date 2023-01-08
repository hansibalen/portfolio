import React, { useState, useEffect } from 'react';
import { LayoutGroup, AnimatePresence } from 'framer-motion';
import './sass/main.scss';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Loader from './components/loader/Loader';

const App = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);
  return (
    <LayoutGroup>
      <AnimatePresence mode='popLayout'>
        {loading ? (
          <Loader key='preloader' />
        ) : (
          <>
            <Home />
            <Work />
            <About />
            <Contact />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
