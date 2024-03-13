import React, { useEffect } from "react";
import "./About.css";
import duck from "../public/tiu.jpg";
import me from "../public/me.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <>
      <motion.div
        id="about"
        // animate={{ scale: 1 }}
        // initial={{ scale: 0 }}
        // whileInView={{ opacity: 1, scale: 1.09 }}
        // transition={{ duration: "1.5" }}
        className="mainAbtContainer"
      >
        <div className="aboutContainer">
          <div className="header">About me</div>
          <div className="myContent">
            <div className="imageOfMe">
              <img src={me} alt="" />
            </div>
            <div className="myDescription">
              <h1 className="descHeading">I am Tisha Manandhar.</h1>
              <p>
                I'm a passionate frontend developer with expertise in React.js,
                HTML, CSS, and JavaScript. With a keen eye for detail and a love
                for crafting beautiful user interfaces, I strive to create
                seamless and engaging web experiences that captivate users.
                <br />
                Whether you're looking to collaborate on a project, discuss
                frontend development trends, or simply share ideas, I'd love to
                connect. Feel free to reach out, and let's explore how we can
                create something remarkable together.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
