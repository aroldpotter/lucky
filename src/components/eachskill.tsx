import React from "react";
import { ISkill } from "../data";
import { motion } from "framer-motion";

interface Props extends Omit<ISkill, 'index'> {
  index: number;
}

const EachSkill: React.FC<Props> = ({ logo_path, title, text, index }) => {
  return (
    <motion.div 
      className="each-skill" 
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div 
        className="skill-logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5, type: "spring" }}
      >
        <motion.img 
          className={index === 1 ? title.slice(0, 3) + "_" : title.slice(0, 3)} 
          src={logo_path} 
          alt="avatar"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
      <motion.div 
        className="skill-content"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default EachSkill;