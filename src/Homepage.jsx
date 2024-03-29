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
import lol from "../public/lol.png";

function Homepage() {
  const handleDownload = () => {
    const downloadUrl =
      "https://drive.google.com/file/d/1zJofsqUVnFBin22ZOStj19w7bxEdQLcg/view?usp=sharing";
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
                // initial={{ y: 200 }}
                // animate={{ y: 0 }}
                // transition={{ duration: "1.5" }}
                whileHover={{ color: "#008080" }}
                className="title-motion"
                // style={{ display: "inline-block", color: "black" }}
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
                // initial={{ y: 200 }}
                // animate={{ y: 0 }}
                // transition={{ duration: "1.5" }}
                className="desc"
              >
                I'm a frontend developer. I specialize in creating visually
                appealing, user-friendly interfaces for websites and web
                applications. Reach out if you'd like to learn more!
              </motion.p>
            </div>

            <motion.div className="myImage">
              <img src={lol} alt="" />
            </motion.div>
          </div>
          <div className="btns">
            <a onClick={handleDownload} className="cvBtn">
              Download CV
            </a>
          </div>

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
