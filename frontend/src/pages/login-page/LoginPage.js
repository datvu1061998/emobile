import React from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import ForgotPassword from "../../components/forgot-password/ForgotPassword";
import { Link } from "react-router-dom";

function LoginPage(props) {
  document.title = 'eMobile || Đăng nhập'
  return (
    <div>
      <div className="breadcrumbs-section plr-200 mb-80">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs-inner">
                  <h1 className="breadcrumbs-title">Đăng nhập / Đăng ký</h1>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="">Trang chủ</Link>
                    </li>
                    <li>>Đăng nhập / Đăng ký</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="page-content" className="page-wrapper">
        {/* LOGIN SECTION START */}
        <div className="login-section mb-80">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Login></Login>
                <ForgotPassword></ForgotPassword>
              </div>
              {/* new-customers */}
              <div className="col-md-6">
                <Register></Register>
              </div>
            </div>
          </div>
        </div>
        {/* LOGIN SECTION END */}
      </div>
    </div>
  );
}

export default LoginPage;
