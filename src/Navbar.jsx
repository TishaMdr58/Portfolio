import React, { useState } from "react";
// import { Link } from "react-scroll";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function toggleMenu() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <nav className="navbar">
        <div className="hamburgerMenu" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        <motion.div className="logo">𓏲 ๋࣭˖Tisha๋࣭ ⭑𓆝 𓆟 𓆞 𓆝 𓆟</motion.div>
        {isMenuClicked ? (
          <div className="burger">
            <ul>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="#contact">
                <li>Contact </li>
              </a>
            </ul>
          </div>
        ) : (
          <></>
        )}
        <ul className="menuItems">
          <a href="#about">
            <li className="about">About</li>
          </a>
          <a href="#projects">
            <li className="projects">Projects</li>
          </a>
          <a href="#contact">
            <li className="contact">Contact </li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
