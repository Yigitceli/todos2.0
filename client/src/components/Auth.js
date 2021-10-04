import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Auth.css";
export default function Auth() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
    </div>
  );
}
