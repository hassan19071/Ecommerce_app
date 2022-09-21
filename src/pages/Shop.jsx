import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopProducts from "../components/Shop_products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopPage = ({ cartProducts, addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let getAllPros = async () => {
      setLoading(false);
      let results = await fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((json) => json.json())
        .then((data) => {
          setData(data);
        });
      setLoading(true);
      return results;
    };
     getAllPros();
  }, []);
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <ShopProducts addToCart={addToCart} data={data} loading={loading} />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ShopPage;
