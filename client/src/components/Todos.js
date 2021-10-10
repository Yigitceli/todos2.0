import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodos } from "../store/todosReducer";
import TodoCard from "./TodoCard";

export default function Todos(props) {
  const { setShowModal } = props;
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const isLoading = useSelector((state) => state.todos.isLoading);

  useEffect(() => {
    dispatch(fetchTodos(categoryId));
  }, [dispatch, categoryId]);
  return (
    <div className="todos bg-light">
      {isLoading ? (
        <h1>LOADING</h1>
      ) : todos.length <= 0 ? (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
          <h1
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ height: "85%" }}
          >
            TODOS is empty
          </h1>
          <button
            className="bn632-hover bn24 w-75"
            onClick={() => setShowModal(true)}
          >
            Add TODO
          </button>
        </div>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }} className="py-3">
            {todos[0].name}
          </h1>
          <div className="p-4" style={{ height: "80%" }}>
            <ul className="p-0 h-100 d-flex flex-wrap justify-content-between">
              {todos.map((item) => (
                <TodoCard key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <div className="w-100 text-center" style={{ height: "fill" }}>
            <button
              className="bn632-hover bn24 w-75"
              onClick={() => setShowModal(true)}
            >
              Add TODO
            </button>
          </div>
        </>
      )}
    </div>
  );
}
