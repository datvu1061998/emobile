import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartToggle from "./CartToggle";

function ListCartToggle(props) {
  const cart = useSelector((state) => state.cart);
  const cartProducts = useSelector((state) => state.cartProducts) || [];

  return (
    <div className="total-cart f-left">
      <div className="total-cart-in">
        <div className="cart-toggler">
          <Link to="/cart/shoping-cart">
            <span className="cart-quantity"> {showQualityAllCart(cart)} </span>
            <br />
            <span className="cart-icon">
              <i className="zmdi zmdi-shopping-cart-plus" />
            </span>
          </Link>
        </div>
        <ul>
          <li>
            <div className="top-cart-inner your-cart">
              <h5 className="text-capitalize"> Giỏ hàng của bạn </h5>{" "}
            </div>
          </li>
          <li>
            <div className="total-cart-pro">
              {showCartToogle(cartProducts)}
            </div>
          </li>
          <li>
            <div className="top-cart-inner subtotal">
              <h4 className="text-uppercase g-font-2">
                Tổng = <span> {`${showTotal(cart, cartProducts)} ₫`} </span>
              </h4>
            </div>
          </li>
          <li>
            <div className="top-cart-inner view-cart">
              <h4 className="text-uppercase">
                <Link to="/cart/shoping-cart"> Xem giở hàng </Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="top-cart-inner check-out">
              <h4 className="text-uppercase">
                <Link to="/cart/check-out"> Thanh Toán </Link>
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

const showTotal = (cart, cartProducts) => {
  let result = 0;
  if (
    cart &&
    cartProducts &&
    Object.keys(cart).length > 0 &&
    cartProducts.length > 0
  ) {
    result = cartProducts.reduce((total, product) => {
      const price =
        product.price * Object.values(cart[product.id]).reduce((t, n) => t + n);
      return total + price;
    }, result);
    return result.toLocaleString("en-US");
  }
};

const showCartToogle = (products) => {
  let result = (
    <img
      src={process.env.PUBLIC_URL + "/img/cart/cart-empty.png"}
      style={{
        width: "100%",
      }}
      alt=""
    >
    </img>
  );
  if (products.length > 0) {
    result = products.map((product, index) => {
      return (
        <CartToggle key={index} product={product}>
          {" "}
        </CartToggle>
      );
    });
  }
  return result;
};

const showQualityAllCart = (cart) => {
  if (!cart || Object.keys(cart).length === 0) return 0;
  let quality = 0;
  Object.values(cart).forEach((element) => {
    quality += Object.values(element).reduce((t, n) => t + n);
  });
  return quality;
};

export default ListCartToggle;
