import React from "react";

function Brand(props) {
  const brand = props.children;
  return (
    <div className="col-xs-12">
      <div className="single-brand-product">
        <a href="single-product.html">
          <div className="ratio-brand">
            <img src={brand.image} alt="" />
          </div>
        </a>
        <h3 className="brand-title text-gray">
          <a href="1">{brand.name}</a>
        </h3>
      </div>
    </div>
  );
}

export default Brand;
