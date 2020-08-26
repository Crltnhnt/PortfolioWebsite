import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Project from "./components/project";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/PortfolioWebsite">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}
export default App;
