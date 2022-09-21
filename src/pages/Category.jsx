import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SecHero from "../components/Sec_hero";
import { useParams } from "react-router-dom";
import CategoryProducts from "../components/category_products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = ({ cartProducts, addToCart }) => {
  let category = useParams().name;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    let getProducts = async () => {
      let results = await fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((json) => json.json())
        .then((data) => setData(data));
      setLoading(true);
      return results;
    };
     getProducts();
  }, [category]);
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <SecHero category={category} />
      <ToastContainer />
      <CategoryProducts
        category={category}
        data={data}
        addToCart={addToCart}
        loading={loading}
      />
      <Footer />
    </>
  );
};

export default Category;
