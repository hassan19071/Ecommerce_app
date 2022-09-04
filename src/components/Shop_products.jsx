import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style/products.scss";
import "./style/shop.scss";

const ShopProducts = ({ addToCart, data, loading }) => {
  let [pros, setPros] = useState([]);
  let [val, setVal] = useState(0);
  let [maxVal, setMaxVal] = useState();
  let [minVal, setMinVal] = useState();

  let handelChange = (e) => {
    setVal(e.target.value);
  };

  let handelMinPrice = (e) => {
    setMinVal(e.target.value);
  };

  let handelMaxPrice = (e) => {
    setMaxVal(e.target.value);
  };

  let filterByPrice = () => {
    let filPrice = data.filter((pro) => {
      return (
        pro.price >= minVal && pro.price <= maxVal && pro.category.id == val
      );
    });
    let filPriceForAll = data.filter((pro) => {
      return pro.price >= minVal && pro.price <= maxVal;
    });
    if (minVal && maxVal && val > 0) {
      setPros(filPrice);
    } else if (val == 0 && minVal && maxVal) {
      setPros(filPriceForAll);
    }
  };

  useEffect(() => {
    if (val == 0) {
      setPros(data);
    } else {
      let filPro = data.filter((pro) => {
        return pro.category.id == val;
      });
      setPros(filPro);
    }
  }, [val, loading]);

  return (
    <div className="products">
      <div className="container">
        <div className="head">
          <h3>Shop</h3>
        </div>
        <div className="filter d-flex justify-content-between">
          <div className="category">
            <h5>Categoty</h5>
            <select
              name="category"
              value={val}
              onChange={(e) => handelChange(e)}
            >
              <option value="0">All</option>
              <option value="1">Clothes</option>
              <option value="2">Electronice</option>
              <option value="3">Furniture</option>
              <option value="4">Shoes</option>
            </select>
          </div>
          <div className="price">
            <h5>Filter by price</h5>
            <div className="values">
              <input
                type="number"
                min="0"
                max="10000"
                placeholder="Min"
                onChange={(e) => handelMinPrice(e)}
                value={minVal}
              />
              <input
                type="number"
                min="0"
                value={maxVal}
                max="10000"
                placeholder="Max"
                className="mx-3"
                onChange={(e) => handelMaxPrice(e)}
              />
              <button onClick={filterByPrice}>Filter</button>
            </div>
          </div>
        </div>
        <div className="row my-5">
          {loading? (
            pros.map((product) => {
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
                      <Link to={`/product/${product.id}`}>
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
        {pros.length == 0? (<h4 className="no-pros">no products</h4>):false}
      </div>
    </div>
  );
};

export default ShopProducts;
