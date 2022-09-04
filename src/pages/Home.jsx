import React from 'react';
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({cartProducts, addToCart}) => {
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <HeroSection />
      <ToastContainer />
      <Products addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Home;
