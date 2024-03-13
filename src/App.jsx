import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Experience />}></Route>
        </Routes>
      </Router>
      {/* <Contact /> */}
      {/* <Projects/> */}
    </>
  );
}

export default App;
