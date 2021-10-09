import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/userReducer";
import "./Navbar.css";
import { NavDropdown } from "react-bootstrap";

export default function Navbar() {
  const profilPicture = useSelector((state) => state.user.profilPicture);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logOut());
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex profile-container">
          <img src={profilPicture} alt="pp" className="profil-picture" />
          <NavDropdown
            id="nav-dropdown-dark"
            title="Menu"
            menuVariant="dark"
            
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <p className="navbar-brand">TODOS</p>
        <div className="d-flex">
          <button className="bn632-hover bn24" onClick={clickHandler}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
