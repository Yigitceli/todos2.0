import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/userReducer";
import "./Navbar.css";
import { Nav } from "react-bootstrap";

export default function Navbar(props) {
  const {setShowProfilModal} = props;
  
  const profilPicture = useSelector((state) => state.user.profilPicture);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logOut());
  };

  return (
    <nav className="navbar navbar-dark bg-dark" style={{height:'8%'}}>
      <div className="container-fluid">
        <div className="d-flex profile-container">
          <img src={profilPicture} alt="pp" className="profil-picture" />
          <Nav.Link onClick={() => setShowProfilModal(true)}>Change Profil Photo</Nav.Link>
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
