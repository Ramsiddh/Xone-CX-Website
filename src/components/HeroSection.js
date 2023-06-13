import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/space.mp4" autoPlay loop muted /> */}
      <h1>Xone Currency Exchange</h1>
      <p>Confidently Navigate International Markets</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Link to="/sign-up" className="btns">
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            to="/sign-up"
          >
            Register Now{" "}
            <ion-icon name="finger-print-outline" id="S2"></ion-icon>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
