import React, { useState } from "react";
import { useSelector } from "react-redux";

function AddProductInfo(props) {
  const info = UseFormState(props.setProduct);
  const brands = useSelector(state=>state.brands);
  
  return (
    <div className="login-account p-30 box-shadow">
         <input type="text" placeholder="Tên sản phẩm..." name="name" onChange = {info.onChange} required/>
         <input type="number" placeholder="Giá sản phẩm..." name="price" onChange = {info.onChange} required/>
        <textarea rows="6" placeholder="Thông tin chi tiết..." name="overview" onChange = {info.onChange} required/>
        <textarea rows="7" placeholder="Giới thiệu về sản phẩm ..."  name='desc' onChange={info.onChange} required/>
        <div className="row">
          <div className="col-sm-6">
            <aside className="widget widget-color box-shadow mb-30">
              <h6 className="widget-title border-left mb-20">Màu sắc</h6>
              <ul>
                <label style={{ display: "flex" }}>
                  <input
                    style={{ marginRight: "10px", marginTop: "9px" }}
                    type="checkbox"
                    defaultValue="color-1"
                    onChange={info.onChange}
                  />
                  <li className="color-1">
                    <a href="1">Black</a>
                  </li>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    style={{ marginRight: "10px", marginTop: "9px" }}
                    type="checkbox"
                    defaultValue="color-2"
                    onChange={info.onChange}
                  />
                  <li className="color-2">
                    <a href="1">Floral White</a>
                  </li>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    style={{ marginRight: "10px", marginTop: "9px" }}
                    type="checkbox"
                    defaultValue="color-3"
                    onChange={info.onChange}
                  />
                  <li className="color-3">
                    <a href="1">Gold</a>
                  </li>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    style={{ marginRight: "10px", marginTop: "9px" }}
                    type="checkbox"
                    defaultValue="color-4"
                    onChange={info.onChange}
                  />
                  <li className="color-4">
                    <a href="1">Deep Sky Blue</a>
                  </li>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    style={{ marginRight: "10px", marginTop: "9px" }}
                    type="checkbox"
                    defaultValue="color-5"
                    onChange={info.onChange}
                  />
                  <li className="color-5">
                    <a href="1">Electric Purple</a>
                  </li>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    style={{ marginRight: "10px", marginTop: "9px" }}
                    type="checkbox"
                    defaultValue="color-6"
                    onChange={info.onChange}
                  />
                  <li className="color-6">
                    <a href="1">Red</a>
                  </li>
                </label>
              </ul>
            </aside>
          </div>
          <div className="col-sm-6">
            <aside className="widget widget-color box-shadow mb-30">
              <h6 className="widget-title border-left mb-20">Thông số</h6>
              <select className="custom-select" name="brand" onChange={info.onChange} required>
                <option value="">Nhãn hiệu</option>
                {showBrands(brands)}
              </select>
              <select className="custom-select" name="os" onChange={info.onChange} required>
                <option value="">Hệ điều hành</option>
                <option value="1">Blackberry OS</option>
                <option value="2">Android</option>
                <option value="3">IOS</option>
                <option value="5">Không</option>
              </select>
              <select className="custom-select" name="battery" onChange={info.onChange} required>
                <option value="">Pin</option>
                <option value="1"> 	&lt;3000mAh</option>
                <option value="2">3000 - 5000mAh</option>
                <option value="3">&gt;5000mAh</option>
              </select>
              <select className="custom-select" name="material" onChange={info.onChange} required>
                <option value="">Chất liệu vỏ</option>
                <option value="1">Kim loại</option>
                <option value="2">Nhôm</option>
              </select>
            </aside>
          </div>
        </div>
    </div>
  );
}

const showBrands = (brands)=>{
  let result = null;
  if(brands.length){
    result = brands.map((brand,index)=>{
      return <option value={brand.id} key={index}>{brand.name}</option>
    })
  }
  return result;
}

const UseFormState = (setProduct)=>{
  const [value,setValue] = useState({});
  
  const onChange = (e)=>{
    let data = {...value};
    const target = e.target;
    if(target.type === "checkbox"){
      if(target.checked){
        data.color =data.color || [];
        data.color.push(target.value);
      }else{
        data.color.splice(data.color.indexOf(target.value),1);
      }
    }else{
      data[target.name] = target.value;
    }
    setProduct({info:data})
    setValue(data);
  }

  return{
    onChange,
    value
  }
}

export default AddProductInfo;
