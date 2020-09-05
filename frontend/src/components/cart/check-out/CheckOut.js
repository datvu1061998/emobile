import React, { useState, useEffect, useCallback } from "react";
import * as Urls from "../../../constants/APIUrls";
import CallApiToken from "../../../utils/CallApi";
import CallApi from "../../../utils/CallApiNoToken";
import {COLOR} from '../../../constants/Config';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../actions/index';
import { Link, useHistory } from "react-router-dom";
import * as ApiUrls from '../../../constants/APIUrls';

function CheckOut(props) {
  const cart = useSelector( state=>state.cart) || {};
  const cartProducts = useSelector(state=>state.cartProducts) || [];
  const [order, setOrder] = useState({});

  const cities = GetAllCities();
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [address, setAddress] = useState({});
  const bill = UseFormState({});
  const value = bill.value;

  const HandlerChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(!value) return;
    if (name === "city") {
      getAllDistricts(value, setDistricts);
      setAddress({});
      setWards([]);
    } else if (name === "district") {
        getAllWards(value, setWards);
        setAddress({});
    }else{
        getAddress(value,setAddress);
    }
  },[]);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    dispatch(actions.actUpdateLoad(true));
    CallApiToken(ApiUrls.BILL,{billAddress:value,order,payment:1},"POST").then(response=>{
       if(!response) return;
       if(response.data.success){
          dispatch(actions.actCartApi());
          dispatch(actions.actUpdateLoad(false));
          history.push('/cart/order-complete',{
            id:response.data.id,
            value:{billAddress:value,order,payment:1}
          })
       }
    })
  }

  useEffect(()=>{
    bill.setValue({...value,address})
  },[address])

  useEffect(()=>{
    if(cartProducts.length > 0 && Object.keys(cart).length > 0){
      const data = getDateOrder(cart,cartProducts);
      setOrder(data);
    }
  },[cart,cartProducts])

  return (
    <div className="tab-pane" id="checkout">
       <div className='row' style={{ display: cartProducts && cartProducts.length > 0 ? 'none' : '' }}>
        <div className="col-md-12">
          <div className="error-404 box-shadow">
            <img src={process.env.PUBLIC_URL + '/img/cart/bg-cart-empty.png'} alt="" />
            <div className="go-to-btn btn-hover-2">
              <Link to="/shop">Tới shop</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-content box-shadow p-30"  style={{ display: cartProducts && cartProducts.length > 0 ? '' : 'none' }}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* billing details */}
            <div className="col-md-6">
              <div className="billing-details pr-10">
                <h6 className="widget-title border-left mb-20">
                  Chi tiết thanh toán
                </h6>
                <input type="text" placeholder="Tên người nhận" required
                  name='name' value={value.name || ''} onChange={bill.onChange}
                />
                <input type="text" placeholder="Địa chỉ email người nhận" required
                  name='email' value={value.email || ''} onChange={bill.onChange}
                />
                <input type="number" placeholder="Số điện thoại người nhận" required
                  name='phone' value={value.phone || ''} onChange={bill.onChange}
                />
                <select
                  className="custom-select"
                  onChange={(e)=>{HandlerChange(e);bill.onChange(e)}}
                  name="city"
                  required
                  value={value.city || ''}
                >
                  <option value="">Tỉnh / Thành phố</option>
                  {ShowOption(cities)}
                </select>
                <select
                  className="custom-select"
                  onChange={(e)=>{HandlerChange(e);bill.onChange(e)}}
                  name="district"
                  required
                  value={value.district || ''}
                >
                  <option value="">Quận / Huyện</option>
                  {ShowOption(districts)}
                </select>
                <select
                  className="custom-select"
                  onChange={(e)=>{HandlerChange(e);bill.onChange(e)}}
                  name="wards"
                  required
                  value={value.wards || ''}
                >
                  <option value="">Xã / Phường</option>
                  {ShowOption(wards)}
                </select>
                <textarea
                  className="custom-textarea"
                  placeholder="Chi tiết địa chỉ nhận hàng..."
                  name='detailAddress'
                  required
                  value={value.detailAddress || ''} onChange={bill.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              {/* our order */}
              <div className="payment-details pl-10 mb-50">
                <h6 className="widget-title border-left mb-20">Đơn hàng của bạn</h6>
                <table>
                  <tbody>
                    {showOrder(order.cart)}
                    <tr>
                      <td className="td-title-1">Tạm tính</td>
                      <td className="td-title-2">{Number(order.subtotal).toLocaleString('en-US')} ₫</td>
                    </tr>
                    <tr>
                      <td className="td-title-1">Phí giao hàng</td>
                      <td className="td-title-2">{Number(order.ship).toLocaleString('en-US')} ₫</td>
                    </tr>
                    <tr>
                      <td className="order-total">Tổng đơn hàng</td>
                      <td className="order-total-price">{Number(order.total).toLocaleString('en-US')}  ₫</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* payment-method */}
              <div className="payment-method">
                <h6 className="widget-title border-left mb-20">
                  Phương thức thanh toán
                </h6>
                <div id="accordion">
                  <div className="panel">
                    <h4 className="payment-title box-shadow">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#bank-transfer"
                      >
                        Thanh toán khi nhận hàng
                      </a>
                    </h4>
                    <div
                      id="bank-transfer"
                      className="panel-collapse collapse in"
                    >
                      <div className="payment-content">
                        <p>
                          Đảm bảo hàng tận tay tới người tiêu dùng sau đó mới thanh toán.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <h4 className="payment-title box-shadow">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                      >
                        Thẻ tín dụng/Thẻ 
                      </a>
                    </h4>
                    <div id="collapseThree" className="panel-collapse collapse">
                      <div className="payment-content">
                        <ul className="payent-type mt-10">
                          <li>
                            <a href="1">
                              <img src={process.env.PUBLIC_URL + "/img/payment/1.png"} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="1">
                              <img src={process.env.PUBLIC_URL + "/img/payment/2.png"}  alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="1">
                              <img src={process.env.PUBLIC_URL + "/img/payment/3.png"} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="1">
                              <img src={process.env.PUBLIC_URL + "/img/payment/4.png"}  alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* payment-method end */}
              <button className="submit-btn-1 mt-30 btn-hover-1" type="submit">
                Thanh Toán
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const showOrder = (listOrder)=>{
  let result = null;
  if(listOrder && listOrder.length > 0){
    result = listOrder.map((info,index)=>{
      return (
        <tr key={index}>
          <td className="td-title-1">{`${info.product.name}-${info.color} x ${info.qty}`}</td>
          <td className="td-title-2">{info.price.toLocaleString('en-US')}  ₫</td>
      </tr>
      )
    })
  }
  return result;
} 

