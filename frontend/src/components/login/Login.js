import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/index";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function Login(props) {
  const login = UseFormState({});
  const value = login.value;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) {
    return <Redirect to="/shop"></Redirect>;
  }

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(actions.actLoginApi(value));
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="registered-customers">
      <h6 className="widget-title border-left mb-50">Đăng nhập</h6>
      <form onSubmit={handleForm}>
        <div className="login-account p-30 box-shadow">
          <p>Nếu bạn có tài khoản, vui lòng đăng nhập ở đây.</p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={value.email || ""}
            onChange={login.onChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={value.password || ""}
            onChange={login.onChange}
            required
          />
          <div className="other-login mb-10">
            <FacebookLogin
              appId="290059175488121"
              autoLoad={false}
              filters="all"
              callback={responseFacebook}
              cssClass="btn-facebook"
              textButton="Đăng nhập bằng Facebook"
              icon={<i className="fab fa-facebook-square pr-10 mb-10"></i>}
            />
            <br></br>
            <GoogleLogin
              clientId="140366350813-j6jdd981no415r3ia8e30nim6su0r3ga.apps.googleusercontent.com"
              render={renderProps => (
                <div className="btn-google" onClick={renderProps.onClick}  disabled={renderProps.disabled}>
                  <i className="fab fa-google-plus-square pr-10 mb-10px"></i>
                <span>Đăng nhập bằng Google</span>
              </div>
              )}
              buttonText="Đăng nhập bằng Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <button className="submit-btn-1 btn-hover-1" type="submit">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}

const UseFormState = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    const target = e.target;
    const newValue = { ...value };
    newValue[target.name] = target.value;
    setValue(newValue);
  };

  return {
    onChange,
    value,
    setValue,
  };
};

export default Login;
