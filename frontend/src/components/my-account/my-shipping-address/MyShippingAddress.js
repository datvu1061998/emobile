import React from "react";

function MyShippingAddress(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            data-toggle="collapse"
            data-parent="#accordion2"
            href="#my_shipping"
          >
            Địa chỉ giao hàng
          </a>
        </h4>
      </div>
      <div id="my_shipping" className="panel-collapse collapse" role="tabpanel">
        <div className="panel-body">
          <form action="#">
            <div className="new-customers p-30">
              <div className="row">
                <div className="col-sm-6">
                  <input type="text" placeholder="Tên" />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="Họ" />
                </div>
                <div className="col-sm-6">
                  <select className="custom-select">
                    <option value="defalt">Tỉnh/Thành phố</option>
                    <option value="c-1">Australia</option>
                    <option value="c-2">Bangladesh</option>
                    <option value="c-3">Unitd States</option>
                    <option value="c-4">Unitd Kingdom</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select className="custom-select">
                    <option value="defalt">Quận/Huyện</option>
                    <option value="c-1">Melbourne</option>
                    <option value="c-2">Dhaka</option>
                    <option value="c-3">New York</option>
                    <option value="c-4">London</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select className="custom-select">
                    <option value="defalt">Xã/Phường</option>
                    <option value="c-1">Victoria</option>
                    <option value="c-2">Chittagong</option>
                    <option value="c-3">Boston</option>
                    <option value="c-4">Cambridge</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="Số điện thoại..." />
                </div>
              </div>
              <input type="text" placeholder="Địa chỉ email..." />
              <textarea
                className="custom-textarea"
                placeholder="Chi tiết địa chỉ..."
                defaultValue={""}
              />
              <div className="row">
                <div className="col-md-6">
                  <button
                    className="submit-btn-1 mt-20 btn-hover-1"
                    type="submit"
                    value="register"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyShippingAddress;
