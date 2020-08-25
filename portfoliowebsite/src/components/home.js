import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../images/profile.jpg";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="profile" className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["Carlton Hunt"]}
          speed={100}
          eraseDelay={700}
        />
        <div class="social">
          <a href="https://www.github.com/Crltnhnt"><i class="fa fa-github fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/carlton-hunt-505297ab/"><i class="fa fa-linkedin fa-3x"></i></a>
        </div>
      </div>
    );
  }
}

export default Home;