const getDateOrder = (cart,cartProducts)=>{
  let result = {};
  if(cartProducts.length > 0 && Object.keys(cart).length > 0){
    result.cart = [];
    for(const id in cart){
      let product = cartProducts[cartProducts.findIndex(x=>x.id===id)];
      for(const color in cart[id]){
        product.color = COLOR[color];
        result.cart.push({
          product,
          qty:cart[id][color],
          price: product.price * cart[id][color]
        })
      }
    }
    result.subtotal = result.cart.reduce((t,n)=>t + n.price,0);
    result.ship = 0;
    result.total = result.cart.reduce((t,n)=>t + n.price,0);
  }
  return result;
}

const UseFormState = (initialState)=>{
  const [value,setValue] = useState(initialState);

  const onChange = (e)=>{
    const target = e.target;
    const newValue = {...value};
    newValue[target.name] = target.value;
    setValue(newValue);
  }

  return{
    onChange,
    value,
    setValue
  }
}

const GetAllCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    CallApi(Urls.GET_CITY).then((response) => {
      if(!response) return;
      setCities(response.data.LtsItem);
    });
  }, []);

  return cities;
};

const getAllDistricts = (id, setDistricts) => {
  CallApi(Urls.GET_CITY + `/${id}/district`).then((response) => {
    if(!response) return;
    setDistricts(response.data);
  });
};

const getAllWards = (id, setWards) => {
  CallApi(Urls.GET_DISTRICT + `/${id}/ward`).then((response) => {
    if(!response) return;
    setWards(response.data);
  });
};

const getAddress = (id, setAddress) => {
  CallApi(Urls.GET_WARD + `/${id}`).then((response) => {
    if(!response) return;
    setAddress(response.data);
  });
};

const ShowOption = (cities) => {
  let result = null;
  if (cities.length > 0) {
    result = cities.map((city, index) => {
      return (
        <option key={city.ID} value={city.ID}>
          {city.Title}
        </option>
      );
    });
  }
  return result;
};

export default CheckOut;
