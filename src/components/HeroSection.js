import React from "react";
import { Button } from "./Button";
import './HeroSection.css'
import '../App.css'
function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Design and Software Agency</h1>
      <p> The correct address of the software.</p>
      <div className="hero-butons">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >Get Started</Button>
         <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >LOGIN</Button>
      </div>
    </div>
  );
}

export default HeroSection;
