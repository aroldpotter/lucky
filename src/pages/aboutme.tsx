import React from "react";
import "./aboutme.scss";
import Leftbar from "../components/leftbar";
import { Link } from "react-router-dom";
import { ISkill, SkillData } from "../data";
import EachSkill from "../components/eachskill";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
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
          <h1>About Me</h1>
          <div className="menu">
            <Link to={"/"} style={{ color: "wheat" }}>About me</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Creative and passionate self-learning developer with 6 years of experience 
          in building web and mobile applications. Proficient in utilizing a diverse 
          tech stack, including React JS, Vue.js, Angular, and PHP frameworks (such as 
          Laravel), as well as Node.js and Express for backend development. Skilled in 
          Shopify development, including theme customization, Liquid templating, Shopify 
          CLI, Polaris, and third-party app integrations, with experience building both 
          custom storefronts and Shopify apps.
          Experienced in creating responsive interfaces and reusable components across 
          various platforms. Additionally, skilled in developing decentralized applications 
          on the Solana blockchain using Rust and JavaScript, and adept at building bots with 
          Python and Node.js to enhance application functionality.
        </motion.p>
        <motion.div
          className="doing"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            What I am doing?
          </motion.h1>
          <motion.div
            className="skills"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {
              SkillData.map((item: ISkill, index: number) => (
                <EachSkill index={index} logo_path={item.logo_path} title={item.title} text={item.text} key={index} />
              ))
            }
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutMe;