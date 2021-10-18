import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/userReducer";
import "./Login.css";

export default function Login(props) {
  const { setLogin } = props;
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.user.isError);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [className1, setClassName1] = useState("input100");
  const [className2, setClassName2] = useState("input100");

  useEffect(() => {
    username.length !== 0
      ? setClassName1("input100 has-value")
      : setClassName1("input100");
    password.length !== 0
      ? setClassName2("input100 has-value")
      : setClassName2("input100");
  }, [username, password]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(logIn({ username, password }));
  };

  return (
    <div className="limiter">
      <div className="container-login100 bg">
        <div className="wrap-login100">
          <form
            className="login100-form validate-form"
            onSubmit={submitHandler}
          >
            <span className="login100-form-title p-b-34 p-t-27 py-3">
              Log in
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                className={className1}
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value.trim())}
                value={username}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf207;"
              ></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className={className2}
                type="password"
                name="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                placeholder="Password"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>

            <div className="contact100-form-checkbox">
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>

            <div className="text-center p-t-90">
              <button className="txt1" onClick={() => setLogin(false)}>
                <u>You don't have an account?</u>
              </button>
            </div>
            {isError && <p className='text-center fs-5' style={{fontWeight:'bolder', color:'white'}}>Username or Password is wrong!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
