import React from "react";
import { Link } from "react-router-dom";
import ButtonProduct from "../../button-product/ButtonProduct";

function Product1(props) {
  const product = props.children || [];
  const color = product.color || '';

  return (
    <div className="col-md-4 col-sm-4 col-xs-12">
      <div className="product-item">
        <div className="product-img">
          <Link to={`/single-product/${product.id}`}>
            <div className="ratio-image">
              <img src={product.mainImage} alt="" />
            </div>
          </Link>
        </div>
        <div className="product-info">
          <h6 className="product-title">
            <Link to={`single-product/${product.id}`}>{product.name}</Link>
          </h6>
          <div className="pro-rating">
            <a href="1">
              <i className="zmdi zmdi-star" />
            </a>
            <a href="1">
              <i className="zmdi zmdi-star" />
            </a>
            <a href="1">
              <i className="zmdi zmdi-star" />
            </a>
            <a href="1">
              <i className="zmdi zmdi-star-half" />
            </a>
            <a href="1">
              <i className="zmdi zmdi-star-outline" />
            </a>
          </div>
          <h3 className="pro-price">{Number(product.price).toLocaleString('en-US')} ₫</h3>
          <ButtonProduct product ={product} color={color[0]}></ButtonProduct>
        </div>
      </div>
    </div>
  );
}

export default Product1;
