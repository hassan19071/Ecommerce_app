import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style/products.scss";

const Products = ({ addToCart }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
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
  },[])

  return (
    <div className="products" id="product">
      <div className="container">
        <div className="head text-center">
          <h3>Latest Products</h3>
        </div>
        <div className="row my-5">
          {loading ? (
            data.map((product) => {
              return (
                <div className="col-lg-3 col-md-6 mt-4" key={product.id}>
                  <div className="position-relative product">
                    <div className="img">
                      <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className="text">
                      <div className="title">
                        <h4>{product.title}</h4>
                        <span>{product.category.name}</span>
                      </div>
                      <div className="rate text-center mt-3 mb-2">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                      <div className="price text-center">
                        <p className="mb-0">${product.price}</p>
                      </div>
                    </div>
                    <div className="add position-absolute d-flex align-items-center justify-content-center">
                      <Link to={`/ecommerce_app/product/${product.id}`}>
                        <i className="fa-solid fa-info"></i>
                      </Link>
                      <button onClick={() => addToCart(product)}>
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4">
                <Skeleton height={200} />
                <div>
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                  <Skeleton height={20} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
