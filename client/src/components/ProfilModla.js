
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilPicture } from "../store/profilPictureReducer";

export default function ProfilModla(props) {
  const image = useSelector((state) => state.profilPicture.profilPicture);
  const [file, setFile] = useState(null);
  const { setShowProfilModal } = props;
  const profilModalRef = useRef();
  const dispatch = useDispatch();

  const uploadFile = async (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const fd = new FormData();
      fd.append("image", file);

      try {
        dispatch(updateProfilPicture(fd));
        setFile(null);
      } catch (error) {
        console.log(error);
      }
    }
  }, [file, dispatch]);

  useEffect(() => {
    const closeModal = (e) => {
      if (!profilModalRef.current.contains(e.target)) {
        setShowProfilModal(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [setShowProfilModal]);

  return (
    <div className="w-100 h-100  modal-container p-2">
      <i
        className="fas fa-times"
        style={{ fontSize: "2em", cursor: "pointer" }}
        onClick={() => setShowProfilModal(false)}
      ></i>
      <div className="todo-modal">
        <form className="todo-form py-5" ref={profilModalRef}>
          <div className="text-center">
            <img
              src={image}
              style={{ width: "50%", borderRadius: "50%" }}
              alt="pp"
            />
          </div>
          <div className="my-3">
            <input
              className="form-control"
              type="file"
              accept="image/*"
              onChange={uploadFile}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
