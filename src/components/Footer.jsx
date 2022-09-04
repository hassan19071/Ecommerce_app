import React from "react";
import "./style/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="text">
              <div className="useful-links">
                <h5>Useful Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="social my-5">
                <h5>Social Media</h5>
                <div className="icons">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="ms-3">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="ms-3">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="rigths">
                <h5>Copyrights</h5>
                <p>
                  &copy; All rights reserved to <a href="#">Hassan</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="form">
              <h5>Subscripe to our newsletter and get 10% off!</h5>
              <form>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscripe</button>
                <p>Get reqular updates on our products with our newsletter.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="foot text-center">
        <div className="container">
          <p className="mb-0">Made With &hearts; By Hassan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
