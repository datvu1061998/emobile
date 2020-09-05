import React from "react";

function Footer(props) {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="plr-185">
            <div className="footer-top-inner gray-bg">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-4">
                  <div className="single-footer footer-about">
                    <div className="footer-logo">
                      <img
                        src="img/logo/logo.png"
                        alt=""
                        style={{
                          width: "150px",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <div className="footer-brief">
                      <p>
                        Emobile luôn cung cấp cho các bạn những sản phẩm tốt nhất. Những thương hiệu hàng đầu và đảm bảo chất lượng cho từng sản phẩm.
                      </p>
                      <p>
                        Chúng tôi luôn luôn lắng nghe và thấu hiểu yêu cầu của bạn.
                      </p>
                    </div>
                    <ul className="footer-social">
                      <li>
                        <a className="facebook" href="sd" title="Facebook">
                          <i className="zmdi zmdi-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="google-plus"
                          href="sd"
                          title="Google Plus"
                        >
                          <i className="zmdi zmdi-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="sd" title="Twitter">
                          <i className="zmdi zmdi-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="rss" href="sd" title="RSS">
                          <i className="zmdi zmdi-rss" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 hidden-md hidden-sm">
                  <div className="single-footer">
                    <h4 className="footer-title border-left">Sản phẩm</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Sản phẩm mới</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Sản phẩm giảm giá</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Sản phẩm bán chạy</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Sản phẩm phổ biến</span>
                        </a>
                      </li>
                      <li>
                        <a href="1">
                          <i className="zmdi zmdi-circle" />
                          <span>Sản phẩm đặc biệt</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <div className="single-footer">
                    <h4 className="footer-title border-left">Tài khoản</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="my-account.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Thông tin</span>
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Danh sách yêu thích</span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Dỏ hàng</span>
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Đăng nhập</span>
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Đăng kí</span>
                        </a>
                      </li>
                      <li>
                        <a href="checkout.html">
                          <i className="zmdi zmdi-circle" />
                          <span>Thanh toán</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-footer">
                    <h4 className="footer-title border-left">Gửi yêu cầu của bạn</h4>
                    <div className="footer-message">
                      <form action="#">
                        <input
                          type="text"
                          name="name"
                          placeholder="Tên của bạn..."
                        />
                        <input
                          type="text"
                          name="email"
                          placeholder="Email của bạn..."
                        />
                        <textarea
                          className="height-80"
                          name="message"
                          placeholder="Nội dung tin nhắn..."
                          defaultValue={""}
                        />
                        <button
                          className="submit-btn-1 mt-20 btn-hover-1"
                          type="submit"
                        >
                          Gửi tin nhắn
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom black-bg">
        <div className="container-fluid">
          <div className="plr-185">
            <div className="copyright">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="copyright-text">
                    <p>
                      <a href="https://freethemescloud.com/" target="blank">
                      </a>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <ul className="footer-payment text-right">
                    <li>
                      <a href="1">
                        <img src="img/payment/1.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="1">
                        <img src="img/payment/2.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="1">
                        <img src="img/payment/3.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="1">
                        <img src="img/payment/4.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
