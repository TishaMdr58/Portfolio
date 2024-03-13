import React, { useState } from "react";
import "./Experience.css";
import Skills from "./Skills";
import { motion } from "framer-motion";

function Experience() {
  return (
    <>
      <div className="mainContainerExp">
        <div className="subContainerExp">
          <div className="headerExp">Skills</div>
          <div className="skills">
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{
                layout: {
                  duration: 1,
                },
              }}
              className="html"
            >
              <img src="../public/html.png" alt="" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{
                layout: {
                  duration: 1,
                },
              }}
              className="css"
            >
              <img src="../public/css.png" alt="" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{
                layout: {
                  duration: 1,
                },
              }}
              className="react"
            >
              <img src="../public/react.png" alt="" />
            </motion.div>
          </div>
          {/* {Skills.map((value, index) => (
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{
              layout: {
                duration: 1,
              },
            }}
            onClick={() => setShowCard(!showCard)}
            className="skills"
            key={index}
          >
            <img src={value.image} alt="" />
          </motion.div>
        ))} */}
        </div>
      </div>
    </>
  );
}

export default Experience;
