import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <Fragment>
      <ul className="p-0">
        {categories.map((item) => (
          <li key={item.id}>
            <Link              
              to={`/category/${item.id}`}
              className="category-item"
              style={{textDecoration:'none'}}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
