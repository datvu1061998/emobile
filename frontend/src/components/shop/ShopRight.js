import React from 'react';
import SortBy from './sortby/SortBy';
import Product1 from './product/Product1';
import Product2 from './product/Product2';
import Pagination from './pagination/Pagination';
import { useSelector } from 'react-redux';

const showProducts1 = (products)=>{
  let result = null;
  if(products && products.length > 0){
    result = products.map((products,index)=>{
      return <Product1 key={index}>{products}</Product1>
    })
    return result;
  }
}
const showProducts2 = (products)=>{
  let result = null;
  if(products && products.length > 0){
    result = products.map((products,index)=>{
      return <Product2 key={index} >{products}</Product2>
    })
    return result;
  }
}

function ShopRight(props) {
    const products = useSelector(state=>state.products);
    return (
        <div className="col-md-9 col-md-push-3 col-sm-12">
        <div className="shop-content">
          {/* shop-option start */}
          <div className="shop-option box-shadow mb-30 clearfix">
            {/* Nav tabs */}
            <ul className="shop-tab f-left" role="tablist">
              <li className="active">
                <a href="#grid-view" data-toggle="tab"><i className="zmdi zmdi-view-module" /></a>
              </li>
              <li>
                <a href="#list-view" data-toggle="tab"><i className="zmdi zmdi-view-list-alt" /></a>
              </li>
            </ul>
            <SortBy></SortBy>
            {/* showing */}
            <div className="showing f-right text-right">
              <span>Hiển thị : 01-09 of 17.</span>
            </div>                                   
          </div>
          {/* shop-option end */}
          {/* Tab Content start */}
          <div className="tab-content">
            {/* grid-view */}
            <div role="tabpanel" className="tab-pane active" id="grid-view">
              <div className="row">
                {showProducts1(products)}
              </div>
            </div>
            {/* list-view */}
            <div role="tabpanel" className="tab-pane" id="list-view">
              <div className="row">
                {showProducts2(products)}
              </div>                                        
            </div>
          </div>
          <Pagination></Pagination>
        </div>
      </div>
      
    );
}

export default ShopRight;