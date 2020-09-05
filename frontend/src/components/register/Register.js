import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import * as actions from '../../actions/index';
import {customAlert} from '../../animations'

function Register(props) {
  const register = UseFormState({});
  const value = register.value;
  const dispatch = useDispatch();
  
  const handleForm = (e)=>{
    e.preventDefault();
    if(value.comfirmPassword === value.password){
       dispatch(actions.actRegisterApi(value))
       resetForm();
    }else{
      customAlert('Vui lòng xác nhận lại mật khẩu!!!')
    }
  }

  const resetForm = ()=>{
    register.setValue({});
  }

  return (
    <div className="new-customers">
      <form onSubmit={handleForm}>
        <h6 className="widget-title border-left mb-50">Tạo tài khoản</h6>
        <div className="login-account p-30 box-shadow">
        <p>Nếu bạn chưa có tài khoản, vui lòng đăng ký ở đây.</p>
          <div className="row">
            <div className="col-sm-6">
              <input type="text" placeholder="Tên" name="firstName" value={value.firstName || ''} onChange={register.onChange}  required/>
            </div>
            <div className="col-sm-6">
              <input type="text" placeholder="Họ" name="lastName"  value={value.lastName || ''} onChange={register.onChange}  required/>
            </div>
            <div className="col-sm-6">
              <input type="number" placeholder="Số điện thoại" name='phone'  value={value.phone || ''} onChange={register.onChange}  required/>
            </div>
            <div className="col-sm-6">
              <input type="date" name='birthday'  value={value.birthday || ''} onChange={register.onChange} required/>
            </div>
          </div>
          <input type="text" placeholder="Địa chỉ ..." name="address"  value={value.address || ''} onChange={register.onChange}  required/>
          <input type="text" placeholder="Email đăng nhập ..." name="email"  value={value.email || ''} onChange={register.onChange}  required/>
          <input type="password" placeholder="Mật khẩu" name="password"  value={value.password || ''} onChange={register.onChange}  required/>
          <input type="password" placeholder="Xác nhận mật khẩu" name="comfirmPassword"  value={value.comfirmPassword || ''} onChange={register.onChange}  required/>
          <div className="row">
            <div className="col-md-6">
              <button
                className="submit-btn-1 mt-20 btn-hover-1"
                type="submit"
                value="register"
              >
                đăng ký
              </button>
            </div>
            <div className="col-md-6">
              <button
                onClick={resetForm}
                className="submit-btn-1 mt-20 btn-hover-1 f-right"
                type="reset"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
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

export default Register;
