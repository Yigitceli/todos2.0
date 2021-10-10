import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function TodoCard(props) {
  const { data } = props;
  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "19rem", height: "14rem" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#000000",
            color: "#f3ca20",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <h5>{data.todo_title}</h5>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: "#f3ca20", color: "#000000" }}
          className="p-3 d-flex flex-column"
        >
          <div style={{height: "80%", marginBottom:"1em"}}>
            <p style={{color: "#000000"}}>{data.description}</p>
          </div>
          <button type="button" class="fill">Fill</button>
        </BackSide>
      </Flippy>
    </>
  );
}
