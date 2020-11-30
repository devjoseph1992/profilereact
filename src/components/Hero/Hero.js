import React from "react";
import { BiFolderOpen } from "react-icons/bi";

import "./Hero.css";

import { Button } from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>
        He
        <span />
        <br />
        llo
        <br />
        i'am.
      </h1>
      <p>John Joseph Florina</p>
      <p>Junior Stack Developer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get in Touch
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Portfolio <BiFolderOpen border="circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
