import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Categories from "./Categories";
import { fetchCategories, postCategory } from "../store/categoriesReducer";

export default function Sidebar() {
  const [formShow, setFormShow] = useState(false);
  const [categoryName, setCategoyName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  });

  const submitHandler = (e) => {
    e.preventDefault();    
    dispatch(postCategory(categoryName));
    setCategoyName("");
  };

  return (
    <div className="bg-white sidebar d-flex">
      <h5 className="border-bottom border-dark my-2 py-2">
        Categories
      </h5>
      <Categories />
      <p className="create" onClick={() => setFormShow(!formShow)}>
        <i className="fas fa-plus-square pe-1"></i>Create New Category
      </p>
      {formShow && (
        <form onSubmit={submitHandler}>
          <i
            class="fas fa-times "
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
  );
}
