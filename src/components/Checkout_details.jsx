import React, { useState } from "react";
import visa from "../imgs/visa.svg";
import paypal from "../imgs/paypal.svg";
import "./style/checkout.scss";
import { Link } from "react-router-dom";

const Checkout_details = ({ cartProducts }) => {
  let [sucess, setSucess] = useState(false);

  let handelSubmit = (event) => {
    event.preventDefault();
    setSucess(true);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        {sucess ? (
          <div className="msg">
            <h1>Purchased successfully</h1>
            <Link to="/shop">Back to shop</Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-7">
              <div className="form">
                <h3>Checkout</h3>
                <form className="row g-3" onSubmit={(e) => handelSubmit(e)}>
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      id="inputEmail4"
                      placeholder="Hello@example.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="firstName"
                      placeholder="Hassan"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="lastName"
                      placeholder="Khaled"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="inputCity"
                      placeholder="Cairo"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="inputState"
                      placeholder="+0 111-222-333-12"
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="inputZip"
                      placeholder="Nationl id"
                    />
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <h4>Payment method</h4>
                        <div className="mt-3 d-flex align-items-center">
                          <input
                            className="form-check-input"
                            required
                            type="radio"
                            id="gridCheck1"
                            name="payment"
                          />
                          <label
                            className="form-check-label ms-3"
                            htmlFor="gridCheck1"
                          >
                            <img src={visa} />
                          </label>
                        </div>
                        <div className="mt-3 d-flex align-items-center">
                          <input
                            className="form-check-input"
                            required
                            type="radio"
                            id="gridCheck2"
                            name="payment"
                          />
                          <label
                            className="form-check-label ms-3"
                            htmlFor="gridCheck2"
                          >
                            <img src={paypal} />
                          </label>
                        </div>
                        <div className="mt-3 d-flex align-items-center">
                          <input
                            className="form-check-input"
                            required
                            type="radio"
                            id="gridCheck4"
                            name="payment"
                          />
                          <label
                            className="form-check-label ms-3"
                            htmlFor="gridCheck4"
                          >
                            Bank account
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-7 mt-lg-0 mt-5">
                        <h5>Enetr Your Password</h5>
                        <input type="text" required className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit">Order Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-5 ps-lg-5">
              <h6>items {cartProducts.length}</h6>
              {cartProducts.map((pro) => {
                return (
                  <div
                    className="product-info d-flex justify-content-between py-3 align-items-center"
                    key={pro.id}
                  >
                    <div className="pro">
                      <div className="img">
                        <img
                          src={pro.images[0]}
                          alt={pro.title}
                          className="w-100"
                        />
                      </div>
                      <div className="text">
                        <h4>{pro.title}</h4>
                        <span>${pro.price}</span>
                      </div>
                    </div>
                    <div className="total mt-4">
                      <div>
                        <p>
                          Shiping charge: <span>free</span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Total: <span>${pro.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout_details;
