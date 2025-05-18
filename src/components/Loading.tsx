import React from 'react';
import { motion } from 'framer-motion';
import './Loading.scss';

const Loading: React.FC = () => {
  return (
    <motion.div 
      className="loading-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-content">
        <motion.div 
          className="spinner"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 1.5,
              ease: "linear",
              repeat: Infinity
            },
            scale: {
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity
            }
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="gradient-text"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading; 