import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutGroup, AnimatePresence } from 'framer-motion';
import './sass/main.scss';
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import NotFound from './pages/NotFound';

const App = (): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence mode='wait'>
        {loading ? (
          <Loader key='preloader' />
        ) : (
          <>
            <Router>
              <Navbar />
              <AnimatePresence mode='wait'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/work' element={<Work />} />
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Router>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
