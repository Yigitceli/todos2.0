import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <Fragment>
      <ul className="p-0">
        {categories.map((item) => (
          <li key={item.id}>
            <Link
              to={`/category/${item.id}`}
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p className="fs-5 p-1">
                <i className="fab fa-font-awesome-flag me-2"></i>
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
