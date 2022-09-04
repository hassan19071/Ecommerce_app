import React from "react";
import { Link } from "react-router-dom";
import "./style/sec-hero.scss";

const SecHero = ({ category }) => {
  return (
    <div className="sec-hero">
      <div className="overlay position-absolute"></div>
      <div className="text">
        <h1>{category}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {category}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default SecHero;
