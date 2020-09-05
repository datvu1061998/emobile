import React, { useState } from "react";
import * as actions from '../../actions/index';
import { useDispatch } from "react-redux";

function ForgotPassword(props) {
  const [email,setEmail] = useState('');
  const onChange = (e)=>{
    setEmail(e.target.value);
  }
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(actions.actForgotPasswordApi(email));
  }
  return (
    <div className="registered-customers">
      <hr></hr>
      <h6 className="widget-title border-left mb-50">quên mật khẩu</h6>
      <form onSubmit={handleSubmit}>
        <div className="login-account p-30 box-shadow">
          <p>Nếu bạn quên mật khẩu vui lòng điền email đăng ký.</p>
          <input type="text" name="email" placeholder="Email" value={email} onChange={onChange} required/>
          <button className="submit-btn-1 btn-hover-1" type="submit">
            GỬI
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
