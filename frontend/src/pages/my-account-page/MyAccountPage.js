import React from "react";
import MyPersonalInfo from "../../components/my-account/my-personal-info/MyPersonalInfo";
import MyShippingAddress from "../../components/my-account/my-shipping-address/MyShippingAddress";
import MyOrderInfo from "../../components/my-account/my-order-info/MyOrderInfo";
import { Link } from "react-router-dom";

function MyAccountPage(props) {
  return (
    <div>
      <div>
        {/* BREADCRUMBS SETCTION START */}
        <div className="breadcrumbs-section plr-200 mb-80">
          <div className="breadcrumbs overlay-bg">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcrumbs-inner">
                    <h1 className="breadcrumbs-title">Thông tin tài khoản</h1>
                    <ul className="breadcrumb-list">
                      <li>
                      <Link to="">Trang chủ</Link>
                      </li>
                      <li>Thông tin tài khoản</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMBS SETCTION END */}
        {/* Start page content */}
        <div id="page-content" className="page-wrapper">
          {/* LOGIN SECTION START */}
          <div className="login-section mb-80">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="my-account-content" id="accordion2">
                    <MyPersonalInfo></MyPersonalInfo>
                    <MyShippingAddress></MyShippingAddress>
                    <MyOrderInfo></MyOrderInfo>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LOGIN SECTION END */}
        </div>
        {/* End page content */}
      </div>
    </div>
  );
}

export default MyAccountPage;
