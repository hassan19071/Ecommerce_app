import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ loading, data, cartProducts, addToCart }) => {
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <HeroSection />
      <ToastContainer />
      <Products data={data} loading={loading} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Home;
