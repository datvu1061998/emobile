import React, { useState, useEffect } from "react";
import ImageProduct from "../../components/single-product/ImageProduct";
import ProductInfo from "../../components/single-product/ProductInfo";
import SingleProductTab from "../../components/single-product/SingleProductTab";
import Categories from "../../components/shop/categories/Categories";
import SysOperating from "../../components/shop/sysOperating/SysOperating";
import ListRecentProducts from '../../components/shop/recentproducts/ListRecentProducts';
import Product1 from "../../components/shop/product/Product1";
import { Redirect, Link } from "react-router-dom";
import CallApi from "../../utils/CallApi";
import * as urls from '../../constants/APIUrls';

function SingleProductPage(props) {
  document.title = "eMobile || Thông tin sản phẩm";
  const {match} = props;
  const [product,setProduct] = useState({});
  useEffect(()=>{
    CallApi(urls.GET_SINGLE_PRODUCT+`/${match.params.id}`).then(Response=>{
      const data = Response.data;
      if(data.success){
        setProduct(data.data);
      }else{
        setProduct(-1);
      }
    })
  },[match])

  if(product === -1) return <Redirect to='/not-found'></Redirect>

  return (
    <div>
      <div className="breadcrumbs-section plr-200 mb-80">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs-inner">
                  <h1 className="breadcrumbs-title">Thông tin sản phẩm</h1>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="">Trang chủ</Link>
                    </li>
                    <li>Thông tin sản phẩm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="page-content" className="page-wrapper">
        {/* SHOP SECTION START */}
        <div className="shop-section mb-80">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-xs-12">
                <div className="single-product-area mb-80">
                  <div className="row">
                    <ImageProduct secondImage = {product.secondImage} mainImage={product.mainImage}></ImageProduct>
                    <ProductInfo product ={product}></ProductInfo>
                  </div>
                  <div className="row">
                    <SingleProductTab  product ={product}></SingleProductTab>
                  </div>
                </div>
                <div className="related-product-area">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="section-title text-left mb-40">
                        <h2 className="uppercase">related product</h2>
                        <h6>
                          There are many variations of passages of brands
                          available,
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <Product1></Product1>
                    <Product1></Product1>
                    <Product1></Product1>
                  </div>
                </div>
             
              </div>
              <div className="col-md-3 col-xs-12">
                <Categories></Categories>
                <SysOperating></SysOperating>
                <ListRecentProducts></ListRecentProducts>
              </div>
            </div>
          </div>
        </div>
        {/* SHOP SECTION END */}
      </section>
    </div>
  );
}

export default SingleProductPage;
