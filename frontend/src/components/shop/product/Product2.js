import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonProduct from "../../button-product/ButtonProduct";

function Product2(props) {
  const product = props.children || [];
  const brands = useSelector(state=>state.brands);
  const brand =brands.length ? brands[brands.findIndex(x=>x.id === product.brand)]: '';
  const color = product.color;

  return (
    <div className="col-md-12">
      <div className="shop-list product-item">
        <div className="product-img">
          <Link to={`/single-product/${product.id}`}>
            <div className="ratio-image">
              <img src={product.mainImage} alt="" />
            </div>
          </Link>
        </div>
        <div className="product-info">
          <div className="clearfix">
            <h6 className="product-title f-left">
              <Link to={`single-product/${product.id}`}>{product.name}</Link>
            </h6>
            <div className="pro-rating f-right">
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
          </div>
          <h6 className="brand-name mb-30">{brand.name}</h6>
          <h3 className="pro-price">{Number(product.price).toLocaleString('en-US')} ₫</h3>
          <p>
            {product.desc}
          </p>
          <ButtonProduct product ={product} color={color[0]}></ButtonProduct>
        </div>
      </div>
    </div>
  );
}

export default Product2;
