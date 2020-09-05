import React  from "react";
import Cart from "./Cart";
import Discount from "./Discount";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListCart(props) {
  const cart = useSelector((state) => state.cart);
  const cartProducts = useSelector((state) => state.cartProducts);

  return (
    <div className="tab-pane active" id="shopping-cart">
      <div className='row' style={{ display: cartProducts && cartProducts.length > 0 ? 'none' : '' }}>
        <div className="col-md-12">
          <div className="error-404 box-shadow">
            <img src={process.env.PUBLIC_URL + '/img/cart/bg-cart-empty.png'} alt="" />
            <div className="go-to-btn btn-hover-2">
              <Link to="/shop">Tới shop</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shopping-cart-content" style={{ display: cartProducts && cartProducts.length > 0 ? '' : 'none' }}>
        <form action="#">
          <div className="table-content table-responsive mb-50">
            <table className="text-center">
              <thead>
                <tr>
                  <th className="product-thumbnail">Sản phẩm</th>
                  <th className="product-price">Giá</th>
                  <th className="product-quantity">Số lượng</th>
                  <th className="product-subtotal">tổng</th>
                  <th className="product-remove">Xóa</th>
                </tr>
              </thead>
              <tbody>{showCart(cart, cartProducts)}</tbody>
            </table>
          </div>
          <Discount cart = {cart} cartProducts={cartProducts}></Discount>
        </form>
      </div>
    </div>
  );
}


const showCart = (cart, products) => {
  let result = null;
  if (cart && Object.keys(cart).length > 0 && products && products.length > 0) {
    result = [];
    let index = 0;
    for (const id in cart) {
      for (const color in cart[id]) {
        result.push(
          <Cart
            key={index}
            product={products[products.findIndex((x) => x.id === id)]}
            color={color}
            qty={cart[id][color]}
          ></Cart>
        );
        index++;
      }
    }
  }
  return result;
};

export default ListCart;
