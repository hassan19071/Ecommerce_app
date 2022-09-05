import React, { useState } from "react";
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

  return (
    <BrowserRouter basename={process.env.PUBLIC_UR}>
      <Routes>
        <Route
          path={`/ecommerce_app`}
          element={
            <Home
              cartProducts={cartProducts}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/ecommerce_app/product/:id"
          element={
            <ProductInfo cartProducts={cartProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/ecommerce_app/cart"
          element={
            <CartShopping
              cartProducts={cartProducts}
              deleteProduct={deleteProduct}
              removeAllCartProducts={removeAllCartProducts}
            />
          }
        />
        <Route
          path="/ecommerce_app/checkout"
          element={<Checkout cartProducts={cartProducts} />}
        />
        <Route
          path="/ecommerce_app/category/:name"
          element={
            <Category cartProducts={cartProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/ecommerce_app/shop"
          element={
            <ShopPage cartProducts={cartProducts} addToCart={addToCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
