import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from './pages/aboutme';
import Portfolio from './pages/portfolio';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './components/Welcome';
import Loading from './components/Loading';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path={"/portfolio"} 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Portfolio />
            </motion.div>
          } 
        />
        <Route 
          path={"/"} 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AboutMe />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Welcome />
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
