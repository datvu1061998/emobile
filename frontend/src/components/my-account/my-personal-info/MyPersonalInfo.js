import React from "react";

function MyPersonalInfo(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            data-toggle="collapse"
            data-parent="#accordion2"
            href="#personal_info"
          >
            Thông tin cá nhân
          </a>
        </h4>
      </div>
      <div
        id="personal_info"
        className="panel-collapse collapse in"
        role="tabpanel"
      >
        <div className="panel-body">
          <form action="#">
            <div className="new-customers">
              <div className="p-30">
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" placeholder="Tên..." />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" placeholder="Họ..." />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" placeholder="Số điện thoại..." />
                  </div>
                  <div className="col-sm-6">
                    <input type="date" />
                  </div>
                </div>
                <input type="text" placeholder="Địa chỉ..." />
                <input type="password" placeholder="Password hiện tại" />
                <input type="password" placeholder="Password mới" />
                <input type="password" placeholder="xác nhận Password" />
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyPersonalInfo;
