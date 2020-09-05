import React, { useRef } from "react";
import PropTypes from "prop-types";

OrderInfo.propTypes = {
  order: PropTypes.object,
  id: PropTypes.string,
  time: PropTypes.number,
  status:PropTypes.bool,
};

OrderInfo.defaultProps = {
  order: {},
  id: "",
  status:false,
  time: new Date().getTime(),
};

function OrderInfo(props) {
  const bgDetailAddress = useRef(null);

  const clickClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    bgDetailAddress.current.style.display = "none";
  };
  const clickOpen = () => {
    bgDetailAddress.current.style.display = "block";
  };

  return (
    <div
      style={{ border: "1px solid #dddddd", padding: "10px", margin: "10px" }}
    >
      <table>
        <tbody>
          <tr>
            <th className="td-title-1">
              <h5>
                <b>Mã đơn hàng: </b>
              </h5>
            </th>
            <th className="td-title-2">
              <h5># {props.id}</h5>
            </th>
          </tr>
          <tr>
            <td className="td-title-1">Ngày đặt</td>
            <td className="td-title-2">
              {new Date(props.time).toLocaleString("UTC")}
            </td>
          </tr>
          <tr>
            <td className="td-title-1">Tạm tính</td>
            <td className="td-title-2">
              {Number(props.order.subtotal).toLocaleString("en-US")} ₫
            </td>
          </tr>
          <tr>
            <td className="td-title-1">Phí giao hàng</td>
            <td className="td-title-2">
              {Number(props.order.ship).toLocaleString("en-US")} ₫
            </td>
          </tr>
          <tr>
            <td className="order-total">Tổng đơn hàng</td>
            <td className="order-total-price">
              {Number(props.order.total).toLocaleString("en-US")} ₫
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="bill-address">
        <li>
          <span>Trạng thái:</span>
            {props.status? 'Đang được vận chuyển.':'Đang đợi xác nhận'}
        </li>
      </ul>

      <div
        style={{ display: "flex", flexFlow: "row-reverse", paddingTop: "20px" }}
      >
        <button className="submit-btn-1 btn-hover-1 mr-10" onClick={clickOpen}>
          Chi tiết
        </button>

        <button className="submit-btn-1 btn-hover-1" onClick={clickOpen}>
          Hủy
        </button>
      </div>
      <div
        className="bg-detailOrder"
        ref={bgDetailAddress}
        style={{ display: "none" }}
        onClick={clickClose}
      >
        <div className="detailOrder" onClick={(e) => e.stopPropagation()}>
          <div
            style={{
              display: "flex",
              flexFlow: "row-reverse",
              paddingBottom: "5px",
            }}
          >
            <a href="close" onClick={clickClose}>
              <i className="zmdi zmdi-close" />
            </a>
          </div>
          <div className="table-content table-responsive mb-50">
            <table className="text-center">
              <thead>
                <tr>
                  <th className="product-thumbnail">Sản phẩm</th>
                  <th className="product-price">Giá</th>
                  <th className="product-quantity">Số lượng</th>
                  <th className="product-subtotal">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {showDetailOrder(props.order.cart)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const showDetailOrder = (listCart)=>{
  let result = null;
  if(listCart && listCart.length > 0){
    result = listCart.map((cart,index)=>{
      return(
        <tr key = {index}>
        <td className="product-thumbnail">
          <div className="pro-thumbnail-img">
            <img src={cart.product.mainImage} alt="" />
          </div>
          <div className="pro-thumbnail-info text-left">
            <h6 className="product-title-2">
              <a href="1">{cart.product.name}</a>
            </h6>
            <p> Màu sắc: {cart.product.color}</p>
          </div>
        </td>
        <td className="product-price">{Number(cart.product.price).toLocaleString('en-US')}</td>
        <td className="product-quantity">{cart.qty} sản phẩm</td>
        <td className="product-subtotal">{Number(cart.price).toLocaleString('en-US')}</td>
      </tr>
      )
    })
  }
  return result;
}

export default OrderInfo;
