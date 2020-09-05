import React, { useEffect } from "react";
import * as animations from '../../animations';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../actions/index';
import ListCartToggle from "./ListCartToggle";

function Navbar(props) {
  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();

  const handleLogin = (e)=>{
    if(user){
      e.preventDefault();
      dispatch(actions.actLogout());
    }
  }

  useEffect(()=>{
    animations.HandlerMenu();
  },[])
  return (
    <div>
      {/* START HEADER AREA */}
      <header className="header-area header-wrapper">
        {/* header-top-bar */}
        <div className="header-top-bar plr-185">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 hidden-xs">
                <div className="call-us">
                  <p className="mb-0 roboto">(+84) 01234-567890</p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="top-link clearfix">
                  <ul className="link f-right">
                  <li>
                      <Link to={user? '/my-account' :'/login'}>
                      <i className="zmdi zmdi-notifications-active"></i>
                        Thông báo
                      </Link>
                    </li>
                    <li>
                      <Link to={user? '/my-account' :'/login'}>
                        <i className="zmdi zmdi-account" />
                        Tài khoản
                      </Link>
                    </li>
                    <li>
                      <Link to={user? '/cart/white-list' :'/login'}>
                        <i className="zmdi zmdi-favorite" />
                        Yêu thích (0)
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={handleLogin}>
                        <i className="zmdi zmdi-lock" />
                        {`${user? 'Đăng xuất':'Đăng nhập'}`}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header-middle-area */}
        <div id="sticky-header" className="header-middle-area plr-185">
          <div className="container-fluid">
            <div className="full-width-mega-dropdown">
              <div className="row">
                {/* logo */}
                <div className="col-md-2 col-sm-6 col-xs-12">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={process.env.PUBLIC_URL + '/img/logo/logo.png'}
                        alt="main logo"
                        style={{ width: "150px", display: "block" ,margin: 'auto'}}
                      />
                    </Link>
                  </div>
                </div>
                {/* primary-menu */}
                <div className="col-md-8 hidden-sm hidden-xs">
                <nav id="primary-menu">
  <ul className="main-menu text-center">
    <li><Link to="/">Trang chủ</Link></li>
    <li className="mega-parent"><Link to="/shop">Sản phẩm</Link>
      <div className="mega-menu-area clearfix">
        <div className="mega-menu-link f-left">
          <ul className="single-mega-item">
            <li className="menu-title">Điện thoại</li>
            <li>
              <a href="1">Samsung</a>
            </li>
            <li>
              <a href="1">Iphone</a>
            </li>
            <li>
              <a href="1">Oppo</a>
            </li>
            <li>
              <a href="1">Xiaomi</a>
            </li>
            <li>
              <a href="1">Nokia</a>
            </li>
            <li>
              <a href="1">BlackBerry</a>
            </li>
          </ul>
          <ul className="single-mega-item">
            <li className="menu-title">Phụ kiện</li>
            <li>
              <a href="1">Tai nghe</a>
            </li>
            <li>
              <a href="1">Sạc dự phòng</a>
            </li>
            <li>
              <a href="1">Cáp sạc</a>
            </li>
            <li>
              <a href="1">Loa</a>
            </li>
            <li>
              <a href="1">Thẻ nhớ</a>
            </li>
          </ul>
          <ul className="single-mega-item">
            <li className="menu-title">Laptop</li>
            <li>
              <a href="1">MacBook</a>
            </li>
            <li>
              <a href="1">ASUS</a>
            </li>
            <li>
              <a href="1">HP</a>
            </li>
            <li>
              <a href="1">LENOVO</a>
            </li>
            <li>
              <a href="1">ACER</a>
            </li>
            <li>
              <a href="1">DELL</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li className="mega-parent"><a href="1">Trang</a>
      <div className="mega-menu-area mega-menu-area-2 clearfix">
        <div className="mega-menu-link mega-menu-link-2  f-left">
          <ul className="single-mega-item">
            <li className="menu-title">Danh sách</li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="single-product.html">Single Product</a>
            </li>
          </ul>
          <ul className="single-mega-item">
            <li className="menu-title">Danh sách</li>
            <li>
              <a href="cart.html">Giỏ hàng</a>
            </li>
            <li>
              <a href="wishlist.html">Yêu thích</a>
            </li>
            <li>
              <a href="checkout.html">Thanh toán</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="My-account.html">Tài khoản</a>
            </li>
            <li>
              <a href="about.html">Về chúng tôi</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <a href="about.html">Về chúng tôi</a>
    </li>
    <li>
      <a href="contact.html">Liên hệ</a>
    </li>
  </ul>
</nav>

                </div>
                {/* header-search & total-cart */}
                <div className="col-md-2 col-sm-6 col-xs-12">
                  <div className="search-top-cart  f-right">
                    {/* header-search */}
                    <div className="header-search f-left">
                      <div className="header-search-inner">
                        <button className="search-toggle">
                          <i className="zmdi zmdi-search" />
                        </button>
                        <form action="1">
                          <div className="top-search-box">
                            <input
                              type="text"
                              placeholder="Search here your product..."
                            />
                            <button type="submit">
                              <i className="zmdi zmdi-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <ListCartToggle></ListCartToggle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* END HEADER AREA -- */}
      {/* START MOBILE MENU AREA */}
      <div className="mobile-menu-area hidden-lg hidden-md">
        <div className="container mean-container">
          <div className="mean-bar">
            <a
              href="#nav"
              className="meanmenu-reveal"
            >
              <span />
              <span />
              <span />
            </a>
            <nav className="mean-nav">
              <ul style={{display:'none' }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Products</Link>
                </li>
                <li>
                  <a href="1">Pages</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="order.html">Order</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="My-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="1"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="single-blog.html">Blog Details</a>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="1"
                    style={{ fontSize: "18px" }}
                  >
                    +
                  </a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li style={{marginBottom:'20px'}}>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="mobile-menu">
                <div className="mean-push" />
                <nav id="dropdown" style={{ display: "none" }}>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="shop.html">Products</a>
                    </li>
                    <li>
                      <a href="1">Pages</a>
                      <ul>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="order.html">Order</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="My-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {user && user.role === 'admin'? <Link to="/admin-product">Thêm sản phẩm</Link> : ''}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END MOBILE MENU AREA */}
    </div>
  );
}

// const showLinkBrands  = (brands)=>{
//   let result = null;
//   if(brands && brands.length > 0){
//     result = brands.map((brand,index)=>{
//       return (
//         <li key= {index}>
//           <Link to="/shop">{brand.name}</Link>
//         </li>
//       )
//     })
//   }
//   return result;
// }

export default Navbar;
