import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/userReducer";

export default function Register(props) {
  const { setLogin } = props;
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [className1, setClassName1] = useState("input100");
  const [className2, setClassName2] = useState("input100");
  const [className3, setClassName3] = useState("input100");
  const [errors, setErrors] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (password !== passwordVerify) {
      setErrors((prev) => [...prev, "Passwords do not match!"]);
    } else {
      const { data } = await axios.post(
        "https://todos-yigit.herokuapp.com/auth/register",
        { username, password },
        { withCredentials: true }
      );
      setErrors((prev) => [...prev, ...data]);
      console.log(errors);
      setUsername("");
      setPassword("");
      setPasswordVerify("");
    }
  };

  useEffect(() => {
    username.length !== 0
      ? setClassName1("input100 has-value")
      : setClassName1("input100");
    password.length !== 0
      ? setClassName2("input100 has-value")
      : setClassName2("input100");
    passwordVerify.length !== 0
      ? setClassName3("input100 has-value")
      : setClassName3("input100");
  }, [username, password, passwordVerify]);

  return (
    <div className="limiter">
      <div className="container-login100 bg">
        <div className="wrap-login100">
          <form
            className="login100-form validate-form"
            autoComplete="new-password"
            onSubmit={submitHandler}
          >
            <span className="login100-form-title p-b-34 p-t-27 py-3">
              Register
            </span>

            <div className="wrap-input100">
              <input
                className={className1}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="new-password"
                onChange={(e) => setUsername(e.target.value.trim())}
                value={username}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf207;"
              ></span>
            </div>

            <div className="wrap-input100">
              <input
                className={className2}
                type="password"
                name="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                placeholder="Password"
                autoComplete="new-password"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className={className3}
                type="password"
                name="passVerify"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value.trim())}
                placeholder="Password"
                autoComplete="new-password"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Sign Up
              </button>
            </div>

            <div className="text-center p-t-90">
              <button className="txt1" onClick={() => setLogin(true)}>
                <u>You have an account?</u>
              </button>
            </div>
            <div>
              <ul className='my-2 text-center '>
                {errors.map((element, index) => {
                  return <li className='p-1 fs-6' style={{fontWeight:'bolder', color:'white', borderBottom:'solid 1px white'}} key={index}>{element}</li>;
                })}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
