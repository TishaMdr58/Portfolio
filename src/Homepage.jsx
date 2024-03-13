import React from "react";
import "./Homepage.css";
import duck from "../public/tiu.jpg";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Contact from "./Contact";
import Typewriter from "typewriter-effect";
import Projects from "./Projects";
import me1 from "../public/tims.jpg";

function Homepage() {
  const handleDownload = () => {
    const downloadUrl = "../public/TishaManandhar_resume.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="mainHomepage">
        <div className="subContainer">
          <div className="container">
            <div className="content">
              <motion.h1
                initial={{ x: -200 }}
                animate={{ x: 1 }}
                transition={{ duration: "1.5" }}
                whileHover={{ color: "#008080" }}
                className="title-motion"
                style={{ display: "inline-block", color: "black" }}
              >
                Hi, I'm
                <Typewriter
                  options={{
                    strings: ["Tisha"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.h1>

              <motion.p
                initial={{ x: -200 }}
                animate={{ x: 1 }}
                transition={{ duration: "1.5" }}
                className="desc"
              >
                I'm a frontend developer. Reach out if you'd like to learn more!
              </motion.p>
            </div>

            <motion.div className="myImage">
              <img src={me1} alt="" />
            </motion.div>
          </div>
          <a href="#contact" className="contactmeBtn">
            Contact Me
          </a>
          <a onClick={handleDownload} className="cvBtn">
            Download CV
          </a>

          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
