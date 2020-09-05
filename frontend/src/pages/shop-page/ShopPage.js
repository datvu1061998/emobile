import React from "react";
import ShopRight from "../../components/shop/ShopRight";
import ShopLeft from "../../components/shop/ShopLeft";
import { Link } from "react-router-dom";

function ShopPage(props) {
  document.title = "eMobile || Shop";

  return (
    <div>
      <div className="breadcrumbs-section plr-200 mb-80">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs-inner">
                  <h1 className="breadcrumbs-title">Danh sách sản phẩm</h1>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="">Trang chủ</Link>
                    </li>
                    <li>Danh sách sản phẩm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start page content */}
      <div id="page-content" className="page-wrapper">
        {/* SHOP SECTION START */}
        <div className="shop-section mb-80">
          <div className="container">
            <div className="row"></div>
            <ShopRight></ShopRight>
            <ShopLeft></ShopLeft>
          </div>
        </div>
      </div>
      {/* <div className="bg-sosanh">
        <div className="sosanh">
          <div>
            <img src="https://cdn.tgdd.vn/Products/Images/42/217308/xiaomi-redmi-9-114620-094649-400x460.png" alt=''>
            </img>
            <div>
                 <img src={process.env.PUBLIC_URL +'/img/1.png'} alt=""></img>
              </div>   
          </div>
          <div>
            <img src="https://cdn.tgdd.vn/Products/Images/42/220654/oppo-a92-white-400-400x460.png" alt=''>
            </img>
            <div>
                 <img src={process.env.PUBLIC_URL +'/img/2.png'} alt=""></img>
              </div>   
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ShopPage;
