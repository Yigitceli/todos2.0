import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/userReducer";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logOut());
  };
  return (
    <nav className="navbar  navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand">Todos</p>
        <div className="d-flex">
          <button className="bn632-hover bn24" onClick={clickHandler}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
