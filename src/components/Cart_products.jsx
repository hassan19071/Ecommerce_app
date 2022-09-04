import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/cart.scss";

const CartProducts = ({
  cartProducts,
  deleteProduct,
  removeAllCartProducts,
}) => {
  const [total, setTotal] = useState(0);
  let prices = cartProducts.map((pro) => {
    return pro.price;
  });

  useEffect(() => {
    if (cartProducts.length > 0) {
      let price = prices.reduce((it, ind) => {
        return it + ind;
      });
      setTotal(price);
    }
  }, [cartProducts]);

  return (
    <div className="cart-products">
      <div className="container">
        <div className="head text-center">
          <h2>Shopping cart</h2>
        </div>
        <div className="cart">
          {cartProducts.length > 0 ? (
            cartProducts.map((pro) => {
              return (
                <div
                  className="row align-items-center mt-5 text-center pro"
                  key={pro.id}
                >
                  <div className="col-md-3">
                    <div className="img">
                      <img
                        src={pro.images[0]}
                        alt={pro.title}
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-md-0 mt-3">
                    <div className="price">
                      <h3>{pro.title}</h3>
                      <h2>Price: ${pro.price}</h2>
                    </div>
                  </div>
                  <div className="col-md-2 mt-md-0 mt-3">
                    <div className="qty d-flex align-items-center justify-content-center">
                      <button>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span>{1}</span>
                      <button>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 mt-md-0 mt-3">
                    <div className="total">
                      <h2>Total: ${pro.price}</h2>
                    </div>
                  </div>
                  <div className="col-md-1 mt-md-0 mt-3">
                    <div className="del">
                      <button onClick={() => deleteProduct(pro)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <h4 className="no">No products</h4>
              <Link className="back" to={"/shop"}>
                Back to shop
              </Link>
            </>
          )}
          <div className="checkout mt-5">
            {cartProducts.length > 0 ? (
              <div className="total-price d-flex align-items-center justify-content-between">
                <h3>Total Price: ${cartProducts.length > 0 ? total : 0}</h3>
                <div className="d-flex flex-wrap ">
                  <Link to="/checkout">Checkout</Link>
                  <button
                    className="remove-all"
                    onClick={removeAllCartProducts}
                  >
                    Remove All
                  </button>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
