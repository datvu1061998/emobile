import React, {useState } from "react";
import Brand from "./Brand";
import Slider from "react-slick";
import PrevArrow from "../../PrevArrow";
import NextArrow from "../../NextArrow";
import { useSelector } from "react-redux";

function ListBrands(props) {
  const brands = useSelector(state=>state.brands);
  const [slide,setSlide] = useState(()=>{
    if(window.innerWidth <= 480){
      return 1;
    }else if(window.innerWidth <= 766){
      return 2;
    }else if(window.innerWidth <= 990){
      return 3;
    }else{
      return 4;
    }
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth <= 480){
      setSlide(1)
    }else if(window.innerWidth <= 766){
      setSlide(2)
    }else if(window.innerWidth <= 990){
      setSlide(3)
    }else{
      setSlide(4)
    }
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const prevArrow = <PrevArrow></PrevArrow>;
  const nextArrow = <NextArrow></NextArrow>;

  return (
    <div className="by-brand-section mb-80">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-left mb-40">
              <h2 className="uppercase">Thương hiệu</h2>
            </div>
          </div>
        </div>
        <div className="by-brand-product">
          <div className="row active-by-brand slick-arrow-2"></div>
          <Slider {...settings} nextArrow={nextArrow} prevArrow={prevArrow}>
            {showListBrands(brands)}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const showListBrands = (brands)=>{
  let result = null;
  if(brands.length > 0){
    result = brands.map((brand,index)=>{
      return <Brand key ={index}>{brand}</Brand>
    })
  }
  return result;
}

export default ListBrands;
