import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(props) {
  document.title = 'eMobile || Not Found'
  return (
    <div>
      <div>
        <div className="breadcrumbs-section plr-200 mb-80">
          <div className="breadcrumbs overlay-bg">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcrumbs-inner">
                    <h1 className="breadcrumbs-title">404</h1>
                    <ul className="breadcrumb-list">
                      <li>
                        <Link to="">Trang chủ</Link>
                      </li>
                      <li>404</li>
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
          {/* ERROR SECTION START */}
          <div className="error-section mb-80">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="error-404 box-shadow">
                    <img src="img/others/error.jpg" alt="" />
                    <div className="go-to-btn btn-hover-2">
                      <Link to="/">go to home page</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ERROR SECTION END */}
        </div>
        {/* End page content */}
      </div>
    </div>
  );
}

export default NotFoundPage;
