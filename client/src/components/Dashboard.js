import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Todos from "./Todos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodosPlaceholder from "./TodosPlaceholder";

export default function Dashboard() {
  return (
    <div className="dashboard d-flex py-3">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path={'/'}>
            <TodosPlaceholder />
          </Route>
          <Route exact path={"/category/:categoryId"}>
            <Todos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
