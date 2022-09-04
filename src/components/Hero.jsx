import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../imgs/hero-img.png";
import "./style/hero.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="hero-text">
              <h4>Trade in offer!</h4>
              <h1>
                New <span>Products</span>
                <br /> Arrivals
              </h1>
              <p>Save more with coupons & up to 60% off!</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-lg-0 mb-4">
            <div className="hero-img">
              <img src={heroImg} alt="smart headphone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
