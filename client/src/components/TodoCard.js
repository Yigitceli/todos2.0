import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/todosReducer";
import "./TodoCard.css";
export default function TodoCard(props) {
  const { data } = props;
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const cardRef = useRef();

  const clickHandler = (e) => {
    if (!buttonRef.current.contains(e.target)) {
      cardRef.current.toggle();
    } else {
      dispatch(toggleTodo({ todoId: data.id, isComplete: !data.is_complete }));
      cardRef.current.toggle();
    }
  };
  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={false}
        onClick={clickHandler} // default false
        flipDirection="horizontal" // horizontal or vertical
        // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        ref={cardRef}
         /// these are optional style, it is not necessary
        className="todo-card"
      >
        <FrontSide
          style={{
            backgroundColor: !data.is_complete ? "#000000" : "#00FF00",
            color: !data.is_complete ? "#f3ca20" : "#000000",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <h5>{data.todo_title}</h5>
          
        </FrontSide>
        <BackSide
          style={{ backgroundColor: "#f3ca20", color: "#000000" }}
          className="p-3 d-flex flex-column"
        >
          <div style={{ height: "80%", marginBottom: "1em" }}>
            <p style={{ color: "#000000" }}>{data.description}</p>
          </div>
          <button type="button" className="fill" ref={buttonRef}>
            Complete
          </button>
        </BackSide>
      </Flippy>
    </>
  );
}
