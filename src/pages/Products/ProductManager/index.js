import React, { Component, useEffect } from "react";
import "../ProductManager/ProductManager.css";
import Header from "../../../component/Header";
import FooterSection from "../../../component/FooterSection";
import abroad from "../../../assets/img/index/abroad-classic01.jpg";
import advice from "../../../assets/img/index/abroad-unique02.jpg";
import { useSelector } from "react-redux";
import { checkLikeProductSelector } from "../../../Redux/selector";

const ProductLikePage = () => {
  const productLike = JSON.parse(localStorage.getItem("productLike")) || [];
  return (
    <div>
      <Header />
      <div className="container content-section">
        <hr />
        <h2 className="section-header">
          <i className="bx bx-building-house" /> Dự án đã thêm
        </h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">DỰ ÁN</span>
          <span className="cart-price cart-header cart-column">GIÁ</span>
          <span className="cart-quantity cart-header cart-column">
            SỐ LƯỢNG
          </span>
        </div>
        <div className="cart-items">
          {productLike.length > 0 ? (
            productLike.map((product, index) => {
              return (
                <div className="cart-row" key={index}>
                  <div className="cart-item cart-column">
                    <img
                      className="cart-item-image"
                      alt=""
                      src={product.img}
                      width="100px"
                      height="100px"
                    />
                    <span className="cart-item-title">{product.title}</span>
                  </div>
                  <span className="cart-price cart-column">
                    {product.price}
                  </span>
                  <div className="cart-quantity cart-column">
                    <input
                      className="cart-quantity-input"
                      type="number"
                      defaultValue={1}
                    />
                    <button className="btn btn-danger" type="button">
                      Xoá
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No data !!</h2>
          )}
        </div>
        {/* <div className="cart-total">
          <strong className="cart-total-title">Tổng</strong>
          <span className="cart-total-price">3.000.000.000 đ</span>
        </div> */}
      </div>
      <FooterSection />
    </div>
  );
};

export default ProductLikePage;
