import React from 'react';
import {Link} from 'react-router-dom';

function Area(props) {
  const banner =props.children;
    return (
        <div className="col-md-12">
        <div className="layer-1">
          <div className="slider-img">
            <div className='ratio-banner'>
              <img src={banner.image} alt="" />
            </div>
          </div>
          <div className="slider-info gray-bg">
            <div className="slider-info-inner">
              <h1 className="slider-title-1 text-uppercase text-black-1">{banner.name}</h1>
              <div className="slider-brief text-black-2">
                <p>{banner.desc}</p>
              </div>
              <Link to={`/single-product/${banner.idProduct}`} className="button extra-small button-black">
                <span className="text-uppercase">Mua ngay</span>
              </Link >
            </div>
          </div>
        </div>
      </div>
    );
}

export default Area;