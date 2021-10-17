import React from "react";

export default function Filter(props) {
  const { setFilter } = props;
  return (
    <form className="filter">
      <label htmlFor="todos">Filter:</label>
      <select
        name="todos"
        id="cars"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="unCompleted">Uncompleted</option>
      </select>
    </form>
  );
}
