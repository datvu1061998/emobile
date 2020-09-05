import React, { useState, useEffect } from "react";
import PlusMinusSingle from "../plus-minus/PlusMinusSingle";
import {useSelector} from 'react-redux'
import ButtonProduct from "../button-product/ButtonProduct";
import {clickColor} from '../../animations';

function ProductInfo(props) {
  const {product} = props;
  const brands = useSelector(state=>state.brands);
  const brand = brands[brands.findIndex(x=>x.id === product.brand)] || {}
  const [color,setColor] = useState('');
  const [increase,setIncrease] = useState(1);

  useEffect(()=>{
    if(product.color){
      setColor(product.color[0])
    }
  },[product.color])

  const handleClickColor = (val)=>{;
    setColor(val);
  }

  return (
    <div className="col-md-7 col-sm-7 col-xs-12">
      <div className="single-product-info">
        <h3 className="text-black-1">{product.name }</h3>
        <h6 className="brand-name-2">{brand.name}</h6>
        {/*  hr */}
        <hr />
        {/* single-pro-color-rating */}
        <div className="single-pro-color-rating clearfix">
          <div className="sin-pro-color f-left">
            <p className="color-title f-left">Màu sắc</p>
            <div className="widget-color f-left">
              <ul>
               {ShowColor(product.color,handleClickColor)}
              </ul>
            </div>
          </div>
          <div className="pro-rating sin-pro-rating f-right">
            <a href="1" tabIndex={0}>
              <i className="zmdi zmdi-star" />
            </a>
            <a href="1" tabIndex={0}>
              <i className="zmdi zmdi-star" />
            </a>
            <a href="1" tabIndex={0}>
              <i className="zmdi zmdi-star" />
            </a>
            <a href="1" tabIndex={0}>
              <i className="zmdi zmdi-star-half" />
            </a>
            <a href="1" tabIndex={0}>
              <i className="zmdi zmdi-star-outline" />
            </a>
            <span className="text-black-5">( 27 Rating )</span>
          </div>
        </div>
        {/* hr */}
        <hr />
        <div className="plus-minus-pro-action clearfix">
          <div className="sin-plus-minus f-left clearfix">
            <p className="color-title f-left">Số lượng</p>
            <PlusMinusSingle setIncrease={setIncrease}></PlusMinusSingle>
          </div>
          <div className="sin-pro-action f-right">
          <ButtonProduct product={product} color={color} increase = {increase}></ButtonProduct>
          </div>
        </div>
        {/* hr */}
        <hr />
        {/* single-product-price */}
        <h3 className="pro-price">Giá: {Number(product.price).toLocaleString('en-US')} ₫</h3>
        {/*  hr */}
        <hr />
        <div>
          <a href="1" className="button extra-small button-black" tabIndex={-1}>
            <span className="text-uppercase">Mua ngay</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const ShowColor = (colors,handleClickColor)=>{
  let result = null;
  if(colors){
    result = colors.map((color,index)=>{
      return(
      <li className={`${color} ${index===0 ? 'active-color' : ''}`} 
          key={index}
          onClick={()=>handleClickColor(color)}
      >
        <a href="1"> </a>
      </li>
      )
    })
    clickColor();
  }
  return result;
}


export default ProductInfo;
