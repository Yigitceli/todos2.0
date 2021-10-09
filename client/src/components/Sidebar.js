import React from "react";
import Categories from "./Categories";

export default function Sidebar() {
  return (
    <div className="bg-white sidebar d-flex">
        <h7 className='border-bottom border-dark my-2'>Categories</h7>
        <Categories/>
      <p className="create">
        <i className="fas fa-plus-square pe-1"></i>Create New Category
      </p>
    </div>
  );
}
