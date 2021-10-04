import React, { useEffect, useState } from "react";

export default function Register(props) {
  const { setLogin } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [className1, setClassName1] = useState("input100");
  const [className2, setClassName2] = useState("input100");
  const [className3, setClassName3] = useState("input100");

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
              <button className="login100-form-btn">Login</button>
            </div>

            <div className="text-center p-t-90">
              <button className="txt1" onClick={() => setLogin(true)}>
                <u>You have an account?</u>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
