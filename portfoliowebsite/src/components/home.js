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
          text={["Carlton Hunt | Full Stack Software Developer"]}
          speed={100}
          eraseDelay={700}
        />
        <div class="social">
          <a href="https://drive.google.com/file/d/18wnKOggp5EcPuyQu4rPISqeKWP8pbmGC/view"><i class="fa fa-cloud-download fa-3x"></i></a>
          <a href="https://www.github.com/Crltnhnt"><i class="fa fa-github fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/carlton-hunt-505297ab/"><i class="fa fa-linkedin fa-3x"></i></a>
        </div>
      </div>
    );
  }
}

export default Home;
