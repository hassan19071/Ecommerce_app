import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductInfo from "./pages/Product_info";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartShopping from "./pages/Cart_shopping";
import Checkout from "./pages/Checkout";
import Category from "./pages/Category";
import ShopPage from "./pages/Shop";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let [cartProducts, setCartProducts] = useState([]);

  const addToCart = (pro) => {
    if (
      cartProducts.includes(pro) ||
      cartProducts.find((el) => el.id === pro.id)
    ) {
      let notify = () => toast.error("Already exists!", { autoClose: 2000 });
      notify();
    } else {
      setCartProducts([pro, ...cartProducts]);
      let notify = () =>
        toast.success("Added successfully!", { autoClose: 2000 });
      notify();
    }
  };

  let deleteProduct = (pro) => {
    let filPros = cartProducts.filter((prod) => {
      return prod !== pro;
    });
    return setCartProducts(filPros);
  };

  let removeAllCartProducts = () => {
    return setCartProducts([]);
  };

  useEffect(() => {
    setLoading(false);
    let getProducts = async () => {
      let results = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=16"
      )
        .then((json) => json.json())
        .then((data) => setData(data));
      setLoading(true);
      return results;
    };
    return getProducts;
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_UR}>
      <Routes>
        <Route
          path={`/ecommerce_app`}
          element={
            <Home
              loading={loading}
              data={data}
              cartProducts={cartProducts}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="product/:id"
          element={
            <ProductInfo cartProducts={cartProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartShopping
              cartProducts={cartProducts}
              deleteProduct={deleteProduct}
              removeAllCartProducts={removeAllCartProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartProducts={cartProducts} />}
        />
        <Route
          path="/category/:name"
          element={
            <Category cartProducts={cartProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/shop"
          element={
            <ShopPage cartProducts={cartProducts} addToCart={addToCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
