import React from "react";

function RowWishList(props) {
  return (
    <tr>
      <td className="product-thumbnail">
        <div className="pro-thumbnail-img">
          <img src={process.env.PUBLIC_URL + "/img/cart/1.jpg"} alt="" />
        </div>
        <div className="pro-thumbnail-info text-left">
          <h6 className="product-title-2">
            <a href="1">Tên sản phẩm</a>
          </h6>
          <p>Nhãn hiệu</p>
          <p>Màu sắc</p>
        </div>
      </td>
      <td className="product-price">560,000 ₫</td>
      <td className="product-stock text-uppercase">Còn hàng</td>
      <td className="product-add-cart">
        <a href="1" title="Add To Cart">
          <i className="zmdi zmdi-shopping-cart-plus" />
        </a>
      </td>
      <td className="product-remove">
        <a href="1">
          <i className="zmdi zmdi-close" />
        </a>
      </td>
    </tr>
  );
}

export default RowWishList;
