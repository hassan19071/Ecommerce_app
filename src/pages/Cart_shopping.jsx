import React from "react";
import CartProducts from "../components/Cart_products";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CartShopping = ({
  cartProducts,
  deleteProduct,
  removeAllCartProducts,
}) => {
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <CartProducts
        cartProducts={cartProducts}
        deleteProduct={deleteProduct}
        removeAllCartProducts={removeAllCartProducts}
      />
      <Footer />
    </>
  );
};

export default CartShopping;
