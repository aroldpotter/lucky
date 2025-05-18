import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Welcome.scss';

const Welcome: React.FC = () => {
  const [show, setShow] = useState(() => {
    // Check if this is the first visit
    return !localStorage.getItem('hasVisited');
  });

  useEffect(() => {
    if (show) {
      // Set the flag after showing welcome message
      const timer = setTimeout(() => {
        setShow(false);
        localStorage.setItem('hasVisited', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="welcome-overlay"
          initial={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }}
        >
          <motion.div
            className="welcome-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            exit={{ 
              opacity: 0,
              y: -20,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
            >
              Welcome to my portfolio
            </motion.h1>
            <motion.div 
              className="underline"
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome; 