import React, { useEffect } from "react";
import ListCart from "../../components/cart/shoping-cart/ListCart";
import * as animations from "../../animations";
import WishList from "../../components/cart/wish-list/WishList";
import CheckOut from "../../components/cart/check-out/CheckOut";
import OrderComplete from "../../components/cart/order-complete/OrderComplete";
import { Link, useParams } from "react-router-dom";

function CartPage(props) {
  let { name } = useParams();
  
  useEffect(()=>{
    animations.currentCart(name);
  },[name])
  return (
    <div>
      <div className="breadcrumbs-section plr-200 mb-80">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs-inner">
                  <h1 className="breadcrumbs-title">Giỏ hàng</h1>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="">Trang chủ</Link>
                    </li>
                    <li>Giỏ hàng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="page-content" className="page-wrapper">
        {/* SHOP SECTION START */}
        <div className="shop-section mb-80">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-12">
                <ul className="cart-tab">
                  <li  data-index="1">
                    <Link
                      className="active"
                      to="shopping-cart"
                    >
                      <span>01</span>
                      Giỏ hàng
                    </Link>
                  </li>
                  <li data-index="2">
                    <Link to='white-list'>
                      <span>02</span>
                      Yêu thích
                    </Link>
                  </li>
                  <li data-index="3">
                    <Link to="check-out">
                      <span>03</span>
                      Thanh toán
                    </Link>
                  </li>
                  <li data-index="4">
                    <Link to="order-complete">
                      <span>04</span>
                      Hoàn tất đặt hàng
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-10 col-sm-12">
                {/* Tab panes */}
                <div className="tab-content">
                  <ListCart></ListCart>
                  <WishList></WishList>
                  <CheckOut></CheckOut>
                  <OrderComplete></OrderComplete>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SHOP SECTION END */}
      </section>
    </div>
  );
}

export default CartPage;
