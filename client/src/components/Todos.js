import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchTodos } from "../store/todosReducer";
import TodoCard from "./TodoCard";

export default function Todos() {
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
        <h1 className="h-100 w-100 d-flex justify-content-center align-items-center">
          TODOS is empty
        </h1>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }} className="py-3">
            {todos[0].name}
          </h1>
          <div className="p-4" style={{ height: "80%" }}>
            <ul className="p-0">
              {todos.map((item) => (
                <TodoCard key={item.id} data={item}/>
              ))}
            </ul>
          </div>
          <div className='w-100 text-center'>
            <button className="bn632-hover bn24 w-75">Add TODO</button>
          </div>
        </>
      )}
    </div>
  );
}
