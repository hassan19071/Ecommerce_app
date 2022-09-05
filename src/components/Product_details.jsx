import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style/product-details.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = ({ addToCart }) => {
  const productId = useParams().id;
  const [product, setProduct] = useState([]);
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    let getProducts = async () => {
      let results = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`
      )
        .then((json) => json.json())
        .then((data) => setProduct(data));
      setLoading(true);
      return results;
    };

    return getProducts;
  }, []);

  return (
    <div className="product-details">
      <div className="container">
        {loading ? (
          <div className="row align-items-center" key={product.id}>
            <div className="col-lg-6">
              <div className="imgs">
                <div className="main-img">
                  <img
                    src={product.images[num]}
                    alt={product.title}
                    className="w-100"
                  />
                </div>
                <div className="choose-imgs d-flex justify-content-between mt-3">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-100"
                    onClick={() => setNum(0)}
                  />
                  <img
                    src={product.images[1]}
                    alt={product.title}
                    className="w-100"
                    onClick={() => setNum(1)}
                  />
                  <img
                    src={product.images[2]}
                    alt={product.title}
                    className="w-100"
                    onClick={() => setNum(2)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="info">
                <h3>{product.title}</h3>
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className="price">
                  <h2>${product.price}</h2>
                </div>
                <div className="description">
                  <h4>Description:</h4>
                  <p>{product.description}</p>
                </div>
                <div className="category">
                  <p>
                    <span>Category</span>: {product.category.name}
                  </p>
                </div>
                <div className="add">
                  <button onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                  <Link to={"/ecommerce_app/shop"} className="back-shop">
                    Back to shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div>
                <Skeleton height={300} />
              </div>
              <div className="d-flex justify-content-between">
                <Skeleton height={150} className="sek" />
                <Skeleton height={150} className="sek" />
                <Skeleton height={150} className="sek" />
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div>
                <Skeleton height={20} width={200} />
              </div>
              <div>
                <Skeleton height={20} width={200} />
              </div>
              <div>
                <Skeleton height={20} width={200} />
              </div>
              <div>
                <Skeleton height={20} width={200} />
                <Skeleton height={10} width={300} />
                <Skeleton height={10} width={300} />
                <Skeleton height={10} width={300} />
                <Skeleton height={10} width={300} />
              </div>
              <div>
                <Skeleton height={20} width={200} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
