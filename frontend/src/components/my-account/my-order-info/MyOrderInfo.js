import React, { useEffect, useState } from "react";
import OrderInfo from './OrderInfo';
import CallApi from "../../../utils/CallApi";
import * as ApiUrls from "../../../constants/APIUrls";
import SortBy from "../../shop/sortby/SortBy";

function MyOrderInfo(props) {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    CallApi(ApiUrls.BILL).then((response) => {
      if (!response) return;
      if (response.data.success) {
        setBills(response.data.bills);
      }
    });
  }, []);
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            data-toggle="collapse"
            data-parent="#accordion2"
            href="#My_order_info"
          >
            Đơn đặt hàng
          </a>
        </h4>
      </div>
      <div
        id="My_order_info"
        className="panel-collapse collapse"
        role="tabpanel"
      >
          <div className='pb-30'>
             <SortBy></SortBy>
            {/* showing */}
          </div>
        <div className="panel-body">
          {/* our order */}
          <div className="payment-details p-30">
            {showOrderInfo(bills)}
          </div>
        </div>
      </div>
    </div>
  );
}

const showOrderInfo = bills=>{
  let result = null;
  if(bills.length > 0){
    result = bills.map((bill,index)=>{
      return <OrderInfo key= {index} 
                        order={bill.order} 
                        id = {bill.id}
                        time={bill.numberTime}
                        status={bill.status}
              ></OrderInfo>
    })
  }
  return result;
}

export default MyOrderInfo;
