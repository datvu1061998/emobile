import React,{useEffect, useState} from "react";
import Slider from "react-slick";
import Area from "./Area";
import NextArrow from '../../NextArrow';
import PrevArrow from "../../PrevArrow";
import * as urls from '../../constants/APIUrls';
import CallApi from '../../utils/CallApi';

function SliderArea(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const prevArrow = <PrevArrow arrow='fa-arrow-left'></PrevArrow>;
  const nextArrow = <NextArrow arrow='fa-arrow-right'></NextArrow>
  const [banners,setBanners] = useState([]);

  useEffect(()=>{
    CallApi(urls.GET_BANNER).then(response=>{
      if(!response) return;
      const data = response.data;
      if(data.success){
        setBanners(data.data);
      }
    })
  },[])

  return (
    <div className="slider-area  plr-185  mb-80">
      <div className="container-fluid">
        <div className="slider-content">
          <div className="row">
            <div className="active-slider-1 slick-arrow-1 slick-dots-1">
              <Slider {...settings} nextArrow={nextArrow} prevArrow={prevArrow}>
                {showArea(banners)}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const showArea = (banners)=>{
  let result = null;
  if(banners.length > 0){
    result = banners.map((banner,index)=>{
      return <Area key={index}>{banner}</Area>
    })
  }
  return result;
}

export default SliderArea;
