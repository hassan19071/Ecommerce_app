import React from "react";
import Checkout_details from "../components/Checkout_details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Checkout = ({ cartProducts }) => {
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <Checkout_details cartProducts={cartProducts} />
      <Footer />
    </>
  );
};

export default Checkout;
