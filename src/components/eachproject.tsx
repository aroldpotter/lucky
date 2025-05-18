import React from "react";
import { IProject } from "../data";
import { EyeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

interface IProps {
  item: IProject;
  index: number;
  linkF?: any;
}

const EachProject: React.FC<IProps> = ({ item, index, linkF }) => {
  return (
    <motion.div 
      className="each-project" 
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="project-img"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="show_view"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="icon" 
            onClick={() => linkF(item.link)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <EyeOutlined />
          </motion.div>
        </motion.div>
        <img src={item.path} alt="project" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      >
        {item.title}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      >
        {item.stack}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
      >
        {item.text}
      </motion.p>
    </motion.div>
  )
}

export default EachProject;