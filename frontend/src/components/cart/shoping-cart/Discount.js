import React from "react";

function Discount(props) {
  const {cart,cartProducts} = props;
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="coupon-discount box-shadow p-30 mb-50">
          <h6 className="widget-title border-left mb-20">Mã Giảm giá</h6>
          <p>Nhập mã giảm giá của bạn nếu có!</p>
          <input type="text" name="name" placeholder="Nhập mã giảm giá ở đây." />
          <button className="submit-btn-1 black-bg btn-hover-2" type="submit">
            Áp dụng
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="payment-details box-shadow p-30 mb-50">
          <h6 className="widget-title border-left mb-20">Chi tiết thanh toán</h6>
          <table>
            <tbody>
              <tr>
                <td className="td-title-1">Tạm tính</td>
                <td className="td-title-2">{showSubtotal(cart,cartProducts)} ₫</td>
              </tr>
              <tr>
                <td className="td-title-1">Phí giao hàng</td>
                <td className="td-title-2">0 ₫</td>
              </tr>
              <tr>
                <td className="order-total">Tổng cộng</td>
                <td className="order-total-price">{showSubtotal(cart,cartProducts)} ₫</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


const showSubtotal = (cart,cartProducts)=>{
  let result = 0;
  if(cart && cartProducts && Object.keys(cart).length > 0 && cartProducts.length > 0){
    result = cartProducts.reduce((total,product)=>{
      const price = product.price * Object.values(cart[product.id]).reduce((t,n)=>t+n);
      return total + price;
    },result)
    return result.toLocaleString('en-US');
  }
}


export default Discount;
