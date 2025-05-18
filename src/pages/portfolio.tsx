import React, { useState } from "react";
import Leftbar from "../components/leftbar";
import { Link } from "react-router-dom";
import { IProject, ListData, ProjectData } from "../data";
import "./portfolio.scss";
import EachProject from "../components/eachproject";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const [list, setList] = useState("All");

  const filterData = ProjectData.filter((item: IProject) => item.category === list);

  const handleOpenProject = (link: string) => {
    window.open(link)
  }

  return (
    <div className="portfolio">
      <Leftbar />
      <motion.div 
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="head"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1>Portfolio</h1>
          <div className="menu">
            <Link to={"/"}>About Me</Link>
            <Link to={"/portfolio"} style={{ color: "wheat" }}>Portfolio</Link>
          </div>
        </motion.div>
        <motion.div 
          className="line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="border"></span>
        </motion.div>
        <motion.div 
          className="tab"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {
            ListData.map((item: string, index: number) => (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setList(item)} 
                style={{ color: item === list ? "rgb(252, 216, 151)" : "rgb(202, 202, 202)" }} 
                key={index}
              >
                {item}
              </motion.button>
            ))
          }
        </motion.div>
        <motion.div 
          className="projects"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {list !== "All" ?
            filterData.map((item: IProject, index: number) => (
              <EachProject item={item} key={index} index={index} linkF={handleOpenProject} />
            )) : ProjectData.map((item: IProject, index: number) => (
              <EachProject item={item} key={index} index={index} linkF={handleOpenProject} />
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio;