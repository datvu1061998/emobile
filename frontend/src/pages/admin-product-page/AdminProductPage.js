import React, { useState } from "react";
import AddPictureProduct from "../../components/add-picture-product/AddPictureProduct";
import AddProductInfo from "../../components/add-product-info/AddProductInfo";
import { useDispatch } from "react-redux";
import * as actions from './../../actions/index';
import {customAlert} from './../../animations';
import { Link } from "react-router-dom";

const UseProduct = ()=>{
  const [value,setValue] = useState({});
  const onChange = (data)=>{
    setValue({...value,...data});
  }
  return {
    value,
    onChange
  }
}

function AdminProductPage(props) {
  document.title = 'eMobile || Thêm sản phẩm';
  const product = UseProduct();
  const dispatch = useDispatch();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = product.value;
    if(!data.fileMain || !data.filesSecond){
      customAlert("Vui lòng chọn ảnh cho sản phẩm");
      return;
    }
    if(!data.info.color || data.info.color.length <= 0){
      customAlert("Vui lòng chọn màu sắc cho sản phẩm");
      return;
    }
    dispatch(actions.actAddProductApi(data));
  }

  return (
    <div>
      <div className="container-fluid mr-30" style={{ marginBottom: "20px" }}>
        <div className="row widget widget-color box-shadow mb-30">
          <form onSubmit = {handleSubmit}>
            <div className="col-md-6">
              <div className="registered-customers">
                <h6 className="widget-title border-left mb-50">
                  Thêm hình ảnh sản phẩm
                </h6>
                <AddPictureProduct setProduct={product.onChange}></AddPictureProduct>
              </div>
            </div>
            <div className="col-md-6">
              <div className="registered-customers">
                <h6 className="widget-title border-left mb-50">
                  Thêm thông tin sản phẩm
                </h6>
                <AddProductInfo setProduct={product.onChange}></AddProductInfo>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="submit-btn-1 btn-hover-1 mt-30" type="submit">
                Thêm sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProductPage;
