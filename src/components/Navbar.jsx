import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/navbar.scss";

const Navbar = ({ cartProducts }) => {
  let [menu, setMenu] = useState(true);
  return (
    <div className="navbar-nav">
      <div className="container">
        <div className="nav d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <Link to={`/${process.env.PUBLIC_UR}`}>Shop.</Link>
            </h1>
          </div>
          <div
            className={
              menu ? "links text-lg-center hide" : "links text-lg-center"
            }
          >
            <ul className="list-unstyled d-lg-flex mb-0">
              <li>
                <Link to={`/${process.env.PUBLIC_UR}`}>Home</Link>
              </li>
              <li>
                <Link to="/category/Clothes">Clothes</Link>
              </li>
              <li>
                <Link to="/category/Electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/category/Furniture">Furniture</Link>
              </li>
              <li>
                <Link to="/category/Shoes">Shoes</Link>
              </li>
            </ul>
          </div>
          <div className="cart d-flex align-items-center">
            <Link to="/cart" className="position-relative">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="position-absolute">{cartProducts.length}</span>
            </Link>
            <div className="menu d-lg-none ms-4">
              <i
                className="fa-solid fa-bars"
                onClick={() => setMenu(!menu)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
