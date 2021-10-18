import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/userReducer";
import "./Navbar.css";
import { Nav } from "react-bootstrap";
import Avatar from "boring-avatars";
import { getProfilPicture } from "../store/profilPictureReducer";
import { useHistory } from "react-router";

export default function Navbar(props) {
  const { setShowProfilModal } = props;
  const isNull = useSelector((state) => state.profilPicture.isNull);
  const profilPicture = useSelector(
    (state) => state.profilPicture.profilPicture
  );
  const history = useHistory(); 
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logOut());
    history.push("/");
  };
  useEffect(() => {
    dispatch(getProfilPicture());
  },[dispatch])

  return (
    <nav className="navbar navbar-dark bg-dark navbar-mobile" style={{ height: "8%" }}>
      <div className="container-fluid navbar-mobile">
        <div className="d-flex profile-container">
          {isNull ? (
            <Avatar
              size={'55px'}
              name="Maria Mitchell"
              variant="marble"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          ) : (
            <img src={profilPicture} style={{width:'55px', borderRadius:'50%'}} alt='pp'/>
          )}
          ;
          <Nav.Link onClick={() => setShowProfilModal(true)}>
            Change Profil Photo
          </Nav.Link>
        </div>

        <p className="navbar-brand m-0">TODOS</p>
        <div className="d-flex">
          <button className="bn632-hover bn24 logout" onClick={clickHandler}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
