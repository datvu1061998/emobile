import React, { useEffect, useState } from "react";

function ComingP(props) {
  const [time,setTime] = useState(''); 

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      const timeFuture = new Date('Wed Sep 9 2020 00:53:28 GMT+0700 (Giờ Đông Dương)').getTime();
      const timenow = new Date().getTime();
      var timeRemain = {};
      timeRemain.days = Math.floor((timeFuture-timenow)/86400000);
      var residual = (timeFuture-timenow)%86400000;
      timeRemain.hours = Math.floor(residual/3600000);
      residual = residual%3600000;
      timeRemain.minutes = Math.floor(residual/60000);
      residual = residual%60000;
      timeRemain.seconds = Math.floor(residual/1000);
      setTime(timeRemain);
    },1000)

    return ()=>{
      clearTimeout(timeOut);
    }
  })
  
  return (
    <div className="up-comming-product-section mb-80">
      <div className="container">
        <div className="row">
          {/* up-comming-pro */}
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="up-comming-pro gray-bg clearfix">
              <div className="up-comming-pro-img f-left">
                <a href="1">
                  <div className="ratio-ImageFuture">
                    <img
                      src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2020/04/17.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div className="up-comming-pro-info f-left">
                <h3>
                  <a href="1">Iphone 12</a>
                </h3>
                <p>
                  Dòng iPhone 12 Series của Apple dự kiến sẽ được tung ra thị
                  trường vào mùa thu năm nay. Mới đây, những rò rỉ đã tiết lộ về
                  thiết kế iPhone 12 Pro Max 5G khổng lồ. Cùng với đó là nhiều
                  chi tiết đáng được mong đợi của chiếc điện thoại này.
                </p>
                <div className="up-comming-time">
                  <div data-countdown="2019/02/02">
                    <span className="cdown days">
                      <span className="time-count">{time.days}</span> <p>Days</p>
                    </span>
                    <span className="cdown hour">
                      <span className="time-count">{time.hours}</span> <p>Hour</p>
                    </span>
                    <span className="cdown minutes">
                      <span className="time-count">{time.minutes}</span> <p>Mint</p>
                    </span> 
                    <span className="cdown second">
                      <span>
                        <span className="time-count">{time.seconds}</span> <p>Sec</p>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 hidden-sm col-xs-12">
            <div className="banner-item banner-1">
              <div className="ribbon-price">
                <span>4x.xxx.xxx₫</span>
              </div>
              <div className="banner-img">
                <a href="1">
                  <div className="ratio-ImageFuture">
                    <img
                      src="https://znews-photo.zadn.vn/w660/Uploaded/ivpbciv2/2020_02_26/This_could_be_our_first_good_look_at_Apple_s_massive_iPhone_12_redesign_Appandphones.jpg"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div className="banner-info">
                <h3>
                  <a href="1">Iphone 12</a>
                </h3>
                <ul className="banner-featured-list">
                  <li>
                    <i className="zmdi zmdi-check" />
                    <span>Thiết kế đẹp hơn</span>
                  </li>
                  <li>
                    <i className="zmdi zmdi-check" />
                    <span>Cảm biến vân tay trong màn hình</span>
                  </li>
                  <li>
                    <i className="zmdi zmdi-check" />
                    <span>Mạng 5G</span>
                  </li>
                  <li>
                    <i className="zmdi zmdi-check" />
                    <span>Bộ vi xử lý mới mạnh hơn</span>
                  </li>
                  <li>
                    <i className="zmdi zmdi-check" />
                    <span>Cổng kết nối USB-C</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingP;
