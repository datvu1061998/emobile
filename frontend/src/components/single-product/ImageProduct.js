import React from "react";
import Slider from "react-slick";
import { clickImage } from './../../animations'
import PrevArrow from '../../PrevArrow';
import NextArrow from '../../NextArrow';

const getSetting = (img = []) => {

  let index = 4;
  if (img.length <= 1) {
    index = 1;
  } else if (img.length <= 4) {
    index = img.length - 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: index,
    slidesToScroll: 1,
  };
  return settings;
}

const ShowImageProduct = (img) => {
  let result = null;
  result = img.map((x, index) => {
    return (
      <div className="p-c" key={index}>
        <img className="zoom_03" src={x} alt="" onClick={clickImage} />
      </div>
    );
  });

  return result;
};


function ImageProduct(props) {
  const { secondImage, mainImage } = props;
  const prevArrow = <PrevArrow></PrevArrow>;
  const nextArrow = <NextArrow></NextArrow>

  return (
    <div className="col-md-5 col-sm-5 col-xs-12">
      <div className="imgs-zoom-area">
        <img
          src={mainImage}
          alt=""
        />
        <div className="row">
          <div className="col-xs-12">
            <div id="gallery_01" className="carousel-btn slick-arrow-3 mt-30">
              <Slider {...getSetting(secondImage)} nextArrow={nextArrow} prevArrow={prevArrow}>
                {ShowImageProduct(secondImage || [])}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageProduct;
