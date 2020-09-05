import React from "react";

function RecentProduct(props) {
  return (
    <div className="product-item">
      <div className="product-img">
        <a href="single-product.html">
          <img src={process.env.PUBLIC_URL +"/img/product/12.jpg"} alt="" />
        </a>
      </div>
      <div className="product-info">
        <h6 className="product-title">
          <a href="single-product.html">Tên sản phẩm</a>
        </h6>
        <h3 className="pro-price">000.000 ₫</h3>
      </div>
    </div>
  );
}

export default RecentProduct;
