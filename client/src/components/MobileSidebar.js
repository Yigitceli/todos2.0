import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import { fetchCategories, postCategory } from "../store/categoriesReducer";
import "./sidebar.css";
import { logOut } from "../store/userReducer";
import Avatar from "boring-avatars";
import { Nav } from "react-bootstrap";

export default function MobileSidebar(props) {
  const isNull = useSelector((state) => state.profilPicture.isNull);
  const profilPicture = useSelector(
    (state) => state.profilPicture.profilPicture
  );
  const { setShowProfilModal } = props;
  const [formShow, setFormShow] = useState(false);
  const [categoryName, setCategoyName] = useState("");
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postCategory(categoryName));
    setCategoyName("");
  };

  const clickHandler = () => {
    dispatch(logOut());
  };

  const toggleShowSidebar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <div
        className={
          !showSideBar
            ? "d-flex mobile-container hidden"
            : "d-flex mobile-container show"
        }
      >
        <div className="bg-white d-flex mobile">
          <div style={{ height: "95%" }}>
            {isNull ? (
              <Avatar
                size={"70px"}
                name="Maria Mitchell"
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            ) : (
              <img
                src={profilPicture}
                style={{ width: "70px", borderRadius: "50%" }}
                alt="pp"
              />
            )}
            <Nav.Link onClick={() => setShowProfilModal(true)}>
              Change Profil Photo
            </Nav.Link>
            <h5 className="border-bottom border-dark my-2 py-2 fs-3">
              Categories
            </h5>
            <Categories />
            <p className="create fs-6" onClick={() => setFormShow(!formShow)}>
              <i className="fas fa-plus-square pe-1"></i>Add New Category
            </p>
            {formShow && (
              <form onSubmit={submitHandler}>
                <i
                  className="fas fa-times "
                  onClick={() => setFormShow(!formShow)}
                  style={{ cursor: "pointer" }}
                ></i>
                <input
                  type="string"
                  className="border border-dark ms-1"
                  value={categoryName}
                  onChange={(e) => setCategoyName(e.target.value)}
                />
              </form>
            )}
          </div>

          <div>
            <button
              className="w-75 bn632-hover bn24 logout-mobile"
              onClick={clickHandler}
            >
              Logout
            </button>
          </div>
        </div>
        <div
          onClick={toggleShowSidebar}
          className="bg-dark d-flex align-items-center"
          style={{
            height: "50px",
            cursor: "pointer",
            borderRadius: "0 25px 25px 0",
          }}
        >
          {!showSideBar ? <i className="fas fa-angle-double-right fs-2" style={{ color: "white" }}></i> :  <i className="fas fa-angle-double-left fs-2" style={{ color: "white" }}></i>}
        </div>
      </div>
    </>
  );
}
