import React from "react";
import { useHistory } from "react-router-dom";

function OrderComplete(props) {
  const history = useHistory();
  var idOrder = '';
  var data = {};
  var order = {};
  var billAddress = {};
  if (
    !history.location.state &&
    history.location.pathname === "/cart/order-complete") {
      history.goBack();
  }

  if(history.location.state){
    idOrder = history.location.state.id;
    data = history.location.state.value;
    order = data.order;
    billAddress = data.billAddress;
  }

  return (
    <div className="tab-pane" id="order-complete">
      <div className="order-complete-content box-shadow">
        <div className="thank-you p-30 text-center">
          <h6 className="text-black-5 mb-0">
            Cảm ơn bạn. Đơn đặt hàng của bạn đã được nhận.
          </h6>
        </div>
        <div className="order-info p-30 mb-10">
          <ul className="order-info-list">
            <li>
              <h6>Mã đơn hàng</h6>
              <p># {idOrder}</p>
            </li>
          </ul>
        </div>
        <div className="row">
          {/* our order */}
          <div className="col-md-6">
            <div className="payment-details p-30">
              <h6 className="widget-title border-left mb-20">
                Đơn hàng của bạn
              </h6>
              <table>
                <tbody>
                  {showOrder(order.cart)}
                  <tr>
                    <td className="td-title-1">Tạm tính</td>
                    <td className="td-title-2">
                      {Number(order.subtotal).toLocaleString("en-US")} ₫
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title-1">Phí giao hàng</td>
                    <td className="td-title-2">
                      {Number(order.ship).toLocaleString("en-US")} ₫
                    </td>
                  </tr>
                  <tr>
                    <td className="order-total">Tổng đơn hàng</td>
                    <td className="order-total-price">
                      {Number(order.total).toLocaleString("en-US")} ₫
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bill-details p-30">
              <h6 className="widget-title border-left mb-20">
                Chi tiết nhận hàng
              </h6>
              <ul className="bill-address">
                <li>
                  <span>Người nhận:</span>
                  {billAddress.name}
                </li>
                <li>
                  <span>Địa chỉ:</span>
                  <p>{showAddress(billAddress)}</p>
                </li>
                <li>
                  <span>email:</span>
                  {billAddress.email}
                </li>
                <li>
                  <span>Điện thoại : </span>
                  {billAddress.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const showAddress = (billAddress)=>{
  let result = '';
  if(billAddress.address){
    result = billAddress.detailAddress + ' - ' +
              billAddress.address.Title + ', '+
              billAddress.address.QuanHuyenTitle + ', '+
              billAddress.address.TinhThanhTitle;
  }
  return result;
}

const showOrder = (listOrder) => {
  let result = null;
  if (listOrder && listOrder.length > 0) {
    result = listOrder.map((info, index) => {
      return (
        <tr key={index}>
          <td className="td-title-1">{`${info.product.name}-${info.product.color} x ${info.qty}`}</td>
          <td className="td-title-2">{info.price.toLocaleString("en-US")} ₫</td>
        </tr>
      );
    });
  }
  return result;
};

export default OrderComplete;
