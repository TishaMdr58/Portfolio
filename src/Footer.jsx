import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div className="subFooter">
          <div className="detailsFooter">
            <div className="pages">
              <h1>Pages</h1>
              <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="social">
              <h1>Socials</h1>
              <div className="socialUl">
                <div className="github">
                  <a href="https://github.com/TishaMdr58" className="icon">
                    <FaGithub />
                  </a>
                  <div className="link1">Github</div>
                </div>
                <div className="linked">
                  <a
                    href="www.linkedin.com/in/tisha-manandhar-4586171a3"
                    className="icon"
                  >
                    <FaLinkedin />
                  </a>
                  <div className="link2">LinkedIn</div>
                </div>
                <div className="email">
                  <a href="mailto:mdrtisha@gmail.com" className="icon">
                    <MdEmail />
                  </a>
                  <div className="link3">Email</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Footer;
