import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Contact from "../components/contact";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <ReactTypingEffect
          className="typingeffect"
          text={["Carlton Hunt | Full Stack Software Developer"]}
          speed={100}
          eraseDelay={700}
        />
        <div className="social">
        <Contact/>
        </div>
      </div>
    );
  }
}

export default Home;