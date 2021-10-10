import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Todos from "./Todos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodosPlaceholder from "./TodosPlaceholder";
import TodoModal from "./TodoModal";

export default function Dashboard(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="dashboard d-flex py-3">
      <Router>
        <Sidebar />

        <Switch>
          <Route exact path={"/"}>
            <TodosPlaceholder />
          </Route>
          <Route exact path={"/category/:categoryId"}>
            {showModal && <TodoModal setShowModal={setShowModal} />}
            <Todos setShowModal={setShowModal} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
