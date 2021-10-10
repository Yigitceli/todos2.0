import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { submitTodo } from "../store/todosReducer";
import { useParams } from "react-router-dom";
import "./TodoModal.css";

export default function TodoModal(props) {
  const { categoryId } = useParams();
  const { setShowModal } = props;
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  const modalRef = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [setShowModal]);

  onsubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitTodo({
        categoryId,
        todoData: {
          todo_title: todoTitle,
          description: todoDescription,
          category_id: categoryId,
        },
      })
    );
  };

  return (
    <div className="w-100 h-100  modal-container p-2">
      <i
        className="fas fa-times"
        style={{ fontSize: "2em", cursor: "pointer" }}
        onClick={() => setShowModal(false)}
      ></i>
      <div className="todo-modal">
        <form className="todo-form" ref={modalRef}>
          <div className="mb-2">
            <label htmlFor="Todo-Title" className="form-label text-center">
              Todo Title
            </label>
            <input
              type="text"
              id="Todo-Title"
              className="form-control"
              placeholder="Type a title for your todo"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <label htmlFor="Todo-description" className="form-label text-center">
            Todo Description
          </label>
          <textarea
            onChange={(e) => setTodoDescription(e.target.value)}
            id="Todo-description"
            className="form-control"
            placeholder="Type a description for your todo"
            value={todoDescription}
          ></textarea>
          <button className="bn632-hover bn24 w-100 my-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
