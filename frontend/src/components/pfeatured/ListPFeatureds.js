import React, {useState, useEffect } from "react";
import Slider from "react-slick";
import PFeatured from "./PFeatured";
import PrevArrow from "../../PrevArrow";
import NextArrow from "../../NextArrow";
import CallApi from "../../utils/CallApi";
import * as urls from '../../constants/APIUrls';

function ListPFeatureds(props) {
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
  };
  
  const prevArrow = <PrevArrow></PrevArrow>;
  const nextArrow = <NextArrow></NextArrow>
  const [fProducts,setFProducts] = useState([]);

  useEffect(()=>{
    CallApi(urls.GET_HOT_PRODUCT).then(response=>{
      if(response){
        const data = response.data;
        if(data.success){
          setFProducts(data.data)
        }
      }    
    })
  },[])

  return (
    <div className="featured-product-section mb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-left mb-40">
              <h2 className="uppercase">Sản phẩm nổi bật</h2>
            </div>
          </div>
        </div>
        <div className="featured-product">
          <div className="row active-featured-product slick-arrow-2"></div>
          <Slider {...settings}   nextArrow={nextArrow} prevArrow={prevArrow}>
             {showFProduct(fProducts)}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const showFProduct = (listProduct)=>{
  let result = null;
  if(listProduct.length > 0){
    result = listProduct.map((product,index)=>{
      return <PFeatured key={index}>{product}</PFeatured>
    })
  }
  return result;
}



export default ListPFeatureds;
