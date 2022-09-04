import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/Product_details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = ({ cartProducts, addToCart }) => {
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <ToastContainer />
      <ProductDetails addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default ProductInfo;
