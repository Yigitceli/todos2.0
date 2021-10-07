import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Auth.css";
export default function Auth(props) {
  const {setLoggedIn} = props;
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login ? <Login setLogin={setLogin} setLoggedIn={setLoggedIn}/> : <Register setLogin={setLogin} />}
    </div>
  );
}
